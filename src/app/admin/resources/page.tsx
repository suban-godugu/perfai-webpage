'use client';

import React from 'react';
import { FolderDown, FileText } from 'lucide-react';
import { OFFICIAL_RESOURCES } from '@/lib/db/mock-data';

export default function AdminResourcesPage() {
  return (
    <div className="p-8 space-y-6 max-w-7xl">
      <div className="pb-4 border-b border-white/10">
        <h1 className="font-heading text-2xl font-bold text-white">Technical Resources & Documentation</h1>
        <p className="text-xs text-slate-400 mt-1">
          Whitepapers, product specifications, and IPMVP methodology documents available for enterprise download
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {OFFICIAL_RESOURCES.map((res) => (
          <div key={res.id} className="bg-deepnavy/80 p-6 rounded-2xl border border-white/10 glass-dark space-y-3">
            <span className="text-[10px] font-mono font-bold text-techblue bg-techblue/10 px-2 py-0.5 rounded">
              {res.type}
            </span>
            <h3 className="font-heading text-base font-bold text-white">{res.title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{res.description}</p>
            <div className="pt-2 text-[11px] text-slate-500 font-mono">
              File Size: {res.fileSize}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
