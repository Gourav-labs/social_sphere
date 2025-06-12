'use client';

import { Spinner } from '@/components/ui/Spinner';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 animate-fade-in">
      <div className="text-center space-y-4 animate-slide-up">
        <Spinner size="lg" className="animate-bounce-in" />
        <p className="text-gray-600 animate-fade-in-delayed">Loading...</p>
      </div>
    </div>
  );
} 