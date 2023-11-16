import { CurrentWeatherData, Location, DayWeatherForecastData } from "@/interfaces/weather";
import { SUCCESS_RESPONSE } from './mockWetherBitForecastApiResponse';
import {Unit} from "@/interfaces/unit";

const USE_MOCK_DATA = process.env.USE_MOCK_DATA
const API_TOKEN = process.env.WEATHER_BIT_API_KEY;
const fetchDaily = async (query: string, unit: Unit) => {
  const unitParam = unit === 'metric' ? 'M' : 'I';
  const res = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?key=${API_TOKEN}&${queryToApiQuery(query)}&days=6&units=${unitParam}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
};

const queryToApiQuery = (query: string) => {
  const queryParts = query.split(',');
  if (queryParts.length === 2 && !isNaN(parseFloat(queryParts[0])) && !isNaN(parseFloat(queryParts[1]))) {
    return `lat=${queryParts[0]}&lon=${queryParts[1]}`;
  }

  return `city=${query}`;
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
  return data.slice(1, 6).map((d: any) => {
    return {
      date: new Date(d.ts * 1000),
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
  forecasts: DayWeatherForecastData[];
}

export interface WeatherRequestError {
  success: boolean;
  err_msg: string;
}

export const fetchWeatherAndForecast = async (query: string, unit: Unit): Promise<WeatherAndForecastData> => {
  let resp;
  if (USE_MOCK_DATA) {
    resp = SUCCESS_RESPONSE;
  } else {
    resp = await fetchDaily(query, unit);
  }

  return {
    success: true,
    currentWeatherData: responseToWeatherData(resp),
    location: responseToLocation(resp),
    forecasts: responseToForecastData(resp),
  }
};

