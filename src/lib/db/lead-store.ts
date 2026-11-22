import { prisma } from './prisma';
import { LeadStatus, LeadPriority, LeadSource, Solution, Region, ActivityType } from '@prisma/client';

// In-memory fallback if PostgreSQL connection is pending or in offline dev
let fallbackLeads: any[] = [
  {
    id: 'lead-sample-1',
    leadReference: 'PRF-2026-00101',
    fullName: 'Vikram Singhania',
    email: 'v.singhania@apexreit.com',
    phone: '+91 98200 12345',
    organisation: 'Apex Commercial REIT',
    companyName: 'Apex Commercial REIT',
    country: 'India',
    region: 'INDIA',
    jobTitle: 'VP of Engineering & Sustainability',
    assetType: 'OFFICE',
    industry: 'Commercial Real Estate',
    solutions: ['BUILDINGSHIELD'],
    productInterest: 'BuildingShield',
    message: 'Interested in evaluating BuildingShield across 4 Grade-A commercial towers in CyberCity Gurgaon (1.6M sq.ft total chiller plant capacity: 3,600 TR).',
    source: 'ASSESSMENT_FORM',
    status: 'QUALIFIED',
    priority: 'HOT',
    score: 85,
    assigneeId: 'user-sales-director',
    assignedTo: 'user-sales-director',
    assignedUser: { fullName: 'Arjun Rao (Sales Director)', email: 'sales@perfai.in' },
    consentAt: new Date().toISOString(),
    consentVersion: 'v1.0-dpdp',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
    updatedAt: new Date().toISOString(),
    activities: [
      {
        id: 'act-1',
        leadId: 'lead-sample-1',
        type: 'CREATED',
        activityType: 'CREATED',
        data: { desc: 'Lead generated from Homepage Assessment CTA' },
        description: 'Lead generated from Homepage Assessment CTA',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
      },
    ],
  },
  {
    id: 'lead-sample-2',
    leadReference: 'PRF-2026-00102',
    fullName: 'Claire Beaumont',
    email: 'c.beaumont@marriott-group-example.com',
    phone: '+44 20 7946 0912',
    organisation: 'Grand Horizon Hospitality',
    companyName: 'Grand Horizon Hospitality',
    country: 'United Kingdom',
    region: 'INTERNATIONAL',
    jobTitle: 'Director of Asset Operations',
    assetType: 'HOSPITALITY',
    industry: 'Hospitality',
    solutions: ['BUILDINGSHIELD'],
    productInterest: 'BuildingShield',
    message: 'Reviewing 5-star hotel case study. We operate 3 luxury resort properties with severe summer peak energy tariffs.',
    source: 'CONTACT_FORM',
    status: 'ASSESSMENT_SCHEDULED',
    priority: 'HOT',
    score: 90,
    assigneeId: 'user-sales-exec',
    assignedTo: 'user-sales-exec',
    assignedUser: { fullName: 'Rajesh Nair (Enterprise AE)', email: 'rajesh@perfai.in' },
    consentAt: new Date().toISOString(),
    consentVersion: 'v1.0-dpdp',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 36).toISOString(),
    updatedAt: new Date().toISOString(),
    activities: [
      {
        id: 'act-2',
        leadId: 'lead-sample-2',
        type: 'MEETING_LOGGED',
        activityType: 'MEETING_LOGGED',
        data: { desc: 'Introductory feasibility conference scheduled' },
        description: 'Introductory feasibility conference scheduled',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
      },
    ],
  },
];

let fallbackAuditLogs: any[] = [
  {
    id: 'audit-1',
    action: 'LEAD_STATUS_UPDATE',
    entity: 'Lead',
    entityType: 'Lead',
    entityId: 'lead-sample-1',
    meta: { from: 'NEW', to: 'QUALIFIED' },
    details: { oldStatus: 'NEW', newStatus: 'QUALIFIED' },
    ip: '127.0.0.1',
    ipAddress: '127.0.0.1',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
  },
];

export function generateLeadReference(): string {
  const year = new Date().getFullYear();
  const randomNum = Math.floor(10000 + Math.random() * 90000);
  return `PRF-${year}-${randomNum}`;
}

