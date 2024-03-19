export const formatDateToLocal = (
  dateStr: string | number,
  locale: string = 'en-US',
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    dateStyle: 'full',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export const formatTimeToLocal = (
  dateStr: string | number,
  locale: string = 'en-US',
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    timeStyle: 'long',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export const metersPerSecondToMilesPerHour = (
  metersPerSecond: number,
): number => {
  return metersPerSecond * 2.23694;
};

export const celsiusToFahrenheit = (celsius: number): number => {
  return (celsius * 9) / 5 + 32;
};

export const hectoPascalsToInchesOfMercury = (hectoPascals: number): number => {
  return hectoPascals * 0.02953;
};

export const unixToIsoString = (unixTime: number): string => {
  return new Date(unixTime * 1000).toISOString();
};

export const unixToTimeSince = (unixTime: number): string => {
  const currentTime = Math.floor(new Date().getTime() / 1000);
  const delta = currentTime - unixTime;
  // Future time
  if (delta < 0) {
    const absDelta = Math.abs(delta);
    if (absDelta < 60) {
      return `in ${absDelta} seconds`;
    } else if (absDelta < 3600) {
      return `in ${Math.floor(absDelta / 60)} minutes`;
    } else {
      return `in ${Math.floor(absDelta / 3600)} hours`;
    }
  }
  // Past time
  if (delta < 60) {
    return `${delta} seconds ago`;
  } else if (delta < 3600) {
    return `${Math.floor(delta / 60)} minutes ago`;
  } else {
    return `${Math.floor(delta / 3600)} hours ago`;
  }
};

export const unixTo12HourTime = (unixTime: number): string => {
  const date = new Date(unixTime * 1000);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  const strMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours}:${strMinutes} ${ampm}`;
};

export const getFinalUnit = (type: WeatherType, units: Units) => {
  const unitMapMetric = {
    temperature: '°C',
    humidity: '%',
    pressure: 'hPa',
    wind: 'm/s',
  };
  const unitMapImperial = {
    temperature: '°F',
    humidity: '%',
    pressure: 'inHg',
    wind: 'mph',
  };
  return units === 'metric' ? unitMapMetric[type] : unitMapImperial[type];
};

export const getFinalValue = (
  type: 'temperature' | 'wind' | 'pressure' | 'humidity',
  value: number | string,
  units: Units,
): number | string => {
  let finalValue;
  switch (type) {
    case 'temperature':
      finalValue =
        units === 'imperial'
          ? celsiusToFahrenheit(Number(value)).toFixed(2)
          : value;
      break;
    case 'wind':
      finalValue =
        units === 'imperial'
          ? metersPerSecondToMilesPerHour(Number(value))
          : value;
    case 'pressure':
      finalValue =
        units === 'imperial'
          ? hectoPascalsToInchesOfMercury(Number(value))
          : value;
    default:
      finalValue = value;
      break;
  }
  return finalValue;
};

import { ISO31661AssignedEntry, iso31661 } from 'iso-3166/1';
import { Units, WeatherType } from './types';

export const getCountryName = (alpha2: string): string | undefined => {
  const countryData = iso31661.find(
    (country: ISO31661AssignedEntry) => country.alpha2 === alpha2,
  );
  return countryData?.name;
};
