import React from 'react';
import { LeadAssessmentForm } from '@/components/forms/LeadAssessmentForm';

export const metadata = {
  title: 'Request a Live Product Demonstration | PERFAI',
  description:
    'Experience Senatria Physical AI live. Schedule a guided demonstration of BuildingShield, ATRIA, and the VERITAS intelligence engine.',
};

export default function RequestDemoPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-enterprise-dark text-white py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs uppercase font-bold text-tealaccent tracking-wider font-mono">
            Interactive Product Walkthrough
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mt-2">
            Request a Live Product Demonstration
          </h1>
          <p className="text-slate-300 text-base leading-relaxed mt-4">
            Schedule a 30-minute technical demonstration with a PERFAI solutions architect. See how ATRIA and BuildingShield autonomously regulate HVAC plants in real time.
          </p>
        </div>
      </section>

      <section className="py-20 bg-mist/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadAssessmentForm
            title="Schedule Your Live Technical Demo"
            subtitle="Select your preferred product solution and convenient consultation details."
            source="request_demo_page"
          />
        </div>
      </section>
    </div>
  );
}
