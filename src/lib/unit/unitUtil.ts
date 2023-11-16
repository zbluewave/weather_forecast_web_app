//TODO can refactor this to support multiple weather apis
import { Unit } from "@/interfaces/unit";

export const formatTemperature = (temperature: number, unit: Unit) => {
  const unitSymbol = unit === 'metric' ? '°C' : '°F';
  return`${temperature.toFixed(1)}${unitSymbol}`;
};

export const formatWindSpeed = (windSpeed: number, unit: Unit) => {
    const unitSymbol = unit === 'metric' ? 'm/s' : 'mph';
    return`${windSpeed.toFixed(1)}${unitSymbol}`;
}

export const formatHumidity = (humidity: number) => {
    return`${humidity.toFixed(0)}%`;
}
