# WeatherMap Application

## Introduction

WeatherMap is a Next.js application that integrates Google Maps and the OpenWeatherMap API to display real-time weather data on a map. Users can view various weather metrics like temperature, cloudiness, and precipitation overlaid on a standard Google Map.

## Features

- Real-time weather updates: Displays current weather conditions on the map.
- Geolocation support: Automatically fetches and displays weather data based on the user's current location.
- Search functionality: Allows users to search for and display weather information for different locations.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v12.x or later)
- npm (v6.x or later) or Yarn (v1.22.x or later)
- Google Maps API key
- OpenWeatherMap API key

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/weathermap.git
   cd weathermap
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

   or if you use Yarn:

   ```bash
   yarn install
   ```

3. Create a `.env` or `.env.local` file in the root directory of the project and add your API keys:

   ```plaintext
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   NEXT_PUBLIC_OPENWEATHERMAP_API_KEY=your_openweathermap_api_key
   ```

   Replace `your_google_maps_api_key` and `your_openweathermap_api_key` with your actual API keys.

## Running the Application

To start the development server, run:

```bash
npm run dev
```

or if you use Yarn:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

To build the application for production, run:

```bash
npm run build
```

or if you use Yarn:

```bash
yarn build
```

Next, start the application:

```bash
npm start
```

or if you use Yarn:

```bash
yarn start
```

## Contact

If you have any questions or comments, please feel free to contact [Abdrahman Oladimeji](mailto:abdrahmanoladimeji02@gmail.com).

---
