import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, CheckCircle2, Globe, Cpu, Target, Layers } from 'lucide-react';
import { LeadAssessmentForm } from '@/components/forms/LeadAssessmentForm';

export const metadata = {
  title: 'About PERFAI — Commercial Partner for Senatria Physical AI',
  description:
    'Learn about PERFAI: The enterprise commercial reseller and sales partner for Senatria, bringing autonomous Physical AI to built environments across India and international markets.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-enterprise-dark text-white py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase font-bold text-tealaccent tracking-wider font-mono">
              About PERFAI
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight">
              Bridging Physical AI Science & Commercial Realities.
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              PERFAI is a commercial sales partner and reseller for <strong>SENATRIA</strong>, the pioneer in Physical AI for autonomous infrastructure. We bring deep commercial expertise, local engineering support, and transparent value verification to enterprise customers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-xs uppercase font-bold text-techblue tracking-wider">
                Corporate Role & Business Model
              </span>
              <h2 className="font-heading text-3xl font-bold text-textdark">
                Why PERFAI Exists
              </h2>
              <p className="text-slatecustom text-base leading-relaxed">
                Physical infrastructure in commercial real estate, data centres, and industrial plants is notoriously complex, fragmented, and conservative. Introducing cutting-edge autonomous AI requires far more than generic algorithms—it requires dedicated domain engineering, local commercial presence, and accountable operational governance.
              </p>
              <p className="text-slatecustom text-base leading-relaxed">
                As Senatria's commercial partner, PERFAI acts as the primary interface for enterprise asset owners. We conduct initial engineering feasibility assessments, structure performance-based commercial contracts, oversee non-invasive deployment, and ensure continuous customer success.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-mist/50 border border-slate-200">
                  <div className="font-heading font-bold text-lg text-textdark">Customer First</div>
                  <p className="text-xs text-slatecustom mt-1">
                    Direct access to technical feasibility, rapid ROI modeling, and responsive local support.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-mist/50 border border-slate-200">
                  <div className="font-heading font-bold text-lg text-textdark">Independent Rigor</div>
                  <p className="text-xs text-slatecustom mt-1">
                    Every rupee and kilowatt-hour saved is verified against IPMVP Option C standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Partner Details */}
            <div className="bg-deepnavy p-8 sm:p-10 rounded-2xl text-white border border-white/10 shadow-xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tealaccent/20 text-tealaccent text-xs font-semibold">
                Technology Provider Reference
              </div>
              <h3 className="font-heading text-2xl font-bold">
                About SENATRIA
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                SENATRIA is a Physical AI technology company pioneering autonomous control of physical assets. Its ATRIA operating system, BuildingShield, GridShield, and VERITAS engines connect digital models directly to real-world mechanical and electrical systems.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tealaccent flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300">
                    Physics-informed thermodynamic models coupled with reinforcement learning agents.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tealaccent flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300">
                    Hard safety boundaries protecting expensive chillers, pumps, and cooling towers.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tealaccent flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300">
                    Proprietary VERITAS measurement engine delivering audited value attribution.
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-400">Official Senatria Website:</span>
                <a
                  href="https://senatria.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tealaccent hover:underline flex items-center gap-1 font-semibold"
                >
                  senatria.ai <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Engagement Model */}
      <section className="py-20 bg-mist/50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold text-techblue tracking-wider">
              Engagement Lifecycle
            </span>
            <h2 className="font-heading text-3xl font-bold text-textdark mt-2">
              How Enterprise Customers Partner With PERFAI
            </h2>
            <p className="text-slatecustom text-base mt-3">
              We guide property owners and facility leaders through a structured, de-risked journey from discovery to automated value realization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="text-tealaccent font-mono font-bold text-xl mb-2">Phase 1</div>
              <h4 className="font-heading text-lg font-bold text-textdark">Feasibility Audit</h4>
              <p className="text-xs text-slatecustom mt-2 leading-relaxed">
                Review chiller plant single-line diagrams, historical 15-minute interval energy data, and existing BMS connectivity (BACnet/Modbus).
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="text-techblue font-mono font-bold text-xl mb-2">Phase 2</div>
              <h4 className="font-heading text-lg font-bold text-textdark">Baseline & Modeling</h4>
              <p className="text-xs text-slatecustom mt-2 leading-relaxed">
                Build thermodynamic digital twins and establish IPMVP Option C weather-normalized baselines with zero operational risk.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="text-amber-500 font-mono font-bold text-xl mb-2">Phase 3</div>
              <h4 className="font-heading text-lg font-bold text-textdark">Agent Deployment</h4>
              <p className="text-xs text-slatecustom mt-2 leading-relaxed">
                Deploy non-invasive Senatria telemetry agents, configure engineering safety guardrails, and initiate autonomous setpoint control.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="text-emerald-500 font-mono font-bold text-xl mb-2">Phase 4</div>
              <h4 className="font-heading text-lg font-bold text-textdark">Verified Value</h4>
              <p className="text-xs text-slatecustom mt-2 leading-relaxed">
                Receive monthly VERITAS financial attribution reports, validated kWh savings statements, and carbon abatement certificates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-midnight text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold">
              Ready to Discuss Your Infrastructure Requirements?
            </h2>
            <p className="text-slate-300 text-base">
              Connect with our solutions team to arrange a confidential feasibility consultation for your facility.
            </p>
            <div className="pt-2">
              <Link
                href="/request-assessment"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-techblue to-tealaccent text-midnight font-heading font-semibold text-base shadow-lg shadow-tealaccent/20 hover:scale-[1.02] transition-transform"
              >
                <span>Request Infrastructure Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
