import React from 'react';
import Link from 'next/link';
import { Cpu, ShieldCheck, Mail, MapPin, Globe, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-midnight border-t border-white/10 text-slate-300">
      {/* Top Banner with Technology Attribution */}
      <div className="border-b border-white/5 py-4 bg-deepnavy/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-xs text-slatecustom gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tealaccent" />
            <span>
              <strong>PERFAI</strong> is a commercial sales partner & reseller for <strong>SENATRIA</strong> Physical AI technologies.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Serving Enterprise Clients in India & Internationally</span>
            <a
              href="https://senatria.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-tealaccent hover:underline"
            >
              Official Senatria Reference <ArrowUpRight className="w-3 h-3" />
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
              Physical AI. Intelligent Infrastructure. Measurable Impact. Bringing autonomous energy reduction, peak demand control, and continuous operational intelligence to complex facilities.
            </p>
            <div className="pt-2 space-y-2 text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-tealaccent" />
                <a href="mailto:leads@perfai.in" className="hover:text-white transition-colors">
                  leads@perfai.in
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-techblue" />
                <span>www.perfai.in</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-slatecustom" />
                <span>Commercial Operations: India · Global Resale Enquiries</span>
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
                <Link href="/solutions/atria" className="hover:text-tealaccent transition-colors">
                  ATRIA Platform
                </Link>
              </li>
              <li>
                <Link href="/solutions/building-shield" className="hover:text-tealaccent transition-colors flex items-center gap-2">
                  BuildingShield
                  <span className="text-[10px] px-1 rounded bg-tealaccent/20 text-tealaccent">Live</span>
                </Link>
              </li>
              <li>
                <Link href="/solutions/grid-shield" className="hover:text-tealaccent transition-colors">
                  GridShield (Pilot)
                </Link>
              </li>
              <li>
                <Link href="/solutions/compute-shield" className="hover:text-tealaccent transition-colors">
                  ComputeShield
                </Link>
              </li>
              <li>
                <Link href="/solutions/veritas" className="hover:text-tealaccent transition-colors">
                  VERITAS Intelligence
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div className="space-y-3">
            <div className="text-sm font-semibold uppercase tracking-wider text-white">
              Industries
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/industries/commercial-real-estate" className="hover:text-tealaccent transition-colors">
                  Commercial Real Estate
                </Link>
              </li>
              <li>
                <Link href="/industries/hospitality" className="hover:text-tealaccent transition-colors">
                  Hospitality & Luxury Hotels
                </Link>
              </li>
              <li>
                <Link href="/industries/data-centres" className="hover:text-tealaccent transition-colors">
                  Data Centres
                </Link>
              </li>
              <li>
                <Link href="/industries/industrial" className="hover:text-tealaccent transition-colors">
                  Industrial Facilities
                </Link>
              </li>
              <li>
                <Link href="/industries/energy-utilities" className="hover:text-tealaccent transition-colors">
                  Energy & Utilities
                </Link>
              </li>
              <li>
                <Link href="/industries/property-portfolios" className="hover:text-tealaccent transition-colors">
                  Property Portfolios & REITs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Compliance */}
          <div className="space-y-3">
            <div className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-tealaccent transition-colors">
                  About PERFAI
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-tealaccent transition-colors">
                  Physical AI Technology
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-tealaccent transition-colors">
                  Verified Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-tealaccent transition-colors">
                  Resources & Downloads
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-tealaccent transition-colors">
                  Contact Sales
                </Link>
              </li>
              <li>
                <Link href="/admin/login" className="text-slate-500 hover:text-slate-300 transition-colors text-xs pt-2 block">
                  Staff Admin Login
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
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Engagement
            </Link>
            <Link href="/cookie-policy" className="hover:text-slate-300 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
