'use client';

import React from 'react';
import { Globe, FileText, CheckCircle } from 'lucide-react';

export default function AdminContentPage() {
  return (
    <div className="p-8 space-y-6 max-w-7xl">
      <div className="pb-4 border-b border-white/10">
        <h1 className="font-heading text-2xl font-bold text-white">CMS & Website Content Governance</h1>
        <p className="text-xs text-slate-400 mt-1">
          Manage key landing page headlines, corporate positioning, and SEO metadata
        </p>
      </div>

      <div className="bg-deepnavy/80 p-6 rounded-2xl border border-white/10 glass-dark space-y-4 max-w-3xl">
        <h3 className="font-heading text-lg font-bold text-white">Primary Homepage Positioning</h3>

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">Hero Main Headline</label>
          <input
            type="text"
            readOnly
            value="Unlock the Intelligence Hidden Within Your Infrastructure."
            className="w-full px-3.5 py-2.5 rounded-lg bg-midnight border border-white/15 text-white text-xs"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">Corporate Subtitle</label>
          <textarea
            rows={3}
            readOnly
            value="Bringing Physical AI to buildings, energy and infrastructure to unlock operational efficiency, measurable performance and new capacity."
            className="w-full px-3.5 py-2.5 rounded-lg bg-midnight border border-white/15 text-white text-xs resize-none"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">Brand Attribution Notice</label>
          <input
            type="text"
            readOnly
            value="PERFAI is a commercial sales partner & reseller for SENATRIA Physical AI technologies."
            className="w-full px-3.5 py-2.5 rounded-lg bg-midnight border border-white/15 text-white text-xs"
          />
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={() => alert('Content configuration synchronized with active build.')}
            className="px-4 py-2 rounded-lg bg-techblue text-white text-xs font-bold hover:bg-techblue/80"
          >
            Save Content Changes
          </button>
        </div>
      </div>
    </div>
  );
}
