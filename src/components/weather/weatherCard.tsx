'use client'
import Image from 'next/image'
import { CurrentWeatherData } from "@/interfaces/weather";
import { Location } from "@/interfaces/location";
import { Unit } from "@/interfaces/unit";
import { formatHumidity, formatTemperature, formatWindSpeed } from "@/lib/unit/unitUtil";

interface WeatherCardProps {
    currentWeather: CurrentWeatherData;
    location: Location;
    unit: Unit;
}

export const WeatherCard = (props: WeatherCardProps) => {
    const { currentWeather, location, unit } = props;

    return (
        <div className="w-full max-w-screen-sm bg-white p-10 rounded-xl ring-8 ring-white ring-opacity-40">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <span className="font-semibold mb-2 text-gray-500">{location.cityName}, {location.stateCode}, {location.countryCode}</span>
                    <span className="text-6xl font-bold">{formatTemperature(currentWeather.temperature, unit)}</span>
                    <span className="text-2xl mt-2">{currentWeather.weatherDescription}</span>
                </div>
                <Image className="h-24 w-24" width={40} height={40} src={currentWeather.weatherIconUrl} alt={currentWeather.weatherDescription} />
            </div>
            <div className="flex justify-between mt-3 w-2/4">
                <div className="flex items-center text-gray-700 px-2">
                    <Image src="/humidity.svg" alt="humidity" className="mr-2 h-4 w-4" width={10} height={10} />
                    {formatHumidity(currentWeather.humidity)}
                </div>
                <div className="flex items-center text-gray-700 px-2">
                    <Image src="/wind.svg" alt="wind" className="mr-2 h-4 w-4" width={10} height={10} />
                    {currentWeather.windDirection} {formatWindSpeed(currentWeather.windSpeed, unit)}
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;
