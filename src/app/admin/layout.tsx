import React from 'react';
import { getCurrentUser } from '@/lib/auth/session';
import { AdminSidebar } from '@/components/admin/AdminSidebar';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex">
      {user && <AdminSidebar userEmail={user.email} userRole={user.role} />}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
