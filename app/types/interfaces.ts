interface openWeatherCoord {
    lon: number;
    lat: number;
}

interface openWeatherSys {
    country: string;
    sunrise: number;
    sunset: number;
}

interface openWeatherWeather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface openWeatherMain {
    temp: number;
    humidity: number;
    pressure: number;
    temp_min: number;
    temp_max: number;
}

interface openWeatherWind {
    speed: number;
    deg: number;
}

interface openWeatherRain {
    _3h: number;
}

interface openWeatherClouds {
    all: number;
}

interface openWeatherApi {
    coord: openWeatherCoord;
    sys: openWeatherSys;
    weather: Array<openWeatherWeather>;
    main: openWeatherMain;
    wind: openWeatherWind;
    rain: openWeatherRain;
    clouds: openWeatherClouds;
    dt: number;
    id: number;
    name: string;
    cod: number;
}


