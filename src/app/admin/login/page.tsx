'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Cpu, Lock, Mail, ArrowRight, Loader2, AlertCircle } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@perfai.in');
  const [password, setPassword] = useState('perfai@2026');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Login failed. Please check credentials.');
      }

      router.push('/admin/dashboard');
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-midnight flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-deepnavy border border-white/10 rounded-2xl p-8 glass-dark shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-techblue to-tealaccent flex items-center justify-center mx-auto mb-4 shadow-lg shadow-tealaccent/20">
            <Cpu className="w-7 h-7 text-midnight" />
          </div>
          <h1 className="font-heading text-2xl font-bold text-white">PERFAI Admin Portal</h1>
          <p className="text-xs text-slate-400 mt-1">
            Enterprise Lead Management & Website Governance
          </p>
        </div>

        {error && (
          <div className="mb-6 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Authorised Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-midnight/80 border border-white/15 text-white text-sm focus:outline-none focus:border-tealaccent transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-midnight/80 border border-white/15 text-white text-sm focus:outline-none focus:border-tealaccent transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-techblue to-tealaccent text-midnight font-bold text-xs hover:opacity-95 shadow-lg shadow-tealaccent/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Verifying Authentication...</span>
              </>
            ) : (
              <>
                <span>Access Admin Operations</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-[11px] text-slate-400">
            Pre-configured demo accounts: <br />
            <code className="text-tealaccent">admin@perfai.in</code> (Super Admin) or <code className="text-tealaccent">sales@perfai.in</code>
          </p>
          <p className="text-[10px] text-slate-500 mt-1">Default Demo Key: perfai@2026</p>
        </div>
      </div>
    </div>
  );
}
