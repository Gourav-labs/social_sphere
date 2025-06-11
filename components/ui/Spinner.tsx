import React from 'react';
import { cn } from '@/lib/utils';

export interface SpinnerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
  label?: string;
}

const sizes = {
  sm: 'h-4 w-4',
  md: 'h-8 w-8',
  lg: 'h-12 w-12',
};

const colors = {
  primary: 'border-gray-300 border-t-gray-900',
  secondary: 'border-gray-200 border-t-gray-600',
  white: 'border-white/30 border-t-white',
};

export function Spinner({ 
  className = '', 
  size = 'md', 
  color = 'primary',
  label = 'Loading...'
}: SpinnerProps) {
  return (
    <div className="inline-flex items-center" role="status">
      <span
        className={cn(
          'inline-block animate-spin rounded-full border-2',
          sizes[size],
          colors[color],
          className
        )}
        style={{ borderRightColor: 'transparent', borderBottomColor: 'transparent' }}
        aria-hidden="true"
      />
      {label && (
        <span className="sr-only">{label}</span>
      )}
    </div>
  );
} 