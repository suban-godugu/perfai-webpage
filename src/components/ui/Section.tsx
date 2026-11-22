import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = '',
  dark = false,
}) => {
  return (
    <section
      id={id}
      className={`py-20 sm:py-24 ${
        dark ? 'bg-midnight text-white border-y border-white/10' : 'bg-surface text-text'
      } ${className}`}
    >
      {children}
    </section>
  );
};
