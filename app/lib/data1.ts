'use server';
import axios from 'axios';
import { CurrentWeatherResponse, ForecastResponse } from './types';
const apiKey = process.env.API_KEY;

export const fetchWeatherByCoordinate = async (
  lat: number | string | undefined,
  lon: number | string | undefined,
): Promise<CurrentWeatherResponse | null> => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  try {
    const response = await axios.get<CurrentWeatherResponse>(url);
    return response.data;
  } catch (error: any) {
    console.error('Error fetching weather data:', error);
    throw new Error(error.message);
  }
};
export const fetchWeatherByCityName = async (
  city: string|number,
): Promise<CurrentWeatherResponse | null> => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await axios.get<CurrentWeatherResponse>(url);
    return response.data;
  } catch (error: any) {
    console.error('Error fetching weather data:', error);
    throw new Error(error.message);
  }
};
export const fetchForecastByCoordinate = async (
  lat: number | string | undefined,
  lon: number | string | undefined,
): Promise<ForecastResponse | null> => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  try {
    const response = await axios.get<ForecastResponse>(url);
    return response.data;
  } catch (error: any) {
    console.error('Error fetching forecast data:', error);
    console.log('Error fetching forecast data message:', error.message);
    throw new Error(error.message);
  }
};
export const fetchForecastByCityName = async (
  city: string | number | null,
): Promise<ForecastResponse | null> => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
  try {
    const response = await axios.get<ForecastResponse>(url);
    return response.data;
  } catch (error: any) {
    console.error('Error fetching forecast data:', error);
    console.log('Error fetching forecast data message', error.message)
    throw new Error(error.message);
  }
};
