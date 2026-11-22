import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ShieldCardProps {
  title: string;
  category: string;
  status: 'Live' | 'Pilot' | 'Coming soon';
  description: string;
  href: string;
  metricsText?: string;
}

export const ShieldCard: React.FC<ShieldCardProps> = ({
  title,
  category,
  status,
  description,
  href,
  metricsText,
}) => {
  let statusBadge = (
    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
      Live
    </span>
  );

  if (status === 'Pilot') {
    statusBadge = (
      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30">
        Pilot
      </span>
    );
  } else if (status === 'Coming soon') {
    statusBadge = (
      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-500/15 text-slate-300 border border-slate-500/30">
        Coming soon
      </span>
    );
  }

  return (
    <div className="p-7 rounded-card bg-surface border border-subtle shadow-sm flex flex-col justify-between hover:border-primary/40 transition-all">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono font-semibold text-text-muted">{category}</span>
          {statusBadge}
        </div>
        <h3 className="font-heading text-2xl font-bold text-text">{title}</h3>
        {metricsText && (
          <div className="text-xs font-semibold text-accent mt-1">{metricsText}</div>
        )}
        <p className="text-xs sm:text-sm text-text-muted mt-3 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-8 pt-4 border-t border-border flex items-center justify-between">
        <Link
          href={href}
          className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
        >
          <span>Explore Architecture</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
