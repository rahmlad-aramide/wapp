import { CloudIcon } from '@heroicons/react/24/outline';
import { varela } from '@/app/ui/fonts';

export default function WAppLogo() {
  return (
    <div
      className={`${varela.className} flex w-full flex-col items-start space-x-2 leading-none text-white`}
    >
      <CloudIcon className="h-12 w-12 rounded-lg bg-white p-1.5 ml-2 mb-1.5 text-primary-500" />
      <p className="text-[44px] font-semibold">WApp</p>
    </div>
  );
}
