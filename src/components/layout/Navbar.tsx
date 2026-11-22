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
  Layers,
  PhoneCall
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);
  const [industriesDropdown, setIndustriesDropdown] = useState(false);
  const pathname = usePathname();

  // If inside admin dashboard, render admin-specific layout handled separately
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-midnight/90 backdrop-blur-md border-b border-white/10 text-white transition-all">
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
                Partner for Senatria
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

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsDropdown(true)}
              onMouseLeave={() => setSolutionsDropdown(false)}
            >
              <button
                className={`flex items-center gap-1.5 py-2 transition-colors hover:text-tealaccent ${
                  pathname?.startsWith('/solutions') ? 'text-tealaccent' : 'text-slate-200'
                }`}
              >
                Solutions <ChevronDown className="w-4 h-4 opacity-70" />
              </button>

              {solutionsDropdown && (
                <div className="absolute top-full left-0 w-80 p-3 bg-deepnavy border border-white/10 rounded-xl shadow-2xl glass-dark animate-fade-in flex flex-col gap-1">
                  <div className="px-3 py-1.5 text-[11px] font-bold text-slatecustom uppercase tracking-wider">
                    Senatria Solution Portfolio
                  </div>
                  <Link
                    href="/solutions/atria"
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/5 transition-colors group"
                  >
                    <Cpu className="w-5 h-5 text-tealaccent mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-sm font-semibold text-white">ATRIA Platform</div>
                      <div className="text-xs text-slate-400">Autonomous Physical AI Engine</div>
                    </div>
                  </Link>

                  <Link
                    href="/solutions/building-shield"
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
                      <div className="text-xs text-slate-400">Continuous HVAC & BMS Optimization</div>
                    </div>
                  </Link>

                  <Link
                    href="/solutions/grid-shield"
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/5 transition-colors group"
                  >
                    <Zap className="w-5 h-5 text-amber-400 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-sm font-semibold text-white">GridShield</div>
                      <div className="text-xs text-slate-400">Energy & Peak Grid Flexibility</div>
                    </div>
                  </Link>

                  <Link
                    href="/solutions/compute-shield"
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/5 transition-colors group"
                  >
                    <Server className="w-5 h-5 text-indigo-400 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-sm font-semibold text-white">ComputeShield</div>
                      <div className="text-xs text-slate-400">Distributed Infrastructure Compute</div>
                    </div>
                  </Link>

                  <Link
                    href="/solutions/veritas"
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/5 transition-colors group border-t border-white/5 mt-1 pt-2"
                  >
                    <LineChart className="w-5 h-5 text-emerald-400 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-sm font-semibold text-white">VERITAS Intelligence</div>
                      <div className="text-xs text-slate-400">Financial Attribution & Verification</div>
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
              <button
                className={`flex items-center gap-1.5 py-2 transition-colors hover:text-tealaccent ${
                  pathname?.startsWith('/industries') ? 'text-tealaccent' : 'text-slate-200'
                }`}
              >
                Industries <ChevronDown className="w-4 h-4 opacity-70" />
              </button>

              {industriesDropdown && (
                <div className="absolute top-full -left-12 w-72 p-3 bg-deepnavy border border-white/10 rounded-xl shadow-2xl glass-dark animate-fade-in flex flex-col gap-1">
                  <div className="px-3 py-1.5 text-[11px] font-bold text-slatecustom uppercase tracking-wider">
                    Target Sectors
                  </div>
                  <Link
                    href="/industries/commercial-real-estate"
                    className="p-2 rounded-lg hover:bg-white/5 text-sm text-slate-200 hover:text-white transition-colors"
                  >
                    Commercial Real Estate
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
                    Data Centres & Critical Facilities
                  </Link>
                  <Link
                    href="/industries/industrial"
                    className="p-2 rounded-lg hover:bg-white/5 text-sm text-slate-200 hover:text-white transition-colors"
                  >
                    Industrial & Manufacturing
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
              href="/technology"
              className={`transition-colors hover:text-tealaccent ${pathname === '/technology' ? 'text-tealaccent' : 'text-slate-200'}`}
            >
              Technology
            </Link>

            <Link
              href="/case-studies"
              className={`transition-colors hover:text-tealaccent ${pathname?.startsWith('/case-studies') ? 'text-tealaccent' : 'text-slate-200'}`}
            >
              Case Studies
            </Link>

            <Link
              href="/resources"
              className={`transition-colors hover:text-tealaccent ${pathname?.startsWith('/resources') ? 'text-tealaccent' : 'text-slate-200'}`}
            >
              Resources
            </Link>

            <Link
              href="/about"
              className={`transition-colors hover:text-tealaccent ${pathname === '/about' ? 'text-tealaccent' : 'text-slate-200'}`}
            >
              About
            </Link>
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/request-assessment"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-techblue to-tealaccent text-midnight font-semibold text-sm hover:opacity-95 shadow-lg shadow-tealaccent/20 transition-all hover:scale-[1.02]"
            >
              <span>Request Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              href="/request-assessment"
              className="px-3 py-1.5 rounded-lg bg-tealaccent text-midnight font-semibold text-xs"
            >
              Assessment
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
          <div className="space-y-2 border-l-2 border-white/10 pl-3">
            <div className="text-xs uppercase font-bold text-slatecustom tracking-wider">Solutions</div>
            <Link
              href="/solutions/atria"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-slate-300 hover:text-tealaccent"
            >
              ATRIA Physical AI Platform
            </Link>
            <Link
              href="/solutions/building-shield"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-slate-300 hover:text-tealaccent"
            >
              BuildingShield (Live HVAC Optimization)
            </Link>
            <Link
              href="/solutions/grid-shield"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-slate-300 hover:text-tealaccent"
            >
              GridShield (Flexibility & Peak Shaving)
            </Link>
            <Link
              href="/solutions/compute-shield"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-slate-300 hover:text-tealaccent"
            >
              ComputeShield (Distributed Capacity)
            </Link>
            <Link
              href="/solutions/veritas"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-slate-300 hover:text-tealaccent"
            >
              VERITAS (Value & Measurement Intelligence)
            </Link>
          </div>

          <div className="space-y-2 border-l-2 border-white/10 pl-3">
            <div className="text-xs uppercase font-bold text-slatecustom tracking-wider">Industries</div>
            <Link
              href="/industries/commercial-real-estate"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-slate-300 hover:text-tealaccent"
            >
              Commercial Real Estate
            </Link>
            <Link
              href="/industries/hospitality"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-slate-300 hover:text-tealaccent"
            >
              Hospitality & Hotels
            </Link>
            <Link
              href="/industries/data-centres"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-slate-300 hover:text-tealaccent"
            >
              Data Centres & Critical Facilities
            </Link>
            <Link
              href="/industries/industrial"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-slate-300 hover:text-tealaccent"
            >
              Industrial & Manufacturing
            </Link>
            <Link
              href="/industries/energy-utilities"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-slate-300 hover:text-tealaccent"
            >
              Energy & Utilities
            </Link>
            <Link
              href="/industries/property-portfolios"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-slate-300 hover:text-tealaccent"
            >
              Property Portfolios & REITs
            </Link>
          </div>

          <Link
            href="/technology"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-white hover:text-tealaccent"
          >
            Technology & Control Loops
          </Link>
          <Link
            href="/case-studies"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-white hover:text-tealaccent"
          >
            Verified Case Studies
          </Link>
          <Link
            href="/resources"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-white hover:text-tealaccent"
          >
            Resources & Documentation
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-white hover:text-tealaccent"
          >
            About PERFAI
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-white hover:text-tealaccent"
          >
            Contact
          </Link>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <Link
              href="/request-assessment"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center block py-3 rounded-lg bg-gradient-to-r from-techblue to-tealaccent text-midnight font-semibold text-sm"
            >
              Request Infrastructure Assessment
            </Link>
            <Link
              href="/request-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center block py-3 rounded-lg bg-white/10 text-white font-semibold text-sm hover:bg-white/15"
            >
              Request Product Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
