import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import WAppLogo from '@/app/ui/wapp-logo';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col border-r bg-gray-50">
      <div className="m-2 mb-3 flex h-20 justify-start rounded-md bg-gradient-to-br from-primary-500 via-[#F19C69] to-[#EB4D4B] p-2 md:h-fit">
        <Link
          className="flex h-full w-full items-end justify-start rounded border border-white/50 bg-white/30 py-4 backdrop-blur-md"
          href="/"
        >
          <div className="flex px-2">
            <WAppLogo />
          </div>
        </Link>
      </div>
      <div className="flex grow flex-row justify-between space-x-2 px-2 pb-2 md:flex-col md:space-x-0 md:space-y-3">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <Link
          href="/"
          className={
            'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-primary-500/10 hover:text-primary-500 md:flex-none md:justify-start md:p-2 md:px-3'
          }
        >
          <ArrowUturnLeftIcon className="w-6" />
          <p className="hidden md:block">Return</p>
        </Link>
      </div>
    </div>
  );
}
