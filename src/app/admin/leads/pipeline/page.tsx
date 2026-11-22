'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Kanban,
  Table,
  Plus,
  ArrowRight,
  UserCheck,
  Building,
  Loader2,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { LeadStatus } from '@/types';

const PIPELINE_COLUMNS: { id: LeadStatus; label: string; color: string }[] = [
  { id: 'NEW', label: 'New Inquiries', color: 'border-amber-500/50 text-amber-400' },
  { id: 'CONTACTED', label: 'Contacted', color: 'border-blue-400/50 text-blue-300' },
  { id: 'QUALIFIED', label: 'Qualified Asset', color: 'border-tealaccent/50 text-tealaccent' },
  { id: 'MEETING_SCHEDULED', label: 'Assessment Scheduled', color: 'border-purple-500/50 text-purple-300' },
  { id: 'PROPOSAL_SENT', label: 'Proposal Sent', color: 'border-indigo-400/50 text-indigo-300' },
  { id: 'NEGOTIATION', label: 'Negotiation', color: 'border-orange-400/50 text-orange-300' },
  { id: 'WON', label: 'Won Account', color: 'border-emerald-500/50 text-emerald-400' },
  { id: 'LOST', label: 'Closed / Lost', color: 'border-slate-500/50 text-slate-400' },
];

export default function AdminPipelinePage() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLeads = () => {
    fetch('/api/leads?limit=200')
      .then((res) => res.json())
      .then((d) => {
        if (d && d.leads) setLeads(d.leads);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const moveStatus = async (leadId: string, targetStatus: LeadStatus) => {
    // Optimistic UI update
    setLeads((prev) =>
      prev.map((l) => (l.id === leadId ? { ...l, status: targetStatus } : l))
    );

    try {
      await fetch(`/api/leads/${leadId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: targetStatus }),
      });
    } catch {
      fetchLeads();
    }
  };

  return (
    <div className="p-8 space-y-6 max-w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <h1 className="font-heading text-2xl font-bold text-white">Visual Pipeline Kanban</h1>
          <p className="text-xs text-slate-400 mt-1">
            Drag-and-drop or advance leads through stages from initial assessment to won deployment
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/admin/leads"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 text-white text-xs font-semibold hover:bg-white/15"
          >
            <Table className="w-3.5 h-3.5" />
            <span>Table View</span>
          </Link>
        </div>
      </div>

      {loading ? (
        <div className="p-12 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin text-tealaccent" />
          <span>Loading visual pipeline...</span>
        </div>
      ) : (
        <div className="flex gap-4 overflow-x-auto pb-6">
          {PIPELINE_COLUMNS.map((col) => {
            const columnLeads = leads.filter((l) => l.status === col.id);

            return (
              <div
                key={col.id}
                className="w-80 flex-shrink-0 bg-deepnavy/90 rounded-2xl border border-white/10 glass-dark flex flex-col max-h-[78vh]"
              >
                {/* Column Header */}
                <div className={`p-4 border-b border-white/10 flex items-center justify-between ${col.color}`}>
                  <span className="font-heading font-bold text-xs uppercase tracking-wider">
                    {col.label}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] font-mono font-bold text-white">
                    {columnLeads.length}
                  </span>
                </div>

                {/* Cards Container */}
                <div className="p-3 space-y-3 overflow-y-auto flex-1">
                  {columnLeads.map((lead) => (
                    <div
                      key={lead.id}
                      className="p-4 rounded-xl bg-midnight/90 border border-white/10 hover:border-tealaccent/40 transition-all shadow-sm space-y-2 group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] font-bold text-tealaccent">
                          {lead.leadReference}
                        </span>
                        <span
                          className={`text-[9px] font-bold px-1.5 py-0.2 rounded uppercase ${
                            lead.priority === 'URGENT'
                              ? 'bg-red-500/20 text-red-300'
                              : lead.priority === 'HIGH'
                              ? 'bg-amber-500/20 text-amber-300'
                              : 'bg-white/10 text-slate-400'
                          }`}
                        >
                          {lead.priority}
                        </span>
                      </div>

                      <Link href={`/admin/leads/${lead.id}`} className="block">
                        <div className="font-heading font-bold text-sm text-white group-hover:text-tealaccent transition-colors">
                          {lead.fullName}
                        </div>
                        <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                          <Building className="w-3 h-3 text-slate-500" />
                          <span className="truncate">{lead.companyName || 'Unknown Corp'}</span>
                        </div>
                      </Link>

                      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400">
                        <span>{lead.productInterest || 'BuildingShield'}</span>
                        <span>{new Date(lead.createdAt).toLocaleDateString()}</span>
                      </div>

                      {/* Quick Move Selector */}
                      <div className="pt-1">
                        <select
                          value={lead.status}
                          onChange={(e) => moveStatus(lead.id, e.target.value as LeadStatus)}
                          className="w-full text-[10px] py-1 px-1.5 rounded bg-deepnavy border border-white/10 text-slate-300 focus:outline-none"
                        >
                          <option value="NEW">Move: New</option>
                          <option value="CONTACTED">Move: Contacted</option>
                          <option value="QUALIFIED">Move: Qualified</option>
                          <option value="MEETING_SCHEDULED">Move: Assessment Scheduled</option>
                          <option value="PROPOSAL_SENT">Move: Proposal</option>
                          <option value="NEGOTIATION">Move: Negotiation</option>
                          <option value="WON">Move: Won</option>
                          <option value="LOST">Move: Lost</option>
                        </select>
                      </div>
                    </div>
                  ))}

                  {columnLeads.length === 0 && (
                    <div className="py-8 text-center text-[11px] text-slate-500">
                      No leads in this stage
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
