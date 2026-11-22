import React from 'react';
import { ProductAvailability } from '@/types';

interface AvailabilityBadgeProps {
  status: ProductAvailability | string;
  className?: string;
}

export const AvailabilityBadge: React.FC<AvailabilityBadgeProps> = ({ status, className = '' }) => {
  switch (status) {
    case 'AVAILABLE':
      return (
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 ${className}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Commercially Available
        </span>
      );
    case 'PILOT':
      return (
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-techblue/20 text-blue-300 border border-techblue/40 ${className}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-techblue" />
          Pilot Pathway
        </span>
      );
    case 'COMING_SOON':
      return (
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30 ${className}`}
        >
          Coming Soon
        </span>
      );
    case 'UNDER_DEVELOPMENT':
    default:
      return (
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-500/15 text-slate-300 border border-slate-500/30 ${className}`}
        >
          Next-Phase Roadmap
        </span>
      );
  }
};
