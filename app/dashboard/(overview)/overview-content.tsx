'use client';
import { inter } from '@/app/ui/fonts';
import 'react-select-search/style.css';
import { useEffect, useState } from 'react';
import DashboardSkeleton, {
  shimmer,
} from '@/app/ui/skeletons';
import Heading from '@/app/ui/dashboard/heading';
import CardWrapper from '@/app/ui/dashboard/card-wrapper';
import SunCard from '@/app/ui/dashboard/sun-card';
import OverviewCard from '@/app/ui/dashboard/overview-card';
import { useLoading } from '@/app/contexts/loading-context';
import { CurrentWeatherResponse, ForecastResponse } from '@/app/lib/types';
import {
  fetchForecastByCityName,
  fetchForecastByCoordinate,
  fetchWeatherByCityName,
  fetchWeatherByCoordinate,
} from '@/app/lib/data';
import {
  defaultCoordinates,
  useCoordinates,
} from '@/app/contexts/coordinate-context';
import { useNotification } from '@/app/contexts/notification-context';
import { useSearchParams } from 'next/navigation';
import TemperatureAreaChart from '@/app/ui/dashboard/temperature-area-chart';
import TemperaturePieChart from '@/app/ui/dashboard/temperature-pie-chart';

export default function OverviewContent() {
  const searchParams = useSearchParams();
  const [isClient, setIsClient] = useState(false);
  const { loading, setLoading } = useLoading();
  const [forecastData, setForecastData] = useState<ForecastResponse | null>(
    null,
  );
  const [weatherData, setWeatherData] = useState<CurrentWeatherResponse | null>(
    null,
  );
  const {
    coordinates: { lat, lon },
  } = useCoordinates();
  const { notify } = useNotification();

  useEffect(() => {
    setIsClient(true)
    async function fetchData() {
      const queries = searchParams.get('q')?.toString();
      if (queries) {
        try {
          const responseWeather = await fetchWeatherByCityName(queries);
          const responseForecast = await fetchForecastByCityName(queries);
          setWeatherData(responseWeather);
          setForecastData(responseForecast);
          setLoading(false);
        } catch (error: any) {
          console.error(error);
          notify(error.message, 'error');
        } finally {
          setLoading(false);
        }
      } else if (lat && lon) {
        try {
          const forecastResponse: ForecastResponse | null =
            await fetchForecastByCoordinate(lat, lon);
          const weatherResponse: CurrentWeatherResponse | null =
            await fetchWeatherByCoordinate(lat, lon);
          setForecastData(forecastResponse);
          setWeatherData(weatherResponse);
        } catch (error: any) {
          notify(error.message, 'error');
          console.error('Error fetching forecast data', error);
        } finally {
          setLoading(false);
        }
      } else {
        try {
          const forecastResponse: ForecastResponse | null =
            await fetchForecastByCoordinate(
              defaultCoordinates.lat,
              defaultCoordinates.lon,
            );
          const weatherResponse: CurrentWeatherResponse | null =
            await fetchWeatherByCoordinate(
              defaultCoordinates.lat,
              defaultCoordinates.lon,
            );
          setForecastData(forecastResponse);
          setWeatherData(weatherResponse);
        } catch (error: any) {
          notify(error.message, 'error');
          console.error('Error fetching forecast data', error);
        } finally {
          setLoading(false);
        }
      }
      setLoading(false);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchWeather = async () => {
    const queries = searchParams.get('q')?.toString();
    if (queries) {
      try {
        setLoading(true);
        const responseWeather = await fetchWeatherByCityName(queries);
        const responseForecast = await fetchForecastByCityName(queries);
        setWeatherData(responseWeather);
        setForecastData(responseForecast);
      } catch (error: any) {
        console.error(error);
        notify(error.message, 'error');
      } finally {
        setLoading(false);
      }
    } else {
      notify('Please enter a city to search', 'warn');
      setLoading(false);
    }
  };

  if(!isClient) return <DashboardSkeleton />

  return (
    <main>
      <Heading searchWeather={searchWeather} />
      <section className="grid grid-cols-12 gap-6">
        <section className="order-2 col-span-12 md:order-1 md:col-span-8">
          <CardWrapper weatherData={weatherData} />
          <div className="mt-6 flex w-full rounded-lg bg-white shadow-lg">
            <TemperatureAreaChart forecastData={forecastData} />
          </div>
        </section>
        <section className="relative order-1 col-span-12 h-full w-full overflow-x-hidden rounded-lg bg-white p-4 shadow-lg md:order-2 md:col-span-4">
          <OverviewCard weatherData={weatherData} />
          <TemperaturePieChart weatherData={weatherData} />
          {!loading ? (
            <h2
              className={`${inter.className} mt-4 text-sm font-medium text-[#373d3f]`}
            >
              Sunrise & Sunset
            </h2>
          ) : (
            <div className={`${shimmer} mt-4 h-4 w-1/2 bg-gray-200`}></div>
          )}
          <SunCard title="Sunrise" weatherData={weatherData} />
          <SunCard title="Sunset" weatherData={weatherData} />
        </section>
      </section>
    </main>
  );
}
