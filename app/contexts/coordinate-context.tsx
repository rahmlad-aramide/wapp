'use client';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useNotification } from './notification-context';

export const initialCoordinates = { lat: undefined, lon: undefined };
// Default to Lagos in case the user does not allow location.
export const defaultCoordinates = { lat: 6.5244, lon: 3.3792 };
interface Coordinates {
  lat: number | undefined;
  lon: number | undefined;
}
interface CoordinatesContextType {
  coordinates: Coordinates;
  setCoordinates: Dispatch<SetStateAction<Coordinates>>;
}
const CoordinatesContext = createContext<CoordinatesContextType | undefined>(
  undefined,
);

export function CoordinatesProvider({ children }: { children: ReactNode }) {
  const [coordinates, setCoordinates] =
    useState<Coordinates>(initialCoordinates);

  return (
    <CoordinatesContext.Provider value={{ coordinates, setCoordinates }}>
      {children}
    </CoordinatesContext.Provider>
  );
}

export function useCoordinates() {
  const { notify } = useNotification();
  const coordinates = useContext(CoordinatesContext);
  if (coordinates === undefined) {
    notify('useQueries must be used within a CoordinatesProvider', 'warn');
    throw new Error('useQueries must be used within a CoordinatesProvider');
  }
  return coordinates;
}
