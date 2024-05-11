import WAppLogo from '@/app/ui/wapp-logo';
import Link from 'next/link';
import Image from 'next/image';
// import rwapp from '@/app/ui/rwapp.jpg'
import rwapp from '@/app/app-image.png'

export default function Page() {
  return (
    <main className="flex h-full min-h-screen flex-col bg-gray-50 p-4">
      <div className="flex h-24 w-full shrink-0 items-end rounded-xl bg-gradient-to-br from-primary-500 via-[#F19C69] via-80% to-[#EB4D4B] p-2 shadow-md md:h-52">
        <div className="flex h-full w-full shrink-0 items-center rounded-lg border-2 border-white/50 bg-white/30 backdrop-blur-md md:items-end md:p-8">
          <WAppLogo />
        </div>
      </div>
      <div className="mt-4 flex h-full overflow-y-auto flex-col md:flex-row items-center justify-center gap-4 md:h-[calc(100vh_-_224px)]">
        <div className="max-w-lg mb-8 md:mb-0 md:mr-8 text-center md:text-left">
          <h1 className="text-center md:text-left text-3xl md:text-5xl font-bold text-primary-500 mb-6">
            Stay Updated with Real-Time Weather
          </h1>
          <p className="text-center md:text-left text-lg md:text-xl mb-6">
            Join thousands who use Weather Forecasting App to stay ahead of the weather.
          </p>
          <Link href="/dashboard" className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
            Explore the Dashboard
          </Link>
        </div>
        <div className="max-w-md shadow-lg">
          <Image
            src={rwapp}
            alt="Weather App On Different screens"
            className='rounded-[38px] md:rounded-[52px]'
            width={600}
            height={600}
          />
        </div>
      </div>
    </main>
  );
}
