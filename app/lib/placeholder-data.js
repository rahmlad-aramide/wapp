// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}
       
export const weatherCoordinateIbadan = {
    "coord": {
        "lon": 3.3792,
        "lat": 6.5244
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 29.2,
        "feels_like": 33.57,
        "temp_min": 29.2,
        "temp_max": 29.2,
        "pressure": 1011,
        "humidity": 72,
        "sea_level": 1011,
        "grnd_level": 1010
    },
    "visibility": 10000,
    "wind": {
        "speed": 3.05,
        "deg": 220,
        "gust": 3.05
    },
    "clouds": {
        "all": 88
    },
    "dt": 1710574621,
    "sys": {
        "country": "NG",
        "sunrise": 1710568347,
        "sunset": 1710611862
    },
    "timezone": 3600,
    "id": 2566677,
    "name": "Shogunle",
    "cod": 200
}            

// https://api.openweathermap.org/data/2.5/weather?q=Ibadan&appid={API key}
                          
export const weatherCityIbadan = {
    "coord": {
        "lon": 3.8964,
        "lat": 7.3878
    },
    "weather": [
        {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 302.09,
        "feels_like": 307.51,
        "temp_min": 302.09,
        "temp_max": 302.09,
        "pressure": 1014,
        "humidity": 79
    },
    "visibility": 10000,
    "wind": {
        "speed": 2.57,
        "deg": 230
    },
    "clouds": {
        "all": 20
    },
    "dt": 1710453110,
    "sys": {
        "type": 1,
        "id": 1165,
        "country": "NG",
        "sunrise": 1710395488,
        "sunset": 1710438943
    },
    "timezone": 3600,
    "id": 2339354,
    "name": "Ibadan",
    "cod": 200
}

// api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid={API key}

export const forecastCoordinateIbadan = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1710579600,
            "main": {
                "temp": 30.15,
                "feels_like": 34.91,
                "temp_min": 30.15,
                "temp_max": 30.15,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 1010,
                "humidity": 68,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 74
            },
            "wind": {
                "speed": 3.38,
                "deg": 221,
                "gust": 3.13
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-16 09:00:00"
        },
        {
            "dt": 1710590400,
            "main": {
                "temp": 30.46,
                "feels_like": 35.4,
                "temp_min": 30.46,
                "temp_max": 31.08,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 1009,
                "humidity": 67,
                "temp_kf": -0.62
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 65
            },
            "wind": {
                "speed": 5.2,
                "deg": 202,
                "gust": 4.17
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-16 12:00:00"
        },
        {
            "dt": 1710601200,
            "main": {
                "temp": 30.76,
                "feels_like": 35.85,
                "temp_min": 30.76,
                "temp_max": 31.07,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 1006,
                "humidity": 66,
                "temp_kf": -0.31
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 34
            },
            "wind": {
                "speed": 6.76,
                "deg": 202,
                "gust": 6.34
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-16 15:00:00"
        },
        {
            "dt": 1710612000,
            "main": {
                "temp": 29.39,
                "feels_like": 34.68,
                "temp_min": 29.39,
                "temp_max": 29.39,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 1007,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 10
            },
            "wind": {
                "speed": 6.24,
                "deg": 195,
                "gust": 7.36
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-16 18:00:00"
        },
        {
            "dt": 1710622800,
            "main": {
                "temp": 29.16,
                "feels_like": 34.31,
                "temp_min": 29.16,
                "temp_max": 29.16,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 1009,
                "humidity": 76,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 8
            },
            "wind": {
                "speed": 4.26,
                "deg": 219,
                "gust": 5.26
            },
            "visibility": 10000,
            "pop": 0.1,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-16 21:00:00"
        },
        {
            "dt": 1710633600,
            "main": {
                "temp": 28.71,
                "feels_like": 33.55,
                "temp_min": 28.71,
                "temp_max": 28.71,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 1007,
                "humidity": 78,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 23
            },
            "wind": {
                "speed": 5.47,
                "deg": 217,
                "gust": 6.85
            },
            "visibility": 10000,
            "pop": 0.08,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-17 00:00:00"
        },
        {
            "dt": 1710644400,
            "main": {
                "temp": 28.41,
                "feels_like": 33.15,
                "temp_min": 28.41,
                "temp_max": 28.41,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1006,
                "humidity": 80,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 14
            },
            "wind": {
                "speed": 3.96,
                "deg": 248,
                "gust": 5.23
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-17 03:00:00"
        },
        {
            "dt": 1710655200,
            "main": {
                "temp": 28.31,
                "feels_like": 33.06,
                "temp_min": 28.31,
                "temp_max": 28.31,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 1007,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 13
            },
            "wind": {
                "speed": 3.64,
                "deg": 216,
                "gust": 4.69
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-17 06:00:00"
        },
        {
            "dt": 1710666000,
            "main": {
                "temp": 30.41,
                "feels_like": 36.06,
                "temp_min": 30.41,
                "temp_max": 30.41,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 1009,
                "humidity": 70,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 68
            },
            "wind": {
                "speed": 4.02,
                "deg": 204,
                "gust": 3.95
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-17 09:00:00"
        },
        {
            "dt": 1710676800,
            "main": {
                "temp": 31.09,
                "feels_like": 36.94,
                "temp_min": 31.09,
                "temp_max": 31.09,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 1008,
                "humidity": 67,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 70
            },
            "wind": {
                "speed": 4.97,
                "deg": 193,
                "gust": 4.11
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-17 12:00:00"
        },
        {
            "dt": 1710687600,
            "main": {
                "temp": 31.43,
                "feels_like": 36.91,
                "temp_min": 31.43,
                "temp_max": 31.43,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1006,
                "humidity": 64,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 16
            },
            "wind": {
                "speed": 5.67,
                "deg": 202,
                "gust": 6.1
            },
            "visibility": 10000,
            "pop": 0.04,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-17 15:00:00"
        },
        {
            "dt": 1710698400,
            "main": {
                "temp": 29.93,
                "feels_like": 36.11,
                "temp_min": 29.93,
                "temp_max": 29.93,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1006,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 8
            },
            "wind": {
                "speed": 5.19,
                "deg": 199,
                "gust": 6.68
            },
            "visibility": 10000,
            "pop": 0.14,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-17 18:00:00"
        },
        {
            "dt": 1710709200,
            "main": {
                "temp": 29.41,
                "feels_like": 35.19,
                "temp_min": 29.41,
                "temp_max": 29.41,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 1007,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 2
            },
            "wind": {
                "speed": 5.15,
                "deg": 212,
                "gust": 7.51
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-17 21:00:00"
        },
        {
            "dt": 1710720000,
            "main": {
                "temp": 29.06,
                "feels_like": 34.91,
                "temp_min": 29.06,
                "temp_max": 29.06,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 1007,
                "humidity": 80,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 3
            },
            "wind": {
                "speed": 5.11,
                "deg": 217,
                "gust": 7.66
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-18 00:00:00"
        },
        {
            "dt": 1710730800,
            "main": {
                "temp": 28.69,
                "feels_like": 34.09,
                "temp_min": 28.69,
                "temp_max": 28.69,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 1005,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 72
            },
            "wind": {
                "speed": 4.55,
                "deg": 224,
                "gust": 6.56
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-18 03:00:00"
        },
        {
            "dt": 1710741600,
            "main": {
                "temp": 28.46,
                "feels_like": 33.84,
                "temp_min": 28.46,
                "temp_max": 28.46,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 1007,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 86
            },
            "wind": {
                "speed": 3.37,
                "deg": 226,
                "gust": 4.65
            },
            "visibility": 10000,
            "pop": 0.2,
            "rain": {
                "3h": 0.18
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-18 06:00:00"
        },
        {
            "dt": 1710752400,
            "main": {
                "temp": 30.66,
                "feels_like": 36.98,
                "temp_min": 30.66,
                "temp_max": 30.66,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 1008,
                "humidity": 71,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 31
            },
            "wind": {
                "speed": 4.07,
                "deg": 222,
                "gust": 4.66
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-18 09:00:00"
        },
        {
            "dt": 1710763200,
            "main": {
                "temp": 31.01,
                "feels_like": 37.63,
                "temp_min": 31.01,
                "temp_max": 31.01,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 1007,
                "humidity": 70,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 40
            },
            "wind": {
                "speed": 5,
                "deg": 208,
                "gust": 4.6
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-18 12:00:00"
        },
        {
            "dt": 1710774000,
            "main": {
                "temp": 31.46,
                "feels_like": 37.9,
                "temp_min": 31.46,
                "temp_max": 31.46,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 1004,
                "humidity": 67,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 35
            },
            "wind": {
                "speed": 6.41,
                "deg": 201,
                "gust": 6.11
            },
            "visibility": 10000,
            "pop": 0.17,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-18 15:00:00"
        },
        {
            "dt": 1710784800,
            "main": {
                "temp": 29.92,
                "feels_like": 36.34,
                "temp_min": 29.92,
                "temp_max": 29.92,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 1005,
                "humidity": 76,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 30
            },
            "wind": {
                "speed": 5.41,
                "deg": 191,
                "gust": 7.17
            },
            "visibility": 10000,
            "pop": 0.17,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-18 18:00:00"
        },
        {
            "dt": 1710795600,
            "main": {
                "temp": 29.41,
                "feels_like": 35.66,
                "temp_min": 29.41,
                "temp_max": 29.41,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 1007,
                "humidity": 79,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 65
            },
            "wind": {
                "speed": 4.82,
                "deg": 191,
                "gust": 6.81
            },
            "visibility": 10000,
            "pop": 0.07,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-18 21:00:00"
        },
        {
            "dt": 1710806400,
            "main": {
                "temp": 29.01,
                "feels_like": 34.77,
                "temp_min": 29.01,
                "temp_max": 29.01,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 1007,
                "humidity": 80,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 70
            },
            "wind": {
                "speed": 4.43,
                "deg": 211,
                "gust": 6.55
            },
            "visibility": 10000,
            "pop": 0.05,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-19 00:00:00"
        },
        {
            "dt": 1710817200,
            "main": {
                "temp": 28.6,
                "feels_like": 34.04,
                "temp_min": 28.6,
                "temp_max": 28.6,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1006,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 90
            },
            "wind": {
                "speed": 4.66,
                "deg": 231,
                "gust": 6.5
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-19 03:00:00"
        },
        {
            "dt": 1710828000,
            "main": {
                "temp": 28.47,
                "feels_like": 33.68,
                "temp_min": 28.47,
                "temp_max": 28.47,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 1007,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 95
            },
            "wind": {
                "speed": 4.9,
                "deg": 236,
                "gust": 7.42
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-19 06:00:00"
        },
        {
            "dt": 1710838800,
            "main": {
                "temp": 30.1,
                "feels_like": 35.53,
                "temp_min": 30.1,
                "temp_max": 30.1,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 1009,
                "humidity": 71,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.9,
                "deg": 224,
                "gust": 4.41
            },
            "visibility": 10000,
            "pop": 0.28,
            "rain": {
                "3h": 0.23
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-19 09:00:00"
        },
        {
            "dt": 1710849600,
            "main": {
                "temp": 31.13,
                "feels_like": 36.75,
                "temp_min": 31.13,
                "temp_max": 31.13,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 1007,
                "humidity": 66,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.26,
                "deg": 205,
                "gust": 4.65
            },
            "visibility": 10000,
            "pop": 0.65,
            "rain": {
                "3h": 0.74
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-19 12:00:00"
        },
        {
            "dt": 1710860400,
            "main": {
                "temp": 30.4,
                "feels_like": 35.26,
                "temp_min": 30.4,
                "temp_max": 30.4,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 1005,
                "humidity": 67,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.11,
                "deg": 195,
                "gust": 4.86
            },
            "visibility": 10000,
            "pop": 0.56,
            "rain": {
                "3h": 0.28
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-19 15:00:00"
        },
        {
            "dt": 1710871200,
            "main": {
                "temp": 29.28,
                "feels_like": 34.18,
                "temp_min": 29.28,
                "temp_max": 29.28,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1006,
                "humidity": 74,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.99,
                "deg": 192,
                "gust": 6.06
            },
            "visibility": 10000,
            "pop": 0.57,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-19 18:00:00"
        },
        {
            "dt": 1710882000,
            "main": {
                "temp": 28.91,
                "feels_like": 33.67,
                "temp_min": 28.91,
                "temp_max": 28.91,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 1009,
                "humidity": 76,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.76,
                "deg": 240,
                "gust": 3.56
            },
            "visibility": 10000,
            "pop": 0.61,
            "rain": {
                "3h": 0.63
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-19 21:00:00"
        },
        {
            "dt": 1710892800,
            "main": {
                "temp": 28.64,
                "feels_like": 33,
                "temp_min": 28.64,
                "temp_max": 28.64,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 1007,
                "humidity": 76,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.85,
                "deg": 216,
                "gust": 6.81
            },
            "visibility": 10000,
            "pop": 0.59,
            "rain": {
                "3h": 0.11
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-20 00:00:00"
        },
        {
            "dt": 1710903600,
            "main": {
                "temp": 28.43,
                "feels_like": 32.84,
                "temp_min": 28.43,
                "temp_max": 28.43,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 1005,
                "humidity": 78,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.55,
                "deg": 239,
                "gust": 6.87
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-20 03:00:00"
        },
        {
            "dt": 1710914400,
            "main": {
                "temp": 28.4,
                "feels_like": 32.94,
                "temp_min": 28.4,
                "temp_max": 28.4,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 1007,
                "humidity": 79,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.29,
                "deg": 241,
                "gust": 4.98
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-20 06:00:00"
        },
        {
            "dt": 1710925200,
            "main": {
                "temp": 30.36,
                "feels_like": 35.16,
                "temp_min": 30.36,
                "temp_max": 30.36,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 1009,
                "humidity": 67,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.77,
                "deg": 236,
                "gust": 3.31
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-20 09:00:00"
        },
        {
            "dt": 1710936000,
            "main": {
                "temp": 31.52,
                "feels_like": 36.83,
                "temp_min": 31.52,
                "temp_max": 31.52,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 1008,
                "humidity": 63,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 98
            },
            "wind": {
                "speed": 4.97,
                "deg": 193,
                "gust": 3.91
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-20 12:00:00"
        },
        {
            "dt": 1710946800,
            "main": {
                "temp": 31.38,
                "feels_like": 36.5,
                "temp_min": 31.38,
                "temp_max": 31.38,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 1005,
                "humidity": 63,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 90
            },
            "wind": {
                "speed": 5.29,
                "deg": 193,
                "gust": 4.91
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-20 15:00:00"
        },
        {
            "dt": 1710957600,
            "main": {
                "temp": 29.68,
                "feels_like": 34.96,
                "temp_min": 29.68,
                "temp_max": 29.68,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1006,
                "humidity": 73,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 94
            },
            "wind": {
                "speed": 5.04,
                "deg": 189,
                "gust": 6.13
            },
            "visibility": 10000,
            "pop": 0.04,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-20 18:00:00"
        },
        {
            "dt": 1710968400,
            "main": {
                "temp": 29.14,
                "feels_like": 34.47,
                "temp_min": 29.14,
                "temp_max": 29.14,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 1008,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 57
            },
            "wind": {
                "speed": 3.92,
                "deg": 220,
                "gust": 5.15
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-20 21:00:00"
        },
        {
            "dt": 1710979200,
            "main": {
                "temp": 28.79,
                "feels_like": 33.96,
                "temp_min": 28.79,
                "temp_max": 28.79,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 1007,
                "humidity": 79,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 41
            },
            "wind": {
                "speed": 4.89,
                "deg": 234,
                "gust": 6.45
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-21 00:00:00"
        },
        {
            "dt": 1710990000,
            "main": {
                "temp": 28.45,
                "feels_like": 33.44,
                "temp_min": 28.45,
                "temp_max": 28.45,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1006,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 18
            },
            "wind": {
                "speed": 5.21,
                "deg": 234,
                "gust": 7.1
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-03-21 03:00:00"
        },
        {
            "dt": 1711000800,
            "main": {
                "temp": 28.26,
                "feels_like": 33.1,
                "temp_min": 28.26,
                "temp_max": 28.26,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 1008,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 45
            },
            "wind": {
                "speed": 4.05,
                "deg": 251,
                "gust": 6.02
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-03-21 06:00:00"
        }
    ],
    "city": {
        "id": 2566677,
        "name": "Shogunle",
        "coord": {
            "lat": 6.5244,
            "lon": 3.3792
        },
        "country": "NG",
        "population": 0,
        "timezone": 3600,
        "sunrise": 1710568347,
        "sunset": 1710611862
    }
}











// Example call: https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=39.099724&lon=-94.578331&dt=1643803200&appid={API key} 
/* 
Above is made with latitude, longitude and date
*/
const response3 =                  
{
  "lat": 52.2297,
  "lon": 21.0122,
  "timezone": "Europe/Warsaw",
  "timezone_offset": 3600,
  "data": [
    {
      "dt": 1645888976,
      "sunrise": 1645853361,
      "sunset": 1645891727,
      "temp": 279.13,
      "feels_like": 276.44,
      "pressure": 1029,
      "humidity": 64,
      "dew_point": 272.88,
      "uvi": 0.06,
      "clouds": 0,
      "visibility": 10000,
      "wind_speed": 3.6,
      "wind_deg": 340,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ]
    }
  ]
}
                   
                 
// Example call: https://api.openweathermap.org/data/3.0/onecall/day_summary?lat=39.099724&lon=-94.578331&date=2020-03-04&appid={API key} 
/* 
Above is made with latitude, longitude, date and day summary
*/
const response1 =                    
{
"lat":33,
"lon":35,
"tz":"+02:00",
"date":"2020-03-04",
"units":"standard",
"cloud_cover":{
  "afternoon":0
},
"humidity":{
  "afternoon":33
},
"precipitation":{
  "total":0
},
"temperature":{
  "min":286.48,
  "max":299.24,
  "afternoon":296.15,
  "night":289.56,
  "evening":295.93,
  "morning":287.59
},
"pressure":{
  "afternoon":1015
},
"wind":{
  "max":{
     "speed":8.7,
     "direction":120
  }
}
}                
             

// Example call: https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid={API key} 
/* 
Above is made with latitude, longitude and date
*/


export const response = {
"lat":33.44,
"lon":-94.04,
"timezone":"America/Chicago",
"timezone_offset":-18000,
"current":{
   "dt":1684929490,
   "sunrise":1684926645,
   "sunset":1684977332,
   "temp":292.55,
   "feels_like":292.87,
   "pressure":1014,
   "humidity":89,
   "dew_point":290.69,
   "uvi":0.16,
   "clouds":53,
   "visibility":10000,
   "wind_speed":3.13,
   "wind_deg":93,
   "wind_gust":6.71,
   "weather":[
      {
         "id":803,
         "main":"Clouds",
         "description":"broken clouds",
         "icon":"04d"
      }
   ]
},
"minutely":[
   {
      "dt":1684929540,
      "precipitation":0
   },
   //...
],
"hourly":[
   {
      "dt":1684926000,
      "temp":292.01,
      "feels_like":292.33,
      "pressure":1014,
      "humidity":91,
      "dew_point":290.51,
      "uvi":0,
      "clouds":54,
      "visibility":10000,
      "wind_speed":2.58,
      "wind_deg":86,
      "wind_gust":5.88,
      "weather":[
         {
            "id":803,
            "main":"Clouds",
            "description":"broken clouds",
            "icon":"04n"
         }
      ],
      "pop":0.15
   },
   // ...
],
"daily":[
   {
      "dt":1684951200,
      "sunrise":1684926645,
      "sunset":1684977332,
      "moonrise":1684941060,
      "moonset":1684905480,
      "moon_phase":0.16,
      "summary":"Expect a day of partly cloudy with rain",
      "temp":{
         "day":299.03,
         "min":290.69,
         "max":300.35,
         "night":291.45,
         "eve":297.51,
         "morn":292.55
      },
      "feels_like":{
         "day":299.21,
         "night":291.37,
         "eve":297.86,
         "morn":292.87
      },
      "pressure":1016,
      "humidity":59,
      "dew_point":290.48,
      "wind_speed":3.98,
      "wind_deg":76,
      "wind_gust":8.92,
      "weather":[
         {
            "id":500,
            "main":"Rain",
            "description":"light rain",
            "icon":"10d"
         }
      ],
      "clouds":92,
      "pop":0.47,
      "rain":0.15,
      "uvi":9.23
   },
  // ...
],
 "alerts": [
 {
   "sender_name": "NWS Philadelphia - Mount Holly (New Jersey, Delaware, Southeastern Pennsylvania)",
   "event": "Small Craft Advisory",
   "start": 1684952747,
   "end": 1684988747,
   "description": "...SMALL CRAFT ADVISORY REMAINS IN EFFECT FROM 5 PM THIS\nAFTERNOON TO 3 AM EST FRIDAY...\n* WHAT...North winds 15 to 20 kt with gusts up to 25 kt and seas\n3 to 5 ft expected.\n* WHERE...Coastal waters from Little Egg Inlet to Great Egg\nInlet NJ out 20 nm, Coastal waters from Great Egg Inlet to\nCape May NJ out 20 nm and Coastal waters from Manasquan Inlet\nto Little Egg Inlet NJ out 20 nm.\n* WHEN...From 5 PM this afternoon to 3 AM EST Friday.\n* IMPACTS...Conditions will be hazardous to small craft.",
   "tags": [

   ]
 },
// ...
]
}

// Ibadan Forecast
const responseIbadan = {
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
      {
          "dt": 1710460800,
          "main": {
              "temp": 301.02,
              "feels_like": 305.22,
              "temp_min": 298.88,
              "temp_max": 301.02,
              "pressure": 1014,
              "sea_level": 1014,
              "grnd_level": 987,
              "humidity": 82,
              "temp_kf": 2.14
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 47
          },
          "wind": {
              "speed": 1.99,
              "deg": 245,
              "gust": 5.91
          },
          "visibility": 10000,
          "pop": 0.01,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-03-15 00:00:00"
      },
      {
          "dt": 1710471600,
          "main": {
              "temp": 299.72,
              "feels_like": 299.72,
              "temp_min": 298.54,
              "temp_max": 299.72,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 984,
              "humidity": 84,
              "temp_kf": 1.18
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 73
          },
          "wind": {
              "speed": 1.87,
              "deg": 249,
              "gust": 5.89
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-03-15 03:00:00"
      },
      {
          "dt": 1710482400,
          "main": {
              "temp": 297.74,
              "feels_like": 298.63,
              "temp_min": 297.74,
              "temp_max": 297.74,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 985,
              "humidity": 91,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 1.1,
              "deg": 277,
              "gust": 1.47
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-03-15 06:00:00"
      },
      {
          "dt": 1710493200,
          "main": {
              "temp": 305.26,
              "feels_like": 308.48,
              "temp_min": 305.26,
              "temp_max": 305.26,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 986,
              "humidity": 53,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 71
          },
          "wind": {
              "speed": 1.52,
              "deg": 262,
              "gust": 2.16
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-03-15 09:00:00"
      },
      {
          "dt": 1710504000,
          "main": {
              "temp": 313.07,
              "feels_like": 314.87,
              "temp_min": 313.07,
              "temp_max": 313.07,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 984,
              "humidity": 27,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ],
          "clouds": {
              "all": 41
          },
          "wind": {
              "speed": 1.4,
              "deg": 227,
              "gust": 1.91
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-03-15 12:00:00"
      },
      {
          "dt": 1710514800,
          "main": {
              "temp": 312.38,
              "feels_like": 312.97,
              "temp_min": 312.38,
              "temp_max": 312.38,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 981,
              "humidity": 25,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 61
          },
          "wind": {
              "speed": 2.97,
              "deg": 172,
              "gust": 3.04
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-03-15 15:00:00"
      },
      {
          "dt": 1710525600,
          "main": {
              "temp": 305.38,
              "feels_like": 307.45,
              "temp_min": 305.38,
              "temp_max": 305.38,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 983,
              "humidity": 48,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 76
          },
          "wind": {
              "speed": 3.64,
              "deg": 202,
              "gust": 6.54
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-03-15 18:00:00"
      },
      {
          "dt": 1710536400,
          "main": {
              "temp": 301.09,
              "feels_like": 303.7,
              "temp_min": 301.09,
              "temp_max": 301.09,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 985,
              "humidity": 70,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 63
          },
          "wind": {
              "speed": 3.36,
              "deg": 227,
              "gust": 6.21
          },
          "visibility": 10000,
          "pop": 0.26,
          "rain": {
              "3h": 0.12
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-03-15 21:00:00"
      },
      {
          "dt": 1710547200,
          "main": {
              "temp": 299.77,
              "feels_like": 299.77,
              "temp_min": 299.77,
              "temp_max": 299.77,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 984,
              "humidity": 79,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 76
          },
          "wind": {
              "speed": 1.61,
              "deg": 186,
              "gust": 3.82
          },
          "visibility": 10000,
          "pop": 0.16,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-03-16 00:00:00"
      },
      {
          "dt": 1710558000,
          "main": {
              "temp": 298.81,
              "feels_like": 299.6,
              "temp_min": 298.81,
              "temp_max": 298.81,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 983,
              "humidity": 83,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 72
          },
          "wind": {
              "speed": 1.67,
              "deg": 226,
              "gust": 4.31
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-03-16 03:00:00"
      },
      {
          "dt": 1710568800,
          "main": {
              "temp": 298.1,
              "feels_like": 298.92,
              "temp_min": 298.1,
              "temp_max": 298.1,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 985,
              "humidity": 87,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 67
          },
          "wind": {
              "speed": 1.28,
              "deg": 191,
              "gust": 2.61
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-03-16 06:00:00"
      },
      {
          "dt": 1710579600,
          "main": {
              "temp": 304.72,
              "feels_like": 307.92,
              "temp_min": 304.72,
              "temp_max": 304.72,
              "pressure": 1012,
              "sea_level": 1012,
              "grnd_level": 986,
              "humidity": 55,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ],
          "clouds": {
              "all": 38
          },
          "wind": {
              "speed": 2.12,
              "deg": 204,
              "gust": 2.26
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-03-16 09:00:00"
      },
      {
          "dt": 1710590400,
          "main": {
              "temp": 311.51,
              "feels_like": 314.35,
              "temp_min": 311.51,
              "temp_max": 311.51,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 984,
              "humidity": 33,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ],
          "clouds": {
              "all": 25
          },
          "wind": {
              "speed": 1.85,
              "deg": 202,
              "gust": 2.25
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-03-16 12:00:00"
      },
      {
          "dt": 1710601200,
          "main": {
              "temp": 311.12,
              "feels_like": 312.89,
              "temp_min": 311.12,
              "temp_max": 311.12,
              "pressure": 1005,
              "sea_level": 1005,
              "grnd_level": 981,
              "humidity": 31,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 55
          },
          "wind": {
              "speed": 1.74,
              "deg": 202,
              "gust": 2.1
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-03-16 15:00:00"
      },
      {
          "dt": 1710612000,
          "main": {
              "temp": 303.25,
              "feels_like": 306.81,
              "temp_min": 303.25,
              "temp_max": 303.25,
              "pressure": 1007,
              "sea_level": 1007,
              "grnd_level": 982,
              "humidity": 63,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 58
          },
          "wind": {
              "speed": 3.59,
              "deg": 186,
              "gust": 7.31
          },
          "visibility": 10000,
          "pop": 0.41,
          "rain": {
              "3h": 0.21
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-03-16 18:00:00"
      },
      {
          "dt": 1710622800,
          "main": {
              "temp": 299.05,
              "feels_like": 299.92,
              "temp_min": 299.05,
              "temp_max": 299.05,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 985,
              "humidity": 85,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 501,
                  "main": "Rain",
                  "description": "moderate rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 45
          },
          "wind": {
              "speed": 3.19,
              "deg": 183,
              "gust": 6.92
          },
          "visibility": 10000,
          "pop": 0.86,
          "rain": {
              "3h": 4.17
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-03-16 21:00:00"
      },
      {
          "dt": 1710633600,
          "main": {
              "temp": 298.72,
              "feels_like": 299.6,
              "temp_min": 298.72,
              "temp_max": 298.72,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 984,
              "humidity": 87,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 49
          },
          "wind": {
              "speed": 1.72,
              "deg": 216,
              "gust": 5.28
          },
          "visibility": 10000,
          "pop": 0.78,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-03-17 00:00:00"
      },
      {
          "dt": 1710644400,
          "main": {
              "temp": 298.15,
              "feels_like": 299.08,
              "temp_min": 298.15,
              "temp_max": 298.15,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 982,
              "humidity": 91,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02n"
              }
          ],
          "clouds": {
              "all": 24
          },
          "wind": {
              "speed": 1.42,
              "deg": 217,
              "gust": 3.93
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-03-17 03:00:00"
      },
      {
          "dt": 1710655200,
          "main": {
              "temp": 297.76,
              "feels_like": 298.73,
              "temp_min": 297.76,
              "temp_max": 297.76,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 984,
              "humidity": 94,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ],
          "clouds": {
              "all": 32
          },
          "wind": {
              "speed": 0.71,
              "deg": 193,
              "gust": 1.39
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-03-17 06:00:00"
      },
      {
          "dt": 1710666000,
          "main": {
              "temp": 303.24,
              "feels_like": 307.45,
              "temp_min": 303.24,
              "temp_max": 303.24,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 985,
              "humidity": 66,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 54
          },
          "wind": {
              "speed": 1.87,
              "deg": 217,
              "gust": 2.26
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-03-17 09:00:00"
      },
      {
          "dt": 1710676800,
          "main": {
              "temp": 310.39,
              "feels_like": 314.88,
              "temp_min": 310.39,
              "temp_max": 310.39,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 984,
              "humidity": 40,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 59
          },
          "wind": {
              "speed": 1.62,
              "deg": 234,
              "gust": 2.2
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-03-17 12:00:00"
      },
      {
          "dt": 1710687600,
          "main": {
              "temp": 312.54,
              "feels_like": 313.94,
              "temp_min": 312.54,
              "temp_max": 312.54,
              "pressure": 1005,
              "sea_level": 1005,
              "grnd_level": 980,
              "humidity": 27,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 63
          },
          "wind": {
              "speed": 0.53,
              "deg": 282,
              "gust": 2.06
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-03-17 15:00:00"
      },
      {
          "dt": 1710698400,
          "main": {
              "temp": 303.65,
              "feels_like": 307.19,
              "temp_min": 303.65,
              "temp_max": 303.65,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 981,
              "humidity": 61,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 56
          },
          "wind": {
              "speed": 4.65,
              "deg": 186,
              "gust": 8.74
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-03-17 18:00:00"
      },
      {
          "dt": 1710709200,
          "main": {
              "temp": 300.6,
              "feels_like": 303.68,
              "temp_min": 300.6,
              "temp_max": 300.6,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 983,
              "humidity": 78,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02n"
              }
          ],
          "clouds": {
              "all": 12
          },
          "wind": {
              "speed": 3.26,
              "deg": 198,
              "gust": 7.78
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-03-17 21:00:00"
      },
      {
          "dt": 1710720000,
          "main": {
              "temp": 299.53,
              "feels_like": 299.53,
              "temp_min": 299.53,
              "temp_max": 299.53,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 984,
              "humidity": 83,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 8
          },
          "wind": {
              "speed": 2.29,
              "deg": 178,
              "gust": 6.88
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-03-18 00:00:00"
      },
      {
          "dt": 1710730800,
          "main": {
              "temp": 298.71,
              "feels_like": 299.59,
              "temp_min": 298.71,
              "temp_max": 298.71,
              "pressure": 1007,
              "sea_level": 1007,
              "grnd_level": 982,
              "humidity": 87,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02n"
              }
          ],
          "clouds": {
              "all": 13
          },
          "wind": {
              "speed": 2.03,
              "deg": 213,
              "gust": 6.4
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-03-18 03:00:00"
      },
      {
          "dt": 1710741600,
          "main": {
              "temp": 298.16,
              "feels_like": 299.09,
              "temp_min": 298.16,
              "temp_max": 298.16,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 983,
              "humidity": 91,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 51
          },
          "wind": {
              "speed": 0.8,
              "deg": 220,
              "gust": 1.92
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-03-18 06:00:00"
      },
      {
          "dt": 1710752400,
          "main": {
              "temp": 303.66,
              "feels_like": 307.68,
              "temp_min": 303.66,
              "temp_max": 303.66,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 985,
              "humidity": 63,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 80
          },
          "wind": {
              "speed": 2.44,
              "deg": 215,
              "gust": 3.08
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-03-18 09:00:00"
      },
      {
          "dt": 1710763200,
          "main": {
              "temp": 308.95,
              "feels_like": 312.24,
              "temp_min": 308.95,
              "temp_max": 308.95,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 983,
              "humidity": 41,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 81
          },
          "wind": {
              "speed": 1.69,
              "deg": 205,
              "gust": 1.85
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-03-18 12:00:00"
      },
      {
          "dt": 1710774000,
          "main": {
              "temp": 310.03,
              "feels_like": 311.94,
              "temp_min": 310.03,
              "temp_max": 310.03,
              "pressure": 1004,
              "sea_level": 1004,
              "grnd_level": 979,
              "humidity": 34,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 61
          },
          "wind": {
              "speed": 3.01,
              "deg": 163,
              "gust": 3.05
          },
          "visibility": 10000,
          "pop": 0.05,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-03-18 15:00:00"
      },
      {
          "dt": 1710784800,
          "main": {
              "temp": 304.7,
              "feels_like": 307.63,
              "temp_min": 304.7,
              "temp_max": 304.7,
              "pressure": 1005,
              "sea_level": 1005,
              "grnd_level": 980,
              "humidity": 54,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 58
          },
          "wind": {
              "speed": 3.89,
              "deg": 185,
              "gust": 7.22
          },
          "visibility": 10000,
          "pop": 0.04,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-03-18 18:00:00"
      },
      {
          "dt": 1710795600,
          "main": {
              "temp": 299.83,
              "feels_like": 302.42,
              "temp_min": 299.83,
              "temp_max": 299.83,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 984,
              "humidity": 83,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 39
          },
          "wind": {
              "speed": 3.15,
              "deg": 166,
              "gust": 7.38
          },
          "visibility": 10000,
          "pop": 0.5,
          "rain": {
              "3h": 0.69
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-03-18 21:00:00"
      },
      {
          "dt": 1710806400,
          "main": {
              "temp": 298.84,
              "feels_like": 299.76,
              "temp_min": 298.84,
              "temp_max": 298.84,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 982,
              "humidity": 88,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 36
          },
          "wind": {
              "speed": 2.61,
              "deg": 186,
              "gust": 7.27
          },
          "visibility": 10000,
          "pop": 0.19,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-03-19 00:00:00"
      },
      {
          "dt": 1710817200,
          "main": {
              "temp": 298.43,
              "feels_like": 299.36,
              "temp_min": 298.43,
              "temp_max": 298.43,
              "pressure": 1007,
              "sea_level": 1007,
              "grnd_level": 982,
              "humidity": 90,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 68
          },
          "wind": {
              "speed": 1.66,
              "deg": 242,
              "gust": 5.38
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-03-19 03:00:00"
      },
      {
          "dt": 1710828000,
          "main": {
              "temp": 298.01,
              "feels_like": 298.95,
              "temp_min": 298.01,
              "temp_max": 298.01,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 983,
              "humidity": 92,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ],
          "clouds": {
              "all": 49
          },
          "wind": {
              "speed": 1.56,
              "deg": 227,
              "gust": 5.44
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-03-19 06:00:00"
      },
      {
          "dt": 1710838800,
          "main": {
              "temp": 304.4,
              "feels_like": 308.53,
              "temp_min": 304.4,
              "temp_max": 304.4,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 985,
              "humidity": 60,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 68
          },
          "wind": {
              "speed": 1.33,
              "deg": 231,
              "gust": 1.7
          },
          "visibility": 10000,
          "pop": 0.01,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-03-19 09:00:00"
      },
      {
          "dt": 1710849600,
          "main": {
              "temp": 307.99,
              "feels_like": 311.65,
              "temp_min": 307.99,
              "temp_max": 307.99,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 983,
              "humidity": 45,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 75
          },
          "wind": {
              "speed": 0.81,
              "deg": 267,
              "gust": 1.37
          },
          "visibility": 10000,
          "pop": 0.22,
          "rain": {
              "3h": 0.13
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-03-19 12:00:00"
      },
      {
          "dt": 1710860400,
          "main": {
              "temp": 305.9,
              "feels_like": 309.22,
              "temp_min": 305.9,
              "temp_max": 305.9,
              "pressure": 1004,
              "sea_level": 1004,
              "grnd_level": 979,
              "humidity": 51,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 61
          },
          "wind": {
              "speed": 2.64,
              "deg": 157,
              "gust": 3.9
          },
          "visibility": 10000,
          "pop": 0.48,
          "rain": {
              "3h": 0.71
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-03-19 15:00:00"
      },
      {
          "dt": 1710871200,
          "main": {
              "temp": 297.43,
              "feels_like": 298.19,
              "temp_min": 297.43,
              "temp_max": 297.43,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 982,
              "humidity": 87,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 501,
                  "main": "Rain",
                  "description": "moderate rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 73
          },
          "wind": {
              "speed": 3.73,
              "deg": 200,
              "gust": 7.35
          },
          "visibility": 10000,
          "pop": 1,
          "rain": {
              "3h": 5.52
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-03-19 18:00:00"
      },
      {
          "dt": 1710882000,
          "main": {
              "temp": 297.33,
              "feels_like": 298,
              "temp_min": 297.33,
              "temp_max": 297.33,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 984,
              "humidity": 84,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 1.27,
              "deg": 166,
              "gust": 3.11
          },
          "visibility": 10000,
          "pop": 0.88,
          "rain": {
              "3h": 1.78
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-03-19 21:00:00"
      }
  ],
  "city": {
      "id": 2339354,
      "name": "Ibadan",
      "coord": {
          "lat": 7.3878,
          "lon": 3.8964
      },
      "country": "NG",
      "population": 3565108,
      "timezone": 3600,
      "sunrise": 1710395488,
      "sunset": 1710438943
  }
}

const shortResIbadan = {
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
      {
          "dt": 1710460800,
          "main": {
              "temp": 301.02,
              "feels_like": 305.22,
              "temp_min": 298.88,
              "temp_max": 301.02,
              "pressure": 1014,
              "sea_level": 1014,
              "grnd_level": 987,
              "humidity": 82,
              "temp_kf": 2.14
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 47
          },
          "wind": {
              "speed": 1.99,
              "deg": 245,
              "gust": 5.91
          },
          "visibility": 10000,
          "pop": 0.01,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-03-15 00:00:00"
      },
      {
          "dt": 1710471600,
          "main": {
              "temp": 299.72,
              "feels_like": 299.72,
              "temp_min": 298.54,
              "temp_max": 299.72,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 984,
              "humidity": 84,
              "temp_kf": 1.18
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 73
          },
          "wind": {
              "speed": 1.87,
              "deg": 249,
              "gust": 5.89
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-03-15 03:00:00"
      },  
    ],
      "city": {
          "id": 2339354,
          "name": "Ibadan",
          "coord": {
              "lat": 7.3878,
              "lon": 3.8964
          },
          "country": "NG",
          "population": 3565108,
          "timezone": 3600,
          "sunrise": 1710395488,
          "sunset": 1710438943
      }
    }