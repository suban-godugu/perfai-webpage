import { prisma } from '../db/prisma';

export interface EmailPayload {
  to: string;
  subject: string;
  template: 'LEAD_NOTIFICATION' | 'CUSTOMER_CONFIRMATION';
  variables: Record<string, any>;
}

export async function sendEmailWithRetry(payload: EmailPayload, maxRetries = 2): Promise<boolean> {
  let attempt = 0;
  let sent = false;
  let lastError: string | null = null;

  while (attempt <= maxRetries && !sent) {
    try {
      // In production, invoke Resend or configured SMTP
      if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 're_placeholder_key') {
        const res = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: process.env.FROM_EMAIL || 'no-reply@perfai.in',
            to: payload.to,
            subject: payload.subject,
            html: `<div style="font-family: sans-serif; padding: 20px;">
              <h2>${payload.subject}</h2>
              <p>Reference: <strong>${payload.variables.leadReference || ''}</strong></p>
              <p>Thank you for submitting your enquiry to PERFAI.</p>
            </div>`,
          }),
        });

        if (res.ok) {
          sent = true;
        } else {
          lastError = await res.text();
        }
      } else {
        // Local/offline development: log successfully without breaking pipeline
        console.log(`[EMAIL DISPATCH MOCK] To: ${payload.to} | Subject: ${payload.subject} | Ref: ${payload.variables.leadReference}`);
        sent = true;
      }
    } catch (err: any) {
      lastError = err.message || 'Unknown network error';
    }

    if (!sent) {
      attempt++;
    }
  }

  // Record delivery status in database email_logs
  try {
    await prisma.emailLog.create({
      data: {
        recipient: payload.to,
        subject: payload.subject,
        template: payload.template,
        status: sent ? 'SENT' : 'FAILED',
        errorMessage: lastError,
        retryCount: attempt,
        sentAt: sent ? new Date() : null,
      },
    });
  } catch (logErr) {
    console.warn('Could not record emailLog to database:', logErr);
  }

  return sent;
}
