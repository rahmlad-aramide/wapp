'use client'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import { ForecastResponse } from '../lib/types';

interface ForecastDataContextType {
  forecastData: ForecastResponse | null;
  setForecastData: Dispatch<SetStateAction<ForecastResponse | null>>;
}
const ForecastDataContext = createContext<ForecastDataContextType | undefined>(
  undefined,
);

export function ForecastDataProvider({ children }: { children: ReactNode }) {
  const [forecastData, setForecastData] = useState<ForecastResponse | null>(
    null,
  );

  return (
    <ForecastDataContext.Provider value={{ forecastData, setForecastData }}>
      {children}
    </ForecastDataContext.Provider>
  );
}

export function useForecastData() {
  const forecastData = useContext(ForecastDataContext);
  if (forecastData === undefined) {
    throw new Error(
      'useForecastData must be used within a ForecastDataProvider',
    );
  }
  return forecastData;
}
