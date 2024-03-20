# WeatherMap Application

## Introduction

WApp is a Next.js weather application that integrates the OpenWeatherMap API and open layer to display real-time weather data on cards, charts and maps. Users can view various weather metrics like temperature, pressure, humidity, windspeed, cloudiness, and precipitation of their current location on a Dashboard and standard Open Layer Maps, they can also search a specific location to get its weather information and can convert the units from Metric units to Imperial units and vice versa.

## Features

- Real-time weather updates: Displays current weather conditions on the dashboard.
- Weather forecast data: Displays weather forecast for upcoming days, up to 5days with a 3hours step.
- Geolocation support: Automatically fetches and displays weather data based on the user's current location.
- Search functionality: Allows users to search for and display weather information for different locations through the location name or post code.
- High Level Security: Data are fetched from the server side and environment variables are used to prevent exposing sensitive information on the client side e.g api key.
- Data visualization: Forecast and temperature data are presented on charts for ease of data visualization apart from the data on dashboard.
- Units conversions: Allows users to convert the data from Metric units to Imperial units and from Imperial units to Metric units.
- Error handling: Efficiently handled errors and communicate warnings and messages to the users.
- Animated Loaders: Smooth loading animation is shown when data is being fetched or an action is being performed for a good user experience.
- Responsiveness: The application is fully responsive across various devices viewports like mobiles, tablets, desktops etc.
- Improved SEO: The application is optimized for search engine crawlers by using Semantic HTML tags, meta tags, server-side rendering and data fetching etc.
- Enhanced social sharing: The application is enchaced with opengraph images and tags for an improved social sharing.
- Full accessibility in progress: The application will be made fully accessible to numerous kinds of users like screen readers, keyboard and mouse users, etc.


## Prerequisites

Before you begin, ensure you have the following:

- Node.js (v16.x or later) installed
- npm (v6.x or later) or Yarn (v1.22.x or later) installed
- OpenWeatherMap API key

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rahmlad-aramide/wapp.git
   cd wapp
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

   or if you use Yarn:

   ```bash
   yarn install
   ```

3. Create a `.env` file in the root directory of the project and add your API key:

   ```plaintext
   API_KEY=your_openweathermap_api_key
   ```

   Replace `your_openweathermap_api_key` with your actual API key.

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

If you have any questions, suggestions or comments, please feel free to contact me on [Abdrahman Oladimeji](mailto:abdrahmanoladimeji02@gmail.com).

---
