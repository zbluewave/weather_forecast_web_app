'use client'

import { useQuery } from '@tanstack/react-query'
import WeatherCard from "./weatherCard";
import {
    fetchWeatherAndForecast, WeatherAndForecastData, WeatherRequestError
} from "@/lib/weatherApi/fetchWeatherForecast";
import {useWeatherSearchContext} from "@/context/weatherSearchContext";
import WeatherForecastCard from "@/components/weather/weatherForecastCard";

interface CurrentWeatherProps {

}

export const WeatherDisplay = (props: CurrentWeatherProps) => {
    const { query } = useWeatherSearchContext();

    const {isLoading, data} = useQuery<WeatherAndForecastData>({
        queryKey: ["searchCurrentWeather", query],
        queryFn:() => fetchWeatherAndForecast(query),
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!data) {
        return <div>Unknown</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center w-screen">
            <WeatherCard currentWeather={data.currentWeatherData} location={data.location} />
            <WeatherForecastCard forecasts={data.forecasts} />
        </div>

    );
}

export default WeatherDisplay;