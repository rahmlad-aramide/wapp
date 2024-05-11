import { StaticImageData } from 'next/image';
import { Dispatch, SetStateAction } from 'react';

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
export interface HeadingProps {
  searchWeather: () => void;
  searching: boolean;
  setSearching: Dispatch<SetStateAction<boolean>>; 
}
export interface SearchProps extends HeadingProps {
placeholder: string;
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

export interface SolarIrradianceDataResponse {
  lat: number
  lon: number
  date: string
  tz: string
  sunrise: string
  sunset: string
  irradiance: Irradiance
}

export interface Irradiance {
  daily: IrradianceDaily[]
  hourly: IrradianceHourly[]
}

export interface IrradianceDaily {
  clear_sky: IrradianceClearSky
  cloudy_sky: IrradianceCloudySky
}

export interface IrradianceClearSky {
  ghi: number
  dni: number
  dhi: number
}

export interface IrradianceCloudySky {
  ghi: number
  dni: number
  dhi: number
}

export interface IrradianceHourly {
  hour: number
  clear_sky: IrradianceClearSky2
  cloudy_sky: IrradianceCloudySky2
}

export interface IrradianceClearSky2 {
  ghi: number
  dni: number
  dhi: number
}

export interface IrradianceCloudySky2 {
  ghi: number
  dni: number
  dhi: number
}

export interface PollutionDataResponse {
  coord: number[]
  list: PollutionDataList[]
}

export interface PollutionDataList {
  dt: number
  main: PollutionDataMain
  components: PollutionDataComponents
}

export interface PollutionDataMain {
  aqi: number
}

export interface PollutionDataComponents {
  co: number
  no: number
  no2: number
  o3: number
  so2: number
  pm2_5: number
  pm10: number
  nh3: number
}

// Climate forecast
export interface ClimateResponse {
  city: ClimateCity
  code: string
  message: number
  cnt: number
  list: ClimateList[]
}

export interface ClimateCity {
  id: number
  name: string
  coord: ClimateCoord
  country: string
  population: number
  timezone: number
}

export interface ClimateCoord {
  lon: number
  lat: number
}

export interface ClimateList {
  dt: number
  sunrise: number
  sunset: number
  temp: ClimateTemp
  feels_like: ClimateFeelsLike
  pressure: number
  humidity: number
  weather: ClimateWeather[]
  speed: number
  deg: number
  clouds: number
  rain?: number
}

export interface ClimateTemp {
  day: number
  min: number
  max: number
  night: number
  eve: number
  morn: number
}

export interface ClimateFeelsLike {
  day: number
  night: number
  eve: number
  morn: number
}

export interface ClimateWeather {
  id: number
  main: string
  description: string
  icon: string
}

