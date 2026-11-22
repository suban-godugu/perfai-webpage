'use client';

import React from 'react';
import { ShieldCheck, UserPlus, Mail } from 'lucide-react';
import { INITIAL_STAFF } from '@/config/staff';

export default function AdminUsersPage() {
  return (
    <div className="p-8 space-y-6 max-w-7xl">
      <div className="flex items-center justify-between pb-4 border-b border-white/10">
        <div>
          <h1 className="font-heading text-2xl font-bold text-white">Staff Users & Role Permissions</h1>
          <p className="text-xs text-slate-400 mt-1">
            Configure system access for Super Admins, Sales Managers, and Content Managers
          </p>
        </div>
      </div>

      <div className="bg-deepnavy/80 rounded-2xl border border-white/10 glass-dark overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="bg-midnight/90 text-slate-400 uppercase tracking-wider font-mono border-b border-white/10">
            <tr>
              <th className="py-3.5 px-4 font-semibold">User</th>
              <th className="py-3.5 px-4 font-semibold">Role</th>
              <th className="py-3.5 px-4 font-semibold">Permissions</th>
              <th className="py-3.5 px-4 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-slate-300">
            {INITIAL_STAFF.map((staff) => (
              <tr key={staff.id} className="hover:bg-white/5">
                <td className="py-3.5 px-4">
                  <div className="font-semibold text-white">{staff.fullName}</div>
                  <div className="text-[11px] text-slate-400">{staff.email}</div>
                </td>
                <td className="py-3.5 px-4">
                  <span className="font-mono text-xs font-bold text-tealaccent bg-tealaccent/10 px-2 py-0.5 rounded">
                    {staff.role}
                  </span>
                </td>
                <td className="py-3.5 px-4 text-slate-400">
                  {staff.role === 'SUPER_ADMIN' ? 'Full System Access (*)' : 'Scoped to Role Modules'}
                </td>
                <td className="py-3.5 px-4">
                  <span className="text-emerald-400 font-semibold text-[11px]">Active</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
