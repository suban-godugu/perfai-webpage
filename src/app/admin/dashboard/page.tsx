'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Users,
  TrendingUp,
  Calendar,
  CheckCircle,
  FileSpreadsheet,
  AlertCircle,
  ArrowRight,
  Activity,
  Layers,
  Globe
} from 'lucide-react';

export default function AdminDashboardPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/dashboard')
      .then((res) => {
        if (res.status === 401) {
          window.location.href = '/admin/login';
          return null;
        }
        return res.json();
      })
      .then((d) => {
        if (d) setData(d);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="p-8 flex items-center justify-center min-h-[50vh]">
        <div className="text-sm text-slate-400">Loading live operational dashboard metrics...</div>
      </div>
    );
  }

  const m = data?.metrics || {};

  return (
    <div className="p-8 space-y-8 max-w-7xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <h1 className="font-heading text-2xl font-bold text-white">Executive Operations Dashboard</h1>
          <p className="text-xs text-slate-400 mt-1">
            Real-time pipeline metrics, lead conversions, and technical engagement activity
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/api/admin/export-csv"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-white text-xs font-semibold transition-colors"
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
            <span>Export Pipeline (CSV)</span>
          </a>
          <Link
            href="/admin/leads"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-techblue to-tealaccent text-midnight text-xs font-bold hover:opacity-95 shadow-lg shadow-tealaccent/20"
          >
            <span>Manage All Leads</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Primary KPI Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="bg-deepnavy/80 p-5 rounded-xl border border-white/10 glass-dark">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Total Leads</div>
          <div className="text-3xl font-heading font-bold text-white mt-1">{m.totalLeads ?? 0}</div>
          <div className="text-[10px] text-tealaccent mt-1">All time inquiries</div>
        </div>

        <div className="bg-deepnavy/80 p-5 rounded-xl border border-white/10 glass-dark">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">New Inquiries</div>
          <div className="text-3xl font-heading font-bold text-amber-400 mt-1">{m.newEnquiries ?? 0}</div>
          <div className="text-[10px] text-slate-400 mt-1">Pending review</div>
        </div>

        <div className="bg-deepnavy/80 p-5 rounded-xl border border-white/10 glass-dark">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Qualified</div>
          <div className="text-3xl font-heading font-bold text-techblue mt-1">{m.qualifiedLeads ?? 0}</div>
          <div className="text-[10px] text-slate-400 mt-1">Verified facilities</div>
        </div>

        <div className="bg-deepnavy/80 p-5 rounded-xl border border-white/10 glass-dark">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Meetings</div>
          <div className="text-3xl font-heading font-bold text-purple-400 mt-1">{m.meetingsScheduled ?? 0}</div>
          <div className="text-[10px] text-slate-400 mt-1">Consultations set</div>
        </div>

        <div className="bg-deepnavy/80 p-5 rounded-xl border border-white/10 glass-dark">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Won Accounts</div>
          <div className="text-3xl font-heading font-bold text-emerald-400 mt-1">{m.wonOpportunities ?? 0}</div>
          <div className="text-[10px] text-emerald-400/80 mt-1">Active deployments</div>
        </div>

        <div className="bg-deepnavy/80 p-5 rounded-xl border border-white/10 glass-dark">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Conversion Rate</div>
          <div className="text-3xl font-heading font-bold text-tealaccent mt-1">{m.leadConversionRate ?? '0.0%'}</div>
          <div className="text-[10px] text-slate-400 mt-1">Lead to customer</div>
        </div>
      </div>

      {/* Breakdown Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Interest Distribution */}
        <div className="bg-deepnavy/80 p-6 rounded-2xl border border-white/10 glass-dark">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <h3 className="font-heading font-bold text-base text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-techblue" />
              <span>Product Interest Breakdown</span>
            </h3>
            <span className="text-[11px] text-slate-400">Portfolio Distribution</span>
          </div>
          <div className="mt-4 space-y-3">
            {Object.entries(data?.productDistribution || {}).map(([prod, count]: any) => (
              <div key={prod} className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-white/5">
                <span className="font-semibold text-slate-200">{prod}</span>
                <span className="font-mono font-bold text-tealaccent bg-tealaccent/10 px-2 py-0.5 rounded">
                  {count} enquiries
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Country Breakdown */}
        <div className="bg-deepnavy/80 p-6 rounded-2xl border border-white/10 glass-dark">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <h3 className="font-heading font-bold text-base text-white flex items-center gap-2">
              <Globe className="w-4 h-4 text-tealaccent" />
              <span>Geography & Territory Distribution</span>
            </h3>
            <span className="text-[11px] text-slate-400">Target Markets</span>
          </div>
          <div className="mt-4 space-y-3">
            {Object.entries(data?.countryDistribution || {}).map(([c, count]: any) => (
              <div key={c} className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-white/5">
                <span className="font-semibold text-slate-200">{c}</span>
                <span className="font-mono font-bold text-techblue bg-techblue/10 px-2 py-0.5 rounded">
                  {count} leads
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity Audit */}
      <div className="bg-deepnavy/80 p-6 rounded-2xl border border-white/10 glass-dark">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <h3 className="font-heading font-bold text-base text-white flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-400" />
            <span>Recent System & Lead Activities</span>
          </h3>
          <Link href="/admin/audit-logs" className="text-xs text-tealaccent hover:underline">
            View All Audit Trails
          </Link>
        </div>
        <div className="mt-4 divide-y divide-white/5">
          {(data?.recentActivity || []).slice(0, 5).map((act: any, idx: number) => (
            <div key={idx} className="py-3 flex items-start justify-between text-xs">
              <div>
                <span className="font-mono font-bold text-slate-200 bg-white/5 px-2 py-0.5 rounded mr-2">
                  {act.action}
                </span>
                <span className="text-slate-400">{act.entityType} ID: {act.entityId || 'N/A'}</span>
              </div>
              <span className="text-slate-500 font-mono text-[11px]">
                {new Date(act.createdAt).toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
