'use client';

import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-9xl font-bold text-gray-900">404</h1>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Page Not Found</h2>
          <p className="mt-2 text-gray-600">
            Sorry, we couldn't find the page you're looking for.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-gray-500">
            The page might have been moved, deleted, or never existed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              href="/"
            >
              Go back home
            </Button>
            <Button
              variant="outline"
              onClick={() => window.history.back()}
            >
              Go back
            </Button>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-sm text-gray-500">
            Need help?{" "}
            <Link 
              href="/contact" 
              className="font-medium text-gray-900 hover:text-gray-700"
            >
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 