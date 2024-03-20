import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'WApp',
    short_name: 'Weather App',
    description: 'A Next.js weather application that integrates the OpenWeatherMap API and open layer to display real-time weather data on cards, charts and maps and some other features.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}