function mapSolution(input?: string | null): Solution[] {
  if (!input) return [Solution.BUILDINGSHIELD];
  const upper = input.toUpperCase();
  if (upper.includes('ATRIA')) return [Solution.ATRIA];
  if (upper.includes('GRID')) return [Solution.GRIDSHIELD];
  if (upper.includes('COMPUTE')) return [Solution.COMPUTESHIELD];
  return [Solution.BUILDINGSHIELD];
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
  const region = data.country?.toLowerCase() === 'india' ? Region.INDIA : Region.INTERNATIONAL;
  const solutions = mapSolution(data.productInterest);

  try {
    const newLead = await prisma.lead.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone || null,
        organisation: data.companyName || null,
        country: data.country || null,
        jobTitle: data.jobTitle || null,
        solutions,
        region,
        message: data.message || null,
        source: LeadSource.ASSESSMENT_FORM,
        consentAt: data.consentAt,
        consentVersion: 'v1.0-dpdp',
        status: LeadStatus.NEW,
        priority: LeadPriority.WARM,
        activities: {
          create: {
            type: ActivityType.CREATED,
            data: { desc: `Enquiry submitted via ${data.source}` },
          },
        },
      },
      include: {
        activities: true,
      },
    });

    return { ...newLead, leadReference };
  } catch (err) {
    console.warn('Prisma DB unavailable, storing in fallback memory store:', err);

    const memoryLead = {
      id: `lead-${Date.now()}`,
      leadReference,
      fullName: data.fullName,
      email: data.email,
      phone: data.phone || null,
      organisation: data.companyName || null,
      companyName: data.companyName || null,
      country: data.country || null,
      region,
      jobTitle: data.jobTitle || null,
      industry: data.industry || null,
      solutions,
      productInterest: data.productInterest || 'BuildingShield',
      message: data.message || null,
      source: data.source,
      status: 'NEW',
      priority: 'WARM',
      consentAt: data.consentAt.toISOString(),
      consentVersion: 'v1.0-dpdp',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      activities: [
        {
          id: `act-${Date.now()}`,
          leadId: `lead-${Date.now()}`,
          type: 'CREATED',
          activityType: 'CREATED',
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
      where.status = options.status as LeadStatus;
    }
    if (options.priority && options.priority !== 'ALL') {
      where.priority = options.priority as LeadPriority;
    }
    if (options.search) {
      where.OR = [
        { fullName: { contains: options.search, mode: 'insensitive' } },
        { email: { contains: options.search, mode: 'insensitive' } },
        { organisation: { contains: options.search, mode: 'insensitive' } },
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
          assignee: { select: { name: true, email: true } },
        },
      }),
      prisma.lead.count({ where }),
    ]);

    // Map Prisma models to view structure
    const mappedLeads = leads.map((l) => ({
      ...l,
      leadReference: l.id.slice(0, 12).toUpperCase(),
      companyName: l.organisation,
      productInterest: l.solutions.length > 0 ? l.solutions.join(', ') : 'BuildingShield',
      assignedUser: l.assignee ? { fullName: l.assignee.name, email: l.assignee.email } : null,
    }));

    return { leads: mappedLeads, totalCount };
  } catch (err) {
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
          (l.companyName && l.companyName.toLowerCase().includes(q))
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
        assignee: { select: { name: true, email: true } },
      },
    });
    if (lead) {
      return {
        ...lead,
        leadReference: lead.id.slice(0, 12).toUpperCase(),
        companyName: lead.organisation,
        productInterest: lead.solutions.length > 0 ? lead.solutions.join(', ') : 'BuildingShield',
        assignedUser: lead.assignee ? { fullName: lead.assignee.name, email: lead.assignee.email } : null,
      };
    }
  } catch {
    // Fallback
  }

  return fallbackLeads.find((l) => l.id === id) || null;
}

export async function updateLead(
  id: string,
  updates: {
    status?: any;
    priority?: any;
    assignedTo?: string | null;
    note?: string;
    updatedBy?: string;
  }
) {
  try {
    const data: any = {};
    if (updates.status) data.status = updates.status as LeadStatus;
    if (updates.priority) data.priority = updates.priority as LeadPriority;
    if (updates.assignedTo !== undefined) data.assigneeId = updates.assignedTo;

    const lead = await prisma.lead.update({
      where: { id },
      data,
    });

    if (updates.note) {
      await prisma.leadNote.create({
        data: {
          leadId: id,
          authorId: updates.updatedBy || 'admin',
          body: updates.note,
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
        actorId: event.userId || null,
        action: event.action,
        entity: event.entityType,
        entityId: event.entityId || null,
        meta: event.details || null,
        ip: event.ipAddress || null,
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
      include: { actor: { select: { name: true, email: true } } },
    });
  } catch {
    return fallbackAuditLogs;
  }
}
