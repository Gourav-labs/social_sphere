"use client";
import { useEffect } from "react";
import { Button } from '@/components/ui/Button';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 animate-fade-in">
      <div className="max-w-md w-full space-y-8 text-center animate-slide-up">
        <div className="animate-scale-in">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Something went wrong!</h2>
          <p className="mt-2 text-gray-600">
            {error.message || 'An unexpected error occurred'}
          </p>
        </div>

        <div className="space-y-4 animate-fade-in-delayed">
          <p className="text-sm text-gray-500">
            Don't worry, our team has been notified and we're working on it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              onClick={reset}
              className="animate-bounce-in"
            >
              Try again
            </Button>
            <Button
              variant="outline"
              href="/"
              className="animate-bounce-in"
            >
              Go back home
            </Button>
          </div>
        </div>

        {error.digest && (
          <div className="mt-8 animate-fade-in-delayed-2">
            <p className="text-xs text-gray-500">
              Error ID: {error.digest}
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 