'use client';
import Image from 'next/image';
import sunset from '@/app/ui/icons/sunset.png';
import sunrise from '@/app/ui/icons/sunrise.png';
import {
  SunCardIconProps,
  SunCardProps,
  SunCardTimeProps,
} from '@/app/lib/types';
import { unixTo12HourTime, unixToTimeSince } from '@/app/lib/utils';
import { useWeatherData } from '@/app/contexts/weather-data-context';
import { useLoading } from '@/app/contexts/loading-context';
import { SunCardsSkeleton } from '../skeletons';

function SunCard({ title = 'Sunrise' }: SunCardProps) {
  const { weatherData } = useWeatherData();
  const { loading } = useLoading();
  const iconMap: SunCardIconProps = {
    Sunrise: sunrise,
    Sunset: sunset,
  };

  const timeMap: SunCardTimeProps = {
    Sunrise: weatherData?.sys.sunrise || 0,
    Sunset: weatherData?.sys.sunset || 0,
  };
  return (
    <>
      {loading ? (
        <SunCardsSkeleton />
      ) : (
        <section className="bg-gradient col-span-4 mb-2 mt-2.5 h-fit w-full rounded-lg bg-gradient-to-br from-primary-500 via-[#F19C69] via-40% to-[#EB4D4B] p-2 shadow-lg">
          <div className="flex items-center justify-between rounded border border-white/50 bg-white/30 px-3 py-2 text-gray-800">
            <div className="flex items-center">
              <div className="w-10">
                <Image
                  src={iconMap[title]}
                  quality={100}
                  width={32}
                  height={32}
                  alt={title}
                  loading="lazy"
                  priority={false}
                />
              </div>
              <div>
                <h2 className="text-sm">{title}</h2>
                <p className="text-xl font-medium">
                  {timeMap[title] ? unixTo12HourTime(timeMap[title]) : ''}
                </p>
              </div>
            </div>
            <p className="text-sm font-medium">
              {timeMap[title] ? unixToTimeSince(timeMap[title]) : ''}
            </p>
          </div>
        </section>
      )}
    </>
  );
}
export default SunCard;
