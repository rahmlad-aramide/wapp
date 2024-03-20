'use client';
import { inter } from '@/app/ui/fonts';
import 'react-select-search/style.css';
import { useEffect, useState } from 'react';
import DashboardSkeleton, { shimmer } from '@/app/ui/skeletons';
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
  const [searching, setSearching] = useState<boolean>(false);
  const { loading, setLoading } = useLoading();
  const [forecastData, setForecastData] = useState<ForecastResponse | null>(
    null,
  );
  const [weatherData, setWeatherData] = useState<CurrentWeatherResponse | null>(
    null,
  );
  const {
    coordinates: { lat, lon },
    setCoordinates,
  } = useCoordinates();
  const { notify } = useNotification();

  async function fetchData(lat?: number, lon?: number) {
    const query = searchParams.get('q')?.toString();
    setLoading(true);
    try {
      const weatherPromise = query
        ? fetchWeatherByCityName(query)
        : lat && lon
        ? fetchWeatherByCoordinate(lat, lon)
        : null;
      const forecastPromise = query
        ? fetchForecastByCityName(query)
        : lat && lon
        ? fetchForecastByCoordinate(lat, lon)
        : null;
      const [weatherResponse, forecastResponse] = await Promise.all([
        weatherPromise,
        forecastPromise,
      ]);
      setWeatherData(weatherResponse);
      setForecastData(forecastResponse);
    } catch (error: Error | any) {
      let errorMessage = 'An error occurred.';
      if (!error.response) {
        errorMessage = 'Network error. Please check your internet connection.';
      } else if (error.response && error.response.status >= 400) {
        errorMessage = `Error fetching data: ${error.response.statusText}`;
      } else {
        console.error('Unexpected error:', error);
      }
      notify(errorMessage, 'error');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setIsClient(true);
    function getLocation() {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setCoordinates({ lat: latitude, lon: longitude });
            console.log('in get location', latitude, longitude);
          },
          (error) => {
            console.error('Error getting location:', error);
            console.log('in get location error', defaultCoordinates);
            setCoordinates(defaultCoordinates);
            notify(error.message, 'inform');
          },
        );
      } else {
        console.log('Geolocation is not supported by this browser.');
        notify('Geolocation is not supported by this browser.', 'inform');
      }
    }
    getLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (lat != null && lon != null) {
      console.log('in Effect', lat, lon);
      fetchData(lat, lon);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, lon]);

  const searchWeather = async () => {
    const query = searchParams.get('q')?.toString();
    if (query) {
      await fetchData();
    } else {
      notify('Please enter a city to search', 'warn');
    }
  };

  if (!isClient) return <DashboardSkeleton />;

  return (
    <main>
      <Heading
        searchWeather={searchWeather}
        searching={searching}
        setSearching={setSearching}
      />
      <section className="grid grid-cols-12 gap-6">
        <section className="order-2 col-span-12 md:order-1 md:col-span-8">
          <CardWrapper weatherData={weatherData} />
          <div className="mt-6 flex w-full rounded-lg bg-white shadow-lg">
            <TemperatureAreaChart forecastData={forecastData} />
          </div>
        </section>
        <section className="relative order-1 col-span-12 h-full w-full overflow-x-hidden rounded-lg bg-white p-4 shadow-lg md:order-2 md:col-span-4">
          <OverviewCard weatherData={weatherData} />
          <div className={!loading? "overflow-x-auto": ''}>
            <TemperaturePieChart weatherData={weatherData} />
          </div>
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
