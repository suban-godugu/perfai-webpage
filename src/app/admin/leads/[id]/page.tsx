'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Building,
  Mail,
  Phone,
  Globe,
  Calendar,
  CheckCircle,
  Clock,
  Send,
  Loader2,
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import { INITIAL_STAFF } from '@/config/staff';

export default function AdminLeadDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const [lead, setLead] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [newStatus, setNewStatus] = useState('');
  const [newPriority, setNewPriority] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [newNote, setNewNote] = useState('');
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const fetchLead = () => {
    fetch(`/api/leads/${params.id}`)
      .then((res) => {
        if (res.status === 401) {
          window.location.href = '/admin/login';
          return null;
        }
        return res.json();
      })
      .then((d) => {
        if (d) {
          setLead(d);
          setNewStatus(d.status);
          setNewPriority(d.priority);
          setAssignedTo(d.assignedTo || '');
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchLead();
  }, [params.id]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setUpdating(true);
    setSuccessMsg(null);

    try {
      const res = await fetch(`/api/leads/${params.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: newStatus,
          priority: newPriority,
          assignedTo: assignedTo || null,
          note: newNote ? newNote : undefined,
        }),
      });

      if (!res.ok) throw new Error('Update failed');

      setNewNote('');
      setSuccessMsg('Lead details and activity successfully logged.');
      fetchLead();
    } catch (err) {
      alert('Failed to update lead');
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="p-8 flex items-center justify-center min-h-[50vh]">
        <div className="text-sm text-slate-400">Loading lead profile...</div>
      </div>
    );
  }

  if (!lead) {
    return (
      <div className="p-8 text-center text-slate-400">
        Lead profile not found.
      </div>
    );
  }

  return (
    <div className="p-8 space-y-6 max-w-6xl">
      <Link
        href="/admin/leads"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-tealaccent"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Lead Pipeline</span>
      </Link>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="font-heading text-2xl font-bold text-white">{lead.fullName}</h1>
            <span className="font-mono text-xs font-bold text-tealaccent bg-tealaccent/10 px-2.5 py-0.5 rounded border border-tealaccent/30">
              {lead.leadReference}
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Submitted via {lead.source} on {new Date(lead.createdAt).toLocaleString()}
          </p>
        </div>
      </div>

      {successMsg && (
        <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs rounded-lg flex items-center gap-2">
          <CheckCircle className="w-4 h-4" />
          <span>{successMsg}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Contact & Message */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-deepnavy/80 p-6 rounded-2xl border border-white/10 glass-dark space-y-4">
            <h3 className="font-heading font-bold text-base text-white border-b border-white/10 pb-3">
              Organization & Contact Specifications
            </h3>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-slate-400 block">Company Name:</span>
                <span className="font-semibold text-white">{lead.companyName || 'Not specified'}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Job Title:</span>
                <span className="font-semibold text-white">{lead.jobTitle || 'Not specified'}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Business Email:</span>
                <a href={`mailto:${lead.email}`} className="font-semibold text-techblue hover:underline">
                  {lead.email}
                </a>
              </div>
              <div>
                <span className="text-slate-400 block">Phone Number:</span>
                <span className="font-semibold text-white">{lead.phone || 'N/A'}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Country:</span>
                <span className="font-semibold text-white">{lead.country || 'N/A'}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Industry Sector:</span>
                <span className="font-semibold text-white">{lead.industry || 'N/A'}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Product Interest:</span>
                <span className="font-semibold text-tealaccent">{lead.productInterest || 'General'}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Consent Timestamp:</span>
                <span className="font-mono text-slate-300">
                  {lead.consentAt ? new Date(lead.consentAt).toLocaleDateString() : 'Yes'}
                </span>
              </div>
            </div>

            {lead.message && (
              <div className="pt-4 border-t border-white/10">
                <span className="text-slate-400 text-xs block mb-1 font-semibold">Infrastructure Requirement / Message:</span>
                <div className="p-3 rounded-lg bg-midnight/80 border border-white/10 text-xs text-slate-200 leading-relaxed whitespace-pre-line">
                  {lead.message}
                </div>
              </div>
            )}
          </div>

          {/* Activity Timeline */}
          <div className="bg-deepnavy/80 p-6 rounded-2xl border border-white/10 glass-dark">
            <h3 className="font-heading font-bold text-base text-white border-b border-white/10 pb-3 mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-techblue" />
              <span>Activity & Engagement Timeline</span>
            </h3>

            <div className="space-y-4">
              {(lead.activities || []).map((act: any, idx: number) => (
                <div key={idx} className="flex items-start gap-3 text-xs">
                  <div className="w-2 h-2 rounded-full bg-tealaccent mt-1.5 flex-shrink-0" />
                  <div className="flex-1 bg-white/5 p-3 rounded-lg border border-white/5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-slate-300 uppercase">{act.activityType}</span>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {new Date(act.createdAt).toLocaleString()}
                      </span>
                    </div>
                    <p className="text-slate-300 mt-1 leading-relaxed">{act.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Status & Assignment Governance */}
        <div className="lg:col-span-5 space-y-6">
          <form onSubmit={handleUpdate} className="bg-deepnavy/80 p-6 rounded-2xl border border-white/10 glass-dark space-y-4">
            <h3 className="font-heading font-bold text-base text-white border-b border-white/10 pb-3">
              Sales Governance & Updates
            </h3>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Pipeline Lifecycle Status
              </label>
              <select
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-midnight border border-white/15 text-white text-xs focus:outline-none focus:border-tealaccent"
              >
                <option value="NEW">New (Unreviewed)</option>
                <option value="CONTACTED">Contacted</option>
                <option value="QUALIFIED">Qualified</option>
                <option value="MEETING_SCHEDULED">Meeting Scheduled</option>
                <option value="PROPOSAL_SENT">Proposal Sent</option>
                <option value="NEGOTIATION">Negotiation</option>
                <option value="WON">Won (Active Deal)</option>
                <option value="LOST">Lost</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Account Priority
              </label>
              <select
                value={newPriority}
                onChange={(e) => setNewPriority(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-midnight border border-white/15 text-white text-xs focus:outline-none focus:border-tealaccent"
              >
                <option value="LOW">Low</option>
                <option value="NORMAL">Normal</option>
                <option value="HIGH">High</option>
                <option value="URGENT">Urgent</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Assign Commercial Executive
              </label>
              <select
                value={assignedTo}
                onChange={(e) => setAssignedTo(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-midnight border border-white/15 text-white text-xs focus:outline-none focus:border-tealaccent"
              >
                <option value="">Unassigned</option>
                {INITIAL_STAFF.map((staff) => (
                  <option key={staff.id} value={staff.id}>
                    {staff.fullName} ({staff.role})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Add Internal Engineering / Call Note
              </label>
              <textarea
                rows={3}
                placeholder="Log details from discovery call, chiller tonnage confirmation, or next meeting action..."
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-midnight border border-white/15 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-tealaccent resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={updating}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-techblue to-tealaccent text-midnight font-bold text-xs hover:opacity-95 shadow-lg shadow-tealaccent/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {updating ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Logging Updates...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Save Changes & Append Activity</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
