import { prisma } from './prisma';
import { Lead, LeadActivity, LeadStatus, LeadPriority } from '@/types';

// In-memory persistent fallback if PostgreSQL is initializing or in dev without credentials
let fallbackLeads: Lead[] = [
  {
    id: 'lead-sample-1',
    leadReference: 'PRF-2026-00101',
    fullName: 'Vikram Singhania',
    email: 'v.singhania@apexreit.com',
    phone: '+91 98200 12345',
    companyName: 'Apex Commercial REIT',
    country: 'India',
    jobTitle: 'VP of Engineering & Sustainability',
    industry: 'Commercial Real Estate',
    productInterest: 'BuildingShield',
    message: 'Interested in evaluating BuildingShield across 4 Grade-A commercial towers in CyberCity Gurgaon (1.6M sq.ft total chiller plant capacity: 3,600 TR).',
    source: 'homepage_assessment_cta',
    status: 'QUALIFIED',
    priority: 'HIGH',
    assignedTo: 'user-sales-director',
    assignedUser: { fullName: 'Arjun Rao (Sales Director)', email: 'sales@perfai.in' },
    consentAt: new Date().toISOString(),
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
    updatedAt: new Date().toISOString(),
    activities: [
      {
        id: 'act-1',
        leadId: 'lead-sample-1',
        activityType: 'CREATION',
        description: 'Lead generated from Homepage Assessment CTA',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
      },
      {
        id: 'act-2',
        leadId: 'lead-sample-1',
        userId: 'user-sales-director',
        activityType: 'STATUS_CHANGE',
        description: 'Status advanced to QUALIFIED after reviewing BMS chiller capacity specifications.',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
      },
    ],
  },
  {
    id: 'lead-sample-2',
    leadReference: 'PRF-2026-00102',
    fullName: 'Claire Beaumont',
    email: 'c.beaumont@marriott-group-example.com',
    phone: '+44 20 7946 0912',
    companyName: 'Grand Horizon Hospitality',
    country: 'United Kingdom',
    jobTitle: 'Director of Asset Operations',
    industry: 'Hospitality',
    productInterest: 'BuildingShield',
    message: 'Reviewing 5-star hotel case study. We operate 3 luxury resort properties with severe summer peak energy tariffs.',
    source: 'case_study_page',
    status: 'MEETING_SCHEDULED',
    priority: 'URGENT',
    assignedTo: 'user-sales-exec',
    assignedUser: { fullName: 'Rajesh Nair (Enterprise AE)', email: 'rajesh@perfai.in' },
    consentAt: new Date().toISOString(),
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 36).toISOString(),
    updatedAt: new Date().toISOString(),
    activities: [
      {
        id: 'act-3',
        leadId: 'lead-sample-2',
        activityType: 'CREATION',
        description: 'Lead received from Case Study page enquiry.',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 36).toISOString(),
      },
      {
        id: 'act-4',
        leadId: 'lead-sample-2',
        userId: 'user-sales-exec',
        activityType: 'MEETING',
        description: 'Introductory feasibility video conference scheduled with Chief Engineer.',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
      },
    ],
  },
  {
    id: 'lead-sample-3',
    leadReference: 'PRF-2026-00103',
    fullName: 'Ananya Deshmukh',
    email: 'ananya@cloudhyper-dc.in',
    phone: '+91 99301 55432',
    companyName: 'CloudHyper Data Centres',
    country: 'India',
    jobTitle: 'Head of Mission Critical Facilities',
    industry: 'Data Centres',
    productInterest: 'ATRIA',
    message: 'Exploring ATRIA for PUE optimization across 15MW hyperscale campus in Navi Mumbai.',
    source: 'technology_page_cta',
    status: 'NEW',
    priority: 'HIGH',
    assignedTo: null,
    consentAt: new Date().toISOString(),
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
    updatedAt: new Date().toISOString(),
    activities: [
      {
        id: 'act-5',
        leadId: 'lead-sample-3',
        activityType: 'CREATION',
        description: 'Enquiry submitted via Technology Architecture page.',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
      },
    ],
  },
];

let fallbackAuditLogs: any[] = [
  {
    id: 'audit-1',
    action: 'LEAD_STATUS_UPDATE',
    entityType: 'Lead',
    entityId: 'lead-sample-1',
    details: { oldStatus: 'NEW', newStatus: 'QUALIFIED' },
    ipAddress: '127.0.0.1',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
  },
];

// Helper to generate reference format: PRF-YYYY-XXXXX
export function generateLeadReference(): string {
  const year = new Date().getFullYear();
  const randomNum = Math.floor(10000 + Math.random() * 90000);
  return `PRF-${year}-${randomNum}`;
}

export async function createLead(data: {
  fullName: string;
  email: string;
  phone?: string | null;
  companyName?: string | null;
  country?: string | null;
  jobTitle?: string | null;
  industry?: string | null;
  productInterest?: string | null;
  message?: string | null;
  source: string;
  consentAt: Date;
}) {
  const leadReference = generateLeadReference();

  try {
    // Attempt Prisma database write
    const newLead = await prisma.lead.create({
      data: {
        leadReference,
        fullName: data.fullName,
        email: data.email,
        phone: data.phone || null,
        companyName: data.companyName || null,
        country: data.country || null,
        jobTitle: data.jobTitle || null,
        industry: data.industry || null,
        productInterest: data.productInterest || null,
        message: data.message || null,
        source: data.source,
        consentAt: data.consentAt,
        status: 'NEW',
        priority: 'NORMAL',
        activities: {
          create: {
            activityType: 'CREATION',
            description: `Enquiry submitted via ${data.source}`,
          },
        },
      },
      include: {
        activities: true,
      },
    });

    return newLead;
  } catch (err) {
    // Graceful fallback to persistent memory store if database is offline or unconfigured
    console.warn('Prisma DB unavailable, recording lead in fallback memory store:', err);

    const memoryLead: Lead = {
      id: `lead-${Date.now()}`,
      leadReference,
      fullName: data.fullName,
      email: data.email,
      phone: data.phone || null,
      companyName: data.companyName || null,
      country: data.country || null,
      jobTitle: data.jobTitle || null,
      industry: data.industry || null,
      productInterest: data.productInterest || null,
      message: data.message || null,
      source: data.source,
      status: 'NEW',
      priority: 'NORMAL',
      consentAt: data.consentAt.toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      activities: [
        {
          id: `act-${Date.now()}`,
          leadId: `lead-${Date.now()}`,
          activityType: 'CREATION',
          description: `Enquiry submitted via ${data.source}`,
          createdAt: new Date().toISOString(),
        },
      ],
    };

    fallbackLeads.unshift(memoryLead);
    return memoryLead;
  }
}

