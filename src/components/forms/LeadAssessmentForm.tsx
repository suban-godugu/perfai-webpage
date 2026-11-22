'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle2, AlertCircle, ArrowRight, Loader2, ShieldCheck } from 'lucide-react';

interface LeadAssessmentFormProps {
  initialProduct?: string;
  initialIndustry?: string;
  source?: string;
  title?: string;
  subtitle?: string;
}

export const LeadAssessmentForm: React.FC<LeadAssessmentFormProps> = ({
  initialProduct = 'BuildingShield',
  initialIndustry = 'Commercial Real Estate',
  source = 'website_form',
  title = 'Request an Infrastructure Assessment',
  subtitle = 'Evaluate your facility for Physical AI optimization. Receive an engineering review and savings baseline assessment.'
}) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    country: 'India',
    industry: initialIndustry,
    productInterest: initialProduct,
    message: '',
    consent: false,
    websiteHp: '' // Honeypot
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.consent) {
      setError('You must agree to the data processing consent to proceed.');
      return;
    }

    // Bot check
    if (formData.websiteHp) {
      // Silently pretend success
      setReferenceId('PRF-SPAM-PREV');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit enquiry. Please check the inputs.');
      }

      setReferenceId(data.leadReference || 'CONFIRMED');
      router.push(`/thank-you?ref=${data.leadReference || 'CONFIRMED'}`);
    } catch (err: any) {
      setError(err.message || 'An error occurred while transmitting your request.');
    } finally {
      setLoading(false);
    }
  };

  if (referenceId) {
    return (
      <div className="bg-deepnavy/90 border border-tealaccent/30 rounded-2xl p-8 text-center glass-dark">
        <CheckCircle2 className="w-16 h-16 text-tealaccent mx-auto mb-4" />
        <h3 className="font-heading text-2xl font-bold text-white mb-2">Assessment Request Received</h3>
        <p className="text-slate-300 text-sm mb-4">
          Thank you. Our engineering and commercial solutions team has logged your submission under reference number:
        </p>
        <div className="inline-block px-4 py-2 bg-midnight border border-tealaccent/40 rounded-lg text-tealaccent font-mono text-base font-bold mb-6">
          {referenceId}
        </div>
        <p className="text-xs text-slate-400">
          A confirmation summary has been registered, and a representative will review your facility profile within one business day.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-deepnavy/80 border border-white/10 rounded-2xl p-6 sm:p-8 glass-dark shadow-2xl">
      <div className="mb-6">
        <div className="flex items-center gap-2 text-tealaccent text-xs font-semibold uppercase tracking-wider mb-2">
          <ShieldCheck className="w-4 h-4" />
          <span>Enterprise Engineering Evaluation</span>
        </div>
        <h3 className="font-heading text-2xl font-bold text-white">{title}</h3>
        <p className="text-sm text-slate-300 mt-1">{subtitle}</p>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Anti-spam hidden field */}
        <input
          type="text"
          name="websiteHp"
          value={formData.websiteHp}
          onChange={(e) => setFormData({ ...formData, websiteHp: e.target.value })}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Full Name <span className="text-tealaccent">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Rahul Sharma"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg bg-midnight/80 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-tealaccent transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Corporate / Business Email <span className="text-tealaccent">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="name@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg bg-midnight/80 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-tealaccent transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Company / Organisation <span className="text-tealaccent">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Company name"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg bg-midnight/80 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-tealaccent transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg bg-midnight/80 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-tealaccent transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Country <span className="text-tealaccent">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg bg-midnight/80 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-tealaccent transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Industry Vertical <span className="text-tealaccent">*</span>
            </label>
            <select
              value={formData.industry}
              onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg bg-midnight/80 border border-white/15 text-white text-sm focus:outline-none focus:border-tealaccent transition-colors"
            >
              <option value="Commercial Real Estate">Commercial Real Estate</option>
              <option value="Hospitality">Hospitality & Hotels</option>
              <option value="Data Centres">Data Centres</option>
              <option value="Industrial Facilities">Industrial / Manufacturing</option>
              <option value="Energy & Utilities">Energy & Utilities</option>
              <option value="Property Portfolios">Property Portfolios / REITs</option>
              <option value="Other">Other Enterprise Infrastructure</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Primary Solution Interest <span className="text-tealaccent">*</span>
            </label>
            <select
              value={formData.productInterest}
              onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg bg-midnight/80 border border-white/15 text-white text-sm focus:outline-none focus:border-tealaccent transition-colors"
            >
              <option value="BuildingShield">BuildingShield (HVAC / BMS Optimization)</option>
              <option value="ATRIA">ATRIA Physical AI Platform</option>
              <option value="GridShield">GridShield (Grid & Flexibility)</option>
              <option value="ComputeShield">ComputeShield (Capacity Compute)</option>
              <option value="VERITAS">VERITAS (Value Verification)</option>
              <option value="Comprehensive Evaluation">Full Portfolio Evaluation</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">
            Infrastructure & Requirement Details
          </label>
          <textarea
            rows={3}
            placeholder="Briefly describe your building type, chiller plant capacity, current BMS vendor, or primary efficiency objective..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg bg-midnight/80 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-tealaccent transition-colors resize-none"
          />
        </div>

        <div className="flex items-start gap-3 pt-2">
          <input
            type="checkbox"
            id="consent"
            required
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-1 w-4 h-4 rounded border-white/20 bg-midnight text-tealaccent focus:ring-tealaccent"
          />
          <label htmlFor="consent" className="text-xs text-slate-400 leading-relaxed">
            I agree to allow PERFAI to process my business contact details for technical evaluation, proposal generation, and commercial communication under the{' '}
            <a href="/privacy-policy" target="_blank" className="text-tealaccent underline hover:text-white">
              Privacy Policy
            </a>
            .
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-2 py-3.5 px-6 rounded-lg bg-gradient-to-r from-techblue to-tealaccent text-midnight font-heading font-semibold text-base hover:opacity-95 shadow-lg shadow-tealaccent/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Transmitting Evaluation Request...</span>
            </>
          ) : (
            <>
              <span>Submit Infrastructure Assessment Request</span>
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};
