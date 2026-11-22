import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Download, FileText, CheckCircle2 } from 'lucide-react';
import { OFFICIAL_RESOURCES } from '@/lib/db/mock-data';
import { LeadAssessmentForm } from '@/components/forms/LeadAssessmentForm';

interface ResourcePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return OFFICIAL_RESOURCES.map((res) => ({
    slug: res.slug,
  }));
}

export function generateMetadata({ params }: ResourcePageProps) {
  const resource = OFFICIAL_RESOURCES.find((r) => r.slug === params.slug);
  if (!resource) return {};

  return {
    title: `${resource.title} | PERFAI Technical Library`,
    description: resource.description || '',
  };
}

export default function ResourceDetailPage({ params }: ResourcePageProps) {
  const resource = OFFICIAL_RESOURCES.find((r) => r.slug === params.slug);

  if (!resource) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full">
      <section className="bg-enterprise-dark text-white py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-tealaccent mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Resources</span>
          </Link>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold text-tealaccent bg-tealaccent/10 px-3 py-1 rounded-full border border-tealaccent/20">
              {resource.type}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              {resource.title}
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">{resource.description}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-mist/50 p-8 rounded-2xl border border-slate-200 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-techblue text-white flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-textdark">{resource.title}</h3>
                <div className="text-xs text-slatecustom mt-0.5">
                  Format: PDF | Size: {resource.fileSize} | Verified Senatria Architecture
                </div>
              </div>
            </div>

            <p className="text-sm text-slatecustom leading-relaxed">
              This document contains comprehensive engineering details, control equations, and deployment checklists. To request the complete PDF dossier, please enter your corporate details below.
            </p>

            <div className="pt-4 border-t border-slate-200">
              <LeadAssessmentForm
                title={`Request Download: ${resource.title}`}
                subtitle="Complete the form to receive the technical brief directly to your business email."
                source={`resource_download_${resource.slug}`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
