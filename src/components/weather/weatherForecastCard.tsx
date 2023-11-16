'use client'

import { DayWeatherForecastData } from "@/interfaces/weather";
import { Unit } from "@/interfaces/unit";
import { formatTemperature } from "@/lib/unit/unitUtil";

interface WeatherForecastProps {
    forecasts: DayWeatherForecastData[];
    unit: Unit;
}

interface DayForecastProps {
    forecast: DayWeatherForecastData;
    unit: Unit
}


const DayForecast = (props: DayForecastProps) => {
    const { forecast, unit } = props;
    const { date, minTemperature, maxTemperature, weatherDescription } = forecast;

    return (
        <div className="flex justify-between items-center">
            <span className="font-semibold text-lg w-1/3">{date.toLocaleDateString()}</span>
            <span className="font-semibold text-lg w-1/3">{weatherDescription}</span>
            <span className="font-semibold text-lg w-1/3 text-right">{formatTemperature(minTemperature, unit)} / {formatTemperature(maxTemperature, unit)}</span>
        </div>
    )
}

export const WeatherForecastCard = (props: WeatherForecastProps) => {
    const {forecasts, unit} = props;

    return (
        <div className="flex flex-col space-y-6 w-full max-w-screen-sm bg-white p-10 mt-10 rounded-xl ring-8 ring-white ring-opacity-40">
            {
                forecasts.map((forecast, index) => {
                    return <DayForecast key={index} forecast={forecast} unit={unit} />
                })
            }
        </div>
    );
}

export default WeatherForecastCard;
