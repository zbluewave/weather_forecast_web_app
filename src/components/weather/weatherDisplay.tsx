'use client'

import { useQuery } from '@tanstack/react-query'
import WeatherCard from "./weatherCard";
import {
    fetchWeatherAndForecast, WeatherAndForecastData, WeatherRequestError
} from "@/lib/weatherApi/fetchWeatherForecast";
import {useWeatherSearchContext} from "@/context/weatherSearchContext";
import WeatherForecastCard from "@/components/weather/weatherForecastCard";
import {useUnitContext} from "@/context/unitContext";

interface CurrentWeatherProps {

}

export const WeatherDisplay = (props: CurrentWeatherProps) => {
    const { query } = useWeatherSearchContext();
    const { unit } = useUnitContext();

    const {isLoading, data} = useQuery<WeatherAndForecastData>({
        queryKey: ["searchCurrentWeather", query, unit],
        queryFn:() => fetchWeatherAndForecast(query, unit),
    });

    if (!query) {
        return (
            <div className="flex flex-col items-center justify-center">
                <div className="w-full max-w-screen-sm bg-white p-10 rounded-xl ring-8 ring-white ring-opacity-40">
                    Search for a location
                </div>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center">
                <div className="w-full max-w-screen-sm bg-white p-10 rounded-xl ring-8 ring-white ring-opacity-40">
                    Loading...
                </div>
            </div>
        );
    }

    if (!data) {
        return <div>Unknown</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <WeatherCard currentWeather={data.currentWeatherData} location={data.location} unit={unit} />
            <WeatherForecastCard forecasts={data.forecasts} unit={unit} />
        </div>

    );
}

export default WeatherDisplay;
