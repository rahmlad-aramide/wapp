'use server';
import axios from 'axios';
import { CurrentWeatherResponse, ForecastResponse } from './types';
const API_KEY = process.env.API_KEY;
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5';

type WeatherOrForecastResponse = CurrentWeatherResponse | ForecastResponse;

async function fetchDataFromOpenWeatherMap<T extends WeatherOrForecastResponse>(
  endpoint: 'weather' | 'forecast',
  query: { lat?: number; lon?: number; city?: string | null }
): Promise<T> {
  const { lat, lon, city } = query;
  const locationParam = city ? `q=${city}` : `lat=${lat}&lon=${lon}`;
  const url = `${API_BASE_URL}/${endpoint}?${locationParam}&units=metric&appid=${API_KEY}`;

  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error: any) {
    console.error(`Error fetching ${endpoint} data:`, error);
    throw new Error(error);
  }
}

export const fetchWeatherByCoordinate = (
  lat: number,
  lon: number
): Promise<CurrentWeatherResponse> =>
  fetchDataFromOpenWeatherMap<CurrentWeatherResponse>('weather', { lat, lon });

export const fetchWeatherByCityName = (
  city: string
): Promise<CurrentWeatherResponse> =>
  fetchDataFromOpenWeatherMap<CurrentWeatherResponse>('weather', { city });

export const fetchForecastByCoordinate = (
  lat: number,
  lon: number
): Promise<ForecastResponse> =>
  fetchDataFromOpenWeatherMap<ForecastResponse>('forecast', { lat, lon });

export const fetchForecastByCityName = (
  city: string
): Promise<ForecastResponse> =>
  fetchDataFromOpenWeatherMap<ForecastResponse>('forecast', { city });

