import React from 'react';
import Link from 'next/link';
import { ArrowRight, Building2, Hotel, Server, Factory, Zap, Layers } from 'lucide-react';
import { OFFICIAL_INDUSTRIES } from '@/lib/db/mock-data';

export const metadata = {
  title: 'Industry Sectors & Physical AI Solutions | PERFAI',
  description:
    'Discover how PERFAI deploys Senatria Physical AI across Commercial Real Estate, Hospitality, Data Centres, Industrial Facilities, and Energy Utilities.',
};

export default function IndustriesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-enterprise-dark text-white py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase font-bold text-tealaccent tracking-wider font-mono">
              Target Sectors
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight">
              Enterprise Physical AI Tailored to Your Operating Environment
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Every facility type has specific thermal loads, occupancy patterns, and commercial imperatives. Explore how PERFAI delivers verified performance for your industry.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="py-20 bg-mist/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {OFFICIAL_INDUSTRIES.map((ind) => (
              <div
                key={ind.id}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-techblue flex items-center justify-center">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-textdark">{ind.name}</h2>
                  <div className="text-xs font-semibold text-techblue">{ind.heroHeadline}</div>
                  <p className="text-slatecustom text-sm leading-relaxed">{ind.description}</p>

                  <div className="pt-2">
                    <div className="text-xs font-bold uppercase text-slate-700 tracking-wider mb-2">Key Challenges</div>
                    <ul className="space-y-1 text-xs text-slatecustom">
                      {ind.challenges.slice(0, 3).map((c, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-red-500">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="text-sm font-bold text-techblue hover:text-tealaccent flex items-center justify-between"
                  >
                    <span>Explore Solutions & Outcomes</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
