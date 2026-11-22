import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  showArrow?: boolean;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  href,
  children,
  variant = 'primary',
  className = '',
  showArrow = true,
}) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-input text-xs sm:text-sm font-heading font-semibold transition-all duration-200';

  let variantClasses = 'bg-gradient-to-r from-accent to-primary text-midnight shadow-lg hover:scale-[1.02]';
  if (variant === 'secondary') {
    variantClasses = 'bg-surface-2 text-text hover:bg-surface border border-subtle';
  } else if (variant === 'outline') {
    variantClasses = 'bg-transparent text-text border border-border hover:bg-surface/50';
  }

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses} ${className}`}>
      <span>{children}</span>
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </Link>
  );
};
