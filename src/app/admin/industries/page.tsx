'use client';

import React from 'react';
import { Layers, CheckCircle } from 'lucide-react';
import { OFFICIAL_INDUSTRIES } from '@/lib/db/mock-data';

export default function AdminIndustriesPage() {
  return (
    <div className="p-8 space-y-6 max-w-7xl">
      <div className="pb-4 border-b border-white/10">
        <h1 className="font-heading text-2xl font-bold text-white">Target Industry Verticals</h1>
        <p className="text-xs text-slate-400 mt-1">
          Review and govern the 6 primary market segments and value outcomes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {OFFICIAL_INDUSTRIES.map((ind) => (
          <div key={ind.id} className="bg-deepnavy/80 p-6 rounded-2xl border border-white/10 glass-dark space-y-3">
            <h3 className="font-heading text-lg font-bold text-white">{ind.name}</h3>
            <div className="text-xs font-semibold text-techblue">{ind.heroHeadline}</div>
            <p className="text-xs text-slate-300 leading-relaxed">{ind.description}</p>
            <div className="pt-2 text-xs">
              <span className="text-slate-400 block font-bold mb-1">Key Value Outcome:</span>
              <span className="text-tealaccent bg-tealaccent/10 px-2.5 py-1 rounded border border-tealaccent/20 block">
                {ind.outcomes[0]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
