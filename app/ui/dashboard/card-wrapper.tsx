'use client';
import { Card } from './cards';
import { useCoordinates } from '@/app/contexts/coordinate-context';
import { useEffect } from 'react';
import { CurrentWeatherResponse } from '@/app/lib/types';
import { fetchWeatherByCoordinate } from '@/app/lib/data';
import { useWeatherData } from '@/app/contexts/weather-data-context';
import { useNotification } from '@/app/contexts/notification-context';
import { useLoading } from '@/app/contexts/loading-context';

export default function CardWrapper() {
  const { notify } = useNotification();
  const { loading, setLoading } = useLoading();
  const { weatherData, setWeatherData } = useWeatherData();
  const {
    coordinates: { lat, lon },
  } = useCoordinates();

  const main = weatherData?.main;
  const temp = main?.temp || 0;
  const pressure = main?.pressure || 0;
  const humidity = main?.humidity || 0;
  const wind = weatherData?.wind;
  const speed = wind?.speed || 0;

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response: CurrentWeatherResponse | null =
          await fetchWeatherByCoordinate(lat, lon);
        setWeatherData(response);
      } catch (error: any) {
        notify(error.message, 'error');
        console.error('Error fetching weather data', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, lon]);

  return (
    <>
      {loading ? (
        <CardWrapper />
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
