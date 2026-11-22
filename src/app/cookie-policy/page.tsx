import React from 'react';

export const metadata = {
  title: 'Cookie Policy | PERFAI',
  description: 'Cookie Policy for PERFAI Website (perfai.in).',
};

export default function CookiePolicyPage() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slatecustom leading-relaxed">
        <h1 className="font-heading text-4xl font-bold text-textdark">Cookie Policy</h1>
        <p className="text-xs font-mono text-slate-400">Effective Date: November 2026</p>

        <section className="space-y-3">
          <h2 className="font-heading text-2xl font-bold text-textdark">1. Use of Cookies</h2>
          <p className="text-sm">
            The PERFAI website uses essential cookies for session navigation, security tokens (CSRF protection), and anonymous analytics (Google Analytics 4) to monitor website traffic and technical stability.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-2xl font-bold text-textdark">2. Managing Preferences</h2>
          <p className="text-sm">
            You can configure your browser to block or alert you about cookies. Note that certain administrative dashboard functionalities require session cookies to authenticate authorised staff.
          </p>
        </section>
      </div>
    </div>
  );
}
