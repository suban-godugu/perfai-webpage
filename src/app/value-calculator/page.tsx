'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Calculator,
  TrendingDown,
  Zap,
  Building,
  ShieldCheck,
  ArrowRight,
  Download,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { EvidenceBadge } from '@/components/ui/EvidenceBadge';
import { LeadAssessmentForm } from '@/components/forms/LeadAssessmentForm';

export default function ValueCalculatorPage() {
  const [region, setRegion] = useState<'INDIA' | 'INTERNATIONAL'>('INDIA');
  const [assetType, setAssetType] = useState('Commercial Real Estate');
  const [floorArea, setFloorArea] = useState<number>(250000); // 250,000 sq ft
  const [annualSpend, setAnnualSpend] = useState<number>(region === 'INDIA' ? 35000000 : 450000); // INR 3.5 Cr or $450k
  const [showGate, setShowGate] = useState(false);

  // Currency formatting
  const isIndia = region === 'INDIA';
  const currencySymbol = isIndia ? '₹' : '$';

  // Savings math calculations (IPMVP-aligned indicative model)
  // HVAC typically accounts for 50-60% of total electrical load in commercial buildings
  const hvacPortion = annualSpend * 0.55;
  const lowSavings = hvacPortion * 0.15; // 15% reduction
  const highSavings = hvacPortion * 0.22; // 22% reduction
  const avgSavings = (lowSavings + highSavings) / 2;

  // Carbon abatement: ~0.82 kg CO2 per kWh in India, ~0.45 kg in international grids
  const estKwhSaved = isIndia ? (avgSavings / 9.5) : (avgSavings / 0.14);
  const carbonTons = Math.round((estKwhSaved * (isIndia ? 0.82 : 0.45)) / 1000);

  const formatCurrency = (val: number) => {
    if (isIndia) {
      if (val >= 10000000) {
        return `₹ ${(val / 10000000).toFixed(2)} Cr`;
      }
      return `₹ ${(val / 100000).toFixed(1)} Lakh`;
    }
    return `$ ${Math.round(val).toLocaleString()}`;
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-enterprise-dark text-white py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase font-bold text-tealaccent tracking-wider font-mono">
                Interactive Engineering Estimator
              </span>
              <EvidenceBadge level="INDICATIVE" />
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight">
              Physical AI Value & NOI Estimator
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Model indicative HVAC energy conservation, peak demand cost reduction, and carbon abatement for your commercial facility using Senatria thermodynamic benchmarks.
            </p>
          </div>
        </div>
      </section>

      {/* Main Calculator */}
      <section className="py-20 bg-mist/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Input Controls */}
            <div className="lg:col-span-6 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <h3 className="font-heading text-xl font-bold text-textdark flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-techblue" />
                  <span>Facility Parameters</span>
                </h3>
                {/* Region switch */}
                <div className="flex items-center p-1 bg-slate-100 rounded-lg text-xs font-semibold">
                  <button
                    onClick={() => {
                      setRegion('INDIA');
                      setAnnualSpend(35000000);
                    }}
                    className={`px-3 py-1 rounded-md transition-colors ${
                      region === 'INDIA' ? 'bg-white shadow text-techblue' : 'text-slate-500'
                    }`}
                  >
                    India (₹)
                  </button>
                  <button
                    onClick={() => {
                      setRegion('INTERNATIONAL');
                      setAnnualSpend(450000);
                    }}
                    className={`px-3 py-1 rounded-md transition-colors ${
                      region === 'INTERNATIONAL' ? 'bg-white shadow text-techblue' : 'text-slate-500'
                    }`}
                  >
                    Global (US$)
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Facility Sector
                </label>
                <select
                  value={assetType}
                  onChange={(e) => setAssetType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-techblue"
                >
                  <option value="Commercial Real Estate">Commercial Real Estate (Grade-A Office)</option>
                  <option value="Hospitality">Luxury Hotel & Hospitality</option>
                  <option value="Data Centres">Data Centre / Mission Critical</option>
                  <option value="Industrial">Industrial Manufacturing / Cleanroom</option>
                  <option value="Healthcare">Healthcare & Hospitals</option>
                  <option value="Retail Mall">Retail Mall & Mixed Use</option>
                </select>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-bold text-slate-700 uppercase tracking-wider">
                    Total Air-Conditioned Area
                  </span>
                  <span className="font-mono font-bold text-techblue">{floorArea.toLocaleString()} sq. ft.</span>
                </div>
                <input
                  type="range"
                  min={50000}
                  max={2000000}
                  step={25000}
                  value={floorArea}
                  onChange={(e) => setFloorArea(Number(e.target.value))}
                  className="w-full accent-techblue cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>50k sq. ft.</span>
                  <span>1M sq. ft.</span>
                  <span>2M sq. ft.</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-bold text-slate-700 uppercase tracking-wider">
                    Annual Electricity Expenditure
                  </span>
                  <span className="font-mono font-bold text-tealaccent text-sm">
                    {formatCurrency(annualSpend)}
                  </span>
                </div>
                <input
                  type="range"
                  min={isIndia ? 5000000 : 100000}
                  max={isIndia ? 250000000 : 3000000}
                  step={isIndia ? 2500000 : 50000}
                  value={annualSpend}
                  onChange={(e) => setAnnualSpend(Number(e.target.value))}
                  className="w-full accent-tealaccent cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>{isIndia ? '₹ 50 Lakh' : '$ 100k'}</span>
                  <span>{isIndia ? '₹ 12.5 Cr' : '$ 1.5M'}</span>
                  <span>{isIndia ? '₹ 25 Cr' : '$ 3.0M'}</span>
                </div>
              </div>

              <div className="p-4 bg-mist rounded-xl text-xs text-slatecustom leading-relaxed">
                <strong>Model Note:</strong> This model assumes chillers and ventilation represent ~55% of baseline facility consumption. Actual savings require single-line diagram review and baseline calibration under IPMVP Option C.
              </div>
            </div>

            {/* Results Output */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-enterprise-dark text-white p-8 rounded-2xl border border-white/10 shadow-2xl relative">
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div>
                    <span className="text-xs uppercase font-mono text-tealaccent font-bold">
                      Indicative Value Synthesis
                    </span>
                    <h3 className="font-heading text-xl font-bold mt-0.5">Estimated Annual Optimization</h3>
                  </div>
                  <EvidenceBadge level="INDICATIVE" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
                  <div className="p-5 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-xs text-slate-400 uppercase font-bold">Estimated Cost Savings</div>
                    <div className="font-heading text-2xl font-bold text-tealaccent mt-1">
                      {formatCurrency(lowSavings)} – {formatCurrency(highSavings)}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">15% – 22% chiller energy reduction</div>
                  </div>

                  <div className="p-5 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-xs text-slate-400 uppercase font-bold">Scope 2 Carbon Abatement</div>
                    <div className="font-heading text-2xl font-bold text-white mt-1">
                      ~{carbonTons.toLocaleString()} tCO2e
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">Annual greenhouse gas avoidance</div>
                  </div>

                  <div className="p-5 bg-white/5 rounded-xl border border-white/10 sm:col-span-2">
                    <div className="text-xs text-slate-400 uppercase font-bold">Peak Demand Charge Protection</div>
                    <div className="font-heading text-xl font-bold text-techblue mt-1">
                      10% – 18% Peak Shaving
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      Thermal pre-cooling reduces expensive time-of-day peak kVA penalties
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <button
                    onClick={() => setShowGate(true)}
                    className="w-full py-3.5 px-6 rounded-lg bg-gradient-to-r from-techblue to-tealaccent text-midnight font-heading font-semibold text-sm hover:opacity-95 shadow-lg shadow-tealaccent/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Comprehensive PDF Feasibility Dossier</span>
                  </button>
                </div>
              </div>

              {showGate && (
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md">
                  <LeadAssessmentForm
                    title="Unlock Your Full Engineering PDF Report"
                    subtitle="Enter your business email to receive the personalized breakdown, methodology assumptions, and ROI payback schedules."
                    source="value_calculator_gate"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

