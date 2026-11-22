'use client';

import React, { useState } from 'react';
import { Eye, Lightbulb, CheckSquare, ShieldAlert, Cpu } from 'lucide-react';

export const AutonomyLadder: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState(3);

  const levels = [
    {
      level: 1,
      title: 'Observe',
      tagline: 'Telemetry Ingestion & Digital Twin',
      desc: 'High-frequency telemetry ingestion across legacy BMS, chillers, and sub-meters. Calibrates live thermodynamic twin with zero write actions.',
      icon: Eye,
      status: 'Read Only'
    },
    {
      level: 2,
      title: 'Recommend',
      tagline: 'Advisory Optimization Insights',
      desc: 'Physics-informed AI identifies static pressure, chiller sequencing, and thermal storage opportunities, outputting actionable advisory briefs.',
      icon: Lightbulb,
      status: 'Advisory'
    },
    {
      level: 3,
      title: 'Human-Approved',
      tagline: 'One-Click Supervised Execution',
      desc: 'Setpoints synthesized by the AI world model are presented in an operator queue. Facility engineers review and approve dispatch with one click.',
      icon: CheckSquare,
      status: 'Supervised'
    },
    {
      level: 4,
      title: 'Controlled Autonomy',
      tagline: 'Autonomous Closed-Loop Modulation',
      desc: 'Sub-minute closed-loop control executing setpoint optimization directly into BMS within hard-coded mechanical safety envelopes.',
      icon: ShieldAlert,
      status: 'Live Flagship'
    },
    {
      level: 5,
      title: 'Continuous Learning',
      tagline: 'Self-Adapting Multi-Asset Fleet',
      desc: 'Reinforcement learning agents continuously refine thermodynamic parameters across seasons, tenant load changes, and equipment degradation.',
      icon: Cpu,
      status: 'Self-Tuning'
    }
  ];

  return (
    <div className="bg-deepnavy p-8 rounded-2xl border border-white/10 glass-dark text-white">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/10 gap-4">
        <div>
          <span className="text-xs font-mono font-bold text-tealaccent uppercase tracking-wider">
            Governance Framework
          </span>
          <h3 className="font-heading text-2xl font-bold mt-1">
            The 5-Level Autonomy Ladder
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            You decide how far autonomy goes. Gradual, de-risked onboarding from passive observation to full closed-loop control.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400">Current Level Selected:</span>
          <span className="px-2.5 py-1 rounded-lg bg-tealaccent/20 text-tealaccent font-mono font-bold text-xs border border-tealaccent/30">
            Level 0{activeLevel}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 mt-6">
        {levels.map((item) => {
          const Icon = item.icon;
          const isSelected = activeLevel === item.level;

          return (
            <button
              key={item.level}
              onClick={() => setActiveLevel(item.level)}
              className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-techblue/20 border-tealaccent shadow-lg shadow-tealaccent/10'
                  : 'bg-white/5 border-white/5 hover:border-white/15'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-tealaccent' : 'text-slate-400'}`}>
                    0{item.level}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-slate-300">
                    {item.status}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-tealaccent' : 'text-slate-400'}`} />
                  <span className="font-heading font-bold text-base text-white">{item.title}</span>
                </div>
                <div className="text-[11px] font-semibold text-techblue mb-2">{item.tagline}</div>
                <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 text-[10px] text-slate-400 flex items-center justify-between">
                <span>Hard Guardrails</span>
                <span className="text-emerald-400 font-bold">Protected</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
