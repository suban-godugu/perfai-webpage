'use client';

import React from 'react';
import { Settings, Shield, Bell, Database } from 'lucide-react';

export default function AdminSettingsPage() {
  return (
    <div className="p-8 space-y-6 max-w-7xl">
      <div className="pb-4 border-b border-white/10">
        <h1 className="font-heading text-2xl font-bold text-white">System & Enterprise Settings</h1>
        <p className="text-xs text-slate-400 mt-1">
          Server configurations, email notification routing, and Supabase integration
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-deepnavy/80 p-6 rounded-2xl border border-white/10 glass-dark space-y-4">
          <h3 className="font-heading text-base font-bold text-white flex items-center gap-2">
            <Bell className="w-4 h-4 text-tealaccent" />
            <span>Lead Notifications & Email Service</span>
          </h3>
          <div className="space-y-3 text-xs">
            <div>
              <span className="text-slate-400 block mb-1">Notification Recipient Email</span>
              <input
                type="email"
                readOnly
                value="leads@perfai.in"
                className="w-full px-3 py-2 rounded-lg bg-midnight border border-white/15 text-white"
              />
            </div>
            <div>
              <span className="text-slate-400 block mb-1">Provider Engine</span>
              <input
                type="text"
                readOnly
                value="Resend / Transactional SMTP with Fallback Logging"
                className="w-full px-3 py-2 rounded-lg bg-midnight border border-white/15 text-white"
              />
            </div>
          </div>
        </div>

        <div className="bg-deepnavy/80 p-6 rounded-2xl border border-white/10 glass-dark space-y-4">
          <h3 className="font-heading text-base font-bold text-white flex items-center gap-2">
            <Database className="w-4 h-4 text-techblue" />
            <span>Database & Storage Service</span>
          </h3>
          <div className="space-y-3 text-xs">
            <div>
              <span className="text-slate-400 block mb-1">Primary Database</span>
              <input
                type="text"
                readOnly
                value="Supabase PostgreSQL (Prisma ORM)"
                className="w-full px-3 py-2 rounded-lg bg-midnight border border-white/15 text-white"
              />
            </div>
            <div>
              <span className="text-slate-400 block mb-1">File Storage</span>
              <input
                type="text"
                readOnly
                value="Supabase Storage (Brochures & Whitepapers)"
                className="w-full px-3 py-2 rounded-lg bg-midnight border border-white/15 text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
