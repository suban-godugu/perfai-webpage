import React from 'react';
import Link from 'next/link';
import {
  Cpu,
  ShieldCheck,
  Zap,
  ArrowRight,
  Layers,
  Server,
  Activity,
  CheckCircle2
} from 'lucide-react';
import { EvidenceBadge } from '@/components/ui/EvidenceBadge';
import { AutonomyLadder } from '@/components/site/AutonomyLadder';
import { LeadAssessmentForm } from '@/components/forms/LeadAssessmentForm';

export const metadata = {
  title: 'ATRIA Physical AI Platform | PERFAI',
  description:
    'ATRIA: The underlying Physical AI operating platform developed by Senatria. Connects building truth, living digital twins, and autonomous control loops.',
};

export default function PlatformPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-enterprise-dark text-white py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-mono font-bold text-tealaccent tracking-wider">
                Senatria Core Engine
              </span>
              <EvidenceBadge level="MEASURED" />
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight">
              ATRIA: Intelligence for the Infrastructure You Already Run
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              ATRIA is the Physical AI operating system developed by Senatria. It constructs real-time digital twins of your physical assets, calculates thermodynamic states, and deploys autonomous RL agents to optimize performance.
            </p>
          </div>
        </div>
      </section>

      {/* Core Platform Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold text-techblue tracking-wider">
              Platform Architecture
            </span>
            <h2 className="font-heading text-3xl font-bold text-textdark mt-2">
              How ATRIA Transforms Physical Infrastructure
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-mist/50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-tealaccent/10 text-tealaccent flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-textdark">Living Digital Twin</h3>
              <p className="text-xs text-slatecustom leading-relaxed">
                Builds dynamic, physics-based simulations of chiller loops, thermal inertia, building envelope, and weather variables in real time.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-mist/50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-techblue/10 text-techblue flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-textdark">World Model & Agents</h3>
              <p className="text-xs text-slatecustom leading-relaxed">
                Reinforcement learning agents simulate thousands of control scenarios in the world model before dispatching the optimal trajectory.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-mist/50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-textdark">Edge & Cloud Gateway</h3>
              <p className="text-xs text-slatecustom leading-relaxed">
                Lightweight non-invasive agent reads BACnet/IP, Modbus, and OPC-UA. Features an automatic 90-second heartbeat failsafe.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-mist/50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-textdark">Governed Autonomy</h3>
              <p className="text-xs text-slatecustom leading-relaxed">
                Deterministic mechanical safety boundaries prevent pump cavitation, compressor cycling, and temperature comfort drift.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Autonomy Ladder */}
      <section className="py-20 bg-midnight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AutonomyLadder />
        </div>
      </section>

      {/* Assessment CTA */}
      <section className="py-20 bg-mist/60 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadAssessmentForm
            title="Evaluate ATRIA Platform Integration"
            subtitle="Connect with our technical architects to evaluate BMS protocol compatibility and telemetry interfaces."
            source="platform_page_cta"
          />
        </div>
      </section>
    </div>
  );
}

