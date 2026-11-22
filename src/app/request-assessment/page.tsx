import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { LeadAssessmentForm } from '@/components/forms/LeadAssessmentForm';

export const metadata = {
  title: 'Request Infrastructure Assessment | PERFAI',
  description:
    'Request a non-invasive engineering feasibility assessment for your chiller plant, BMS, and facility electrical infrastructure.',
};

export default function RequestAssessmentPage({
  searchParams,
}: {
  searchParams: { product?: string; industry?: string; case_study?: string };
}) {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-enterprise-dark text-white py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs uppercase font-bold text-tealaccent tracking-wider font-mono">
            Infrastructure Feasibility Audit
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mt-2">
            Request an Infrastructure Assessment
          </h1>
          <p className="text-slate-300 text-base leading-relaxed mt-4">
            Evaluate your commercial facility for autonomous Physical AI optimization. Receive a preliminary baseline audit, ROI projection, and deployment roadmap.
          </p>
        </div>
      </section>

      <section className="py-20 bg-mist/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadAssessmentForm
            initialProduct={searchParams.product || 'BuildingShield'}
            initialIndustry={searchParams.industry || 'Commercial Real Estate'}
            title="Complete Facility Assessment Request"
            subtitle="Please share your building profile to help our engineering team prepare a tailored feasibility model."
            source="dedicated_assessment_page"
          />
        </div>
      </section>
    </div>
  );
}
