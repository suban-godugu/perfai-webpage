'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Cpu,
  Building2,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Zap,
  Server,
  LineChart,
  Calculator,
  Compass
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);
  const [industriesDropdown, setIndustriesDropdown] = useState(false);
  const pathname = usePathname();

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <>
      {/* Top Authorized Partner Strip */}
      <div className="bg-deepnavy/90 border-b border-white/10 text-slate-300 py-1.5 px-4 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tealaccent animate-pulse" />
            <span className="text-white">
              <strong>Authorised Senatria Partner</strong>
            </span>
            <span className="hidden sm:inline text-slate-400">
              — Physical AI for India & International Portfolios
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <Link href="/partner" className="text-tealaccent hover:underline flex items-center gap-1 font-semibold">
              How the Partnership Works <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full bg-midnight/95 backdrop-blur-md border-b border-white/10 text-white transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo & Brand */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-techblue to-tealaccent flex items-center justify-center shadow-lg shadow-tealaccent/20 group-hover:scale-105 transition-transform">
                <Cpu className="w-6 h-6 text-midnight" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-2xl font-bold tracking-tight text-white flex items-center gap-1.5">
                  PERFAI
                  <span className="text-[10px] font-sans font-medium px-1.5 py-0.5 rounded bg-white/10 text-tealaccent uppercase tracking-wider">
                    Physical AI
                  </span>
                </span>
                <span className="text-[10px] text-slatecustom tracking-wider uppercase font-semibold">
                  Authorised Senatria Partner
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
              <Link
                href="/"
                className={`transition-colors hover:text-tealaccent ${pathname === '/' ? 'text-tealaccent' : 'text-slate-200'}`}
              >
                Home
              </Link>

              <Link
                href="/platform"
                className={`transition-colors hover:text-tealaccent ${pathname === '/platform' ? 'text-tealaccent' : 'text-slate-200'}`}
              >
                Platform (ATRIA)
              </Link>

              {/* Solutions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setSolutionsDropdown(true)}
                onMouseLeave={() => setSolutionsDropdown(false)}
              >
                <Link
                  href="/solutions"
                  className={`flex items-center gap-1.5 py-2 transition-colors hover:text-tealaccent ${
                    pathname?.startsWith('/solutions') ? 'text-tealaccent' : 'text-slate-200'
                  }`}
                >
                  Solutions <ChevronDown className="w-4 h-4 opacity-70" />
                </Link>

                {solutionsDropdown && (
                  <div className="absolute top-full left-0 w-80 p-3 bg-deepnavy border border-white/10 rounded-xl shadow-2xl glass-dark animate-fade-in flex flex-col gap-1">
                    <div className="px-3 py-1.5 text-[11px] font-bold text-slatecustom uppercase tracking-wider">
                      The Three Shields & Engine
                    </div>

                    <Link
                      href="/solutions/buildingshield"
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/5 transition-colors group"
                    >
                      <Building2 className="w-5 h-5 text-techblue mt-0.5 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="text-sm font-semibold text-white flex items-center gap-2">
                          BuildingShield
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                            Live
                          </span>
                        </div>
                        <div className="text-xs text-slate-400">15–25% Energy & Demand Reduction</div>
                      </div>
                    </Link>

                    <Link
                      href="/solutions/gridshield"
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/5 transition-colors group"
                    >
                      <Zap className="w-5 h-5 text-amber-400 mt-0.5 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="text-sm font-semibold text-white flex items-center gap-2">
                          GridShield
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                            Pilot
                          </span>
                        </div>
                        <div className="text-xs text-slate-400">Grid Flexibility & Demand Response</div>
                      </div>
                    </Link>

                    <Link
                      href="/solutions/computeshield"
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/5 transition-colors group"
                    >
                      <Server className="w-5 h-5 text-indigo-400 mt-0.5 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="text-sm font-semibold text-white flex items-center gap-2">
                          ComputeShield
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-slate-500/20 text-slate-300 border border-slate-500/30">
                            Soon
                          </span>
                        </div>
                        <div className="text-xs text-slate-400">Distributed Compute Capacity</div>
                      </div>
                    </Link>

                    <Link
                      href="/solutions/veritas"
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/5 transition-colors group border-t border-white/5 mt-1 pt-2"
                    >
                      <LineChart className="w-5 h-5 text-emerald-400 mt-0.5 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="text-sm font-semibold text-white">VERITAS Value Ledger</div>
                        <div className="text-xs text-slate-400">IPMVP Option C Attribution</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Industries Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIndustriesDropdown(true)}
                onMouseLeave={() => setIndustriesDropdown(false)}
              >
                <Link
                  href="/industries"
                  className={`flex items-center gap-1.5 py-2 transition-colors hover:text-tealaccent ${
                    pathname?.startsWith('/industries') ? 'text-tealaccent' : 'text-slate-200'
                  }`}
                >
                  Industries <ChevronDown className="w-4 h-4 opacity-70" />
                </Link>

                {industriesDropdown && (
                  <div className="absolute top-full -left-12 w-72 p-3 bg-deepnavy border border-white/10 rounded-xl shadow-2xl glass-dark animate-fade-in flex flex-col gap-1">
                    <div className="px-3 py-1.5 text-[11px] font-bold text-slatecustom uppercase tracking-wider">
                      Target Enterprise Sectors
                    </div>
                    <Link
                      href="/industries/commercial-real-estate"
                      className="p-2 rounded-lg hover:bg-white/5 text-sm text-slate-200 hover:text-white transition-colors"
                    >
                      Commercial Real Estate (Offices)
                    </Link>
                    <Link
                      href="/industries/hospitality"
                      className="p-2 rounded-lg hover:bg-white/5 text-sm text-slate-200 hover:text-white transition-colors"
                    >
                      Hospitality & Luxury Hotels
                    </Link>
                    <Link
                      href="/industries/data-centres"
                      className="p-2 rounded-lg hover:bg-white/5 text-sm text-slate-200 hover:text-white transition-colors"
                    >
                      Data Centres & Mission-Critical
                    </Link>
                    <Link
                      href="/industries/industrial"
                      className="p-2 rounded-lg hover:bg-white/5 text-sm text-slate-200 hover:text-white transition-colors"
                    >
                      Industrial & Cleanrooms
                    </Link>
                    <Link
                      href="/industries/energy-utilities"
                      className="p-2 rounded-lg hover:bg-white/5 text-sm text-slate-200 hover:text-white transition-colors"
                    >
                      Energy & Utilities
                    </Link>
                    <Link
                      href="/industries/property-portfolios"
                      className="p-2 rounded-lg hover:bg-white/5 text-sm text-slate-200 hover:text-white transition-colors"
                    >
                      Property Portfolios & REITs
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/case-studies"
                className={`transition-colors hover:text-tealaccent ${pathname?.startsWith('/case-studies') ? 'text-tealaccent' : 'text-slate-200'}`}
              >
                Evidence
              </Link>

              <Link
                href="/value-calculator"
                className={`flex items-center gap-1.5 transition-colors hover:text-tealaccent ${
                  pathname === '/value-calculator' ? 'text-tealaccent' : 'text-slate-200'
                }`}
              >
                <Calculator className="w-3.5 h-3.5 text-tealaccent" />
                <span>Calculator</span>
              </Link>

              <Link
                href="/partner"
                className={`transition-colors hover:text-tealaccent ${pathname === '/partner' ? 'text-tealaccent' : 'text-slate-200'}`}
              >
                Partner
              </Link>
            </nav>

            {/* Action Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-techblue to-tealaccent text-midnight font-semibold text-sm hover:opacity-95 shadow-lg shadow-tealaccent/20 transition-all hover:scale-[1.02]"
              >
                <span>Book Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-3">
              <Link
                href="/contact"
                className="px-3 py-1.5 rounded-lg bg-tealaccent text-midnight font-semibold text-xs"
              >
                Book Assessment
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-midnight border-b border-white/10 px-4 pt-4 pb-8 space-y-4 max-h-[85vh] overflow-y-auto">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-white hover:text-tealaccent"
            >
              Home
            </Link>
            <Link
              href="/platform"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-white hover:text-tealaccent"
            >
              Platform (ATRIA)
            </Link>
            <div className="space-y-2 border-l-2 border-white/10 pl-3">
              <div className="text-xs uppercase font-bold text-slatecustom tracking-wider">Solutions</div>
              <Link
                href="/solutions/buildingshield"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-slate-300 hover:text-tealaccent"
              >
                BuildingShield (Live)
              </Link>
              <Link
                href="/solutions/gridshield"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-slate-300 hover:text-tealaccent"
              >
                GridShield (Pilot)
              </Link>
              <Link
                href="/solutions/computeshield"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-slate-300 hover:text-tealaccent"
              >
                ComputeShield (Coming Soon)
              </Link>
            </div>

            <Link
              href="/value-calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-tealaccent"
            >
              NOI & Value Calculator
            </Link>
            <Link
              href="/case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-white hover:text-tealaccent"
            >
              Senatria Reference Evidence
            </Link>
            <Link
              href="/partner"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-white hover:text-tealaccent"
            >
              PerfAI + Senatria Partnership
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center block py-3 rounded-lg bg-gradient-to-r from-techblue to-tealaccent text-midnight font-semibold text-sm mt-4"
            >
              Book an Assessment
            </Link>
          </div>
        )}
      </header>
    </>
  );
};
