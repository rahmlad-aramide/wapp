import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-2">
      <div className="flex flex-col items-center justify-center rounded-lg p-4">
        <div className="mb-4">
          <FaceFrownIcon className="w-40 text-gray-400" />
        </div>
        <h1 className="mb-4 text-center text-5xl font-bold text-gray-800">
          404
        </h1>
        <p className="mb-8 flex flex-col text-center text-gray-600 md:mx-auto md:max-w-lg">
          <strong>Not found:</strong> Cannot find the requested resource
        </p>
        <div className="flex space-x-4">
          <Link href="/">
            <button className="bg-primary-500 hover:bg-primary-400 rounded-md px-5 py-2 text-sm text-white transition-colors">
              Return Home
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
