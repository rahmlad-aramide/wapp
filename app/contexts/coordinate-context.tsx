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

export const initialCoordinates = { lat: null, lon: null };
// Default to lagos in case the user does not allow location.
export const defaultCoordinates = { lat: 6.5244, lon: 3.3792 };
interface Coordinates {
  lat: number | null;
  lon: number | null;
}
interface CoordinatesContextType {
  coordinates: Coordinates;
  setCoordinates: Dispatch<SetStateAction<Coordinates>>;
}
const CoordinatesContext = createContext<CoordinatesContextType | undefined>(
  undefined,
);

export function CoordinatesProvider({ children }: { children: ReactNode }) {
  const { notify } = useNotification();
  const [coordinates, setCoordinates] =
    useState<Coordinates>(initialCoordinates);
  useEffect(() => {
    function getLocation() {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            setCoordinates({ lat: latitude, lon: longitude });
          },
          (error) => {
            console.error('Error getting location:', error.message);
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
