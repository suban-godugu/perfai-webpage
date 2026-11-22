import { NextResponse } from 'next/server';
import { getLeads } from '@/lib/db/lead-store';
import { getCurrentUser, hasPermission } from '@/lib/auth/session';

export async function GET() {
  const user = await getCurrentUser();
  if (!user || !hasPermission(user.role, 'leads:export')) {
    return NextResponse.json({ error: 'Unauthorized to export leads' }, { status: 403 });
  }

  const { leads } = await getLeads({ limit: 1000 });

  const headers = [
    'Reference ID',
    'Full Name',
    'Email',
    'Phone',
    'Company',
    'Country',
    'Industry',
    'Product Interest',
    'Status',
    'Priority',
    'Source',
    'Created At',
  ];

  const rows = leads.map((l) => [
    `"${l.leadReference}"`,
    `"${l.fullName.replace(/"/g, '""')}"`,
    `"${l.email}"`,
    `"${l.phone || ''}"`,
    `"${(l.companyName || '').replace(/"/g, '""')}"`,
    `"${l.country || ''}"`,
    `"${l.industry || ''}"`,
    `"${l.productInterest || ''}"`,
    `"${l.status}"`,
    `"${l.priority}"`,
    `"${l.source}"`,
    `"${l.createdAt}"`,
  ]);

  const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');

  return new NextResponse(csvContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="perfai-leads-${new Date().toISOString().slice(0, 10)}.csv"`,
    },
  });
}
