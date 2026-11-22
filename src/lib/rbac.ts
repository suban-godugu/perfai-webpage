import { Role, Region } from '@prisma/client';

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: Role;
  regions: Region[];
}

export const PERMISSIONS: Record<Role, string[]> = {
  SUPER_ADMIN: ['*'],
  SALES: [
    'leads:read_assigned',
    'leads:write_assigned',
    'tasks:manage',
    'analytics:read_basic',
  ],
  EDITOR: [
    'content:read',
    'content:write',
    'case_studies:manage',
    'resources:manage',
    'faqs:manage',
  ],
  VIEWER: [
    'leads:read_all',
    'analytics:read_all',
    'audit:read',
  ],
};

export function hasPermission(role: Role, permission: string): boolean {
  if (role === 'SUPER_ADMIN') return true;
  const userPerms = PERMISSIONS[role] || [];
  return userPerms.includes(permission) || userPerms.includes('*');
}

export function canAccessLead(user: AuthUser, lead: { assigneeId?: string | null; region: Region }): boolean {
  if (user.role === 'SUPER_ADMIN' || user.role === 'VIEWER') {
    return true;
  }

  if (user.role === 'SALES') {
    // Can access if assigned directly or unassigned in user's region
    if (lead.assigneeId === user.id) return true;
    if (!lead.assigneeId && user.regions.includes(lead.region)) return true;
  }

  return false;
}
