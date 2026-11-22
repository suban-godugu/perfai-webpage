import React from 'react';
import { Mail, Phone, MapPin, Globe, ShieldCheck } from 'lucide-react';
import { LeadAssessmentForm } from '@/components/forms/LeadAssessmentForm';

export const metadata = {
  title: 'Contact Commercial Solutions & Sales | PERFAI',
  description:
    'Contact PERFAI for enterprise Physical AI enquiries, Senatria product distribution, building energy assessments, and partnership discussions.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-enterprise-dark text-white py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase font-bold text-tealaccent tracking-wider font-mono">
              Commercial Enquiries & Sales
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight">
              Connect With the PERFAI Solutions Team
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Whether you represent an institutional REIT, a 5-star hotel group, an industrial facility, or a critical data centre, our solutions engineers are ready to evaluate your infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-bold text-textdark">
                  Commercial Headquarters & Engagement
                </h2>
                <p className="text-slatecustom text-sm mt-2 leading-relaxed">
                  PERFAI operates as a commercial sales partner and reseller for Senatria, servicing customers across India and international enterprise markets.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-mist/50 border border-slate-200">
                  <Mail className="w-5 h-5 text-tealaccent flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-textdark uppercase">Sales & Enquiries Email</div>
                    <a href="mailto:leads@perfai.in" className="text-sm font-semibold text-techblue hover:underline">
                      leads@perfai.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-mist/50 border border-slate-200">
                  <Globe className="w-5 h-5 text-techblue flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-textdark uppercase">Commercial Domain</div>
                    <div className="text-sm text-textdark">https://perfai.in</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-mist/50 border border-slate-200">
                  <MapPin className="w-5 h-5 text-slatecustom flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-textdark uppercase">Market Coverage</div>
                    <div className="text-sm text-textdark">India (Primary Hub) & Global Enterprise Enquiries</div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-deepnavy text-white text-xs space-y-2">
                <div className="font-mono text-tealaccent font-bold uppercase">Commercial Notice</div>
                <p className="text-slate-300 leading-relaxed">
                  PERFAI is an authorized commercial sales partner and reseller. For underlying patent and core platform scientific research, refer to our technology partner Senatria at{' '}
                  <a href="https://senatria.ai" target="_blank" rel="noopener noreferrer" className="text-tealaccent underline">
                    senatria.ai
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <LeadAssessmentForm
                title="Send an Enterprise Enquiry"
                subtitle="Provide your contact details and our solutions director will follow up within 24 hours."
                source="contact_page"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
