import { RoleType } from '@/types';

export interface AdminUser {
  id: string;
  email: string;
  fullName: string;
  role: RoleType;
}

export const INITIAL_STAFF: AdminUser[] = [
  {
    id: 'user-super-admin',
    email: 'admin@perfai.in',
    fullName: 'System Administrator',
    role: 'SUPER_ADMIN',
  },
  {
    id: 'user-sales-director',
    email: 'sales@perfai.in',
    fullName: 'Arjun Rao (Sales Director)',
    role: 'SALES_MANAGER',
  },
  {
    id: 'user-sales-exec',
    email: 'rajesh@perfai.in',
    fullName: 'Rajesh Nair (Enterprise AE)',
    role: 'SALES_EXECUTIVE',
  },
  {
    id: 'user-content-mgr',
    email: 'content@perfai.in',
    fullName: 'Neha Patel (Content Manager)',
    role: 'CONTENT_MANAGER',
  },
];
