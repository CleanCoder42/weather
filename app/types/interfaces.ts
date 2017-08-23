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
    sea_level: number;
    grnd_level: number;
    temp_kf: number;
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

interface openWeatherCity {
    id: number;
    name: string;
}

interface openWeatherForecastTemps {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
}

interface openWeatherForecast {
    dt: number;
    temp: openWeatherForecastTemps;
    pressure: number;
    humidity: number;
    weather: Array<openWeatherWeather>;
}

interface openWeatherHourlyForecast {
    dt: number;
    main: openWeatherMain;
    weather: openWeatherWeather;
    clouds: openWeatherClouds;
    wind: openWeatherWind;
    sys: openWeatherSys;
    dt_txt: string;
}

interface currentWeatherApi {
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

interface dailyForecastApi {
    cod: string;
    message: string;
    city: openWeatherCity;
    coord: openWeatherCoord;
    country: string;
    cnt: number;
    list: Array<openWeatherForecast>;
}

interface hourlyForecastApi {
    city: openWeatherCity;
    coord: openWeatherCoord;
    country: string;
    cod: string;
    message: string;
    cnt: number;
    list: Array<openWeatherHourlyForecast>;
}

interface openWeatherApi {
    currentWeather: currentWeatherApi;
    dailyForecast: dailyForecastApi;
    hourlyForecast: hourlyForecastApi;
}




