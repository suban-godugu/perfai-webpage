import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { OFFICIAL_CASE_STUDIES } from '@/lib/db/mock-data';

export const metadata = {
  title: 'Verified Case Studies & Deployment Evidence | PERFAI',
  description:
    'Review verified Physical AI deployment evidence: measured chiller energy reductions, IPMVP Option C verification, and asset performance data.',
};

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-enterprise-dark text-white py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase font-bold text-tealaccent tracking-wider font-mono">
              Empirical Evidence
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight">
              Verified Case Studies & Performance Evidence
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              We distinguish between verified historical deployments and contracted portfolio models. Review asset scope, baseline methodology, and audited results below.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20 bg-mist/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {OFFICIAL_CASE_STUDIES.map((cs) => (
              <div
                key={cs.id}
                className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-techblue bg-blue-50 px-2.5 py-1 rounded">
                      {cs.industry}
                    </span>
                    <span className="text-xs text-slatecustom">{cs.location}</span>
                  </div>
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-semibold ${
                      cs.deploymentStatus === 'Live Deployment'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {cs.deploymentStatus}
                  </span>
                </div>

                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-textdark">{cs.title}</h2>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slatecustom border-y border-slate-100 py-4">
                  <div>
                    <strong className="text-textdark">Asset Scope:</strong> {cs.assetScope}
                  </div>
                  <div>
                    <strong className="text-textdark">Measurement Window:</strong> {cs.measurementPeriod}
                  </div>
                  <div className="md:col-span-2">
                    <strong className="text-textdark">Baseline Method:</strong> {cs.baseline}
                  </div>
                </div>

                {/* Metrics */}
                <div className="mt-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-textdark mb-3">
                    {cs.deploymentStatus === 'Live Deployment'
                      ? 'Measured Operating Results'
                      : 'Contracted Stage Status'}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {cs.actualResults.map((res, i) => (
                      <div key={i} className="p-4 bg-mist/50 rounded-xl border border-slate-200">
                        <div className="text-2xl font-heading font-bold text-tealaccent">
                          {res.metric}
                        </div>
                        <div className="text-xs font-semibold text-textdark mt-1">{res.value}</div>
                        {res.notes && (
                          <div className="text-[11px] text-slatecustom mt-1">{res.notes}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="text-sm font-bold text-techblue hover:text-tealaccent flex items-center gap-1.5"
                  >
                    <span>Read Full Methodology & Verification Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/request-assessment"
                    className="text-xs font-semibold text-slate-700 hover:text-textdark px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    Assess Similar Asset
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
