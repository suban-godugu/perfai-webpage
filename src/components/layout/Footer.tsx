'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Cpu, ShieldCheck, Mail, MapPin, Globe, ArrowUpRight, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const [region, setRegion] = useState<'INDIA' | 'INTERNATIONAL'>('INDIA');

  return (
    <footer className="bg-midnight border-t border-white/10 text-slate-300">
      {/* Top Banner with Technology Attribution */}
      <div className="border-b border-white/5 py-4 bg-deepnavy/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-xs text-slatecustom gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tealaccent" />
            <span>
              <strong>PERFAI</strong> is the <strong>Authorised Senatria Partner</strong> bringing Physical AI to Indian and international building portfolios.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://senatria.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-tealaccent hover:underline"
            >
              Official Senatria Reference (senatria.ai) <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-techblue to-tealaccent flex items-center justify-center">
                <Cpu className="w-5 h-5 text-midnight" />
              </div>
              <span className="font-heading text-2xl font-bold tracking-tight text-white">
                PERFAI
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Physical AI. Intelligent Infrastructure. Measurable Impact. Authorised reseller and channel partner for Senatria solutions.
            </p>

            {/* Region Switcher */}
            <div className="pt-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                Market Region Setting:
              </span>
              <div className="inline-flex items-center p-1 bg-white/5 border border-white/10 rounded-lg text-xs font-semibold">
                <button
                  onClick={() => setRegion('INDIA')}
                  className={`px-3 py-1 rounded transition-colors ${
                    region === 'INDIA' ? 'bg-tealaccent text-midnight' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  India (₹ INR)
                </button>
                <button
                  onClick={() => setRegion('INTERNATIONAL')}
                  className={`px-3 py-1 rounded transition-colors ${
                    region === 'INTERNATIONAL' ? 'bg-tealaccent text-midnight' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  International (US$)
                </button>
              </div>
            </div>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-tealaccent" />
                <a href="mailto:leads@perfai.in" className="hover:text-white transition-colors">
                  leads@perfai.in
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-techblue" />
                <span>{region === 'INDIA' ? '+91 (0) 80 4000 0000 (India Desk)' : '+1 (800) 555-PERFAI (Global Operations)'}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-slatecustom" />
                <span>
                  {region === 'INDIA'
                    ? 'India Hub: Bengaluru & Mumbai Enterprise Corridor'
                    : 'Global Inquiries: Serving APAC, Middle East & Europe'}
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-3">
            <div className="text-sm font-semibold uppercase tracking-wider text-white">
              Solutions
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/platform" className="hover:text-tealaccent transition-colors">
                  ATRIA Platform
                </Link>
              </li>
              <li>
                <Link href="/solutions/buildingshield" className="hover:text-tealaccent transition-colors flex items-center gap-2">
                  BuildingShield
                  <span className="text-[10px] px-1 rounded bg-tealaccent/20 text-tealaccent font-mono">Live</span>
                </Link>
              </li>
              <li>
                <Link href="/solutions/gridshield" className="hover:text-tealaccent transition-colors flex items-center gap-2">
                  GridShield
                  <span className="text-[10px] px-1 rounded bg-amber-500/20 text-amber-300 font-mono">Pilot</span>
                </Link>
              </li>
              <li>
                <Link href="/solutions/computeshield" className="hover:text-tealaccent transition-colors flex items-center gap-2">
                  ComputeShield
                  <span className="text-[10px] px-1 rounded bg-slate-500/20 text-slate-300 font-mono">Soon</span>
                </Link>
              </li>
              <li>
                <Link href="/solutions/veritas" className="hover:text-tealaccent transition-colors">
                  VERITAS Value Ledger
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Tools & Evidence */}
          <div className="space-y-3">
            <div className="text-sm font-semibold uppercase tracking-wider text-white">
              Tools & Evidence
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/value-calculator" className="hover:text-tealaccent transition-colors text-tealaccent font-semibold">
                  NOI & Savings Calculator
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-tealaccent transition-colors">
                  Senatria Reference Evidence
                </Link>
              </li>
              <li>
                <Link href="/partner" className="hover:text-tealaccent transition-colors">
                  Why PerfAI Partner
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-tealaccent transition-colors">
                  Readiness Checklist (PDF)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-tealaccent transition-colors">
                  Book Building Assessment
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Compliance & Admin */}
          <div className="space-y-3">
            <div className="text-sm font-semibold uppercase tracking-wider text-white">
              Compliance
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-tealaccent transition-colors">
                  About PerfAI
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-tealaccent transition-colors">
                  Privacy Policy (DPDP Act)
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-tealaccent transition-colors">
                  Terms of Engagement
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-tealaccent transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/admin/login" className="text-slate-500 hover:text-slate-300 transition-colors text-xs pt-2 block">
                  Private Staff Login
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} PERFAI. All rights reserved. Technology powered by Senatria.
          </div>
          <div className="text-slate-400 text-center md:text-right">
            Results shown are Senatria reference deployments and may not be representative of outcomes at your specific site.
          </div>
        </div>
      </div>
    </footer>
  );
};
