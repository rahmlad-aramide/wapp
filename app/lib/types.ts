import { StaticImageData } from 'next/image';

export interface CurrentWeatherResponse {
  coord: CurrentWeatherCoord;
  weather: CurrentWeather[];
  base: string;
  main: CurrentWeatherMain;
  visibility: number;
  wind: CurrentWeatherWind;
  clouds: CurrentWeatherClouds;
  dt: number;
  sys: CurrentWeatherSys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface CurrentWeatherCoord {
  lon: number;
  lat: number;
}

export interface CurrentWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface CurrentWeatherMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
}

export interface CurrentWeatherWind {
  speed: number;
  deg: number;
  gust?: number;
}

export interface CurrentWeatherClouds {
  all: number;
}

export interface CurrentWeatherSys {
  type?: number;
  id?: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface ForecastResponse {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastList[] | [];
  city: Forecast;
}

export interface ForecastList {
  dt: number;
  main: ForecastMain;
  weather: ForecastWeather[];
  clouds: ForecastClouds;
  wind: ForecastWind;
  visibility: number;
  pop: number;
  sys: ForecastSys;
  dt_txt: string;
  rain?: ForecastRain;
}

export interface ForecastMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface ForecastWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface ForecastClouds {
  all: number;
}

export interface ForecastWind {
  speed: number;
  deg: number;
  gust: number;
}

export interface ForecastSys {
  pod: string;
}
export interface ForecastRain {
  '3h': number;
}

export interface Forecast {
  id: number;
  name: string;
  coord: ForecastCoord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface ForecastCoord {
  lat: number;
  lon: number;
}
export type Units = 'metric' | 'imperial';
export type WeatherType = 'temperature' | 'wind' | 'pressure' | 'humidity';

export interface UnitsContextType {
  units: Units;
  toggleUnits: () => void;
}
export interface SunCardProps {
  title: 'Sunrise' | 'Sunset';
  weatherData: CurrentWeatherResponse|null;
}

export interface SunCardIconProps {
  Sunrise: StaticImageData;
  Sunset: StaticImageData;
}
export interface SunCardTimeProps {
  Sunrise: number;
  Sunset: number;
}
export type TimeUnit = 'seconds' | 'minutes' | 'hours';
