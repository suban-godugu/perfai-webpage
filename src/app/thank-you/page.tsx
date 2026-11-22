import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, ShieldCheck, Mail, Phone } from 'lucide-react';

export const metadata = {
  title: 'Enquiry Received | PERFAI',
  description: 'Thank you for your enquiry with PERFAI Technologies.',
};

export default function ThankYouPage({
  searchParams,
}: {
  searchParams: { ref?: string };
}) {
  const refCode = searchParams.ref || 'PRF-CONFIRMED';

  return (
    <div className="py-24 bg-mist/50 min-h-[75vh] flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white p-10 rounded-2xl border border-slate-200 shadow-xl space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h1 className="font-heading text-3xl font-bold text-textdark">
            Enquiry Successfully Submitted
          </h1>

          <p className="text-slatecustom text-sm leading-relaxed max-w-lg mx-auto">
            Thank you for reaching out to PERFAI. Your infrastructure assessment request has been recorded in our secure commercial pipeline.
          </p>

          <div className="p-4 bg-mist rounded-xl border border-slate-200 inline-block">
            <span className="text-xs text-slatecustom block font-medium">Your Lead Reference ID:</span>
            <span className="font-mono text-xl font-bold text-techblue">{refCode}</span>
          </div>

          <div className="pt-2 text-xs text-slatecustom leading-relaxed">
            Our enterprise solutions engineering team will review your parameters and respond within one business day. A confirmation email has been logged.
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-deepnavy text-white text-xs font-bold hover:bg-midnight transition-colors"
            >
              Return to Homepage
            </Link>
            <Link
              href="/case-studies"
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-slate-100 text-textdark text-xs font-semibold hover:bg-slate-200 transition-colors"
            >
              Explore Verified Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
