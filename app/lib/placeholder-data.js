// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}

export const weatherCoordinateIbadan = {
  coord: {
    lon: 3.3792,
    lat: 6.5244,
  },
  weather: [
    {
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d',
    },
  ],
  base: 'stations',
  main: {
    temp: 29.2,
    feels_like: 33.57,
    temp_min: 29.2,
    temp_max: 29.2,
    pressure: 1011,
    humidity: 72,
    sea_level: 1011,
    grnd_level: 1010,
  },
  visibility: 10000,
  wind: {
    speed: 3.05,
    deg: 220,
    gust: 3.05,
  },
  clouds: {
    all: 88,
  },
  dt: 1710574621,
  sys: {
    country: 'NG',
    sunrise: 1710568347,
    sunset: 1710611862,
  },
  timezone: 3600,
  id: 2566677,
  name: 'Shogunle',
  cod: 200,
};

// https://api.openweathermap.org/data/2.5/weather?q=Ibadan&appid={API key}

export const weatherCityIbadan = {
  coord: {
    lon: 3.8964,
    lat: 7.3878,
  },
  weather: [
    {
      id: 801,
      main: 'Clouds',
      description: 'few clouds',
      icon: '02n',
    },
  ],
  base: 'stations',
  main: {
    temp: 302.09,
    feels_like: 307.51,
    temp_min: 302.09,
    temp_max: 302.09,
    pressure: 1014,
    humidity: 79,
  },
  visibility: 10000,
  wind: {
    speed: 2.57,
    deg: 230,
  },
  clouds: {
    all: 20,
  },
  dt: 1710453110,
  sys: {
    type: 1,
    id: 1165,
    country: 'NG',
    sunrise: 1710395488,
    sunset: 1710438943,
  },
  timezone: 3600,
  id: 2339354,
  name: 'Ibadan',
  cod: 200,
};

// api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid={API key}

