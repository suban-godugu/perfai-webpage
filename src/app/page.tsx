import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingDown,
  Layers,
  Activity,
  CheckCircle2,
  Cpu,
  Building2,
  Server,
  LineChart,
  BarChart3,
  Flame,
  Gauge,
  Compass,
  ArrowUpRight,
  HelpCircle,
  Calculator
} from 'lucide-react';
import { EvidenceBadge } from '@/components/ui/EvidenceBadge';
import { AvailabilityBadge } from '@/components/ui/AvailabilityBadge';
import { AutonomyLadder } from '@/components/site/AutonomyLadder';
import { LeadAssessmentForm } from '@/components/forms/LeadAssessmentForm';
import { OFFICIAL_PRODUCTS, OFFICIAL_INDUSTRIES, OFFICIAL_CASE_STUDIES } from '@/lib/db/mock-data';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden bg-enterprise-dark text-white pt-20 pb-28 border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(40,121,185,0.25),rgba(255,255,255,0))] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Partnership Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-slate-300">
              <span className="text-tealaccent font-bold">PERFAI</span>
              <span>×</span>
              <span className="text-slate-200">SENATRIA</span>
              <span className="text-slate-400">|</span>
              <span className="text-tealaccent">Authorised Channel Partner</span>
            </div>

            {/* Headline per Blueprint */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Make Every Building Perform Like Your Best Building.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
              PerfAI is the authorised Senatria partner bringing Physical AI to building portfolios in India and worldwide: local engineering assessment, deployment support, and verified continuous optimization.
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-gradient-to-r from-techblue to-tealaccent text-midnight font-heading font-semibold text-base shadow-xl shadow-tealaccent/20 hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
              >
                <span>Book a Building Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#how-it-works"
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/15 text-white font-heading font-semibold text-base transition-colors flex items-center justify-center gap-2"
              >
                See How It Works
              </Link>
            </div>

            {/* Stat Strip with Evidence Badges */}
            <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/10 text-left">
              <div className="p-3.5 rounded-lg bg-white/5 border border-white/5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Energy & Demand</span>
                  <EvidenceBadge level="MEASURED" />
                </div>
                <div className="text-xl font-bold text-tealaccent font-heading">15% – 25%</div>
                <div className="text-xs text-slate-400">Chiller & HVAC reduction</div>
              </div>

              <div className="p-3.5 rounded-lg bg-white/5 border border-white/5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Operating Efficiency</span>
                  <EvidenceBadge level="MODELLED" />
                </div>
                <div className="text-xl font-bold text-white font-heading">10% – 15%</div>
                <div className="text-xs text-slate-400">Continuous plant tuning</div>
              </div>

              <div className="p-3.5 rounded-lg bg-white/5 border border-white/5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">NOI Uplift</span>
                  <EvidenceBadge level="PROJECTED" />
                </div>
                <div className="text-xl font-bold text-techblue font-heading">4% – 15%</div>
                <div className="text-xs text-slate-400">Direct EBITDA contribution</div>
              </div>

              <div className="p-3.5 rounded-lg bg-white/5 border border-white/5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">BMS Integration</span>
                  <EvidenceBadge level="INDICATIVE" />
                </div>
                <div className="text-xl font-bold text-white font-heading">Zero Disruption</div>
                <div className="text-xs text-slate-400">Works with existing systems</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — INFRASTRUCTURE CHALLENGE */}
      <section className="py-20 bg-mist/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase font-bold text-techblue tracking-wider font-mono">
              The Reality of Built Environments
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-textdark mt-2">
              Design Promises. Operations Decide.
            </h2>
            <p className="text-slatecustom text-base mt-3">
              Buildings are designed for peak loads that occur less than 2% of the year. In day-to-day operations, static setpoints and siloed equipment leave massive energy and financial value on the table.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-textdark">Fragmented Systems</h3>
              <p className="text-xs text-slatecustom mt-2 leading-relaxed">
                Chillers, pumps, AHUs, and sub-meters operate in silos with no coordinated multi-variable intelligence.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-textdark">Hidden Demand Charges</h3>
              <p className="text-xs text-slatecustom mt-2 leading-relaxed">
                Brief peak cooling spikes create punishing monthly kVA tariff penalties that persist on utility bills.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-techblue flex items-center justify-center mb-4">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-textdark">Reactive Maintenance</h3>
              <p className="text-xs text-slatecustom mt-2 leading-relaxed">
                Equipment faults and degradation are only discovered after tenant complaints or compressor trips occur.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-tealaccent flex items-center justify-center mb-4">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-textdark">Unseen Capacity</h3>
              <p className="text-xs text-slatecustom mt-2 leading-relaxed">
                Up to 25% of electrical and cooling capacity is trapped and idle, unavailable for monetization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — HOW PHYSICAL AI WORKS (The 6-Step Loop) */}
      <section id="how-it-works" className="py-24 bg-deepnavy text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold text-tealaccent tracking-wider font-mono">
              Continuous Operating Loop
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-2">
              Perceive. Analyse. Optimise. Control. Verify. Learn.
            </h2>
            <p className="text-slate-300 text-base mt-3">
              Unlike passive building analytics dashboards, Senatria Physical AI actively closes the loop from sensor telemetry ingestion to safe mechanical actuation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            <div className="bg-midnight/70 p-5 rounded-xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-tealaccent/20 text-tealaccent flex items-center justify-center font-mono font-bold text-sm mb-3">01</div>
                <h4 className="font-heading text-lg font-bold text-white">Perceive</h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Ingests high-frequency telemetry across BMS, chillers, and ambient weather feeds.
                </p>
              </div>
            </div>

            <div className="bg-midnight/70 p-5 rounded-xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-techblue/20 text-blue-300 flex items-center justify-center font-mono font-bold text-sm mb-3">02</div>
                <h4 className="font-heading text-lg font-bold text-white">Analyse</h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Calculates real-time thermodynamic twin states, chiller COP curves, and thermal loads.
                </p>
              </div>
            </div>

            <div className="bg-midnight/70 p-5 rounded-xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-tealaccent/20 text-tealaccent flex items-center justify-center font-mono font-bold text-sm mb-3">03</div>
                <h4 className="font-heading text-lg font-bold text-white">Optimise</h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Synthesizes setpoint trajectories leveraging building thermal mass and weather forecasts.
                </p>
              </div>
            </div>

            <div className="bg-midnight/70 p-5 rounded-xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center font-mono font-bold text-sm mb-3">04</div>
                <h4 className="font-heading text-lg font-bold text-white">Control</h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Safely modulates setpoints directly on BMS within deterministic engineering boundaries.
                </p>
              </div>
            </div>

            <div className="bg-midnight/70 p-5 rounded-xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono font-bold text-sm mb-3">05</div>
                <h4 className="font-heading text-lg font-bold text-white">Verify</h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  VERITAS isolates energy and financial savings under IPMVP Option C standards.
                </p>
              </div>
            </div>

            <div className="bg-midnight/70 p-5 rounded-xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center font-mono font-bold text-sm mb-3">06</div>
                <h4 className="font-heading text-lg font-bold text-white">Learn</h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Continuously refines localized physics models across seasons and equipment aging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — PLATFORM TEASER (ATRIA) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs uppercase font-bold text-techblue tracking-wider font-mono">
                The Core Physical AI Engine
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-textdark">
                ATRIA: Intelligence for the Infrastructure You Already Run
              </h2>
              <p className="text-slatecustom text-base leading-relaxed">
                You do not need to replace your chillers, air handling units, or existing BMS. ATRIA is the software operating system that acts as an intelligent supervisor over what you already own.
              </p>
              <div className="space-y-3 pt-2 text-sm text-textdark">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tealaccent" />
                  <span>Works with Schneider, Siemens, Honeywell, and Johnson Controls</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tealaccent" />
                  <span>Sub-minute telemetry ingestion via lightweight edge agent</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tealaccent" />
                  <span>Deterministic safety bounds prevent equipment cycling stress</span>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  href="/platform"
                  className="inline-flex items-center gap-2 text-sm font-bold text-techblue hover:text-tealaccent transition-colors"
                >
                  <span>Explore the ATRIA platform architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-enterprise-dark p-8 rounded-2xl text-white border border-white/10 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="font-mono text-xs font-bold text-tealaccent">ATRIA World Model</span>
                <EvidenceBadge level="MEASURED" />
              </div>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-3 bg-white/5 rounded-lg">
                  <strong className="text-white block mb-0.5">Living Digital Twin:</strong>
                  Real-time thermal inertia and ambient wet-bulb correlation.
                </div>
                <div className="p-3 bg-white/5 rounded-lg">
                  <strong className="text-white block mb-0.5">APEX Master Orchestrator:</strong>
                  Coordinates chillers, variable speed pumps, and cooling tower fans simultaneously.
                </div>
                <div className="p-3 bg-white/5 rounded-lg">
                  <strong className="text-white block mb-0.5">VERITAS Value Ledger:</strong>
                  Independent weather-normalized financial reconciliation.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — THE THREE SHIELDS */}
      <section className="py-24 bg-midnight text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold text-tealaccent tracking-wider font-mono">
              Senatria Solution Portfolio
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
              Three Shields, One System
            </h2>
            <p className="text-slate-300 text-base mt-4">
              A phased pathway from live HVAC optimization to future grid flexibility and distributed compute monetization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* BuildingShield */}
            <div className="bg-deepnavy/90 border border-tealaccent/40 rounded-2xl p-7 flex flex-col justify-between glass-dark">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-slate-400 font-semibold">Commercial HVAC</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Live
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">BuildingShield</h3>
                <div className="text-xs font-semibold text-techblue mt-1">Continuous HVAC Optimization</div>
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  Live solution delivering 15–25% energy reduction and 10–15% operating efficiency across commercial real estate, hotels, and enterprise facilities.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10">
                <Link
                  href="/solutions/buildingshield"
                  className="text-xs font-bold text-tealaccent hover:underline flex items-center justify-between"
                >
                  <span>Explore BuildingShield</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* GridShield */}
            <div className="bg-deepnavy/90 border border-white/10 rounded-2xl p-7 flex flex-col justify-between glass-dark">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-slate-400 font-semibold">Energy & Flexibility</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Pilot
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">GridShield</h3>
                <div className="text-xs font-semibold text-amber-300 mt-1">Grid Flexibility & Demand Response</div>
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  Pilot pathway turning building thermal storage and battery assets into dispatchable grid response capacity to monetize demand flexibility.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10">
                <Link
                  href="/solutions/gridshield"
                  className="text-xs font-bold text-tealaccent hover:underline flex items-center justify-between"
                >
                  <span>Explore GridShield</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* ComputeShield */}
            <div className="bg-deepnavy/90 border border-white/10 rounded-2xl p-7 flex flex-col justify-between glass-dark">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-slate-400 font-semibold">Next Phase Infrastructure</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-500/20 text-slate-300 border border-slate-500/30">
                    Coming Soon
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">ComputeShield</h3>
                <div className="text-xs font-semibold text-indigo-300 mt-1">Distributed Compute on Released Headroom</div>
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  Forward roadmap opportunity mapping liberated electrical and cooling capacity to host distributed AI compute workloads.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10">
                <Link
                  href="/solutions/computeshield"
                  className="text-xs font-bold text-tealaccent hover:underline flex items-center justify-between"
                >
                  <span>Join Waitlist</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — OUTCOMES: TRIPLE NET VALUE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold text-techblue tracking-wider font-mono">
              Outcome Framework
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-textdark mt-2">
              Net Profit · Net Zero · Net Positive
            </h2>
            <p className="text-slatecustom text-base mt-3">
              Every performance claim is rigorously categorized under verified evidence standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-mist/50 border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-techblue/10 text-techblue flex items-center justify-center font-bold">
                  ₹
                </div>
                <EvidenceBadge level="MEASURED" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-textdark">Net Profit</h3>
              <div className="text-xs font-semibold text-techblue mt-1">EBITDA & NOI Uplift</div>
              <p className="text-sm text-slatecustom mt-3 leading-relaxed">
                Direct utility cost reduction flowing straight to net operating income with typical payback under 12 months.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-mist/50 border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-tealaccent/10 text-tealaccent flex items-center justify-center font-bold">
                  CO₂
                </div>
                <EvidenceBadge level="MODELLED" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-textdark">Net Zero</h3>
              <div className="text-xs font-semibold text-tealaccent mt-1">Scope 2 Carbon Abatement</div>
              <p className="text-sm text-slatecustom mt-3 leading-relaxed">
                Audited kilowatt-hour conservation translated into ESG compliance certificates aligned with GHG Protocol.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-mist/50 border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold">
                  +
                </div>
                <EvidenceBadge level="PROJECTED" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-textdark">Net Positive</h3>
              <div className="text-xs font-semibold text-purple-600 mt-1">Grid & Compute Headroom</div>
              <p className="text-sm text-slatecustom mt-3 leading-relaxed">
                Monetizing liberated capacity through demand response flexibility and co-located edge compute nodes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — EVIDENCE & CASE STUDIES */}
      <section className="py-24 bg-mist/60 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="max-w-2xl">
              <span className="text-xs uppercase font-bold text-techblue tracking-wider font-mono">
                Senatria Reference Evidence
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-textdark mt-2">
                Proof, Labelled Honestly
              </h2>
              <p className="text-slatecustom text-sm mt-2">
                Current reference deployments are from Senatria&apos;s Australian hotel portfolio and US trials. None are in India yet. We state deployment scope and methodology plainly.
              </p>
            </div>
            <Link
              href="/case-studies"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-techblue hover:text-tealaccent"
            >
              <span>View All Evidence Cards</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {OFFICIAL_CASE_STUDIES.map((cs) => (
              <div key={cs.id} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold font-mono text-techblue">
                      Senatria Reference: {cs.location}
                    </span>
                    <EvidenceBadge level={cs.deploymentStatus === 'Live Deployment' ? 'MEASURED' : 'MODELLED'} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-textdark">{cs.title}</h3>
                  <div className="text-xs text-slatecustom mt-2">
                    <strong>Asset Scope:</strong> {cs.assetScope}
                  </div>
                  <div className="text-xs text-slatecustom mt-1">
                    <strong>Period:</strong> {cs.measurementPeriod}
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-slate-100">
                    {cs.actualResults.map((r, i) => (
                      <div key={i} className="p-3 bg-mist/50 rounded-lg">
                        <div className="text-xl font-bold text-tealaccent font-heading">{r.metric}</div>
                        <div className="text-xs text-textdark">{r.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="text-xs font-bold text-techblue hover:text-tealaccent flex items-center justify-between"
                  >
                    <span>Read Verification Methodology</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — GOVERNANCE & AUTONOMY LADDER */}
      <section className="py-24 bg-midnight text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AutonomyLadder />
        </div>
      </section>

      {/* SECTION 9 — VALUE CALCULATOR TEASER */}
      <section className="py-20 bg-enterprise-dark text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-deepnavy/90 border border-tealaccent/30 glass-dark flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-tealaccent font-bold">
                <Calculator className="w-4 h-4" />
                <span>Estimate Your Opportunity</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold">
                Calculate Indicative NOI Uplift & Energy Conservation
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Input your facility square footage and annual utility spend to generate a preliminary thermodynamic savings model in ₹ INR or US$.
              </p>
            </div>
            <Link
              href="/value-calculator"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-techblue to-tealaccent text-midnight font-heading font-bold text-base hover:scale-105 transition-transform shadow-xl shadow-tealaccent/20 whitespace-nowrap"
            >
              Open Value Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 10 — FAQ (6 Non-Negotiable Questions) */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs uppercase font-bold text-techblue tracking-wider font-mono">
              Frequently Answered
            </span>
            <h2 className="font-heading text-3xl font-bold text-textdark mt-2">
              Common Questions About Physical AI Deployment
            </h2>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-mist/50 border border-slate-200">
              <h3 className="font-heading font-bold text-base text-textdark">
                1. Does PerfAI replace our existing BMS?
              </h3>
              <p className="text-xs text-slatecustom mt-2 leading-relaxed">
                No. ATRIA is non-invasive software that connects directly to your existing BMS (Schneider, Siemens, Honeywell, Johnson Controls) via BACnet or Modbus. It acts as an intelligent supervisor over your installed controllers.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-mist/50 border border-slate-200">
              <h3 className="font-heading font-bold text-base text-textdark">
                2. How much control does the AI have over our equipment?
              </h3>
              <p className="text-xs text-slatecustom mt-2 leading-relaxed">
                You control the autonomy level. You can start at Level 1 (Read-only observation) or Level 3 (Human-approved recommendations) before graduating to Level 4 (Controlled closed-loop autonomy). All actions respect hard engineering limits.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-mist/50 border border-slate-200">
              <h3 className="font-heading font-bold text-base text-textdark">
                3. How long does a typical deployment take?
              </h3>
              <p className="text-xs text-slatecustom mt-2 leading-relaxed">
                Typically 4 to 8 weeks with zero downtime. We conduct an initial telemetry feasibility check, connect our lightweight edge gateway, calibrate the digital twin over 30 days, and initiate controlled optimization.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-mist/50 border border-slate-200">
              <h3 className="font-heading font-bold text-base text-textdark">
                4. What about data security and telemetry safety?
              </h3>
              <p className="text-xs text-slatecustom mt-2 leading-relaxed">
                Telemetry streams are encrypted in transit via TLS 1.3. An automatic 90-second heartbeat failsafe immediately returns physical equipment to native BMS setpoints if network connectivity to the cloud model drops.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-mist/50 border border-slate-200">
              <h3 className="font-heading font-bold text-base text-textdark">
                5. Which buildings qualify for a feasibility assessment?
              </h3>
              <p className="text-xs text-slatecustom mt-2 leading-relaxed">
                Commercial office towers, luxury hotels, data centres, and industrial facilities with centralized chiller plants of 500 TR or greater and existing digital BMS connectivity.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-mist/50 border border-slate-200">
              <h3 className="font-heading font-bold text-base text-textdark">
                6. Are GridShield and ComputeShield commercially available today?
              </h3>
              <p className="text-xs text-slatecustom mt-2 leading-relaxed">
                BuildingShield is commercially available (Live). GridShield is in active pilot deployment trials, and ComputeShield is under development for our next-phase roadmap. We do not sell pilot or planned features as live products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11 — FINAL CTA: "Start With One Building." */}
      <section className="py-24 bg-enterprise-dark text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase font-bold text-tealaccent tracking-wider font-mono">
                Pilot Engagement
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Start With One Building.
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                De-risk your digital infrastructure journey. Select a single flagship commercial tower or hotel property to validate baseline energy savings and autonomous closed-loop control.
              </p>

              <div className="pt-2 space-y-3 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-tealaccent" />
                  <span>No upfront equipment replacement or capital expenditure</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-tealaccent" />
                  <span>IPMVP Option C weather-normalized baseline audit</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-tealaccent" />
                  <span>Dedicated regional engineering support in India & internationally</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <LeadAssessmentForm
                title="Book a Building Assessment"
                subtitle="Evaluate your chiller plant single-line diagram and BMS feasibility."
                source="homepage_final_cta"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
