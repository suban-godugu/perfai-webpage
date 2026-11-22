import React from 'react';

export const metadata = {
  title: 'Terms of Engagement | PERFAI',
  description: 'Terms of Engagement and Commercial Disclaimer for PERFAI.',
};

export default function TermsPage() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slatecustom leading-relaxed">
        <h1 className="font-heading text-4xl font-bold text-textdark">Terms of Engagement & Commercial Notice</h1>
        <p className="text-xs font-mono text-slate-400">Effective Date: November 2026 | Domain: perfai.in</p>

        <section className="space-y-3">
          <h2 className="font-heading text-2xl font-bold text-textdark">1. Commercial Brand Relationship</h2>
          <p className="text-sm">
            PERFAI is an independent commercial sales partner and reseller for SENATRIA. PERFAI markets, promotes, and resells Senatria Physical AI solutions. All proprietary technology, patents, trademarks, and core algorithms are the exclusive intellectual property of Senatria Inc.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-2xl font-bold text-textdark">2. Product Availability Disclaimers</h2>
          <p className="text-sm">
            Product statuses displayed on perfai.in are categorized as Available, Pilot Pathway, Coming Soon, or Under Development. Pilot and roadmap solutions (such as GridShield and ComputeShield) do not represent generally available commercial offerings and are subject to specific pilot agreements and technical feasibility reviews.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-2xl font-bold text-textdark">3. Performance Estimates</h2>
          <p className="text-sm">
            Energy reduction estimates and modeled projections provided on the website or during preliminary audits represent theoretical and engineering simulations. Verified savings are governed by formal contractual agreements and IPMVP Option C measurement protocols.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-2xl font-bold text-textdark">4. Inquiries</h2>
          <p className="text-sm">
            Please direct legal and commercial terms inquiries to: <a href="mailto:leads@perfai.in" className="text-techblue underline">leads@perfai.in</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
