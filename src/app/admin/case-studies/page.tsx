'use client';

import React from 'react';
import { FileCheck, CheckCircle2 } from 'lucide-react';
import { OFFICIAL_CASE_STUDIES } from '@/lib/db/mock-data';

export default function AdminCaseStudiesPage() {
  return (
    <div className="p-8 space-y-6 max-w-7xl">
      <div className="pb-4 border-b border-white/10">
        <h1 className="font-heading text-2xl font-bold text-white">Case Studies & Deployment Evidence</h1>
        <p className="text-xs text-slate-400 mt-1">
          Manage empirical verification reports, baseline methodologies, and asset performance metrics
        </p>
      </div>

      <div className="space-y-6">
        {OFFICIAL_CASE_STUDIES.map((cs) => (
          <div key={cs.id} className="bg-deepnavy/80 p-6 rounded-2xl border border-white/10 glass-dark space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-techblue">{cs.industry} · {cs.location}</span>
              <span className={`text-xs px-2.5 py-0.5 rounded font-semibold ${
                cs.deploymentStatus === 'Live Deployment'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'bg-techblue/20 text-blue-300 border border-techblue/30'
              }`}>
                {cs.deploymentStatus}
              </span>
            </div>
            <h3 className="font-heading text-xl font-bold text-white">{cs.title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>Asset Scope:</strong> {cs.assetScope} | <strong>Baseline:</strong> {cs.baseline}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {cs.actualResults.map((r, i) => (
                <div key={i} className="bg-midnight/80 p-3 rounded-lg border border-white/10">
                  <div className="text-lg font-bold text-tealaccent font-heading">{r.metric}</div>
                  <div className="text-xs text-white">{r.value}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
