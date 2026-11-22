import { NextRequest, NextResponse } from 'next/server';
import { INITIAL_STAFF, createSession } from '@/lib/auth/session';
import { logAuditEvent } from '@/lib/db/lead-store';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Please provide both email and password.' },
        { status: 400 }
      );
    }

    // Match against authorized staff directory
    const matchedUser = INITIAL_STAFF.find(
      (u) => u.email.toLowerCase() === email.toLowerCase().trim()
    );

    // For enterprise demo / initial deployment, password verification
    if (!matchedUser || password !== 'perfai@2026' && password !== 'admin123') {
      return NextResponse.json(
        { error: 'Invalid credentials. Please verify your administrative email and password.' },
        { status: 401 }
      );
    }

    // Create secure HTTP-only session cookie
    await createSession(matchedUser);

    const ip = req.headers.get('x-forwarded-for') || req.ip || '127.0.0.1';
    await logAuditEvent({
      userId: matchedUser.id,
      action: 'ADMIN_LOGIN',
      entityType: 'Profile',
      entityId: matchedUser.id,
      details: { email: matchedUser.email, role: matchedUser.role },
      ipAddress: ip,
    });

    return NextResponse.json({
      success: true,
      user: {
        id: matchedUser.id,
        email: matchedUser.email,
        fullName: matchedUser.fullName,
        role: matchedUser.role,
      },
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Login failed' }, { status: 500 });
  }
}
