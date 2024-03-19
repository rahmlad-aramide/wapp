'use client';
import { useForecastData } from '@/app/contexts/forecast-data-context';
import { useLoading } from '@/app/contexts/loading-context';
import { useNotification } from '@/app/contexts/notification-context';
import { useQueries } from '@/app/contexts/query-context';
import { useWeatherData } from '@/app/contexts/weather-data-context';
import {
  fetchForecastByCityName,
  fetchWeatherByCityName,
} from '@/app/lib/data';
import {
  ArrowUturnRightIcon,
  ChevronDoubleDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const { queries, setQueries } = useQueries();
  const { notify } = useNotification();
  const { setForecastData } = useForecastData();
  const { setWeatherData } = useWeatherData();
  const { loading, setLoading } = useLoading();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('q', term);
      setQueries(term);
    } else {
      params.delete('q');
      setQueries('');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    async function fetchData() {
      const queries = searchParams.get('q')?.toString();
      if (queries) {
        setLoading(true);
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
        }
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchWeather = async () => {
    setLoading(true);
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
    }
  };

  return (
    <form className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border-2 border-gray-300 bg-transparent py-2 pl-7 pr-16 text-sm outline-2 placeholder:text-gray-500 focus:border-primary-500"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('q')?.toString()}
        type="search"
      />
      <MagnifyingGlassIcon className="absolute left-2 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      <button
        type="button"
        className="absolute right-[2.625rem] top-1/2 h-5 w-5 -translate-y-1/2 rounded bg-transparent p-0.5 text-gray-500 transition duration-200 hover:bg-primary-500 hover:text-white active:bg-primary-600 peer-focus:bg-primary-500 peer-focus:text-white"
      >
        <ChevronDoubleDownIcon className="h-full w-full" />
      </button>
      <button
        disabled={!searchParams.get('q')?.toString() || loading}
        type="submit"
        onClick={searchWeather}
        className="absolute right-3 top-1/2 h-5 w-6 -translate-y-1/2 rotate-180 rounded bg-transparent p-0.5 text-gray-500 disabled:cursor-not-allowed peer-focus:bg-primary-500 peer-focus:text-white"
      >
        {loading ? (
          <svg
            className="m-auto h-5 w-5 animate-spin"
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
          <ArrowUturnRightIcon className="h-full w-full" />
        )}
      </button>
    </form>
  );
}
