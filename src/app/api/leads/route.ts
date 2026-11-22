import { NextRequest, NextResponse } from 'next/server';
import { leadFormSchema } from '@/lib/validation/lead';
import { createLead, getLeads, logAuditEvent } from '@/lib/db/lead-store';
import { getCurrentUser, hasPermission } from '@/lib/auth/session';

// POST: Public Lead Submission
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Zod Validation
    const parsed = leadFormSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // 2. Anti-Spam Check (Honeypot)
    if (data.websiteHp && data.websiteHp.length > 0) {
      // Discard silently
      return NextResponse.json({
        success: true,
        leadReference: 'PRF-BOT-FILTERED',
        message: 'Assessment enquiry received.',
      });
    }

    // 3. Save Lead to Database
    const newLead = await createLead({
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      companyName: data.companyName,
      country: data.country,
      jobTitle: data.jobTitle,
      industry: data.industry,
      productInterest: data.productInterest,
      message: data.message,
      source: data.source || 'website_form',
      consentAt: new Date(),
    });

    // 4. Audit Log
    const ip = req.headers.get('x-forwarded-for') || req.ip || '127.0.0.1';
    await logAuditEvent({
      action: 'PUBLIC_LEAD_SUBMISSION',
      entityType: 'Lead',
      entityId: newLead.id,
      details: {
        leadReference: newLead.leadReference,
        source: data.source,
        productInterest: data.productInterest,
      },
      ipAddress: ip,
    });

    return NextResponse.json({
      success: true,
      leadReference: newLead.leadReference,
      message: 'Your infrastructure assessment request has been recorded.',
    });
  } catch (error: any) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your request.' },
      { status: 500 }
    );
  }
}

// GET: Protected Admin Leads Retrieval with RBAC
export async function GET(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized. Staff session required.' }, { status: 401 });
  }

  if (!hasPermission(user.role, 'leads:read')) {
    return NextResponse.json({ error: 'Forbidden. Insufficient permissions.' }, { status: 403 });
  }

  const { searchParams } = new URL(req.url);
  const search = searchParams.get('search') || undefined;
  const status = searchParams.get('status') || undefined;
  const priority = searchParams.get('priority') || undefined;
  const limit = parseInt(searchParams.get('limit') || '50', 10);
  const offset = parseInt(searchParams.get('offset') || '0', 10);

  const result = await getLeads({ search, status, priority, limit, offset });
  return NextResponse.json(result);
}
