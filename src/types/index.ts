export type ProductAvailability = 'AVAILABLE' | 'PILOT' | 'COMING_SOON' | 'UNDER_DEVELOPMENT';

export type LeadStatus =
  | 'NEW'
  | 'CONTACTED'
  | 'QUALIFIED'
  | 'MEETING_SCHEDULED'
  | 'PROPOSAL_SENT'
  | 'NEGOTIATION'
  | 'WON'
  | 'LOST';

export type LeadPriority = 'LOW' | 'NORMAL' | 'HIGH' | 'URGENT';

export type RoleType =
  | 'SUPER_ADMIN'
  | 'ADMIN'
  | 'SALES_MANAGER'
  | 'SALES_EXECUTIVE'
  | 'CONTENT_MANAGER';

export interface Lead {
  id: string;
  leadReference: string;
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
  status: LeadStatus;
  priority: LeadPriority;
  assignedTo?: string | null;
  assignedUser?: { fullName: string; email: string } | null;
  consentAt?: string | null;
  createdAt: string;
  updatedAt: string;
  activities?: LeadActivity[];
}

export interface LeadActivity {
  id: string;
  leadId: string;
  userId?: string | null;
  activityType: string;
  description: string;
  createdAt: string;
}

export interface ProductItem {
  id: string;
  name: string;
  slug: string;
  category: string;
  headline: string;
  tagline: string;
  description: string;
  availability: ProductAvailability;
  isFeatured: boolean;
  isPublished: boolean;
  specs: { label: string; value: string }[];
  features: string[];
  metaTitle: string;
  metaDesc: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  slug: string;
  heroHeadline: string;
  description: string;
  challenges: string[];
  solutions: string[];
  outcomes: string[];
}

export interface CaseStudyItem {
  id: string;
  title: string;
  slug: string;
  industry: string;
  location: string;
  assetScope: string;
  deploymentStatus: 'Live Deployment' | 'Contracted Portfolio' | 'Pilot Stage';
  measurementPeriod: string;
  baseline: string;
  actualResults: { metric: string; value: string; notes?: string }[];
  modelledSavings?: { metric: string; value: string; notes?: string }[];
  methodologyNotes: string;
}
