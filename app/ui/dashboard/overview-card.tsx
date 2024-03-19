'use client';
import Image from 'next/image';
import BatteryStatus from './battery-status';
import { useWeatherData } from '@/app/contexts/weather-data-context';
import { getCountryName } from '@/app/lib/utils';
import CurrentTemperature from './current-temperature';
import { useLoading } from '@/app/contexts/loading-context';
import { OverviewCardSkeleton } from '../skeletons';
import { CurrentWeatherResponse } from '@/app/lib/types';

export default function OverviewCard({weatherData}: {weatherData: CurrentWeatherResponse|null}) {
  // const { weatherData } = useWeatherData();
  const { loading } = useLoading();

  const name = weatherData?.name;
  const country = weatherData?.sys.country || '';
  const temp = weatherData?.main.temp || 0;
  const icon = weatherData?.weather[0].icon || '';
  const description = weatherData?.weather[0].description || '';
  const main = weatherData?.weather[0]?.main || '';
  const altText =
    typeof main === 'string' && main ? main : 'Current weather condition icon';

  return (
    <>
      {loading ? (
        <OverviewCardSkeleton />
      ) : (
        <section className="relative flex flex-col border-b-2 pb-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">{name}</h2>
              <p className="text-sm font-medium">
                {country && getCountryName(country)}
              </p>
            </div>
            <BatteryStatus />
          </div>
          <div>
            <div>
              <Image
                src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
                quality={100}
                width={100}
                height={100}
                alt={altText}
                loading="lazy"
                priority={false}
                className="-mb-4 -ml-4"
              />
            </div>
            <div className="flex justify-between">
              <CurrentTemperature value={temp} />
              <div>
                <h3 className="my-auto text-right text-lg font-semibold">
                  {`${main}`}
                </h3>
                <p className="my-auto text-right text-sm font-medium capitalize">
                  {`${description}`}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
