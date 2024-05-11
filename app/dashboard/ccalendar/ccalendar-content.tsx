'use client'
import React, { useEffect, useState } from 'react';
import ClimateChart from '../../ui/ccalendar/climate-chart';
import { CcalendarSkeleton } from '@/app/ui/skeletons';
import { ClimateResponse } from '@/app/lib/types';
import { useLoading } from '@/app/contexts/loading-context';
import { defaultCoordinates, useCoordinates } from '@/app/contexts/coordinate-context';
import { useNotification } from '@/app/contexts/notification-context';
import { fetchClimateByCoordinate } from '@/app/lib/data';

const WeatherCalendar: React.FC = () => {
  const { loading, setLoading } = useLoading();
  const [isClient, setIsClient] = useState(false);
  const [data, setClimateData] = useState<ClimateResponse | null>(
    null,
  );
  const {
    coordinates: { lat, lon },
    setCoordinates
  } = useCoordinates();

  const { notify } = useNotification();

  useEffect(() => {
    setIsClient(true);
    function getLocation() {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setCoordinates({ lat: latitude, lon: longitude });
            console.log('in get location', latitude, longitude);
          },
          (error) => {
            console.error('Error getting location:', error);
            console.log('in get location error', defaultCoordinates);
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

  async function fetchData(lat: number, lon: number) {
    setLoading(true);
    try {
      const climateDataRes = lat && lon
        ? await fetchClimateByCoordinate(lat, lon)
        : null;
      setClimateData(climateDataRes);
    } catch (error: Error | any) {
      let errorMessage = 'An error occurred.';
      if (!error.response) {
        errorMessage = 'Network error. Please check your internet connection.';
      } else if (error.response && error.response.status >= 400) {
        errorMessage = `Error fetching data: ${error.response.statusText}`;
      } else {
        console.error('Unexpected error:', error);
      }
      notify(errorMessage, 'error');
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    setIsClient(true);
    if (lat != null && lon != null) {
      fetchData(lat, lon);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, lon]);

  console.log({data});

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    const getStartingDayOffset = (timestamp: number) => {
        const date = new Date(timestamp * 1000);
        return date.getDay(); 
      };

    const startingDayOffset = function calculateOffset() {
      if (data && data?.list.length > 0) {
        const firstEntryDate = data.list[0].dt;
        const startingDayOffset = getStartingDayOffset(firstEntryDate);
        return startingDayOffset;
      } else {
        console.log("No data available in the list to calculate the offset.");
        return 0;
      }
    }
    const formatDay = (timestamp: number) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleString('default', {day: 'numeric'});
    };
    const formatMonth = (timestamp: number) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleString('default', {month: 'long'});
    };

    if(!isClient || loading) return (<CcalendarSkeleton />);
    return (
        <div>
            <h1 className='text-lg mb-3 font-medium'>Climate Calendar Showing the forecast for the next 30 days</h1>
            <div>
                <div className="hidden md:grid grid-cols-3 md:grid-cols-7 mb-3">
                    {daysOfWeek.map(day => (
                        <div key={day} className="first:rounded-l-lg last:rounded-r-lg bg-white p-3 border border-gray-200 text-center">{day}</div>
                    ))}
                </div>
                <div className="grid grid-cols-3 md:grid-cols-7 rounded-lg gap-y-3">
                    {Array.from({ length: startingDayOffset() }).map((_, index) => (
                        <div key={`empty-${index}`} className='hidden md:flex'></div>
                    ))}
                    {data?.list.map((day, index) => (
                        <div
                            key={index}
                            className={`bg-white p-3 border border-gray-200 w-full 
                                        ${index % 3 === 0 ? 'rounded-l-lg md:rounded-none' : ''}
                                        ${index % 3 === 2 ? 'rounded-r-lg md:rounded-none' : ''}
                                        ${(index+startingDayOffset()) % 7 === 0 ? 'md:rounded-l-lg' : ''}
                                        ${(index+startingDayOffset()) % 7 === 6 ? 'md:rounded-r-lg' : ''}`}>
                            <h2 className="font-bold text-lg">{formatMonth(day.dt)} {formatDay(day.dt)}</h2>
                            <p>Weather: {day.weather[0].main} <br /> ({day.weather[0].description})</p>
                            <p>Max Temp: {day.temp.max}°C</p>
                            <p>Min Temp: {day.temp.min}°C</p>
                            <p>Humidity: {day.humidity}%</p>
                            <p>Pressure: {day.pressure}hPa</p>
                            <p>Wind Speed: {day.speed}m/s</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='p-3 bg-white rounded-lg mt-5 border shadow'>
                <ClimateChart data={data ? data.list : []} />
            </div>
        </div>
    );
};

export default WeatherCalendar;
