'use client';
import { Card } from './cards';
import { useWeatherData } from '@/app/contexts/weather-data-context';
import { useLoading } from '@/app/contexts/loading-context';
import { CurrentWeatherResponse } from '@/app/lib/types';
import { CardsSkeleton } from '../skeletons';

export default function CardWrapper({weatherData}:{weatherData: CurrentWeatherResponse|null}) {
  const { loading } = useLoading();
  // const { weatherData } = useWeatherData();

  const main = weatherData?.main;
  const temp = main?.temp || 0;
  const pressure = main?.pressure || 0;
  const humidity = main?.humidity || 0;
  const wind = weatherData?.wind;
  const speed = wind?.speed || 0;

  return (
    <>
      {loading ? (
        <CardsSkeleton />
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          <Card title="Temperature" value={temp} type="temperature" />
          <Card title="Humidity" value={humidity} type="humidity" />
          <Card title="Wind Speed" value={speed} type="wind" />
          <Card title="Pressure" value={pressure} type="pressure" />
        </div>
      )}
    </>
  );
}
