'use client';

import React, { useState } from 'react';
import { Package, Check, Save, AlertCircle } from 'lucide-react';
import { OFFICIAL_PRODUCTS } from '@/lib/db/mock-data';
import { AvailabilityBadge } from '@/components/ui/AvailabilityBadge';
import { ProductAvailability } from '@/types';

export default function AdminProductsPage() {
  const [products, setProducts] = useState(OFFICIAL_PRODUCTS);
  const [savedMsg, setSavedMsg] = useState<string | null>(null);

  const handleStatusChange = (slug: string, newStatus: ProductAvailability) => {
    setProducts((prev) =>
      prev.map((p) => (p.slug === slug ? { ...p, availability: newStatus } : p))
    );
    setSavedMsg(`Updated availability for ${slug} to ${newStatus}.`);
    setTimeout(() => setSavedMsg(null), 3000);
  };

  return (
    <div className="p-8 space-y-6 max-w-7xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <h1 className="font-heading text-2xl font-bold text-white">Product & Availability Governance</h1>
          <p className="text-xs text-slate-400 mt-1">
            Configure Senatria product portfolio availability flags (Available, Pilot, Coming Soon, Under Development)
          </p>
        </div>
      </div>

      {savedMsg && (
        <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs rounded-lg flex items-center gap-2">
          <Check className="w-4 h-4" />
          <span>{savedMsg}</span>
        </div>
      )}

      <div className="space-y-4">
        {products.map((prod) => (
          <div
            key={prod.id}
            className="bg-deepnavy/80 p-6 rounded-2xl border border-white/10 glass-dark flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="space-y-1 max-w-2xl">
              <div className="flex items-center gap-3">
                <h3 className="font-heading text-xl font-bold text-white">{prod.name}</h3>
                <AvailabilityBadge status={prod.availability} />
              </div>
              <p className="text-xs font-semibold text-techblue">{prod.headline}</p>
              <p className="text-xs text-slate-400 leading-relaxed">{prod.description}</p>
            </div>

            <div className="bg-midnight/80 p-4 rounded-xl border border-white/10 space-y-2 min-w-[240px]">
              <label className="block text-[11px] font-bold text-slate-300 uppercase">
                Commercial Availability
              </label>
              <select
                value={prod.availability}
                onChange={(e) => handleStatusChange(prod.slug, e.target.value as ProductAvailability)}
                className="w-full px-3 py-2 rounded-lg bg-deepnavy border border-white/15 text-white text-xs focus:outline-none focus:border-tealaccent"
              >
                <option value="AVAILABLE">Available (Live)</option>
                <option value="PILOT">Pilot Pathway</option>
                <option value="COMING_SOON">Coming Soon</option>
                <option value="UNDER_DEVELOPMENT">Under Development (Roadmap)</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
