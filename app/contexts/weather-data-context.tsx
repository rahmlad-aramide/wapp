'use client';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import { CurrentWeatherResponse } from '../lib/types';

interface WeatherDataContextType {
  weatherData: CurrentWeatherResponse | null;
  setWeatherData: Dispatch<SetStateAction<CurrentWeatherResponse | null>>;
}
const WeatherDataContext = createContext<WeatherDataContextType | undefined>(
  undefined,
);

export function WeatherDataProvider({ children }: { children: ReactNode }) {
  const [weatherData, setWeatherData] = useState<CurrentWeatherResponse | null>(
    null,
  );

  return (
    <WeatherDataContext.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </WeatherDataContext.Provider>
  );
}

export function useWeatherData() {
  const weatherData = useContext(WeatherDataContext);
  if (weatherData === undefined) {
    throw new Error('useWeatherData must be used within a WeatherDataProvider');
  }
  return weatherData;
}
