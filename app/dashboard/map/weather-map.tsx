'use client';
import { useEffect, useRef, useState, memo } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import OSM from 'ol/source/OSM';

const API_KEY = process.env.API_KEY;

const WeatherMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null); // Ref for the map container
  const [map, setMap] = useState<Map>();
  const [layerType, setLayerType] = useState('clouds_new');

  useEffect(() => {
    // Initialize the OpenLayers map object
    if (!mapRef.current) return;

    const initialMap = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new TileLayer({
          opacity: 0.7,
          source: new XYZ({
            url: `https://tile.openweathermap.org/map/${layerType}/0/0/0.png?appid=${API_KEY}`,
          }),
        }),
      ],
      view: new View({
        center: [8.1677954, 4.2688904],
        zoom: 2,
      }),
    });

    setMap(initialMap);

    return () => {
      initialMap.setTarget(undefined);
    };
  }, [layerType]);

  return (
    <div>
      <div className="mb-4 flex flex-row space-x-4">
        <button
          className={`px-4 py-2 ${
            layerType === 'clouds_new'
              ? 'bg-primary-500 text-white'
              : 'bg-gray-200'
          } rounded-md`}
          onClick={() => setLayerType('clouds_new')}
        >
          Clouds
        </button>
        <button
          className={`px-4 py-2 ${
            layerType === 'precipitation_new'
              ? 'bg-primary-500 text-white'
              : 'bg-gray-200'
          } rounded-md`}
          onClick={() => setLayerType('precipitation_new')}
        >
          Precipitation
        </button>
        <button
          className={`px-4 py-2 ${
            layerType === 'pressure_new'
              ? 'bg-primary-500 text-white'
              : 'bg-gray-200'
          } rounded-md`}
          onClick={() => setLayerType('pressure_new')}
        >
          Sea Level Pressure
        </button>
        <button
          className={`px-4 py-2 ${
            layerType === 'wind_new'
              ? 'bg-primary-500 text-white'
              : 'bg-gray-200'
          } rounded-md`}
          onClick={() => setLayerType('wind_new')}
        >
          Wind Speed
        </button>
        <button
          className={`px-4 py-2 ${
            layerType === 'temp_new'
              ? 'bg-primary-500 text-white'
              : 'bg-gray-200'
          } rounded-md`}
          onClick={() => setLayerType('temp_new')}
        >
          Temperature
        </button>
      </div>
      <div ref={mapRef} className="relative h-screen w-full"></div>;
    </div>
  );
};

export default memo(WeatherMap);
