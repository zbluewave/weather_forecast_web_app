export interface CurrentWeatherData {
    temperature: number;
    humidity: number;
    windSpeed: number;
    windDirection: string;
    weatherDescription: string;
    weatherIconUrl: string;
}

export interface DayWeatherForecastData {
    date: Date;
    minTemperature: number;
    maxTemperature: number;
    weatherDescription: string;
}