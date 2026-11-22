import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { OFFICIAL_INDUSTRIES } from '@/lib/db/mock-data';
import { LeadAssessmentForm } from '@/components/forms/LeadAssessmentForm';

interface IndustryPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return OFFICIAL_INDUSTRIES.map((ind) => ({
    slug: ind.slug,
  }));
}

export function generateMetadata({ params }: IndustryPageProps) {
  const industry = OFFICIAL_INDUSTRIES.find((ind) => ind.slug === params.slug);
  if (!industry) return {};

  return {
    title: `${industry.name} — Physical AI Infrastructure Optimization | PERFAI`,
    description: industry.description,
  };
}

export default function IndustryDetailPage({ params }: IndustryPageProps) {
  const industry = OFFICIAL_INDUSTRIES.find((ind) => ind.slug === params.slug);

  if (!industry) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-enterprise-dark text-white py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/industries"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-tealaccent mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Industries</span>
          </Link>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase font-bold text-tealaccent tracking-wider font-mono">
              Industry Vertical
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight">
              {industry.name}
            </h1>
            <p className="text-xl text-tealaccent font-medium">{industry.heroHeadline}</p>
            <p className="text-slate-300 text-base leading-relaxed">{industry.description}</p>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Challenges */}
            <div className="space-y-6">
              <span className="text-xs uppercase font-bold text-red-600 tracking-wider">
                Operational Realities
              </span>
              <h2 className="font-heading text-3xl font-bold text-textdark">
                Industry Challenges in {industry.name}
              </h2>
              <div className="space-y-4 pt-2">
                {industry.challenges.map((c, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-red-50/50 border border-red-100">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-textdark font-medium">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions & Outcomes */}
            <div className="space-y-6">
              <span className="text-xs uppercase font-bold text-tealaccent tracking-wider">
                Physical AI Solutions
              </span>
              <h2 className="font-heading text-3xl font-bold text-textdark">
                How PERFAI & Senatria Solve These
              </h2>
              <div className="space-y-4 pt-2">
                {industry.solutions.map((s, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-mist/60 border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-tealaccent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-textdark font-medium">{s}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-deepnavy text-white">
                <div className="text-xs uppercase font-mono font-bold text-tealaccent mb-2">
                  Anticipated Measurable Outcomes
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  {industry.outcomes.map((out, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-tealaccent">•</span>
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Form */}
      <section className="py-20 bg-mist/60 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadAssessmentForm
            initialIndustry={industry.name}
            title={`Schedule an Evaluation for ${industry.name}`}
            subtitle="Connect with our technical team to evaluate your facility profile and potential baseline energy savings."
            source={`industry_page_${industry.slug}`}
          />
        </div>
      </section>
    </div>
  );
}
