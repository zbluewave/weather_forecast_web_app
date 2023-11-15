'use client'

import { useQuery } from '@tanstack/react-query'
import WeatherCard from "./weatherCard";
import {
    fetchWeatherAndForecast, WeatherAndForecastData, WeatherRequestError
} from "@/lib/weatherApi/fetchWeatherForecast";
import {useWeatherSearchContext} from "@/context/weatherSearchContext";

interface CurrentWeatherProps {
    locationQuery: string;
}

export const CurrentWeather = (props: CurrentWeatherProps) => {
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
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:block">
            <WeatherCard {...data.currentWeatherData} />
        </div>
    );
}

export default CurrentWeather;
