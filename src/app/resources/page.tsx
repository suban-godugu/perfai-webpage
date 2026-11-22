import React from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, Download, ShieldCheck } from 'lucide-react';
import { OFFICIAL_RESOURCES } from '@/lib/db/mock-data';

export const metadata = {
  title: 'Technical Whitepapers & Resources | PERFAI',
  description:
    'Download technical briefs, IPMVP methodology whitepapers, and Physical AI brochures from PERFAI and Senatria.',
};

export default function ResourcesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-enterprise-dark text-white py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase font-bold text-tealaccent tracking-wider font-mono">
              Knowledge Base & Technical Library
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight">
              Engineering Resources & Documentation
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Explore architectural whitepapers, measurement and verification frameworks, and product overviews for building managers and consulting engineers.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-mist/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {OFFICIAL_RESOURCES.map((res) => (
              <div
                key={res.id}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-techblue bg-blue-50 px-2.5 py-1 rounded">
                      {res.type}
                    </span>
                    <span className="text-xs text-slatecustom">{res.fileSize}</span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-textdark">{res.title}</h3>
                  <p className="text-slatecustom text-xs mt-3 leading-relaxed">{res.description}</p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <Link
                    href={`/resources/${res.slug}`}
                    className="text-xs font-bold text-techblue hover:text-tealaccent flex items-center justify-between"
                  >
                    <span>View Resource Summary</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
