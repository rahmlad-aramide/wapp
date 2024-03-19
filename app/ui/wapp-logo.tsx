import { CloudIcon } from '@heroicons/react/24/outline';
import { varela } from '@/app/ui/fonts';

export default function WAppLogo() {
  return (
    <div
      className={`${varela.className} flex w-full items-center space-x-2 leading-none text-white md:flex-col md:items-start md:space-x-0 lg:space-x-2`}
    >
      <CloudIcon className="ml-2 h-12 w-12 rounded-lg bg-white p-1.5 text-primary-500 md:mb-1.5 md:ml-0 md:scale-75 lg:ml-2 lg:scale-100" />
      <p className="block text-[44px] font-semibold md:hidden lg:block">WApp</p>
    </div>
  );
}
