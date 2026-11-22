import { cookies } from 'next/headers';
import { RoleType } from '@/types';
import { INITIAL_STAFF, AdminUser } from '@/config/staff';

export { INITIAL_STAFF };
export type { AdminUser };

const COOKIE_NAME = 'perfai_admin_session';

export async function createSession(user: AdminUser) {
  const tokenPayload = {
    ...user,
    issuedAt: Date.now(),
    expiresAt: Date.now() + 1000 * 60 * 60 * 24 * 7, // 7 days
  };

  const tokenString = Buffer.from(JSON.stringify(tokenPayload)).toString('base64');
  
  cookies().set(COOKIE_NAME, tokenString, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });

  return tokenString;
}

export async function getCurrentUser(): Promise<AdminUser | null> {
  const cookie = cookies().get(COOKIE_NAME);
  if (!cookie?.value) return null;

  try {
    const raw = Buffer.from(cookie.value, 'base64').toString('utf-8');
    const parsed = JSON.parse(raw);
    if (parsed.expiresAt && parsed.expiresAt < Date.now()) {
      return null;
    }
    return {
      id: parsed.id,
      email: parsed.email,
      fullName: parsed.fullName,
      role: parsed.role,
    };
  } catch {
    return null;
  }
}

export async function destroySession() {
  cookies().delete(COOKIE_NAME);
}

// Server-side RBAC permission matrix
export const ROLE_PERMISSIONS: Record<RoleType, string[]> = {
  SUPER_ADMIN: ['*'],
  ADMIN: ['leads:read', 'leads:write', 'products:write', 'content:write', 'settings:read', 'audit:read'],
  SALES_MANAGER: ['leads:read', 'leads:write', 'leads:assign', 'leads:export', 'reports:read'],
  SALES_EXECUTIVE: ['leads:read', 'leads:write_assigned'],
  CONTENT_MANAGER: ['content:read', 'content:write', 'products:read', 'products:write'],
};

export function hasPermission(role: RoleType, permission: string): boolean {
  if (role === 'SUPER_ADMIN') return true;
  const userPerms = ROLE_PERMISSIONS[role] || [];
  return userPerms.includes(permission) || userPerms.includes('*');
}
