import React from 'react';

export const metadata = {
  title: 'Privacy Policy | PERFAI',
  description: 'PERFAI Enterprise Privacy Policy and Data Processing Terms.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slatecustom leading-relaxed">
        <h1 className="font-heading text-4xl font-bold text-textdark">Privacy Policy</h1>
        <p className="text-xs font-mono text-slate-400">Effective Date: November 2026 | Domain: perfai.in</p>

        <section className="space-y-3">
          <h2 className="font-heading text-2xl font-bold text-textdark">1. Overview</h2>
          <p className="text-sm">
            PERFAI Technologies (&quot;PERFAI&quot;, &quot;we&quot;, &quot;us&quot;) is committed to protecting the privacy of enterprise customers, facility owners, and visitors to our website (perfai.in). This Privacy Policy explains our collection, use, and safeguarding of business and personal information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-2xl font-bold text-textdark">2. Information We Collect</h2>
          <p className="text-sm">
            We collect information submitted through our assessment, demo, and contact forms, including:
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Full Name, Corporate Email Address, Phone Number</li>
            <li>Company Name, Country, Industry Vertical, Job Title</li>
            <li>Technical infrastructure descriptions (chiller tonnage, BMS protocols, energy metrics)</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-2xl font-bold text-textdark">3. Purpose of Processing</h2>
          <p className="text-sm">
            We process collected information strictly for:
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Evaluating engineering feasibility and preparing ROI baseline proposals.</li>
            <li>Communicating regarding Senatria Physical AI solutions and technical updates.</li>
            <li>Complying with applicable legal, accounting, and anti-fraud regulations.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-2xl font-bold text-textdark">4. Data Retention & Security</h2>
          <p className="text-sm">
            Personal and enterprise lead data is stored in enterprise-grade encrypted databases (PostgreSQL) with strict role-based access control. Public visitors cannot access administrative lead databases.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-2xl font-bold text-textdark">5. Contact Information</h2>
          <p className="text-sm">
            For questions regarding data privacy or to request data erasure, contact our data protection team at:{' '}
            <a href="mailto:leads@perfai.in" className="text-techblue underline">
              leads@perfai.in
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
