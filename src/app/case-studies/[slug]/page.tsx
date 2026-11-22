import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { OFFICIAL_CASE_STUDIES } from '@/lib/db/mock-data';
import { LeadAssessmentForm } from '@/components/forms/LeadAssessmentForm';

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return OFFICIAL_CASE_STUDIES.map((cs) => ({
    slug: cs.slug,
  }));
}

export function generateMetadata({ params }: CaseStudyPageProps) {
  const cs = OFFICIAL_CASE_STUDIES.find((c) => c.slug === params.slug);
  if (!cs) return {};

  return {
    title: `${cs.title} — Verified Evidence | PERFAI`,
    description: `Detailed case study and verification report for ${cs.title}. Baseline: ${cs.baseline}`,
  };
}

export default function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const cs = OFFICIAL_CASE_STUDIES.find((c) => c.slug === params.slug);

  if (!cs) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-enterprise-dark text-white py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-tealaccent mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Case Studies</span>
          </Link>

          <div className="max-w-4xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-tealaccent bg-tealaccent/10 px-3 py-1 rounded-full border border-tealaccent/20">
                {cs.industry}
              </span>
              <span
                className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${
                  cs.deploymentStatus === 'Live Deployment'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-techblue/20 text-blue-300 border border-techblue/40'
                }`}
              >
                {cs.deploymentStatus}
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              {cs.title}
            </h1>
            <p className="text-slate-300 text-sm">
              Location: {cs.location} | Scope: {cs.assetScope}
            </p>
          </div>
        </div>
      </section>

      {/* Details & Measurement Methodology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-8">
              <div>
                <span className="text-xs uppercase font-bold text-techblue tracking-wider">
                  Baseline & Measurement Window
                </span>
                <h2 className="font-heading text-2xl font-bold text-textdark mt-1">
                  How Performance Was Measured
                </h2>
                <div className="mt-4 p-6 rounded-xl bg-mist/50 border border-slate-200 text-sm text-slatecustom leading-relaxed">
                  <p className="mb-2">
                    <strong>Measurement Standard:</strong> {cs.baseline}
                  </p>
                  <p>
                    <strong>Deployment Period:</strong> {cs.measurementPeriod}
                  </p>
                </div>
              </div>

              <div>
                <span className="text-xs uppercase font-bold text-tealaccent tracking-wider">
                  Verified Data Points
                </span>
                <h2 className="font-heading text-2xl font-bold text-textdark mt-1">
                  Documented Outcomes
                </h2>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cs.actualResults.map((res, i) => (
                    <div key={i} className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <div className="text-3xl font-heading font-bold text-tealaccent">
                        {res.metric}
                      </div>
                      <div className="text-sm font-semibold text-textdark mt-1">{res.value}</div>
                      {res.notes && (
                        <div className="text-xs text-slatecustom mt-2 leading-relaxed">{res.notes}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs uppercase font-bold text-slate-700 tracking-wider">
                  Methodology & Limitations
                </span>
                <h2 className="font-heading text-2xl font-bold text-textdark mt-1">
                  Scientific Rigor & Exclusions
                </h2>
                <div className="mt-4 text-sm text-slatecustom leading-relaxed bg-mist/40 p-6 rounded-xl border border-slate-200">
                  {cs.methodologyNotes}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-deepnavy p-6 rounded-2xl text-white border border-white/10 sticky top-28 space-y-4">
                <div className="text-xs font-mono font-bold text-tealaccent uppercase">
                  Asset Feasibility
                </div>
                <h3 className="font-heading text-xl font-bold">
                  Assess Your Building Against This Benchmark
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Have a similar facility? Our commercial solutions engineers can evaluate your single-line diagram and chiller logs within 48 hours.
                </p>
                <div className="pt-2">
                  <Link
                    href={`/request-assessment?case_study=${cs.slug}`}
                    className="w-full text-center block py-3 rounded-lg bg-gradient-to-r from-techblue to-tealaccent text-midnight font-bold text-xs hover:opacity-95 shadow-lg shadow-tealaccent/20"
                  >
                    Request Benchmark Audit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
