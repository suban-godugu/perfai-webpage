import { NextRequest, NextResponse } from 'next/server';
import { getLeadById, updateLead, logAuditEvent } from '@/lib/db/lead-store';
import { getCurrentUser, hasPermission } from '@/lib/auth/session';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!hasPermission(user.role, 'leads:read')) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const lead = await getLeadById(params.id);
  if (!lead) {
    return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
  }

  return NextResponse.json(lead);
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!hasPermission(user.role, 'leads:write')) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const body = await req.json();
  const { status, priority, assignedTo, note } = body;

  const updated = await updateLead(params.id, {
    status,
    priority,
    assignedTo,
    note,
    updatedBy: user.id,
  });

  if (!updated) {
    return NextResponse.json({ error: 'Lead not found or update failed' }, { status: 404 });
  }

  // Audit event
  const ip = req.headers.get('x-forwarded-for') || req.ip || '127.0.0.1';
  await logAuditEvent({
    userId: user.id,
    action: 'LEAD_UPDATE',
    entityType: 'Lead',
    entityId: params.id,
    details: { status, priority, assignedTo, noteAdded: !!note },
    ipAddress: ip,
  });

  return NextResponse.json(updated);
}
