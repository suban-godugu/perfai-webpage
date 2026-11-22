'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Search,
  Filter,
  FileSpreadsheet,
  ArrowRight,
  Eye,
  Loader2,
  Calendar,
  Building
} from 'lucide-react';

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [priorityFilter, setPriorityFilter] = useState('ALL');

  const fetchLeads = () => {
    setLoading(true);
    const params = new URLSearchParams();
    if (search) params.append('search', search);
    if (statusFilter !== 'ALL') params.append('status', statusFilter);
    if (priorityFilter !== 'ALL') params.append('priority', priorityFilter);

    fetch(`/api/leads?${params.toString()}`)
      .then((res) => {
        if (res.status === 401) {
          window.location.href = '/admin/login';
          return null;
        }
        return res.json();
      })
      .then((d) => {
        if (d && d.leads) setLeads(d.leads);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchLeads();
  }, [statusFilter, priorityFilter]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchLeads();
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'NEW':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">NEW</span>;
      case 'QUALIFIED':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-techblue/20 text-blue-300 border border-techblue/30">QUALIFIED</span>;
      case 'MEETING_SCHEDULED':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">MEETING</span>;
      case 'WON':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">WON</span>;
      case 'LOST':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-500/20 text-slate-400 border border-slate-500/30">LOST</span>;
      default:
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/10 text-slate-300">{status}</span>;
    }
  };

  return (
    <div className="p-8 space-y-6 max-w-7xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <h1 className="font-heading text-2xl font-bold text-white">Lead Pipeline Management</h1>
          <p className="text-xs text-slate-400 mt-1">
            Search, filter, assign, and update commercial enterprise inquiries
          </p>
        </div>
        <a
          href="/api/admin/export-csv"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-white text-xs font-semibold"
        >
          <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
          <span>Export All Leads (CSV)</span>
        </a>
      </div>

      {/* Filters & Search Bar */}
      <div className="bg-deepnavy/80 p-4 rounded-xl border border-white/10 glass-dark flex flex-col md:flex-row items-center gap-4 justify-between">
        <form onSubmit={handleSearchSubmit} className="flex-1 w-full flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search by lead reference, contact name, email, or company..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-lg bg-midnight/90 border border-white/15 text-white text-xs focus:outline-none focus:border-tealaccent transition-colors"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-techblue text-white text-xs font-bold hover:bg-techblue/80 transition-colors"
          >
            Search
          </button>
        </form>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <Filter className="w-3.5 h-3.5" />
            <span>Status:</span>
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 rounded-lg bg-midnight border border-white/15 text-white text-xs focus:outline-none focus:border-tealaccent"
          >
            <option value="ALL">All Statuses</option>
            <option value="NEW">New</option>
            <option value="CONTACTED">Contacted</option>
            <option value="QUALIFIED">Qualified</option>
            <option value="MEETING_SCHEDULED">Meeting Scheduled</option>
            <option value="PROPOSAL_SENT">Proposal Sent</option>
            <option value="NEGOTIATION">Negotiation</option>
            <option value="WON">Won</option>
            <option value="LOST">Lost</option>
          </select>
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-deepnavy/80 rounded-2xl border border-white/10 glass-dark overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin text-tealaccent" />
            <span>Fetching pipeline data...</span>
          </div>
        ) : leads.length === 0 ? (
          <div className="p-12 text-center text-xs text-slate-400">
            No leads found matching your criteria.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-midnight/90 text-slate-400 uppercase tracking-wider font-mono border-b border-white/10">
                <tr>
                  <th className="py-3.5 px-4 font-semibold">Reference</th>
                  <th className="py-3.5 px-4 font-semibold">Contact & Company</th>
                  <th className="py-3.5 px-4 font-semibold">Solution Interest</th>
                  <th className="py-3.5 px-4 font-semibold">Status</th>
                  <th className="py-3.5 px-4 font-semibold">Priority</th>
                  <th className="py-3.5 px-4 font-semibold">Created</th>
                  <th className="py-3.5 px-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                {leads.map((l) => (
                  <tr key={l.id} className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-tealaccent">
                      {l.leadReference}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-white">{l.fullName}</div>
                      <div className="text-[11px] text-slate-400 flex items-center gap-1.5 mt-0.5">
                        <Building className="w-3 h-3 text-slate-500" />
                        <span>{l.companyName || 'Not specified'}</span>
                        <span className="text-slate-600">·</span>
                        <span>{l.email}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="font-semibold text-slate-200">{l.productInterest || 'General'}</span>
                      <div className="text-[10px] text-slate-500">{l.industry || 'Unknown Sector'}</div>
                    </td>
                    <td className="py-3.5 px-4">{getStatusBadge(l.status)}</td>
                    <td className="py-3.5 px-4">
                      <span className={`text-[10px] font-bold ${
                        l.priority === 'URGENT' ? 'text-red-400' : l.priority === 'HIGH' ? 'text-amber-400' : 'text-slate-400'
                      }`}>
                        {l.priority}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-400 text-[11px] font-mono">
                      {new Date(l.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <Link
                        href={`/admin/leads/${l.id}`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-techblue/20 text-tealaccent hover:bg-techblue/30 border border-tealaccent/30 font-semibold text-xs transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Details</span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
