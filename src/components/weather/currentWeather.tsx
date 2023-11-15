'use client'

import { useQuery } from '@tanstack/react-query'
import WeatherCard from "./weatherCard";
import {
    fetchWeatherAndForecast, WeatherAndForecastData, WeatherRequestError
} from "@/lib/weatherApi/fetchWeatherForecast";

interface CurrentWeatherProps {
    locationQuery: string;
}

export const CurrentWeather = (props: CurrentWeatherProps) => {
    const {isLoading, isSuccess, data} = useQuery<WeatherAndForecastData>({
        queryKey: ["searchCurrentWeather", props.locationQuery],
        queryFn:() => fetchWeatherAndForecast(props.locationQuery),
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