export async function getLeads(options: {
  search?: string;
  status?: string;
  priority?: string;
  limit?: number;
  offset?: number;
}) {
  try {
    const where: any = {};
    if (options.status && options.status !== 'ALL') {
      where.status = options.status;
    }
    if (options.priority && options.priority !== 'ALL') {
      where.priority = options.priority;
    }
    if (options.search) {
      where.OR = [
        { fullName: { contains: options.search, mode: 'insensitive' } },
        { email: { contains: options.search, mode: 'insensitive' } },
        { companyName: { contains: options.search, mode: 'insensitive' } },
        { leadReference: { contains: options.search, mode: 'insensitive' } },
      ];
    }

    const [leads, totalCount] = await Promise.all([
      prisma.lead.findMany({
        where,
        take: options.limit || 50,
        skip: options.offset || 0,
        orderBy: { createdAt: 'desc' },
        include: {
          activities: { orderBy: { createdAt: 'desc' } },
          assignedUser: { select: { fullName: true, email: true } },
        },
      }),
      prisma.lead.count({ where }),
    ]);

    return { leads, totalCount };
  } catch (err) {
    // Fallback store
    let filtered = [...fallbackLeads];

    if (options.status && options.status !== 'ALL') {
      filtered = filtered.filter((l) => l.status === options.status);
    }
    if (options.priority && options.priority !== 'ALL') {
      filtered = filtered.filter((l) => l.priority === options.priority);
    }
    if (options.search) {
      const q = options.search.toLowerCase();
      filtered = filtered.filter(
        (l) =>
          l.fullName.toLowerCase().includes(q) ||
          l.email.toLowerCase().includes(q) ||
          (l.companyName && l.companyName.toLowerCase().includes(q)) ||
          l.leadReference.toLowerCase().includes(q)
      );
    }

    const limit = options.limit || 50;
    const offset = options.offset || 0;
    const paginated = filtered.slice(offset, offset + limit);

    return { leads: paginated, totalCount: filtered.length };
  }
}

export async function getLeadById(id: string) {
  try {
    const lead = await prisma.lead.findUnique({
      where: { id },
      include: {
        activities: { orderBy: { createdAt: 'desc' } },
        assignedUser: { select: { fullName: true, email: true } },
      },
    });
    if (lead) return lead;
  } catch {
    // Ignore and fallback
  }

  return fallbackLeads.find((l) => l.id === id) || null;
}

export async function updateLead(
  id: string,
  updates: {
    status?: LeadStatus;
    priority?: LeadPriority;
    assignedTo?: string | null;
    note?: string;
    updatedBy?: string;
  }
) {
  try {
    const lead = await prisma.lead.update({
      where: { id },
      data: {
        ...(updates.status ? { status: updates.status } : {}),
        ...(updates.priority ? { priority: updates.priority } : {}),
        ...(updates.assignedTo !== undefined ? { assignedTo: updates.assignedTo } : {}),
      },
    });

    if (updates.note) {
      await prisma.leadActivity.create({
        data: {
          leadId: id,
          userId: updates.updatedBy || null,
          activityType: 'NOTE_ADDED',
          description: updates.note,
        },
      });
    }

    return lead;
  } catch {
    const leadIndex = fallbackLeads.findIndex((l) => l.id === id);
    if (leadIndex === -1) return null;

    const lead = fallbackLeads[leadIndex];
    if (updates.status) lead.status = updates.status;
    if (updates.priority) lead.priority = updates.priority;
    if (updates.assignedTo !== undefined) lead.assignedTo = updates.assignedTo;
    lead.updatedAt = new Date().toISOString();

    if (updates.note) {
      lead.activities = lead.activities || [];
      lead.activities.unshift({
        id: `act-${Date.now()}`,
        leadId: id,
        activityType: 'NOTE_ADDED',
        description: updates.note,
        createdAt: new Date().toISOString(),
      });
    }

    return lead;
  }
}

export async function logAuditEvent(event: {
  userId?: string | null;
  action: string;
  entityType: string;
  entityId?: string;
  details?: any;
  ipAddress?: string;
}) {
  try {
    await prisma.auditLog.create({
      data: {
        userId: event.userId || null,
        action: event.action,
        entityType: event.entityType,
        entityId: event.entityId || null,
        details: event.details || null,
        ipAddress: event.ipAddress || null,
      },
    });
  } catch {
    fallbackAuditLogs.unshift({
      id: `audit-${Date.now()}`,
      ...event,
      createdAt: new Date().toISOString(),
    });
  }
}

export async function getAuditLogs() {
  try {
    return await prisma.auditLog.findMany({
      take: 100,
      orderBy: { createdAt: 'desc' },
      include: { user: { select: { fullName: true, email: true } } },
    });
  } catch {
    return fallbackAuditLogs;
  }
}
