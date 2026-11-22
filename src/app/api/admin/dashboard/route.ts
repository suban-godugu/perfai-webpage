import { NextResponse } from 'next/server';
import { getLeads, getAuditLogs } from '@/lib/db/lead-store';
import { getCurrentUser } from '@/lib/auth/session';

export async function GET() {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { leads, totalCount } = await getLeads({ limit: 500 });

  // Compute live pipeline metrics
  const newCount = leads.filter((l) => l.status === 'NEW').length;
  const contactedCount = leads.filter((l) => l.status === 'CONTACTED').length;
  const qualifiedCount = leads.filter((l) => l.status === 'QUALIFIED').length;
  const meetingCount = leads.filter((l) => l.status === 'MEETING_SCHEDULED').length;
  const proposalCount = leads.filter((l) => l.status === 'PROPOSAL_SENT').length;
  const negotiationCount = leads.filter((l) => l.status === 'NEGOTIATION').length;
  const wonCount = leads.filter((l) => l.status === 'WON').length;
  const lostCount = leads.filter((l) => l.status === 'LOST').length;

  const conversionRate = totalCount > 0 ? ((wonCount / totalCount) * 100).toFixed(1) : '0.0';

  // Product distribution
  const productDist: Record<string, number> = {};
  leads.forEach((l) => {
    const prod = l.productInterest || 'Unspecified';
    productDist[prod] = (productDist[prod] || 0) + 1;
  });

  // Country distribution
  const countryDist: Record<string, number> = {};
  leads.forEach((l) => {
    const c = l.country || 'Other';
    countryDist[c] = (countryDist[c] || 0) + 1;
  });

  const recentAudits = await getAuditLogs();

  return NextResponse.json({
    metrics: {
      totalLeads: totalCount,
      newEnquiries: newCount,
      contacted: contactedCount,
      qualifiedLeads: qualifiedCount,
      meetingsScheduled: meetingCount,
      proposalsSent: proposalCount,
      negotiations: negotiationCount,
      wonOpportunities: wonCount,
      lostOpportunities: lostCount,
      leadConversionRate: `${conversionRate}%`,
    },
    productDistribution: productDist,
    countryDistribution: countryDist,
    recentActivity: recentAudits.slice(0, 10),
  });
}
