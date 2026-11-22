import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Cpu, Building2, Globe } from 'lucide-react';

export const metadata = {
  title: 'PerfAI + Senatria Partnership | PERFAI',
  description:
    'Learn how the commercial sales partnership between PerfAI and Senatria works: local assessment, deployment support, and ongoing performance partnership.',
};

export default function PartnerPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-enterprise-dark text-white py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase font-mono font-bold text-tealaccent tracking-wider">
              Strategic Commercial Model
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight">
              PerfAI + Senatria: Global Technology, Local Delivery
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              How the partnership operates: Senatria provides the breakthrough Physical AI platform; PerfAI delivers local engineering assessment, contract execution, and ongoing performance stewardship.
            </p>
          </div>
        </div>
      </section>

      {/* Division of Responsibilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold text-techblue tracking-wider">
              Clear Demarcation
            </span>
            <h2 className="font-heading text-3xl font-bold text-textdark mt-2">
              Who Does What
            </h2>
            <p className="text-slatecustom text-base mt-3">
              We operate with absolute transparency regarding technology ownership and commercial execution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* PerfAI Role */}
            <div className="bg-mist/50 p-8 rounded-2xl border border-slate-200 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-tealaccent text-midnight flex items-center justify-center font-bold">
                  P
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-textdark">PerfAI Commercial Responsibilities</h3>
                  <div className="text-xs font-semibold text-tealaccent">Reseller & Channel Partner</div>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slatecustom">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-tealaccent flex-shrink-0 mt-0.5" />
                  <span><strong>Local Presence & Relationships:</strong> Serving building owners, REITs, and facility managers across India and global markets.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-tealaccent flex-shrink-0 mt-0.5" />
                  <span><strong>On-Site Feasibility Audits:</strong> Single-line diagram reviews, chiller tonnage checks, and 15-minute interval data ingestion.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-tealaccent flex-shrink-0 mt-0.5" />
                  <span><strong>Commercial Contracting:</strong> Structuring performance-based contracts aligned with client utility billing structures.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-tealaccent flex-shrink-0 mt-0.5" />
                  <span><strong>Continuous Client Governance:</strong> Regular reviews, quarterly verified savings reconciliation, and dedicated account managers.</span>
                </div>
              </div>
            </div>

            {/* Senatria Role */}
            <div className="bg-deepnavy p-8 rounded-2xl border border-white/10 text-white space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-techblue text-white flex items-center justify-center font-bold">
                  S
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold">Senatria Technology Responsibilities</h3>
                  <div className="text-xs font-semibold text-blue-300">Underlying Technology Provider</div>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-techblue flex-shrink-0 mt-0.5" />
                  <span><strong>ATRIA Platform Engine:</strong> Continuous R&D of the core physical AI operating system and thermodynamic twin algorithms.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-techblue flex-shrink-0 mt-0.5" />
                  <span><strong>BuildingShield & APEX:</strong> Master AI orchestrator for HVAC and BMS setpoint modulation.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-techblue flex-shrink-0 mt-0.5" />
                  <span><strong>VERITAS Value Ledger:</strong> Mathematical isolation and verification of energy and financial savings under IPMVP Option C.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-techblue flex-shrink-0 mt-0.5" />
                  <span><strong>Roadmap Innovation:</strong> Piloting GridShield demand flexibility and ComputeShield distributed capacity.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Non-Exclusivity Notice */}
      <section className="py-16 bg-mist border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <ShieldCheck className="w-10 h-10 text-techblue mx-auto" />
          <h3 className="font-heading text-xl font-bold text-textdark">Authorized Partner Notice</h3>
          <p className="text-xs text-slatecustom leading-relaxed max-w-2xl mx-auto">
            PERFAI operates as an authorized sales and channel partner for Senatria solutions. All technology intellectual property, trade names, and patents reside with Senatria Inc. Reference case studies presented on this site are Senatria international deployments (e.g. Australia and US trials) and clearly labeled with evidence badges.
          </p>
        </div>
      </section>
    </div>
  );
}
