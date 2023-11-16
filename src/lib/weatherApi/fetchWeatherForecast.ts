import { CurrentWeatherData, DayWeatherForecastData } from "@/interfaces/weather";
import { Location } from "@/interfaces/location";
import { SUCCESS_RESPONSE } from './mockWetherBitForecastApiResponse';
import { Unit } from "@/interfaces/unit";

//TODO: move to env
const USE_MOCK_DATA = false;
const API_TOKEN = process.env.WEATHER_BIT_API_KEY;

const fetchDaily = async (query: string, unit: Unit) => {
  const unitParam = unit === 'metric' ? 'M' : 'I';
  const res = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?key=${API_TOKEN}&${queryToApiQuery(query)}&days=6&units=${unitParam}`);

  return {
    ok: res.status === 200,
    data: res,
  }
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
        windDirection: c.wind_cdir,
        weatherDescription: c.weather.description,
        weatherIconUrl: `https://cdn.weatherbit.io/static/img/icons/${c.weather.icon}.png`, //TODO: move to icon to to SVG or CSS
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

export interface WeatherAndForecastSuccessResponse {
  success: boolean;
  currentWeatherData: CurrentWeatherData;
  location: Location;
  forecasts: DayWeatherForecastData[];
}

export interface WeatherAndForecastErrorResponse {
  success: boolean;
  err_msg: string;
}

export const fetchWeatherAndForecast = async (query: string, unit: Unit): Promise<WeatherAndForecastSuccessResponse|WeatherAndForecastErrorResponse> => {
  if (!query) {
    return {
      success: false,
      err_msg: 'Please provide a location or coordinate to get Started. Please separate latitude and longitude with a comma.'
    };
  }

  let data;
  if (USE_MOCK_DATA) {
    data = SUCCESS_RESPONSE;
  } else {
    const apiResp = await fetchDaily(query, unit);
    if (!apiResp.ok) {
      return {
        success: false,
        err_msg: 'Error fetching weather data, please provide a valid location. If you are using coordinates, please separate latitude and longitude with a comma.'
      };
    } else {
      data = await apiResp.data.json();
    }
  }

  return {
    success: true,
    currentWeatherData: responseToWeatherData(data),
    location: responseToLocation(data),
    forecasts: responseToForecastData(data),
  }
};

