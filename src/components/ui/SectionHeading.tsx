import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  return (
    <div
      className={`max-w-3xl ${
        align === 'center' ? 'mx-auto text-center' : 'text-left'
      } mb-12 sm:mb-16 ${className}`}
    >
      {eyebrow && (
        <span className="text-xs uppercase font-mono font-bold text-primary tracking-wider block mb-2">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-muted text-sm sm:text-base mt-3 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
