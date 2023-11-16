'use client'

import { useQuery } from '@tanstack/react-query'
import WeatherCard from "./weatherCard";
import {
    fetchWeatherAndForecast, WeatherAndForecastSuccessResponse, WeatherAndForecastErrorResponse
} from "@/lib/weatherApi/fetchWeatherForecast";
import { useWeatherSearchContext } from "@/context/weatherSearchContext";
import WeatherForecastCard from "@/components/weather/weatherForecastCard";
import { useUnitContext } from "@/context/unitContext";

const Message = (props: {msg: string}) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-screen-sm bg-white p-10 rounded-xl ring-8 ring-white ring-opacity-40">
                {props.msg}
            </div>
        </div>
    );
}

export const WeatherDisplay = () => {
    const { query } = useWeatherSearchContext();
    const { unit } = useUnitContext();

    const {isLoading, data} = useQuery<WeatherAndForecastSuccessResponse|WeatherAndForecastErrorResponse|undefined>({
        queryKey: ["searchCurrentWeather", query, unit],
        queryFn:() => fetchWeatherAndForecast(query, unit),
        initialData: undefined,
        retry: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });

    if (!query) {
        return (<Message  msg={"Search for a location to get started"}/>);
    }

    if (isLoading) {
        return (<Message  msg={"Loading"}/>)
    }

    if (!data) {
        return (<Message  msg={"Search for a location to get started"}/>);
    }

    if (!data.success) {
        return (<Message msg={(data as WeatherAndForecastErrorResponse).err_msg}/>);
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <WeatherCard currentWeather={(data as WeatherAndForecastSuccessResponse).currentWeatherData} location={(data as WeatherAndForecastSuccessResponse).location} unit={unit} />
            <WeatherForecastCard forecasts={(data as WeatherAndForecastSuccessResponse).forecasts} unit={unit} />
        </div>
    );
}

export default WeatherDisplay;
