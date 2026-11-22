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
  ArrowUpRight
} from 'lucide-react';
import { AvailabilityBadge } from '@/components/ui/AvailabilityBadge';
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
              <span className="text-tealaccent">Physical AI Commercial Partner</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Unlock the Intelligence Hidden Within Your Infrastructure.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
              Bringing Physical AI to buildings, energy and infrastructure to unlock operational efficiency, measurable performance and new capacity.
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/request-assessment"
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-gradient-to-r from-techblue to-tealaccent text-midnight font-heading font-semibold text-base shadow-xl shadow-tealaccent/20 hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
              >
                <span>Request an Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#solutions"
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/15 text-white font-heading font-semibold text-base transition-colors flex items-center justify-center gap-2"
              >
                Explore Solutions
              </Link>
            </div>

            {/* Micro Highlights */}
            <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/10 text-left">
              <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                <div className="text-xs text-slate-400 uppercase font-semibold">Deployment</div>
                <div className="text-sm font-bold text-white mt-0.5">Non-Invasive</div>
                <div className="text-xs text-slate-400">No hardware rip & replace</div>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                <div className="text-xs text-slate-400 uppercase font-semibold">Control Loop</div>
                <div className="text-sm font-bold text-tealaccent mt-0.5">Sub-Minute</div>
                <div className="text-xs text-slate-400">Closed-loop optimization</div>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                <div className="text-xs text-slate-400 uppercase font-semibold">Verification</div>
                <div className="text-sm font-bold text-white mt-0.5">IPMVP Option C</div>
                <div className="text-xs text-slate-400">Independent financial math</div>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                <div className="text-xs text-slate-400 uppercase font-semibold">Safety</div>
                <div className="text-sm font-bold text-white mt-0.5">Hard Guardrails</div>
                <div className="text-xs text-slate-400">Operator manual overrides</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — INFRASTRUCTURE CHALLENGE */}
      <section className="py-20 bg-mist/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase font-bold text-techblue tracking-wider">
              The Reality of Built Environments
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-textdark mt-2">
              Why Traditional Infrastructure Leaves Value On The Table
            </h2>
            <p className="text-slatecustom text-base mt-3">
              Most commercial facilities rely on building management systems (BMS) that follow static schedules and reactive alarms. This creates systemic inefficiencies that cost enterprise operators millions annually.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-textdark">Fragmented Systems</h3>
              <p className="text-xs text-slatecustom mt-2 leading-relaxed">
                Siloed chillers, pumps, air handlers, and sub-meters run independently without coordinated real-time intelligence.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-textdark">Surging Energy Tariffs</h3>
              <p className="text-xs text-slatecustom mt-2 leading-relaxed">
                Escalating peak power demand charges and complex time-of-day tariffs penalize buildings during peak cooling hours.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-techblue flex items-center justify-center mb-4">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-textdark">Reactive Maintenance</h3>
              <p className="text-xs text-slatecustom mt-2 leading-relaxed">
                Equipment faults and degradation are only spotted after tenant complaints or catastrophic compressor breakdown occurs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center mb-4">
                <Gauge className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-textdark">Limited Portfolio Visibility</h3>
              <p className="text-xs text-slatecustom mt-2 leading-relaxed">
                Corporate leadership lacks standardized cross-asset insight, leading to guesswork in capital planning and ESG compliance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-tealaccent flex items-center justify-center mb-4">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-textdark">Trapped Capacity</h3>
              <p className="text-xs text-slatecustom mt-2 leading-relaxed">
                Conservative design margins leave up to 30% of cooling and electrical capacity stranded and unmonetized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 & 4 — ABOUT PERFAI & TECHNOLOGY PARTNER */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs uppercase font-bold text-techblue tracking-wider">
                Commercial Brand & Engineering Partnership
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-textdark">
                PERFAI: Bringing Senatria Physical AI to Enterprise Customers
              </h2>
              <p className="text-slatecustom text-base leading-relaxed">
                <strong>PERFAI</strong> is the customer-facing commercial sales partner and reseller for <strong>SENATRIA</strong>, a cutting-edge Physical AI technology company. We bridge the gap between breakthrough AI science and real-world commercial asset operations.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tealaccent flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-textdark">
                    <strong>Enterprise Commercial Reseller:</strong> We market, license, deploy, and support the entire Senatria solution portfolio across India and global markets.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tealaccent flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-textdark">
                    <strong>Underlying Technology by Senatria:</strong> Senatria engineers the underlying physical intelligence algorithms, physics-informed digital twins, and autonomous control agents.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tealaccent flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-textdark">
                    <strong>Accountable Commercial Delivery:</strong> We manage client discovery, on-site feasibility audits, financial savings modeling, and continuous account performance.
                  </p>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-techblue hover:text-tealaccent transition-colors"
                >
                  <span>Learn more about PERFAI & our engagement model</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Architecture Card */}
            <div className="bg-enterprise-dark p-8 rounded-2xl text-white border border-white/10 shadow-2xl relative">
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <span className="text-xs uppercase font-mono text-tealaccent tracking-wider font-bold">
                  PERFAI × SENATRIA Model
                </span>
                <span className="text-xs text-slate-400">Enterprise Framework</span>
              </div>
              <div className="py-6 space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs text-tealaccent uppercase font-bold">Client Layer</div>
                  <div className="text-sm font-bold text-white mt-1">Enterprise Asset Owners & REITs</div>
                  <div className="text-xs text-slate-400 mt-1">Commercial Real Estate · Hospitality · Data Centres</div>
                </div>
                <div className="flex justify-center">
                  <div className="w-0.5 h-6 bg-tealaccent/40" />
                </div>
                <div className="p-4 rounded-xl bg-techblue/20 border border-techblue/40">
                  <div className="text-xs text-blue-300 uppercase font-bold">Commercial Reseller Layer</div>
                  <div className="text-base font-bold text-white mt-1">PERFAI Commercial Operations</div>
                  <div className="text-xs text-slate-300 mt-1">Feasibility Audits · Contract Execution · Client SLA Governance</div>
                </div>
                <div className="flex justify-center">
                  <div className="w-0.5 h-6 bg-tealaccent/40" />
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs text-tealaccent uppercase font-bold">Technology & R&D Layer</div>
                  <div className="text-sm font-bold text-white mt-1">SENATRIA Physical AI Platform</div>
                  <div className="text-xs text-slate-400 mt-1">ATRIA Platform · BuildingShield · GridShield · VERITAS</div>
                </div>
              </div>
              <div className="pt-2 text-center text-[11px] text-slate-400">
                Non-exclusive commercial representation authorized for Indian and global enterprise engagements.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — SOLUTIONS PORTFOLIO */}
      <section id="solutions" className="py-24 bg-midnight text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold text-tealaccent tracking-wider">
              Senatria Product Portfolio
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
              The Three Shields & ATRIA Platform
            </h2>
            <p className="text-slate-300 text-base mt-4">
              A comprehensive suite of Physical AI software solutions engineered to perceive, optimize, and verify commercial infrastructure performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {OFFICIAL_PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                className="bg-deepnavy/90 border border-white/10 rounded-2xl p-7 flex flex-col justify-between glass-dark hover:border-tealaccent/50 transition-all hover:-translate-y-1 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-slate-400 font-semibold">{prod.category}</span>
                    <AvailabilityBadge status={prod.availability} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white group-hover:text-tealaccent transition-colors flex items-center justify-between">
                    {prod.name}
                  </h3>
                  <p className="text-xs font-medium text-slate-300 mt-1">{prod.headline}</p>
                  <p className="text-sm text-slate-400 mt-3 leading-relaxed">{prod.tagline}</p>

                  <div className="mt-6 pt-6 border-t border-white/10 space-y-2">
                    <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">Key Capabilities</div>
                    {prod.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-tealaccent mt-0.5">•</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href={`/solutions/${prod.slug}`}
                    className="text-xs font-bold text-tealaccent group-hover:underline flex items-center gap-1.5"
                  >
                    <span>Explore Solution Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href={`/request-assessment?product=${prod.slug}`}
                    className="text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded bg-white/5 border border-white/10"
                  >
                    Assess Asset
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — INDUSTRIES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold text-techblue tracking-wider">
              Target Sectors
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-textdark mt-2">
              Tailored Physical AI for High-Intensity Sectors
            </h2>
            <p className="text-slatecustom text-base mt-3">
              Every built environment possesses unique thermodynamic profiles and operational constraints. We deliver pre-trained agent configurations suited to your operational SLAs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {OFFICIAL_INDUSTRIES.map((ind) => (
              <div
                key={ind.id}
                className="p-7 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-heading text-xl font-bold text-textdark">{ind.name}</h3>
                  <div className="text-xs font-semibold text-techblue mt-1">{ind.heroHeadline}</div>
                  <p className="text-sm text-slatecustom mt-3 leading-relaxed">{ind.description}</p>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <div className="text-xs font-bold uppercase tracking-wider text-textdark mb-2">Key Outcome</div>
                    <p className="text-xs text-slatecustom leading-relaxed font-medium bg-mist/60 p-2.5 rounded-lg border border-slate-200">
                      {ind.outcomes[0]}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="text-sm font-bold text-techblue hover:text-tealaccent transition-colors flex items-center justify-between"
                  >
                    <span>Read Industry Profile</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — HOW PHYSICAL AI WORKS (Perceive -> Learn) */}
      <section className="py-24 bg-deepnavy text-white border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold text-tealaccent tracking-wider font-mono">
              Continuous Closed-Loop Methodology
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-2">
              How Physical AI Works: The 6-Stage Loop
            </h2>
            <p className="text-slate-300 text-base mt-3">
              Unlike static building analytics software that only shows passive charts, Senatria Physical AI actively closes the loop from ingestion to verified actuation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            <div className="bg-midnight/70 p-5 rounded-xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-tealaccent/20 text-tealaccent flex items-center justify-center font-mono font-bold text-sm mb-3">
                  01
                </div>
                <h4 className="font-heading text-lg font-bold text-white">Perceive</h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Collect high-frequency telemetry from existing BMS, chiller PLCs, meters, and ambient meteorological feeds.
                </p>
              </div>
            </div>

            <div className="bg-midnight/70 p-5 rounded-xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-techblue/20 text-blue-300 flex items-center justify-center font-mono font-bold text-sm mb-3">
                  02
                </div>
                <h4 className="font-heading text-lg font-bold text-white">Analyse</h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Understand real-time operating thermodynamic states, calculate COP efficiency curves, and pinpoint waste.
                </p>
              </div>
            </div>

            <div className="bg-midnight/70 p-5 rounded-xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-tealaccent/20 text-tealaccent flex items-center justify-center font-mono font-bold text-sm mb-3">
                  03
                </div>
                <h4 className="font-heading text-lg font-bold text-white">Optimise</h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Synthesize multi-variable setpoints using digital twins, taking occupancy schedules and thermal inertia into account.
                </p>
              </div>
            </div>

            <div className="bg-midnight/70 p-5 rounded-xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center font-mono font-bold text-sm mb-3">
                  04
                </div>
                <h4 className="font-heading text-lg font-bold text-white">Control</h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Safely write optimized setpoints back into the existing BMS within strict hard-coded engineering guardrails.
                </p>
              </div>
            </div>

            <div className="bg-midnight/70 p-5 rounded-xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono font-bold text-sm mb-3">
                  05
                </div>
                <h4 className="font-heading text-lg font-bold text-white">Verify</h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Statistically isolate and measure kWh savings and peak demand reductions using IPMVP Option C standards via VERITAS.
                </p>
              </div>
            </div>

            <div className="bg-midnight/70 p-5 rounded-xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center font-mono font-bold text-sm mb-3">
                  06
                </div>
                <h4 className="font-heading text-lg font-bold text-white">Learn</h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Continuously refine the building thermodynamic model based on actual performance drifts and seasonal variations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — BUSINESS VALUE (Net Profit, Net Zero, Net Positive) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold text-techblue tracking-wider">
              Quantifiable Enterprise Impact
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-textdark mt-2">
              The Triple Bottom Line of Autonomous Infrastructure
            </h2>
            <p className="text-slatecustom text-base mt-3">
              We focus on verified financial returns and demonstrable emissions abatement without relying on vague assertions or unsubstantiated claims.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-mist/50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-techblue/10 text-techblue flex items-center justify-center mb-6">
                  <TrendingDown className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-textdark">Net Profit</h3>
                <p className="text-sm font-semibold text-techblue mt-1">Direct EBITDA & NOI Enhancement</p>
                <p className="text-sm text-slatecustom mt-4 leading-relaxed">
                  Utility expenditure is typically the largest controllable operating expense in heavy facilities. By cutting chiller power by 12% to 20% and avoiding peak tariffs, savings flow directly to net operating income.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-textdark">
                Typical Payback: 6 to 12 months with zero capital equipment replacement.
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-mist/50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-tealaccent/10 text-tealaccent flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-textdark">Net Zero</h3>
                <p className="text-sm font-semibold text-tealaccent mt-1">Verified Scope 2 Carbon Abatement</p>
                <p className="text-sm text-slatecustom mt-4 leading-relaxed">
                  Eliminating waste at the source is the fastest and most cost-effective path to corporate decarbonization. Every conserved MWh translates into auditor-grade carbon abatement documentation.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-textdark">
                Audited via IPMVP Option C & GHG Protocol standards.
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-mist/50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-textdark">Net Positive</h3>
                <p className="text-sm font-semibold text-indigo-600 mt-1">Grid Flexibility & Compute Headroom</p>
                <p className="text-sm text-slatecustom mt-4 leading-relaxed">
                  Transforming facilities into active grid-responsive assets opens demand response revenues and releases electrical and cooling capacity for high-margin computing infrastructure.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-textdark">
                Next-generation pathway through GridShield & ComputeShield.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — CASE STUDIES & VERIFIED EVIDENCE */}
      <section className="py-24 bg-mist/60 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="max-w-2xl">
              <span className="text-xs uppercase font-bold text-techblue tracking-wider">
                Transparent Evidence
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-textdark mt-2">
                Verified Deployments vs Modelled Opportunities
              </h2>
              <p className="text-slatecustom text-base mt-2">
                We clearly separate live measured outcomes from projected pipeline opportunities. Trust is built on scientific transparency.
              </p>
            </div>
            <Link
              href="/case-studies"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-techblue hover:text-tealaccent"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {OFFICIAL_CASE_STUDIES.map((cs) => (
              <div
                key={cs.id}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-techblue">
                      {cs.industry} · {cs.location}
                    </span>
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${
                        cs.deploymentStatus === 'Live Deployment'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {cs.deploymentStatus}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-textdark">{cs.title}</h3>
                  <div className="text-xs text-slatecustom mt-2">
                    <strong>Asset Scope:</strong> {cs.assetScope}
                  </div>
                  <div className="text-xs text-slatecustom mt-1">
                    <strong>Measurement Window:</strong> {cs.measurementPeriod}
                  </div>

                  {/* Results Comparison Grid */}
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                      {cs.deploymentStatus === 'Live Deployment'
                        ? 'Actual Measured Performance'
                        : 'Contracted Baseline Status'}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {cs.actualResults.map((res, i) => (
                        <div key={i} className="p-3 bg-mist/50 rounded-lg border border-slate-200">
                          <div className="text-xl font-heading font-bold text-tealaccent">
                            {res.metric}
                          </div>
                          <div className="text-xs font-medium text-textdark mt-0.5">{res.value}</div>
                          {res.notes && (
                            <div className="text-[10px] text-slatecustom mt-1">{res.notes}</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {cs.modelledSavings && cs.modelledSavings.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Modelled Projections
                      </div>
                      <div className="space-y-1">
                        {cs.modelledSavings.map((mod, j) => (
                          <div key={j} className="text-xs text-slatecustom flex items-center justify-between">
                            <span>{mod.notes || 'Full potential'}:</span>
                            <span className="font-semibold text-textdark">{mod.metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="text-xs font-bold text-techblue hover:text-tealaccent flex items-center justify-between"
                  >
                    <span>Read Verification Methodology & Asset Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — CTA & ASSESSMENT FORM */}
      <section className="py-24 bg-enterprise-dark text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase font-bold text-tealaccent tracking-wider font-mono">
                Initiate Feasibility Evaluation
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Unlock More Value From Your Infrastructure.
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Connect with our commercial solutions engineering team. We evaluate your existing chillers, BMS telemetry, and utility tariff structure to calculate guaranteed feasibility and baseline savings.
              </p>

              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-tealaccent" />
                  <span>Zero disruption to existing building operations</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-tealaccent" />
                  <span>Compatible with Schneider, Siemens, Honeywell, and Johnson Controls</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-tealaccent" />
                  <span>Guaranteed engineering safety guardrails and manual override capability</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <LeadAssessmentForm
                title="Request an Infrastructure Assessment"
                subtitle="Fill out the technical enquiry form to connect with our enterprise solutions team."
                source="homepage_assessment_cta"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
