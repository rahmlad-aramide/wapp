'use client';
import { useForecastData } from '@/app/contexts/forecast-data-context';
import { useLoading } from '@/app/contexts/loading-context';
import { useNotification } from '@/app/contexts/notification-context';
import { useWeatherData } from '@/app/contexts/weather-data-context';
import {
  fetchForecastByCityName,
  fetchWeatherByCityName,
} from '@/app/lib/data';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Search({
  placeholder,
  searchWeather,
}: {
  placeholder: string;
  searchWeather: () => void;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const { notify } = useNotification();
  const { setForecastData } = useForecastData();
  const { setWeatherData } = useWeatherData();
  const { loading, setLoading } = useLoading();
  const [searching, setSearching] = useState(false);

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('q', term);
    } else {
      params.delete('q');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    async function fetchData() {
      const queries = searchParams.get('q')?.toString();
      if (queries) {
        setLoading(true);
        setSearching(true);
        try {
          const responseWeather = await fetchWeatherByCityName(queries);
          const responseForecast = await fetchForecastByCityName(queries);
          setWeatherData(responseWeather);
          setForecastData(responseForecast);
        } catch (error: any) {
          console.error(error);
          notify(error.message, 'error');
        } finally {
          setLoading(false);
          setSearching(false);
        }
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form className="relative flex w-full flex-shrink-0 md:w-auto">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border-2 border-gray-300 bg-transparent py-2 pl-7 pr-16 text-sm outline-2 placeholder:text-gray-500 focus:border-primary-500 md:w-auto"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('q')?.toString()}
        type="search"
      />
      <MagnifyingGlassIcon className="absolute left-2 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      <button
        disabled={loading || searching}
        type="submit"
        onClick={searchWeather}
        className="absolute right-1.5 top-1/2 h-fit w-16 -translate-y-1/2 rounded bg-gray-200 p-0.5 text-gray-500 disabled:cursor-not-allowed peer-focus:bg-primary-500 peer-focus:text-white"
      >
        {searching ? (
          <svg
            className="m-auto h-5 w-5 animate-spin py-0.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : (
          <span className="w-full">Search</span>
        )}
      </button>
    </form>
  );
}
