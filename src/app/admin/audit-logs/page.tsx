'use client';

import React, { useEffect, useState } from 'react';
import { History, Shield, Loader2 } from 'lucide-react';

export default function AdminAuditLogsPage() {
  const [logs, setLogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/dashboard')
      .then((res) => res.json())
      .then((d) => {
        if (d && d.recentActivity) setLogs(d.recentActivity);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="p-8 space-y-6 max-w-7xl">
      <div className="pb-4 border-b border-white/10">
        <h1 className="font-heading text-2xl font-bold text-white">Immutable Security Audit Logs</h1>
        <p className="text-xs text-slate-400 mt-1">
          Historical record of administrative logins, lead submissions, status modifications, and system events
        </p>
      </div>

      <div className="bg-deepnavy/80 rounded-2xl border border-white/10 glass-dark overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-xs text-slate-400">Loading audit log stream...</div>
        ) : (
          <table className="w-full text-left text-xs">
            <thead className="bg-midnight/90 text-slate-400 uppercase tracking-wider font-mono border-b border-white/10">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Timestamp</th>
                <th className="py-3.5 px-4 font-semibold">Action</th>
                <th className="py-3.5 px-4 font-semibold">Entity Type</th>
                <th className="py-3.5 px-4 font-semibold">Entity ID</th>
                <th className="py-3.5 px-4 font-semibold">IP Address</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-white/5">
                  <td className="py-3.5 px-4 font-mono text-[11px] text-slate-400">
                    {new Date(log.createdAt).toLocaleString()}
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="font-mono text-xs font-bold text-tealaccent bg-tealaccent/10 px-2 py-0.5 rounded">
                      {log.action}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-white font-medium">{log.entityType}</td>
                  <td className="py-3.5 px-4 font-mono text-slate-400">{log.entityId || 'N/A'}</td>
                  <td className="py-3.5 px-4 font-mono text-slate-500">{log.ipAddress || '127.0.0.1'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