export const forecastCoordinateIbadan = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1710579600,
      main: {
        temp: 30.15,
        feels_like: 34.91,
        temp_min: 30.15,
        temp_max: 30.15,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1010,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 74,
      },
      wind: {
        speed: 3.38,
        deg: 221,
        gust: 3.13,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-16 09:00:00',
    },
    {
      dt: 1710590400,
      main: {
        temp: 30.46,
        feels_like: 35.4,
        temp_min: 30.46,
        temp_max: 31.08,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1009,
        humidity: 67,
        temp_kf: -0.62,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 65,
      },
      wind: {
        speed: 5.2,
        deg: 202,
        gust: 4.17,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-16 12:00:00',
    },
    {
      dt: 1710601200,
      main: {
        temp: 30.76,
        feels_like: 35.85,
        temp_min: 30.76,
        temp_max: 31.07,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1006,
        humidity: 66,
        temp_kf: -0.31,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 34,
      },
      wind: {
        speed: 6.76,
        deg: 202,
        gust: 6.34,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-16 15:00:00',
    },
    {
      dt: 1710612000,
      main: {
        temp: 29.39,
        feels_like: 34.68,
        temp_min: 29.39,
        temp_max: 29.39,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1007,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 10,
      },
      wind: {
        speed: 6.24,
        deg: 195,
        gust: 7.36,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-16 18:00:00',
    },
    {
      dt: 1710622800,
      main: {
        temp: 29.16,
        feels_like: 34.31,
        temp_min: 29.16,
        temp_max: 29.16,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1009,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 8,
      },
      wind: {
        speed: 4.26,
        deg: 219,
        gust: 5.26,
      },
      visibility: 10000,
      pop: 0.1,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-16 21:00:00',
    },
    {
      dt: 1710633600,
      main: {
        temp: 28.71,
        feels_like: 33.55,
        temp_min: 28.71,
        temp_max: 28.71,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1007,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      clouds: {
        all: 23,
      },
      wind: {
        speed: 5.47,
        deg: 217,
        gust: 6.85,
      },
      visibility: 10000,
      pop: 0.08,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-17 00:00:00',
    },
    {
      dt: 1710644400,
      main: {
        temp: 28.41,
        feels_like: 33.15,
        temp_min: 28.41,
        temp_max: 28.41,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1006,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      clouds: {
        all: 14,
      },
      wind: {
        speed: 3.96,
        deg: 248,
        gust: 5.23,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-17 03:00:00',
    },
    {
      dt: 1710655200,
      main: {
        temp: 28.31,
        feels_like: 33.06,
        temp_min: 28.31,
        temp_max: 28.31,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1007,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      clouds: {
        all: 13,
      },
      wind: {
        speed: 3.64,
        deg: 216,
        gust: 4.69,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-17 06:00:00',
    },
    {
      dt: 1710666000,
      main: {
        temp: 30.41,
        feels_like: 36.06,
        temp_min: 30.41,
        temp_max: 30.41,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1009,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 68,
      },
      wind: {
        speed: 4.02,
        deg: 204,
        gust: 3.95,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-17 09:00:00',
    },
    {
      dt: 1710676800,
      main: {
        temp: 31.09,
        feels_like: 36.94,
        temp_min: 31.09,
        temp_max: 31.09,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1008,
        humidity: 67,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 70,
      },
      wind: {
        speed: 4.97,
        deg: 193,
        gust: 4.11,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-17 12:00:00',
    },
    {
      dt: 1710687600,
      main: {
        temp: 31.43,
        feels_like: 36.91,
        temp_min: 31.43,
        temp_max: 31.43,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1006,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      clouds: {
        all: 16,
      },
      wind: {
        speed: 5.67,
        deg: 202,
        gust: 6.1,
      },
      visibility: 10000,
      pop: 0.04,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-17 15:00:00',
    },
    {
      dt: 1710698400,
      main: {
        temp: 29.93,
        feels_like: 36.11,
        temp_min: 29.93,
        temp_max: 29.93,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1006,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 8,
      },
      wind: {
        speed: 5.19,
        deg: 199,
        gust: 6.68,
      },
      visibility: 10000,
      pop: 0.14,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-17 18:00:00',
    },
    {
      dt: 1710709200,
      main: {
        temp: 29.41,
        feels_like: 35.19,
        temp_min: 29.41,
        temp_max: 29.41,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1007,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 2,
      },
      wind: {
        speed: 5.15,
        deg: 212,
        gust: 7.51,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-17 21:00:00',
    },
    {
      dt: 1710720000,
      main: {
        temp: 29.06,
        feels_like: 34.91,
        temp_min: 29.06,
        temp_max: 29.06,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1007,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 5.11,
        deg: 217,
        gust: 7.66,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-18 00:00:00',
    },
    {
      dt: 1710730800,
      main: {
        temp: 28.69,
        feels_like: 34.09,
        temp_min: 28.69,
        temp_max: 28.69,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1005,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 72,
      },
      wind: {
        speed: 4.55,
        deg: 224,
        gust: 6.56,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-18 03:00:00',
    },
    {
      dt: 1710741600,
      main: {
        temp: 28.46,
        feels_like: 33.84,
        temp_min: 28.46,
        temp_max: 28.46,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1007,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 86,
      },
      wind: {
        speed: 3.37,
        deg: 226,
        gust: 4.65,
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        '3h': 0.18,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-18 06:00:00',
    },
    {
      dt: 1710752400,
      main: {
        temp: 30.66,
        feels_like: 36.98,
        temp_min: 30.66,
        temp_max: 30.66,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1008,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 31,
      },
      wind: {
        speed: 4.07,
        deg: 222,
        gust: 4.66,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-18 09:00:00',
    },
    {
      dt: 1710763200,
      main: {
        temp: 31.01,
        feels_like: 37.63,
        temp_min: 31.01,
        temp_max: 31.01,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1007,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 40,
      },
      wind: {
        speed: 5,
        deg: 208,
        gust: 4.6,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-18 12:00:00',
    },
    {
      dt: 1710774000,
      main: {
        temp: 31.46,
        feels_like: 37.9,
        temp_min: 31.46,
        temp_max: 31.46,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1004,
        humidity: 67,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 35,
      },
      wind: {
        speed: 6.41,
        deg: 201,
        gust: 6.11,
      },
      visibility: 10000,
      pop: 0.17,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-18 15:00:00',
    },
    {
      dt: 1710784800,
      main: {
        temp: 29.92,
        feels_like: 36.34,
        temp_min: 29.92,
        temp_max: 29.92,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1005,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: {
        all: 30,
      },
      wind: {
        speed: 5.41,
        deg: 191,
        gust: 7.17,
      },
      visibility: 10000,
      pop: 0.17,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-18 18:00:00',
    },
    {
      dt: 1710795600,
      main: {
        temp: 29.41,
        feels_like: 35.66,
        temp_min: 29.41,
        temp_max: 29.41,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1007,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 65,
      },
      wind: {
        speed: 4.82,
        deg: 191,
        gust: 6.81,
      },
      visibility: 10000,
      pop: 0.07,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-18 21:00:00',
    },
    {
      dt: 1710806400,
      main: {
        temp: 29.01,
        feels_like: 34.77,
        temp_min: 29.01,
        temp_max: 29.01,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1007,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 70,
      },
      wind: {
        speed: 4.43,
        deg: 211,
        gust: 6.55,
      },
      visibility: 10000,
      pop: 0.05,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-19 00:00:00',
    },
    {
      dt: 1710817200,
      main: {
        temp: 28.6,
        feels_like: 34.04,
        temp_min: 28.6,
        temp_max: 28.6,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1006,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 90,
      },
      wind: {
        speed: 4.66,
        deg: 231,
        gust: 6.5,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-19 03:00:00',
    },
    {
      dt: 1710828000,
      main: {
        temp: 28.47,
        feels_like: 33.68,
        temp_min: 28.47,
        temp_max: 28.47,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1007,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 95,
      },
      wind: {
        speed: 4.9,
        deg: 236,
        gust: 7.42,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-19 06:00:00',
    },
    {
      dt: 1710838800,
      main: {
        temp: 30.1,
        feels_like: 35.53,
        temp_min: 30.1,
        temp_max: 30.1,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1009,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.9,
        deg: 224,
        gust: 4.41,
      },
      visibility: 10000,
      pop: 0.28,
      rain: {
        '3h': 0.23,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-19 09:00:00',
    },
    {
      dt: 1710849600,
      main: {
        temp: 31.13,
        feels_like: 36.75,
        temp_min: 31.13,
        temp_max: 31.13,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1007,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.26,
        deg: 205,
        gust: 4.65,
      },
      visibility: 10000,
      pop: 0.65,
      rain: {
        '3h': 0.74,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-19 12:00:00',
    },
    {
      dt: 1710860400,
      main: {
        temp: 30.4,
        feels_like: 35.26,
        temp_min: 30.4,
        temp_max: 30.4,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1005,
        humidity: 67,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.11,
        deg: 195,
        gust: 4.86,
      },
      visibility: 10000,
      pop: 0.56,
      rain: {
        '3h': 0.28,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-19 15:00:00',
    },
    {
      dt: 1710871200,
      main: {
        temp: 29.28,
        feels_like: 34.18,
        temp_min: 29.28,
        temp_max: 29.28,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1006,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.99,
        deg: 192,
        gust: 6.06,
      },
      visibility: 10000,
      pop: 0.57,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-19 18:00:00',
    },
    {
      dt: 1710882000,
      main: {
        temp: 28.91,
        feels_like: 33.67,
        temp_min: 28.91,
        temp_max: 28.91,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1009,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.76,
        deg: 240,
        gust: 3.56,
      },
      visibility: 10000,
      pop: 0.61,
      rain: {
        '3h': 0.63,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-19 21:00:00',
    },
    {
      dt: 1710892800,
      main: {
        temp: 28.64,
        feels_like: 33,
        temp_min: 28.64,
        temp_max: 28.64,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1007,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.85,
        deg: 216,
        gust: 6.81,
      },
      visibility: 10000,
      pop: 0.59,
      rain: {
        '3h': 0.11,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-20 00:00:00',
    },
    {
      dt: 1710903600,
      main: {
        temp: 28.43,
        feels_like: 32.84,
        temp_min: 28.43,
        temp_max: 28.43,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1005,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.55,
        deg: 239,
        gust: 6.87,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-20 03:00:00',
    },
    {
      dt: 1710914400,
      main: {
        temp: 28.4,
        feels_like: 32.94,
        temp_min: 28.4,
        temp_max: 28.4,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1007,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.29,
        deg: 241,
        gust: 4.98,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-20 06:00:00',
    },
    {
      dt: 1710925200,
      main: {
        temp: 30.36,
        feels_like: 35.16,
        temp_min: 30.36,
        temp_max: 30.36,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1009,
        humidity: 67,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.77,
        deg: 236,
        gust: 3.31,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-20 09:00:00',
    },
    {
      dt: 1710936000,
      main: {
        temp: 31.52,
        feels_like: 36.83,
        temp_min: 31.52,
        temp_max: 31.52,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1008,
        humidity: 63,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 4.97,
        deg: 193,
        gust: 3.91,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-20 12:00:00',
    },
    {
      dt: 1710946800,
      main: {
        temp: 31.38,
        feels_like: 36.5,
        temp_min: 31.38,
        temp_max: 31.38,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1005,
        humidity: 63,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 90,
      },
      wind: {
        speed: 5.29,
        deg: 193,
        gust: 4.91,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-20 15:00:00',
    },
    {
      dt: 1710957600,
      main: {
        temp: 29.68,
        feels_like: 34.96,
        temp_min: 29.68,
        temp_max: 29.68,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1006,
        humidity: 73,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 94,
      },
      wind: {
        speed: 5.04,
        deg: 189,
        gust: 6.13,
      },
      visibility: 10000,
      pop: 0.04,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-20 18:00:00',
    },
    {
      dt: 1710968400,
      main: {
        temp: 29.14,
        feels_like: 34.47,
        temp_min: 29.14,
        temp_max: 29.14,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1008,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 57,
      },
      wind: {
        speed: 3.92,
        deg: 220,
        gust: 5.15,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-20 21:00:00',
    },
    {
      dt: 1710979200,
      main: {
        temp: 28.79,
        feels_like: 33.96,
        temp_min: 28.79,
        temp_max: 28.79,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1007,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: {
        all: 41,
      },
      wind: {
        speed: 4.89,
        deg: 234,
        gust: 6.45,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-21 00:00:00',
    },
    {
      dt: 1710990000,
      main: {
        temp: 28.45,
        feels_like: 33.44,
        temp_min: 28.45,
        temp_max: 28.45,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1006,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      clouds: {
        all: 18,
      },
      wind: {
        speed: 5.21,
        deg: 234,
        gust: 7.1,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-21 03:00:00',
    },
    {
      dt: 1711000800,
      main: {
        temp: 28.26,
        feels_like: 33.1,
        temp_min: 28.26,
        temp_max: 28.26,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1008,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 45,
      },
      wind: {
        speed: 4.05,
        deg: 251,
        gust: 6.02,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-21 06:00:00',
    },
  ],
  city: {
    id: 2566677,
    name: 'Shogunle',
    coord: {
      lat: 6.5244,
      lon: 3.3792,
    },
    country: 'NG',
    population: 0,
    timezone: 3600,
    sunrise: 1710568347,
    sunset: 1710611862,
  },
};

// Example call: https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=39.099724&lon=-94.578331&dt=1643803200&appid={API key}
/* 
Above is made with latitude, longitude and date
*/
const response3 = {
  lat: 52.2297,
  lon: 21.0122,
  timezone: 'Europe/Warsaw',
  timezone_offset: 3600,
  data: [
    {
      dt: 1645888976,
      sunrise: 1645853361,
      sunset: 1645891727,
      temp: 279.13,
      feels_like: 276.44,
      pressure: 1029,
      humidity: 64,
      dew_point: 272.88,
      uvi: 0.06,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.6,
      wind_deg: 340,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
    },
  ],
};

// Example call: https://api.openweathermap.org/data/3.0/onecall/day_summary?lat=39.099724&lon=-94.578331&date=2020-03-04&appid={API key}
/* 
Above is made with latitude, longitude, date and day summary
*/
const response1 = {
  lat: 33,
  lon: 35,
  tz: '+02:00',
  date: '2020-03-04',
  units: 'standard',
  cloud_cover: {
    afternoon: 0,
  },
  humidity: {
    afternoon: 33,
  },
  precipitation: {
    total: 0,
  },
  temperature: {
    min: 286.48,
    max: 299.24,
    afternoon: 296.15,
    night: 289.56,
    evening: 295.93,
    morning: 287.59,
  },
  pressure: {
    afternoon: 1015,
  },
  wind: {
    max: {
      speed: 8.7,
      direction: 120,
    },
  },
};

// Example call: https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid={API key}
/* 
Above is made with latitude, longitude and date
*/

export const response = {
  lat: 33.44,
  lon: -94.04,
  timezone: 'America/Chicago',
  timezone_offset: -18000,
  current: {
    dt: 1684929490,
    sunrise: 1684926645,
    sunset: 1684977332,
    temp: 292.55,
    feels_like: 292.87,
    pressure: 1014,
    humidity: 89,
    dew_point: 290.69,
    uvi: 0.16,
    clouds: 53,
    visibility: 10000,
    wind_speed: 3.13,
    wind_deg: 93,
    wind_gust: 6.71,
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04d',
      },
    ],
  },
  minutely: [
    {
      dt: 1684929540,
      precipitation: 0,
    },
    //...
  ],
  hourly: [
    {
      dt: 1684926000,
      temp: 292.01,
      feels_like: 292.33,
      pressure: 1014,
      humidity: 91,
      dew_point: 290.51,
      uvi: 0,
      clouds: 54,
      visibility: 10000,
      wind_speed: 2.58,
      wind_deg: 86,
      wind_gust: 5.88,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      pop: 0.15,
    },
    // ...
  ],
  daily: [
    {
      dt: 1684951200,
      sunrise: 1684926645,
      sunset: 1684977332,
      moonrise: 1684941060,
      moonset: 1684905480,
      moon_phase: 0.16,
      summary: 'Expect a day of partly cloudy with rain',
      temp: {
        day: 299.03,
        min: 290.69,
        max: 300.35,
        night: 291.45,
        eve: 297.51,
        morn: 292.55,
      },
      feels_like: {
        day: 299.21,
        night: 291.37,
        eve: 297.86,
        morn: 292.87,
      },
      pressure: 1016,
      humidity: 59,
      dew_point: 290.48,
      wind_speed: 3.98,
      wind_deg: 76,
      wind_gust: 8.92,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: 92,
      pop: 0.47,
      rain: 0.15,
      uvi: 9.23,
    },
    // ...
  ],
  alerts: [
    {
      sender_name:
        'NWS Philadelphia - Mount Holly (New Jersey, Delaware, Southeastern Pennsylvania)',
      event: 'Small Craft Advisory',
      start: 1684952747,
      end: 1684988747,
      description:
        '...SMALL CRAFT ADVISORY REMAINS IN EFFECT FROM 5 PM THIS\nAFTERNOON TO 3 AM EST FRIDAY...\n* WHAT...North winds 15 to 20 kt with gusts up to 25 kt and seas\n3 to 5 ft expected.\n* WHERE...Coastal waters from Little Egg Inlet to Great Egg\nInlet NJ out 20 nm, Coastal waters from Great Egg Inlet to\nCape May NJ out 20 nm and Coastal waters from Manasquan Inlet\nto Little Egg Inlet NJ out 20 nm.\n* WHEN...From 5 PM this afternoon to 3 AM EST Friday.\n* IMPACTS...Conditions will be hazardous to small craft.',
      tags: [],
    },
    // ...
  ],
};

// Ibadan Forecast
const responseIbadan = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1710460800,
      main: {
        temp: 301.02,
        feels_like: 305.22,
        temp_min: 298.88,
        temp_max: 301.02,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 987,
        humidity: 82,
        temp_kf: 2.14,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: {
        all: 47,
      },
      wind: {
        speed: 1.99,
        deg: 245,
        gust: 5.91,
      },
      visibility: 10000,
      pop: 0.01,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-15 00:00:00',
    },
    {
      dt: 1710471600,
      main: {
        temp: 299.72,
        feels_like: 299.72,
        temp_min: 298.54,
        temp_max: 299.72,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 984,
        humidity: 84,
        temp_kf: 1.18,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 73,
      },
      wind: {
        speed: 1.87,
        deg: 249,
        gust: 5.89,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-15 03:00:00',
    },
    {
      dt: 1710482400,
      main: {
        temp: 297.74,
        feels_like: 298.63,
        temp_min: 297.74,
        temp_max: 297.74,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 985,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.1,
        deg: 277,
        gust: 1.47,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-15 06:00:00',
    },
    {
      dt: 1710493200,
      main: {
        temp: 305.26,
        feels_like: 308.48,
        temp_min: 305.26,
        temp_max: 305.26,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 986,
        humidity: 53,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 71,
      },
      wind: {
        speed: 1.52,
        deg: 262,
        gust: 2.16,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-15 09:00:00',
    },
    {
      dt: 1710504000,
      main: {
        temp: 313.07,
        feels_like: 314.87,
        temp_min: 313.07,
        temp_max: 313.07,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 984,
        humidity: 27,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 41,
      },
      wind: {
        speed: 1.4,
        deg: 227,
        gust: 1.91,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-15 12:00:00',
    },
    {
      dt: 1710514800,
      main: {
        temp: 312.38,
        feels_like: 312.97,
        temp_min: 312.38,
        temp_max: 312.38,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 981,
        humidity: 25,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 61,
      },
      wind: {
        speed: 2.97,
        deg: 172,
        gust: 3.04,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-15 15:00:00',
    },
    {
      dt: 1710525600,
      main: {
        temp: 305.38,
        feels_like: 307.45,
        temp_min: 305.38,
        temp_max: 305.38,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 983,
        humidity: 48,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 76,
      },
      wind: {
        speed: 3.64,
        deg: 202,
        gust: 6.54,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-15 18:00:00',
    },
    {
      dt: 1710536400,
      main: {
        temp: 301.09,
        feels_like: 303.7,
        temp_min: 301.09,
        temp_max: 301.09,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 985,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 63,
      },
      wind: {
        speed: 3.36,
        deg: 227,
        gust: 6.21,
      },
      visibility: 10000,
      pop: 0.26,
      rain: {
        '3h': 0.12,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-15 21:00:00',
    },
    {
      dt: 1710547200,
      main: {
        temp: 299.77,
        feels_like: 299.77,
        temp_min: 299.77,
        temp_max: 299.77,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 984,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 76,
      },
      wind: {
        speed: 1.61,
        deg: 186,
        gust: 3.82,
      },
      visibility: 10000,
      pop: 0.16,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-16 00:00:00',
    },
    {
      dt: 1710558000,
      main: {
        temp: 298.81,
        feels_like: 299.6,
        temp_min: 298.81,
        temp_max: 298.81,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 983,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 72,
      },
      wind: {
        speed: 1.67,
        deg: 226,
        gust: 4.31,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-16 03:00:00',
    },
    {
      dt: 1710568800,
      main: {
        temp: 298.1,
        feels_like: 298.92,
        temp_min: 298.1,
        temp_max: 298.1,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 985,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 67,
      },
      wind: {
        speed: 1.28,
        deg: 191,
        gust: 2.61,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-16 06:00:00',
    },
    {
      dt: 1710579600,
      main: {
        temp: 304.72,
        feels_like: 307.92,
        temp_min: 304.72,
        temp_max: 304.72,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 986,
        humidity: 55,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 38,
      },
      wind: {
        speed: 2.12,
        deg: 204,
        gust: 2.26,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-16 09:00:00',
    },
    {
      dt: 1710590400,
      main: {
        temp: 311.51,
        feels_like: 314.35,
        temp_min: 311.51,
        temp_max: 311.51,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 984,
        humidity: 33,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 25,
      },
      wind: {
        speed: 1.85,
        deg: 202,
        gust: 2.25,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-16 12:00:00',
    },
    {
      dt: 1710601200,
      main: {
        temp: 311.12,
        feels_like: 312.89,
        temp_min: 311.12,
        temp_max: 311.12,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 981,
        humidity: 31,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 55,
      },
      wind: {
        speed: 1.74,
        deg: 202,
        gust: 2.1,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-16 15:00:00',
    },
    {
      dt: 1710612000,
      main: {
        temp: 303.25,
        feels_like: 306.81,
        temp_min: 303.25,
        temp_max: 303.25,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 982,
        humidity: 63,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 58,
      },
      wind: {
        speed: 3.59,
        deg: 186,
        gust: 7.31,
      },
      visibility: 10000,
      pop: 0.41,
      rain: {
        '3h': 0.21,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-16 18:00:00',
    },
    {
      dt: 1710622800,
      main: {
        temp: 299.05,
        feels_like: 299.92,
        temp_min: 299.05,
        temp_max: 299.05,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 985,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 45,
      },
      wind: {
        speed: 3.19,
        deg: 183,
        gust: 6.92,
      },
      visibility: 10000,
      pop: 0.86,
      rain: {
        '3h': 4.17,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-16 21:00:00',
    },
    {
      dt: 1710633600,
      main: {
        temp: 298.72,
        feels_like: 299.6,
        temp_min: 298.72,
        temp_max: 298.72,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 984,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: {
        all: 49,
      },
      wind: {
        speed: 1.72,
        deg: 216,
        gust: 5.28,
      },
      visibility: 10000,
      pop: 0.78,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-17 00:00:00',
    },
    {
      dt: 1710644400,
      main: {
        temp: 298.15,
        feels_like: 299.08,
        temp_min: 298.15,
        temp_max: 298.15,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 982,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      clouds: {
        all: 24,
      },
      wind: {
        speed: 1.42,
        deg: 217,
        gust: 3.93,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-17 03:00:00',
    },
    {
      dt: 1710655200,
      main: {
        temp: 297.76,
        feels_like: 298.73,
        temp_min: 297.76,
        temp_max: 297.76,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 984,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 32,
      },
      wind: {
        speed: 0.71,
        deg: 193,
        gust: 1.39,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-17 06:00:00',
    },
    {
      dt: 1710666000,
      main: {
        temp: 303.24,
        feels_like: 307.45,
        temp_min: 303.24,
        temp_max: 303.24,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 985,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 54,
      },
      wind: {
        speed: 1.87,
        deg: 217,
        gust: 2.26,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-17 09:00:00',
    },
    {
      dt: 1710676800,
      main: {
        temp: 310.39,
        feels_like: 314.88,
        temp_min: 310.39,
        temp_max: 310.39,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 984,
        humidity: 40,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 59,
      },
      wind: {
        speed: 1.62,
        deg: 234,
        gust: 2.2,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-17 12:00:00',
    },
    {
      dt: 1710687600,
      main: {
        temp: 312.54,
        feels_like: 313.94,
        temp_min: 312.54,
        temp_max: 312.54,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 980,
        humidity: 27,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 63,
      },
      wind: {
        speed: 0.53,
        deg: 282,
        gust: 2.06,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-17 15:00:00',
    },
    {
      dt: 1710698400,
      main: {
        temp: 303.65,
        feels_like: 307.19,
        temp_min: 303.65,
        temp_max: 303.65,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 981,
        humidity: 61,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 56,
      },
      wind: {
        speed: 4.65,
        deg: 186,
        gust: 8.74,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-17 18:00:00',
    },
    {
      dt: 1710709200,
      main: {
        temp: 300.6,
        feels_like: 303.68,
        temp_min: 300.6,
        temp_max: 300.6,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 983,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      clouds: {
        all: 12,
      },
      wind: {
        speed: 3.26,
        deg: 198,
        gust: 7.78,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-17 21:00:00',
    },
    {
      dt: 1710720000,
      main: {
        temp: 299.53,
        feels_like: 299.53,
        temp_min: 299.53,
        temp_max: 299.53,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 984,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 8,
      },
      wind: {
        speed: 2.29,
        deg: 178,
        gust: 6.88,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-18 00:00:00',
    },
    {
      dt: 1710730800,
      main: {
        temp: 298.71,
        feels_like: 299.59,
        temp_min: 298.71,
        temp_max: 298.71,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 982,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      clouds: {
        all: 13,
      },
      wind: {
        speed: 2.03,
        deg: 213,
        gust: 6.4,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-18 03:00:00',
    },
    {
      dt: 1710741600,
      main: {
        temp: 298.16,
        feels_like: 299.09,
        temp_min: 298.16,
        temp_max: 298.16,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 983,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 51,
      },
      wind: {
        speed: 0.8,
        deg: 220,
        gust: 1.92,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-18 06:00:00',
    },
    {
      dt: 1710752400,
      main: {
        temp: 303.66,
        feels_like: 307.68,
        temp_min: 303.66,
        temp_max: 303.66,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 985,
        humidity: 63,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 80,
      },
      wind: {
        speed: 2.44,
        deg: 215,
        gust: 3.08,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-18 09:00:00',
    },
    {
      dt: 1710763200,
      main: {
        temp: 308.95,
        feels_like: 312.24,
        temp_min: 308.95,
        temp_max: 308.95,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 983,
        humidity: 41,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 81,
      },
      wind: {
        speed: 1.69,
        deg: 205,
        gust: 1.85,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-18 12:00:00',
    },
    {
      dt: 1710774000,
      main: {
        temp: 310.03,
        feels_like: 311.94,
        temp_min: 310.03,
        temp_max: 310.03,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 979,
        humidity: 34,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 61,
      },
      wind: {
        speed: 3.01,
        deg: 163,
        gust: 3.05,
      },
      visibility: 10000,
      pop: 0.05,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-18 15:00:00',
    },
    {
      dt: 1710784800,
      main: {
        temp: 304.7,
        feels_like: 307.63,
        temp_min: 304.7,
        temp_max: 304.7,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 980,
        humidity: 54,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 58,
      },
      wind: {
        speed: 3.89,
        deg: 185,
        gust: 7.22,
      },
      visibility: 10000,
      pop: 0.04,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-18 18:00:00',
    },
    {
      dt: 1710795600,
      main: {
        temp: 299.83,
        feels_like: 302.42,
        temp_min: 299.83,
        temp_max: 299.83,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 984,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 39,
      },
      wind: {
        speed: 3.15,
        deg: 166,
        gust: 7.38,
      },
      visibility: 10000,
      pop: 0.5,
      rain: {
        '3h': 0.69,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-18 21:00:00',
    },
    {
      dt: 1710806400,
      main: {
        temp: 298.84,
        feels_like: 299.76,
        temp_min: 298.84,
        temp_max: 298.84,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 982,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: {
        all: 36,
      },
      wind: {
        speed: 2.61,
        deg: 186,
        gust: 7.27,
      },
      visibility: 10000,
      pop: 0.19,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-19 00:00:00',
    },
    {
      dt: 1710817200,
      main: {
        temp: 298.43,
        feels_like: 299.36,
        temp_min: 298.43,
        temp_max: 298.43,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 982,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 68,
      },
      wind: {
        speed: 1.66,
        deg: 242,
        gust: 5.38,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-19 03:00:00',
    },
    {
      dt: 1710828000,
      main: {
        temp: 298.01,
        feels_like: 298.95,
        temp_min: 298.01,
        temp_max: 298.01,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 983,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 49,
      },
      wind: {
        speed: 1.56,
        deg: 227,
        gust: 5.44,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-19 06:00:00',
    },
    {
      dt: 1710838800,
      main: {
        temp: 304.4,
        feels_like: 308.53,
        temp_min: 304.4,
        temp_max: 304.4,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 985,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 68,
      },
      wind: {
        speed: 1.33,
        deg: 231,
        gust: 1.7,
      },
      visibility: 10000,
      pop: 0.01,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-19 09:00:00',
    },
    {
      dt: 1710849600,
      main: {
        temp: 307.99,
        feels_like: 311.65,
        temp_min: 307.99,
        temp_max: 307.99,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 983,
        humidity: 45,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 75,
      },
      wind: {
        speed: 0.81,
        deg: 267,
        gust: 1.37,
      },
      visibility: 10000,
      pop: 0.22,
      rain: {
        '3h': 0.13,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-19 12:00:00',
    },
    {
      dt: 1710860400,
      main: {
        temp: 305.9,
        feels_like: 309.22,
        temp_min: 305.9,
        temp_max: 305.9,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 979,
        humidity: 51,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 61,
      },
      wind: {
        speed: 2.64,
        deg: 157,
        gust: 3.9,
      },
      visibility: 10000,
      pop: 0.48,
      rain: {
        '3h': 0.71,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-19 15:00:00',
    },
    {
      dt: 1710871200,
      main: {
        temp: 297.43,
        feels_like: 298.19,
        temp_min: 297.43,
        temp_max: 297.43,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 982,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 73,
      },
      wind: {
        speed: 3.73,
        deg: 200,
        gust: 7.35,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        '3h': 5.52,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-19 18:00:00',
    },
    {
      dt: 1710882000,
      main: {
        temp: 297.33,
        feels_like: 298,
        temp_min: 297.33,
        temp_max: 297.33,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 984,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.27,
        deg: 166,
        gust: 3.11,
      },
      visibility: 10000,
      pop: 0.88,
      rain: {
        '3h': 1.78,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-19 21:00:00',
    },
  ],
  city: {
    id: 2339354,
    name: 'Ibadan',
    coord: {
      lat: 7.3878,
      lon: 3.8964,
    },
    country: 'NG',
    population: 3565108,
    timezone: 3600,
    sunrise: 1710395488,
    sunset: 1710438943,
  },
};

const shortResIbadan = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1710460800,
      main: {
        temp: 301.02,
        feels_like: 305.22,
        temp_min: 298.88,
        temp_max: 301.02,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 987,
        humidity: 82,
        temp_kf: 2.14,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: {
        all: 47,
      },
      wind: {
        speed: 1.99,
        deg: 245,
        gust: 5.91,
      },
      visibility: 10000,
      pop: 0.01,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-15 00:00:00',
    },
    {
      dt: 1710471600,
      main: {
        temp: 299.72,
        feels_like: 299.72,
        temp_min: 298.54,
        temp_max: 299.72,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 984,
        humidity: 84,
        temp_kf: 1.18,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 73,
      },
      wind: {
        speed: 1.87,
        deg: 249,
        gust: 5.89,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-15 03:00:00',
    },
  ],
  city: {
    id: 2339354,
    name: 'Ibadan',
    coord: {
      lat: 7.3878,
      lon: 3.8964,
    },
    country: 'NG',
    population: 3565108,
    timezone: 3600,
    sunrise: 1710395488,
    sunset: 1710438943,
  },
};
export const calendarData = {
    "city": {
        "id": 2643743,
        "name": "London",
        "coord": {
            "lon": -0.1257,
            "lat": 51.5085
        },
        "country": "GB",
        "population": 1000000,
        "timezone": 3600
    },
    "code": "200",
    "message": 8.0760651,
    "cnt": 30,
    "list": [
        {
            "dt": 1715252400,
            "sunrise": 1715228252,
            "sunset": 1715283382,
            "temp": {
                "day": 287.76,
                "min": 284.18,
                "max": 287.83,
                "night": 284.2,
                "eve": 287.83,
                "morn": 284.28
            },
            "feels_like": {
                "day": 287.44,
                "night": 283.84,
                "eve": 287.7,
                "morn": 283.88
            },
            "pressure": 1028,
            "humidity": 83,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "speed": 2.12,
            "deg": 163,
            "clouds": 32,
            "rain": 0.18
        },
        {
            "dt": 1715338800,
            "sunrise": 1715314554,
            "sunset": 1715369877,
            "temp": {
                "day": 289.46,
                "min": 284.2,
                "max": 289.46,
                "night": 286.7,
                "eve": 289.46,
                "morn": 285.77
            },
            "feels_like": {
                "day": 289.26,
                "night": 286.59,
                "eve": 289.39,
                "morn": 285.54
            },
            "pressure": 1024,
            "humidity": 81,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "speed": 3.89,
            "deg": 86,
            "clouds": 34
        },
        {
            "dt": 1715425200,
            "sunrise": 1715400858,
            "sunset": 1715456371,
            "temp": {
                "day": 290.2,
                "min": 286.41,
                "max": 290.2,
                "night": 287.08,
                "eve": 290.16,
                "morn": 286.41
            },
            "feels_like": {
                "day": 290.1,
                "night": 287.04,
                "eve": 290.19,
                "morn": 286.27
            },
            "pressure": 1020,
            "humidity": 82,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "speed": 3.89,
            "deg": 86,
            "clouds": 60
        },
        {
            "dt": 1715511600,
            "sunrise": 1715487164,
            "sunset": 1715542865,
            "temp": {
                "day": 290.49,
                "min": 286.88,
                "max": 290.49,
                "night": 286.88,
                "eve": 289.38,
                "morn": 287.82
            },
            "feels_like": {
                "day": 290.45,
                "night": 286.66,
                "eve": 289.3,
                "morn": 287.82
            },
            "pressure": 1015,
            "humidity": 83,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "speed": 4.83,
            "deg": 197,
            "clouds": 44,
            "rain": 0.14
        },
        {
            "dt": 1715598000,
            "sunrise": 1715573471,
            "sunset": 1715629358,
            "temp": {
                "day": 286.82,
                "min": 286.34,
                "max": 287.66,
                "night": 286.34,
                "eve": 287.66,
                "morn": 286.58
            },
            "feels_like": {
                "day": 286.62,
                "night": 285.99,
                "eve": 287.65,
                "morn": 286.35
            },
            "pressure": 1006,
            "humidity": 91,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "speed": 9.8,
            "deg": 184,
            "clouds": 94,
            "rain": 6.34
        },
        {
            "dt": 1715684400,
            "sunrise": 1715659781,
            "sunset": 1715715850,
            "temp": {
                "day": 286.68,
                "min": 285.46,
                "max": 286.68,
                "night": 285.46,
                "eve": 286.64,
                "morn": 285.66
            },
            "feels_like": {
                "day": 286.28,
                "night": 285.1,
                "eve": 286.37,
                "morn": 285.08
            },
            "pressure": 1005,
            "humidity": 84,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "speed": 9.55,
            "deg": 200,
            "clouds": 74,
            "rain": 1.27
        },
        {
            "dt": 1715770800,
            "sunrise": 1715746092,
            "sunset": 1715802342,
            "temp": {
                "day": 287.25,
                "min": 283.85,
                "max": 287.25,
                "night": 283.85,
                "eve": 287.08,
                "morn": 284.97
            },
            "feels_like": {
                "day": 286.88,
                "night": 283.38,
                "eve": 286.72,
                "morn": 284.58
            },
            "pressure": 1013,
            "humidity": 83,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "speed": 4.99,
            "deg": 224,
            "clouds": 42,
            "rain": 0.94
        },
        {
            "dt": 1715857200,
            "sunrise": 1715832406,
            "sunset": 1715888832,
            "temp": {
                "day": 288.09,
                "min": 283.78,
                "max": 288.09,
                "night": 284.91,
                "eve": 288.07,
                "morn": 283.78
            },
            "feels_like": {
                "day": 287.6,
                "night": 284.52,
                "eve": 287.76,
                "morn": 283.27
            },
            "pressure": 1018,
            "humidity": 75,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "speed": 6.63,
            "deg": 26,
            "clouds": 16,
            "rain": 0.12
        },
        {
            "dt": 1715943600,
            "sunrise": 1715918721,
            "sunset": 1715975321,
            "temp": {
                "day": 288.03,
                "min": 283.98,
                "max": 288.03,
                "night": 284.08,
                "eve": 287.54,
                "morn": 283.98
            },
            "feels_like": {
                "day": 287.53,
                "night": 283.32,
                "eve": 287.12,
                "morn": 283.42
            },
            "pressure": 1018,
            "humidity": 75,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "speed": 10.24,
            "deg": 31,
            "clouds": 34
        },
        {
            "dt": 1716030000,
            "sunrise": 1716005039,
            "sunset": 1716061810,
            "temp": {
                "day": 286.29,
                "min": 283.16,
                "max": 286.29,
                "night": 284.88,
                "eve": 285.55,
                "morn": 283.16
            },
            "feels_like": {
                "day": 285.7,
                "night": 284.64,
                "eve": 285.22,
                "morn": 282.36
            },
            "pressure": 1010,
            "humidity": 78,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "speed": 11.95,
            "deg": 25,
            "clouds": 83,
            "rain": 8.05
        },
        {
            "dt": 1716116400,
            "sunrise": 1716091359,
            "sunset": 1716148297,
            "temp": {
                "day": 285.83,
                "min": 284.02,
                "max": 287.82,
                "night": 286.02,
                "eve": 287.82,
                "morn": 284.02
            },
            "feels_like": {
                "day": 285.53,
                "night": 285.82,
                "eve": 287.69,
                "morn": 283.67
            },
            "pressure": 1005,
            "humidity": 91,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "speed": 6.06,
            "deg": 312,
            "clouds": 92,
            "rain": 11.2
        },
        {
            "dt": 1716202800,
            "sunrise": 1716177681,
            "sunset": 1716234783,
            "temp": {
                "day": 285.54,
                "min": 280.58,
                "max": 286.02,
                "night": 280.58,
                "eve": 283.18,
                "morn": 285.68
            },
            "feels_like": {
                "day": 285.29,
                "night": 276.17,
                "eve": 282.61,
                "morn": 285.44
            },
            "pressure": 1012,
            "humidity": 94,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "speed": 9.73,
            "deg": 339,
            "clouds": 74,
            "rain": 7.26
        },
        {
            "dt": 1716289200,
            "sunrise": 1716264005,
            "sunset": 1716321267,
            "temp": {
                "day": 284.23,
                "min": 279.98,
                "max": 284.23,
                "night": 280.08,
                "eve": 282.93,
                "morn": 279.98
            },
            "feels_like": {
                "day": 283.06,
                "night": 276.91,
                "eve": 280.24,
                "morn": 275.78
            },
            "pressure": 1027,
            "humidity": 64,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "speed": 9.15,
            "deg": 348,
            "clouds": 23,
            "rain": 1.35
        },
        {
            "dt": 1716375600,
            "sunrise": 1716350331,
            "sunset": 1716407751,
            "temp": {
                "day": 282.77,
                "min": 279.28,
                "max": 282.77,
                "night": 280.75,
                "eve": 282.31,
                "morn": 279.28
            },
            "feels_like": {
                "day": 279.67,
                "night": 276.67,
                "eve": 278.92,
                "morn": 275.49
            },
            "pressure": 1027,
            "humidity": 79,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "speed": 8.1,
            "deg": 341,
            "clouds": 51,
            "rain": 4.5
        },
        {
            "dt": 1716462000,
            "sunrise": 1716436660,
            "sunset": 1716494233,
            "temp": {
                "day": 282.67,
                "min": 280.1,
                "max": 284.64,
                "night": 283.07,
                "eve": 284.64,
                "morn": 280.1
            },
            "feels_like": {
                "day": 279.24,
                "night": 282.72,
                "eve": 284.3,
                "morn": 275.93
            },
            "pressure": 1015,
            "humidity": 94,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "speed": 8.1,
            "deg": 341,
            "clouds": 86,
            "rain": 7.64
        },
        {
            "dt": 1716548400,
            "sunrise": 1716522991,
            "sunset": 1716580713,
            "temp": {
                "day": 286.95,
                "min": 283.07,
                "max": 287.82,
                "night": 286.11,
                "eve": 287.82,
                "morn": 284.6
            },
            "feels_like": {
                "day": 286.76,
                "night": 285.84,
                "eve": 287.69,
                "morn": 284.26
            },
            "pressure": 1014,
            "humidity": 91,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "speed": 6.32,
            "deg": 24,
            "clouds": 66,
            "rain": 0.88
        },
        {
            "dt": 1716634800,
            "sunrise": 1716609325,
            "sunset": 1716667192,
            "temp": {
                "day": 287.1,
                "min": 285.64,
                "max": 287.34,
                "night": 286.55,
                "eve": 287.34,
                "morn": 285.64
            },
            "feels_like": {
                "day": 286.87,
                "night": 286.4,
                "eve": 287.24,
                "morn": 285.27
            },
            "pressure": 1015,
            "humidity": 89,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "speed": 6.87,
            "deg": 26,
            "clouds": 77,
            "rain": 0.61
        },
        {
            "dt": 1716721200,
            "sunrise": 1716695661,
            "sunset": 1716753669,
            "temp": {
                "day": 289.22,
                "min": 286.55,
                "max": 289.26,
                "night": 287.23,
                "eve": 289.26,
                "morn": 286.56
            },
            "feels_like": {
                "day": 289.18,
                "night": 287.23,
                "eve": 289.28,
                "morn": 286.41
            },
            "pressure": 1016,
            "humidity": 88,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "speed": 4.26,
            "deg": 60,
            "clouds": 52,
            "rain": 1.01
        },
        {
            "dt": 1716807600,
            "sunrise": 1716782000,
            "sunset": 1716840144,
            "temp": {
                "day": 289.66,
                "min": 286.75,
                "max": 289.85,
                "night": 286.75,
                "eve": 289.85,
                "morn": 286.95
            },
            "feels_like": {
                "day": 289.69,
                "night": 286.65,
                "eve": 289.87,
                "morn": 286.89
            },
            "pressure": 1013,
            "humidity": 89,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "speed": 2.69,
            "deg": 43,
            "clouds": 40,
            "rain": 2.78
        },
        {
            "dt": 1716894000,
            "sunrise": 1716868341,
            "sunset": 1716926618,
            "temp": {
                "day": 290.79,
                "min": 286.75,
                "max": 290.79,
                "night": 288.11,
                "eve": 289.72,
                "morn": 287.29
            },
            "feels_like": {
                "day": 290.65,
                "night": 288.17,
                "eve": 289.73,
                "morn": 287.14
            },
            "pressure": 1011,
            "humidity": 78,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "speed": 5.46,
            "deg": 321,
            "clouds": 71,
            "rain": 3.24
        },
        {
            "dt": 1716980400,
            "sunrise": 1716954685,
            "sunset": 1717013090,
            "temp": {
                "day": 290.4,
                "min": 288,
                "max": 291.45,
                "night": 288.82,
                "eve": 291.45,
                "morn": 288
            },
            "feels_like": {
                "day": 290.64,
                "night": 288.82,
                "eve": 291.69,
                "morn": 288.07
            },
            "pressure": 1016,
            "humidity": 94,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "speed": 8.39,
            "deg": 11,
            "clouds": 97,
            "rain": 3.71
        },
        {
            "dt": 1717066800,
            "sunrise": 1717041032,
            "sunset": 1717099560,
            "temp": {
                "day": 290.3,
                "min": 288.04,
                "max": 291.67,
                "night": 288.51,
                "eve": 291.67,
                "morn": 288.04
            },
            "feels_like": {
                "day": 290.39,
                "night": 288.61,
                "eve": 291.93,
                "morn": 288.01
            },
            "pressure": 1019,
            "humidity": 89,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "speed": 8.39,
            "deg": 11,
            "clouds": 98,
            "rain": 0.51
        },
        {
            "dt": 1717153200,
            "sunrise": 1717127381,
            "sunset": 1717186028,
            "temp": {
                "day": 289.99,
                "min": 287.39,
                "max": 289.99,
                "night": 287.39,
                "eve": 289.21,
                "morn": 287.72
            },
            "feels_like": {
                "day": 289.95,
                "night": 287.06,
                "eve": 289.17,
                "morn": 287.69
            },
            "pressure": 1023,
            "humidity": 85,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "speed": 5.82,
            "deg": 349,
            "clouds": 69,
            "rain": 0.11
        },
        {
            "dt": 1717239600,
            "sunrise": 1717213733,
            "sunset": 1717272494,
            "temp": {
                "day": 288.94,
                "min": 284.35,
                "max": 289.09,
                "night": 284.35,
                "eve": 289.09,
                "morn": 285.79
            },
            "feels_like": {
                "day": 288.51,
                "night": 283.95,
                "eve": 288.85,
                "morn": 285.38
            },
            "pressure": 1023,
            "humidity": 74,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "speed": 5.53,
            "deg": 357,
            "clouds": 41
        },
        {
            "dt": 1717326000,
            "sunrise": 1717300088,
            "sunset": 1717358958,
            "temp": {
                "day": 289.49,
                "min": 284.35,
                "max": 289.49,
                "night": 287.06,
                "eve": 289.38,
                "morn": 286.4
            },
            "feels_like": {
                "day": 289.22,
                "night": 286.96,
                "eve": 289.25,
                "morn": 286.1
            },
            "pressure": 1013,
            "humidity": 78,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "speed": 4.33,
            "deg": 180,
            "clouds": 10,
            "rain": 0.11
        },
        {
            "dt": 1717412400,
            "sunrise": 1717386445,
            "sunset": 1717445420,
            "temp": {
                "day": 288.55,
                "min": 286.45,
                "max": 288.55,
                "night": 286.45,
                "eve": 288.31,
                "morn": 287.35
            },
            "feels_like": {
                "day": 288.29,
                "night": 286.29,
                "eve": 288.26,
                "morn": 287.18
            },
            "pressure": 1004,
            "humidity": 82,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "speed": 8.96,
            "deg": 190,
            "clouds": 75,
            "rain": 6.47
        },
        {
            "dt": 1717498800,
            "sunrise": 1717472806,
            "sunset": 1717531879,
            "temp": {
                "day": 287.16,
                "min": 284.5,
                "max": 287.16,
                "night": 284.51,
                "eve": 286.38,
                "morn": 284.5
            },
            "feels_like": {
                "day": 286.47,
                "night": 283.82,
                "eve": 285.85,
                "morn": 283.99
            },
            "pressure": 1007,
            "humidity": 71,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "speed": 6.48,
            "deg": 242,
            "clouds": 17,
            "rain": 6.87
        },
        {
            "dt": 1717585200,
            "sunrise": 1717559169,
            "sunset": 1717618336,
            "temp": {
                "day": 287.72,
                "min": 284.51,
                "max": 287.72,
                "night": 286.88,
                "eve": 286.74,
                "morn": 284.64
            },
            "feels_like": {
                "day": 287.11,
                "night": 286.79,
                "eve": 286.53,
                "morn": 284.06
            },
            "pressure": 1014,
            "humidity": 72,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "speed": 9.63,
            "deg": 182,
            "clouds": 30,
            "rain": 4.71
        },
        {
            "dt": 1717671600,
            "sunrise": 1717645535,
            "sunset": 1717704791,
            "temp": {
                "day": 287.53,
                "min": 285.85,
                "max": 287.53,
                "night": 285.85,
                "eve": 287.3,
                "morn": 286.65
            },
            "feels_like": {
                "day": 287.35,
                "night": 285.63,
                "eve": 287.2,
                "morn": 286.48
            },
            "pressure": 1008,
            "humidity": 89,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "speed": 7.83,
            "deg": 214,
            "clouds": 82,
            "rain": 7.21
        },
        {
            "dt": 1717758000,
            "sunrise": 1717731904,
            "sunset": 1717791243,
            "temp": {
                "day": 286.5,
                "min": 284.37,
                "max": 286.5,
                "night": 284.37,
                "eve": 286.15,
                "morn": 284.95
            },
            "feels_like": {
                "day": 286.19,
                "night": 283.87,
                "eve": 285.78,
                "morn": 284.61
            },
            "pressure": 1006,
            "humidity": 88,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "speed": 5.48,
            "deg": 254,
            "clouds": 68,
            "rain": 6.95
        }
    ]
}

export const pollutionData = {
  coord: [50.0, 50.0],
  list: [
    {
      dt: 1605916800,
      main: {
        aqi: 1.0,
      },
      components: {
        co: 211.954,
        no: 0.0,
        no2: 0.217,
        o3: 72.956,
        so2: 0.514,
        pm2_5: 2.563,
        pm10: 5.757,
        nh3: 0.216,
      },
    },
    {
      dt: 1605920400,
      main: {
        aqi: 1.0,
      },
      components: {
        co: 211.954,
        no: 0.0,
        no2: 0.201,
        o3: 72.241,
        so2: 0.469,
        pm2_5: 2.662,
        pm10: 5.622,
        nh3: 0.224,
      },
    },
    {
      dt: 1605924000,
      main: {
        aqi: 1.0,
      },
      components: {
        co: 213.623,
        no: 0.0,
        no2: 0.185,
        o3: 71.526,
        so2: 0.443,
        pm2_5: 2.724,
        pm10: 5.51,
        nh3: 0.23,
      },
    },
    {
      dt: 1605927600,
      main: {
        aqi: 1.0,
      },
      components: {
        co: 214.623,
        no: 0.0,
        no2: 0.17,
        o3: 72.241,
        so2: 0.432,
        pm2_5: 2.812,
        pm10: 5.687,
        nh3: 0.234,
      },
    },
  ],
};

export const sollarIrradianceData = {
  lat: 34,
  lon: 34,
  date: '2023-03-28',
  tz: '+02:00',
  sunrise: '2023-03-28T05:37:14',
  sunset: '2023-03-28T18:01:37',
  irradiance: {
    daily: [
      {
        clear_sky: {
          ghi: 6383.04,
          dni: 8319.8,
          dhi: 1201.07,
        },
        cloudy_sky: {
          ghi: 5836.23,
          dni: 6776.87,
          dhi: 1584.37,
        },
      },
    ],
    hourly: [
      {
        hour: 0,
        clear_sky: {
          ghi: 0,
          dni: 0,
          dhi: 0,
        },
        cloudy_sky: {
          ghi: 0,
          dni: 0,
          dhi: 0,
        },
      },
      {
        hour: 1,
        clear_sky: {
          ghi: 0,
          dni: 0,
          dhi: 0,
        },
        cloudy_sky: {
          ghi: 0,
          dni: 0,
          dhi: 0,
        },
      },
      {
        hour: 2,
        clear_sky: {
          ghi: 0,
          dni: 0,
          dhi: 0,
        },
        cloudy_sky: {
          ghi: 0,
          dni: 0,
          dhi: 0,
        },
      },
      {
        hour: 3,
        clear_sky: {
          ghi: 0,
          dni: 0,
          dhi: 0,
        },
        cloudy_sky: {
          ghi: 0,
          dni: 0,
          dhi: 0,
        },
      },
      {
        hour: 4,
        clear_sky: {
          ghi: 0,
          dni: 0,
          dhi: 0,
        },
        cloudy_sky: {
          ghi: 0,
          dni: 0,
          dhi: 0,
        },
      },
      {
        hour: 5,
        clear_sky: {
          ghi: 0,
          dni: 0,
          dhi: 0,
        },
        cloudy_sky: {
          ghi: 0,
          dni: 0,
          dhi: 0,
        },
      },
      {
        hour: 6,
        clear_sky: {
          ghi: 4.25,
          dni: 0.73,
          dhi: 3.52,
        },
        cloudy_sky: {
          ghi: 3.43,
          dni: 0.41,
          dhi: 3.02,
        },
      },
      {
        hour: 7,
        clear_sky: {
          ghi: 115.4,
          dni: 378.23,
          dhi: 48.82,
        },
        cloudy_sky: {
          ghi: 90.79,
          dni: 247.14,
          dhi: 47.29,
        },
      },
      {
        hour: 8,
        clear_sky: {
          ghi: 319.36,
          dni: 610.29,
          dhi: 86.67,
        },
        cloudy_sky: {
          ghi: 261.01,
          dni: 369.79,
          dhi: 120.02,
        },
      },
      {
        hour: 9,
        clear_sky: {
          ghi: 524.55,
          dni: 740.47,
          dhi: 107.61,
        },
        cloudy_sky: {
          ghi: 398.92,
          dni: 360.05,
          dhi: 196.18,
        },
      },
      {
        hour: 10,
        clear_sky: {
          ghi: 693.76,
          dni: 807.95,
          dhi: 121.26,
        },
        cloudy_sky: {
          ghi: 520.28,
          dni: 378.22,
          dhi: 252.28,
        },
      },
      {
        hour: 11,
        clear_sky: {
          ghi: 813.42,
          dni: 847.94,
          dhi: 128.46,
        },
        cloudy_sky: {
          ghi: 730.2,
          dni: 667.45,
          dhi: 191.04,
        },
      },
      {
        hour: 12,
        clear_sky: {
          ghi: 870.88,
          dni: 865.74,
          dhi: 131.59,
        },
        cloudy_sky: {
          ghi: 829.87,
          dni: 787.48,
          dhi: 157.4,
        },
      },
      {
        hour: 13,
        clear_sky: {
          ghi: 859.56,
          dni: 863.79,
          dhi: 130.63,
        },
        cloudy_sky: {
          ghi: 826.31,
          dni: 784.68,
          dhi: 164.14,
        },
      },
      {
        hour: 14,
        clear_sky: {
          ghi: 780.46,
          dni: 842.11,
          dhi: 125.07,
        },
        cloudy_sky: {
          ghi: 775.24,
          dni: 825.45,
          dhi: 132.8,
        },
      },
      {
        hour: 15,
        clear_sky: {
          ghi: 641.16,
          dni: 794.85,
          dhi: 115.22,
        },
        cloudy_sky: {
          ghi: 639.98,
          dni: 789.39,
          dhi: 117.65,
        },
      },
      {
        hour: 16,
        clear_sky: {
          ghi: 455.48,
          dni: 708.64,
          dhi: 99.7,
        },
        cloudy_sky: {
          ghi: 455.36,
          dni: 708,
          dhi: 99.89,
        },
      },
      {
        hour: 17,
        clear_sky: {
          ghi: 246.01,
          dni: 551.11,
          dhi: 74.9,
        },
        cloudy_sky: {
          ghi: 246.08,
          dni: 550.99,
          dhi: 75,
        },
      },
      {
        hour: 18,
        clear_sky: {
          ghi: 58.76,
          dni: 307.97,
          dhi: 27.63,
        },
        cloudy_sky: {
          ghi: 58.76,
          dni: 307.8,
          dhi: 27.64,
        },
      },
      {
        hour: 19,
        clear_sky: {
          ghi: 0,
          dni: 0,
          dhi: 0,
        },
        cloudy_sky: {
          ghi: 0,
          dni: 0,
          dhi: 0,
        },
      },
      {
        hour: 20,
        clear_sky: {
          ghi: 0,
          dni: 0,
          dhi: 0,
        },
        cloudy_sky: {
          ghi: 0,
          dni: 0,
          dhi: 0,
        },
      },
      {
        hour: 21,
        clear_sky: {
          ghi: 0,
          dni: 0,
          dhi: 0,
        },
        cloudy_sky: {
          ghi: 0,
          dni: 0,
          dhi: 0,
        },
      },
      {
        hour: 22,
        clear_sky: {
          ghi: 0,
          dni: 0,
          dhi: 0,
        },
        cloudy_sky: {
          ghi: 0,
          dni: 0,
          dhi: 0,
        },
      },
      {
        hour: 23,
        clear_sky: {
          ghi: 0,
          dni: 0,
          dhi: 0,
        },
        cloudy_sky: {
          ghi: 0,
          dni: 0,
          dhi: 0,
        },
      },
    ],
  },
};
