import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Cpu, ArrowLeft } from 'lucide-react';
import { OFFICIAL_PRODUCTS } from '@/lib/db/mock-data';
import { AvailabilityBadge } from '@/components/ui/AvailabilityBadge';
import { LeadAssessmentForm } from '@/components/forms/LeadAssessmentForm';

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return OFFICIAL_PRODUCTS.map((prod) => ({
    slug: prod.slug,
  }));
}

export function generateMetadata({ params }: ProductDetailPageProps) {
  const product = OFFICIAL_PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) return {};

  return {
    title: product.metaTitle,
    description: product.metaDesc,
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = OFFICIAL_PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full">
      {/* Product Hero */}
      <section className="bg-enterprise-dark text-white py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-tealaccent mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Solutions</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-tealaccent bg-tealaccent/10 px-3 py-1 rounded-full border border-tealaccent/20">
                  {product.category}
                </span>
                <AvailabilityBadge status={product.availability} />
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white">
                {product.name}
              </h1>
              <p className="text-xl text-tealaccent font-medium">{product.headline}</p>
              <p className="text-slate-300 text-base leading-relaxed max-w-2xl">
                {product.description}
              </p>
            </div>

            <div className="lg:col-span-4 bg-deepnavy/90 border border-white/10 p-6 rounded-2xl glass-dark space-y-4">
              <div className="text-xs uppercase font-mono font-bold text-slate-300 tracking-wider">
                Engineering Specifications
              </div>
              <div className="space-y-3">
                {product.specs.map((spec, i) => (
                  <div key={i} className="text-xs border-b border-white/5 pb-2">
                    <span className="text-slate-400 block">{spec.label}</span>
                    <span className="text-white font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <a
                  href="#request-form"
                  className="w-full text-center block py-3 rounded-lg bg-gradient-to-r from-techblue to-tealaccent text-midnight font-bold text-xs hover:opacity-95 shadow-lg shadow-tealaccent/20"
                >
                  Request Technical Assessment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities & Architectural Value */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <span className="text-xs uppercase font-bold text-techblue tracking-wider">
                System Capabilities
              </span>
              <h2 className="font-heading text-3xl font-bold text-textdark">
                How {product.name} Transforms Facility Operations
              </h2>
              <p className="text-slatecustom text-base leading-relaxed">
                Operating directly within approved engineering constraints, {product.name} eliminates manual tuning delays and continuously seeks optimal thermodynamic states.
              </p>

              <div className="space-y-4 pt-2">
                {product.features.map((feat, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-mist/50 border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-tealaccent flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-textdark">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Overview */}
            <div className="bg-enterprise-dark p-8 rounded-2xl text-white border border-white/10 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="font-mono text-xs uppercase text-tealaccent font-bold">
                    Control Flow Architecture
                  </div>
                  <span className="text-xs text-slate-400">Senatria Certified</span>
                </div>

                <div className="space-y-4 text-xs text-slate-300">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                    <strong className="text-white block mb-1">1. Non-Invasive Data Capture</strong>
                    Sub-minute BACnet/IP telemetry read via lightweight edge or cloud gateway.
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                    <strong className="text-white block mb-1">2. Thermodynamic Twin Simulation</strong>
                    Real-time modeling factoring in ambient wet-bulb, thermal inertia, and occupancy.
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                    <strong className="text-white block mb-1">3. Guardrail Enforcement</strong>
                    Setpoints validated against minimum flow, delta-T limits, and safety boundaries.
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                    <strong className="text-white block mb-1">4. IPMVP Value Attribution</strong>
                    Continuous regression models by VERITAS isolate weather vs operational savings.
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 text-center text-xs text-slate-400">
                Official Technology Provider: Senatria Inc. | Commercial Delivery: PERFAI
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="request-form" className="py-20 bg-mist/60 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadAssessmentForm
            initialProduct={product.name}
            title={`Request an Assessment for ${product.name}`}
            subtitle={`Connect with our solutions engineering team to evaluate ${product.name} feasibility on your asset.`}
            source={`solution_page_${product.slug}`}
          />
        </div>
      </section>
    </div>
  );
}
