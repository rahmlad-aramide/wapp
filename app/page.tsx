import WAppLogo from '@/app/ui/wapp-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { varela } from './ui/fonts';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50 p-4">
      <div className="flex h-20 w-full shrink-0 items-end rounded-xl bg-gradient-to-br from-primary-500 via-[#F19C69] via-80% to-[#EB4D4B] p-2 shadow-md md:h-52">
        <div className="flex h-20 w-full shrink-0 items-end rounded-lg border-2 border-white/50 bg-white/30 p-8 backdrop-blur-md md:h-full">
          <WAppLogo />
        </div>
      </div>
      <div className="mt-4 flex h-[calc(100vh_-_96px)] grow flex-col gap-4 md:h-[calc(100vh_-_224px)] md:flex-row">
        <div className="flex flex-col justify-center gap-6 overflow-y-auto rounded-lg bg-white px-6 py-10 shadow-md md:w-2/5 md:px-20">
          <p
            className={`${varela.className} text-xl text-gray-800 md:text-2xl md:leading-normal`}
          >
            <strong className="text-3xl">Welcome to WApp.</strong> <br /> A
            weather application, backed by{' '}
            <a
              href="https://openweathermap.org/api/"
              className="text-primary-500"
            >
              Open Weather Map API
            </a>
            , brought to you by{' '}
            <a href="https://devrahmlad.tech" className="text-primary-500">
              Abdrahman Oladimeji.
            </a>
          </p>
          <Link
            href="/dashboard"
            className="flex items-center gap-5 self-start rounded-lg bg-primary-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-400 md:text-base"
          >
            <span>Go to Dashboard</span>{' '}
            <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center rounded-lg bg-gray-50 bg-hero bg-cover bg-bottom p-6 shadow md:w-3/5 md:px-28 md:py-12">
          {/* Weather image gif */}
        </div>
      </div>
    </main>
  );
}
