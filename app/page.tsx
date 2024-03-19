import WAppLogo from '@/app/ui/wapp-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { varela } from './ui/fonts';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50 p-4">
      <div className="flex h-24 w-full shrink-0 items-end rounded-xl bg-gradient-to-br from-primary-500 via-[#F19C69] via-80% to-[#EB4D4B] p-2 shadow-md md:h-52">
        <div className="flex h-full w-full shrink-0 items-center rounded-lg border-2 border-white/50 bg-white/30 backdrop-blur-md md:items-end md:p-8">
          <WAppLogo />
        </div>
      </div>
      <div className="mt-4 flex h-full grow flex-col gap-4 md:h-[calc(100vh_-_224px)] md:flex-row">
        <div className="lg:1/2 flex flex-col justify-center gap-6 rounded-lg bg-white px-4 py-4 shadow-md md:w-3/5 md:overflow-y-auto md:px-10 md:py-6 lg:px-20 lg:py-10">
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
        <div className="lg:1/2 flex h-full min-h-[267px] items-center justify-center rounded-lg bg-gray-50 bg-hero bg-cover bg-bottom p-6 shadow md:w-1/2 md:px-28 md:py-12">
          {/* Weather image gif */}
        </div>
      </div>
    </main>
  );
}
