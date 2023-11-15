'use client'

import {DayWeatherForecastData} from "@/interfaces/weather";

interface WeatherForecastProps {
    forecasts: DayWeatherForecastData[];
}


const DayForecast = (props: DayWeatherForecastData) => {
    return (
        <div className="flex justify-between items-center">
            <span className="font-semibold text-lg w-1/3">{props.date.toLocaleDateString()}</span>
            <span className="font-semibold text-lg w-1/3">{props.weatherDescription}</span>
            <span className="font-semibold text-lg w-1/3 text-right">{props.minTemperature}° / {props.maxTemperature}°</span>
        </div>
    )
}

export const WeatherForecastCard = (props: WeatherForecastProps) => {

    return (
        <div className="flex flex-col space-y-6 w-full max-w-screen-sm bg-white p-10 mt-10 rounded-xl ring-8 ring-white ring-opacity-40">
            {
                props.forecasts.map((forecast, index) => {
                    return <DayForecast key={index} {...forecast} />
                })
            }
        </div>
    );
}

export default WeatherForecastCard;
