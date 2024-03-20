'use client'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { memo } from 'react';

const containerStyle = {
  width: '800px',
  height: '600px',
};

// Set the initial center position of the map
const center = {
  lat: -3.745,
  lng: -38.523,
};

// Define the map type ID
const mapTypeId = "hybrid";

const googleMapsApiKey: string = 'your_google_maps_api_key';
const openWeatherMapApiKey: string = 'c47e50f2193381706302c2b9f33a5fcc';

const WeatherMap: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey
  })

  const renderMap = () => {
    const getTileUrl = (tileCoord: google.maps.Point, zoom: number, overlayType: string): string => {
      const normalizedCoord = getNormalizedCoord(tileCoord, zoom);
      if (!normalizedCoord) {
        return '';
      }
      const { x, y } = normalizedCoord;
      return `https://tile.openweathermap.org/map/${overlayType}/${zoom}/${x}/${y}.png?appid=${openWeatherMapApiKey}`;
    }

    const getNormalizedCoord = (coord: google.maps.Point, zoom: number): google.maps.Point | null => {
      const y = coord.y;
      let x = coord.x;
      const tileRange = 1 << zoom;
      if (y < 0 || y >= tileRange) {
        return null;
      }
      if (x < 0 || x >= tileRange) {
        x = (x % tileRange + tileRange) % tileRange;
      }
      //   return { x: x, y: y };
      return new google.maps.Point(x, y);;
    }

    return <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      mapTypeId={mapTypeId as google.maps.MapTypeId}
      onLoad={map => {
        const weatherLayer = new google.maps.ImageMapType({
          getTileUrl: (coord, zoom) => getTileUrl(coord, zoom, 'clouds_new'),
          tileSize: new google.maps.Size(256, 256),
          opacity: 0.5,
        });

        map.overlayMapTypes.push(weatherLayer);
      }}
    >
      {/* Child components like markers or InfoWindows */}
    </GoogleMap>
  }

  return isLoaded ? renderMap() : null;
}

export default memo(WeatherMap);
