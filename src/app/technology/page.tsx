import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Cpu, Gauge, RefreshCw, BarChart2 } from 'lucide-react';
import { LeadAssessmentForm } from '@/components/forms/LeadAssessmentForm';

export const metadata = {
  title: 'Technology & Physical AI Operating Architecture | PERFAI',
  description:
    'Understand the Senatria Physical AI operating architecture: Perceive, Analyse, Optimise, Control, Verify, and Learn. Non-invasive integration with hard safety guardrails.',
};

export default function TechnologyPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-enterprise-dark text-white py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase font-bold text-tealaccent tracking-wider font-mono">
              Operating Methodology
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight">
              Physical AI: Moving Beyond Static Building Analytics
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Traditional building software merely visualizes graphs and triggers alerts. Senatria's Physical AI closes the loop: continuously learning thermodynamic models and executing verified setpoint adjustments directly on physical infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed 6 Stages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold text-techblue tracking-wider">
              The 6-Step Closed Loop
            </span>
            <h2 className="font-heading text-3xl font-bold text-textdark mt-2">
              Continuous Physics-Informed Intelligence
            </h2>
          </div>

          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-mist/50 border border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-3">
                <span className="text-xs font-mono font-bold text-tealaccent uppercase">Stage 01</span>
                <h3 className="font-heading text-2xl font-bold text-textdark mt-1">Perceive</h3>
              </div>
              <div className="md:col-span-9 text-sm text-slatecustom leading-relaxed">
                Telemetry is captured non-invasively at high frequency (1-minute to 5-minute intervals) directly from existing BMS controllers, industrial PLCs, and dedicated sub-meters via BACnet/IP, Modbus, MQTT, or OPC-UA. External hyper-local weather feeds and forecasted occupancy profiles are synchronously ingested.
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-mist/50 border border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-3">
                <span className="text-xs font-mono font-bold text-techblue uppercase">Stage 02</span>
                <h3 className="font-heading text-2xl font-bold text-textdark mt-1">Analyse</h3>
              </div>
              <div className="md:col-span-9 text-sm text-slatecustom leading-relaxed">
                The ATRIA engine builds dynamic digital twins representing the thermodynamic behavior of chillers, primary/secondary pumps, cooling towers, and air handling units (AHUs). It calculates instantaneous Coefficient of Performance (COP), chilled water delta-T, and localized thermal loads.
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-mist/50 border border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-3">
                <span className="text-xs font-mono font-bold text-tealaccent uppercase">Stage 03</span>
                <h3 className="font-heading text-2xl font-bold text-textdark mt-1">Optimise</h3>
              </div>
              <div className="md:col-span-9 text-sm text-slatecustom leading-relaxed">
                Reinforcement learning models explore optimal setpoint combinations: chilled water supply temperature, condenser water temperature, cooling tower fan speeds, and static duct pressure. The system prioritizes thermal storage in building mass before peak electricity tariff periods.
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-mist/50 border border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-3">
                <span className="text-xs font-mono font-bold text-amber-500 uppercase">Stage 04</span>
                <h3 className="font-heading text-2xl font-bold text-textdark mt-1">Control</h3>
              </div>
              <div className="md:col-span-9 text-sm text-slatecustom leading-relaxed">
                Actions are passed through deterministic engineering safety guardrails. If a proposed setpoint violates minimum flow velocity, equipment ramp rates, or thermal comfort thresholds, it is automatically clipped. Approved setpoints are safely dispatched to existing BMS controllers.
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-mist/50 border border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-3">
                <span className="text-xs font-mono font-bold text-emerald-500 uppercase">Stage 05</span>
                <h3 className="font-heading text-2xl font-bold text-textdark mt-1">Verify</h3>
              </div>
              <div className="md:col-span-9 text-sm text-slatecustom leading-relaxed">
                The VERITAS engine continuously evaluates performance against an IPMVP Option C weather-normalized baseline. Savings calculations strictly decouple ambient weather extremes and operational shifts from true AI performance.
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-mist/50 border border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-3">
                <span className="text-xs font-mono font-bold text-purple-500 uppercase">Stage 06</span>
                <h3 className="font-heading text-2xl font-bold text-textdark mt-1">Learn</h3>
              </div>
              <div className="md:col-span-9 text-sm text-slatecustom leading-relaxed">
                Every actuation and verified outcome trains the localized thermodynamic models. As seasons transition and mechanical equipment ages, the agent automatically adapts to maintain peak operating efficiency.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Guardrails */}
      <section className="py-20 bg-deepnavy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs uppercase font-mono font-bold text-tealaccent tracking-wider">
                Industrial Safety & Governance
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold">
                Hard Engineering Guardrails Protect Your Multi-Million Dollar Assets
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                We understand that enterprise facilities cannot gamble with critical cooling infrastructure. Senatria Physical AI embeds defense-in-depth safety layers directly into the control agent.
              </p>

              <div className="space-y-3 pt-2 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tealaccent flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Rate-of-Change Limiting:</strong> Prevents rapid setpoint oscillations, protecting chiller compressors and Variable Frequency Drives (VFDs) from mechanical wear.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tealaccent flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Automatic Heartbeat Failsafe:</strong> If network connectivity to the cloud model drops, the on-site agent automatically falls back to native BMS setpoints within 90 seconds.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tealaccent flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Instant Manual Override:</strong> Facility engineers can disengage autonomous control at any time via a single physical or software toggle.
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-midnight p-8 rounded-2xl border border-white/10 shadow-2xl space-y-4">
              <div className="text-xs uppercase font-mono font-bold text-tealaccent">Integration Compatibility</div>
              <p className="text-xs text-slate-400">
                Works seamlessly on top of leading building management protocols with zero requirement to replace installed controllers or field sensors:
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-semibold text-white">
                <div className="p-3 bg-white/5 rounded-lg border border-white/5">BACnet / IP & MS/TP</div>
                <div className="p-3 bg-white/5 rounded-lg border border-white/5">Modbus RTU / TCP</div>
                <div className="p-3 bg-white/5 rounded-lg border border-white/5">OPC-UA / DA</div>
                <div className="p-3 bg-white/5 rounded-lg border border-white/5">MQTT Telemetry Feeds</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment CTA */}
      <section className="py-20 bg-mist/60 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadAssessmentForm
            title="Request a Technical Feasibility Architecture Review"
            subtitle="Send your facility parameters to explore how Physical AI interfaces with your building control network."
            source="technology_page_cta"
          />
        </div>
      </section>
    </div>
  );
}
