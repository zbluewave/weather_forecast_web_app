//TODO can refactor this to support multiple weather apis
import { CurrentWeatherData, Location, DayWeatherForecastData } from "@/interfaces/weather";
import { SUCCESS_RESPONSE } from './mockWetherBitForecastApiResponse';

const API_TOKEN = '04a0a412c18c4a62aa163c10b52fe8c0';
const fetchDaily = async (query: string) => {
  const res = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?key=${API_TOKEN}&city=${query}&days=6`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
};

const parseInput = (query: string) => {
  return query;
}


const responseToLocation = (resp: any): Location => {
  return {
    cityName: resp.city_name,
    countryCode: resp.country_code,
    stateCode: resp.state_code,
  }

}
const responseToWeatherData = (resp: any): CurrentWeatherData => {
  const c = resp.data[0];
    return {
        temperature: c.temp,
        humidity: c.rh,
        windSpeed: c.wind_spd,
        windDirection: c.wind_cdir_full,
        weatherDescription: c.weather.description,
        weatherIconUrl: c.weather.icon,
    }
}

const responseToForecastData = (resp: any): DayWeatherForecastData[] => {
  const data = resp.data;
  return data.map((d: any) => {
    return {
      date: d.datetime,
      minTemperature: d.min_temp,
      maxTemperature: d.max_temp,
      weatherDescription: d.weather.description,
    }
  })
}

export interface WeatherAndForecastData {
  success: boolean;
  currentWeatherData: CurrentWeatherData;
  location: Location;
  forecastData?: DayWeatherForecastData[];
}

export interface WeatherRequestError {
  success: boolean;
  err_msg: string;
}

export const fetchWeatherAndForecast = async (query: string): Promise<WeatherAndForecastData> => {
  let resp = await fetchDaily(parseInput(query));
  if (false) {
    resp = await fetchDaily(parseInput(query));
  } else {
    resp = SUCCESS_RESPONSE;
  }

  return {
    success: true,
    currentWeatherData: responseToWeatherData(resp),
    location: responseToLocation(resp),
    forecastData: responseToForecastData(resp),
  }
};

