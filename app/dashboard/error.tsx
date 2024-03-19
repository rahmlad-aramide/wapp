'use client';

import { FaceFrownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full w-full flex-col items-center justify-center bg-gray-50">
      <div className="flex h-full flex-col items-center justify-center rounded-lg p-4">
        <div className="mb-4">
          <FaceFrownIcon className="w-40 text-gray-400" />
        </div>
        <h1 className="mb-4 text-center text-5xl font-bold text-gray-800">
          Oops!
        </h1>
        <p className="mb-8 flex flex-col text-center text-gray-600 md:mx-auto md:max-w-lg">
          <strong>An error has occured with the error message:</strong>{' '}
          {error.message}
        </p>
        <div className="flex space-x-4">
          <Link href="/">
            <button className="bg-primary-500 hover:bg-primary-400 rounded-md px-5 py-2 text-sm text-white transition-colors">
              Go Home
            </button>
          </Link>
          <button
            className="bg-primary-500 hover:bg-primary-400 rounded-md px-5 py-2 text-sm text-white transition-colors"
            onClick={() => reset()}
          >
            Try again
          </button>
        </div>
      </div>
    </main>
  );
}
