import React from 'react';
import Link from 'next/link';
import { ArrowRight, Cpu, Building2, Zap, Server, LineChart } from 'lucide-react';
import { OFFICIAL_PRODUCTS } from '@/lib/db/mock-data';
import { AvailabilityBadge } from '@/components/ui/AvailabilityBadge';

export const metadata = {
  title: 'Senatria Physical AI Solutions Portfolio | PERFAI',
  description:
    'Explore the Senatria Physical AI suite represented by PERFAI: ATRIA platform, BuildingShield, GridShield, ComputeShield, and VERITAS.',
};

export default function SolutionsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-enterprise-dark text-white py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase font-bold text-tealaccent tracking-wider font-mono">
              Solution Portfolio
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight">
              Physical AI Solutions for Intelligent Infrastructure
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Powered by Senatria, PERFAI brings a multi-tiered Physical AI ecosystem that transforms static building assets into dynamic, autonomous, and self-optimizing facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-mist/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {OFFICIAL_PRODUCTS.map((prod, index) => (
              <div
                key={prod.id}
                className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono font-bold uppercase text-techblue bg-blue-50 px-2.5 py-1 rounded">
                      {prod.category}
                    </span>
                    <AvailabilityBadge status={prod.availability} />
                  </div>

                  <h2 className="font-heading text-3xl font-bold text-textdark">{prod.name}</h2>
                  <h3 className="text-sm font-semibold text-techblue">{prod.headline}</h3>
                  <p className="text-slatecustom text-sm leading-relaxed">{prod.description}</p>

                  <div className="pt-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-textdark mb-2">Key Highlights</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {prod.features.slice(0, 4).map((f, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slatecustom">
                          <span className="text-tealaccent font-bold">•</span>
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-mist p-6 rounded-xl border border-slate-200 space-y-4 text-center lg:text-left">
                  <div className="text-xs font-bold uppercase text-slate-700 tracking-wider">Specifications</div>
                  <div className="space-y-2">
                    {prod.specs.map((s, idx) => (
                      <div key={idx} className="text-xs">
                        <span className="text-slatecustom block">{s.label}</span>
                        <span className="font-semibold text-textdark">{s.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-300 space-y-2">
                    <Link
                      href={`/solutions/${prod.slug}`}
                      className="w-full text-center block py-2.5 px-4 rounded-lg bg-deepnavy text-white text-xs font-bold hover:bg-midnight transition-colors"
                    >
                      View Detailed Architecture
                    </Link>
                    <Link
                      href={`/request-assessment?product=${prod.slug}`}
                      className="w-full text-center block py-2 px-4 rounded-lg bg-white border border-slate-300 text-textdark text-xs font-semibold hover:bg-slate-50 transition-colors"
                    >
                      Request Feasibility Assessment
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
