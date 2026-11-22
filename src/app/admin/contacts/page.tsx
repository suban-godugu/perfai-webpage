'use client';

import React from 'react';
import { Building2, Mail, Phone, Globe } from 'lucide-react';

export default function AdminContactsPage() {
  const sampleContacts = [
    {
      id: 'c1',
      name: 'Vikram Singhania',
      title: 'VP of Engineering & Sustainability',
      company: 'Apex Commercial REIT',
      email: 'v.singhania@apexreit.com',
      phone: '+91 98200 12345',
      country: 'India',
    },
    {
      id: 'c2',
      name: 'Claire Beaumont',
      title: 'Director of Asset Operations',
      company: 'Grand Horizon Hospitality',
      email: 'c.beaumont@marriott-group-example.com',
      phone: '+44 20 7946 0912',
      country: 'United Kingdom',
    },
    {
      id: 'c3',
      name: 'Ananya Deshmukh',
      title: 'Head of Mission Critical Facilities',
      company: 'CloudHyper Data Centres',
      email: 'ananya@cloudhyper-dc.in',
      phone: '+91 99301 55432',
      country: 'India',
    },
  ];

  return (
    <div className="p-8 space-y-6 max-w-7xl">
      <div className="pb-4 border-b border-white/10">
        <h1 className="font-heading text-2xl font-bold text-white">Enterprise Customer Contacts</h1>
        <p className="text-xs text-slate-400 mt-1">
          Directory of verified key stakeholders, facility directors, and chief engineers
        </p>
      </div>

      <div className="bg-deepnavy/80 rounded-2xl border border-white/10 glass-dark overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="bg-midnight/90 text-slate-400 uppercase tracking-wider font-mono border-b border-white/10">
            <tr>
              <th className="py-3.5 px-4 font-semibold">Contact Name</th>
              <th className="py-3.5 px-4 font-semibold">Organization</th>
              <th className="py-3.5 px-4 font-semibold">Email</th>
              <th className="py-3.5 px-4 font-semibold">Phone</th>
              <th className="py-3.5 px-4 font-semibold">Country</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-slate-300">
            {sampleContacts.map((c) => (
              <tr key={c.id} className="hover:bg-white/5">
                <td className="py-3.5 px-4">
                  <div className="font-semibold text-white">{c.name}</div>
                  <div className="text-[11px] text-slate-400">{c.title}</div>
                </td>
                <td className="py-3.5 px-4 font-medium text-slate-200">{c.company}</td>
                <td className="py-3.5 px-4 text-techblue">{c.email}</td>
                <td className="py-3.5 px-4 font-mono text-slate-400">{c.phone}</td>
                <td className="py-3.5 px-4">{c.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
