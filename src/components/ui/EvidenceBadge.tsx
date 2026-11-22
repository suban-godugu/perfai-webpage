import React from 'react';

export type EvidenceLevel = 'MEASURED' | 'MODELLED' | 'PROJECTED' | 'INDICATIVE';

interface EvidenceBadgeProps {
  level: EvidenceLevel | string;
  className?: string;
}

export const EvidenceBadge: React.FC<EvidenceBadgeProps> = ({ level, className = '' }) => {
  const norm = level?.toUpperCase();

  switch (norm) {
    case 'MEASURED':
      return (
        <span
          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 ${className}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Measured
        </span>
      );
    case 'MODELLED':
      return (
        <span
          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase bg-blue-500/15 text-blue-400 border border-blue-500/30 ${className}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          Modelled
        </span>
      );
    case 'PROJECTED':
      return (
        <span
          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase bg-purple-500/15 text-purple-400 border border-purple-500/30 ${className}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
          Projected
        </span>
      );
    case 'INDICATIVE':
    default:
      return (
        <span
          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase bg-amber-500/15 text-amber-400 border border-amber-500/30 ${className}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          Indicative
        </span>
      );
  }
};

