import React from 'react';
import { EvidenceBadge, EvidenceLevel } from './EvidenceBadge';

interface StatTileProps {
  label: string;
  value: string;
  subtext?: string;
  evidence?: EvidenceLevel;
  className?: string;
}

export const StatTile: React.FC<StatTileProps> = ({
  label,
  value,
  subtext,
  evidence,
  className = '',
}) => {
  return (
    <div className={`p-5 rounded-card bg-surface border border-subtle shadow-sm flex flex-col justify-between ${className}`}>
      <div>
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="text-[11px] font-mono uppercase font-semibold text-text-muted">
            {label}
          </span>
          {evidence && <EvidenceBadge level={evidence} />}
        </div>
        <div className="text-2xl sm:text-3xl font-heading font-bold text-text tracking-tight">
          {value}
        </div>
      </div>
      {subtext && (
        <div className="text-xs text-text-muted mt-2 font-normal">
          {subtext}
        </div>
      )}
    </div>
  );
};
