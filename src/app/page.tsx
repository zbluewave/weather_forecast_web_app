import WeatherSearchBar from '@/components/weather/weatherSearchBar'
import React from "react";
import WeatherDisplay from "@/components/weather/weatherDisplay";
import UnitToggle from "@/components/weather/unitToggle";

export default function Home() {
    return (
        <div className="flex flex-col w-screen min-h-screen text-gray-700 p-10 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200">
            <div className="flex justify-center ">
                <div className="flex max-w-screen-sm items-center justify-between w-screen">
                    <WeatherSearchBar />
                    <UnitToggle />
                </div>
            </div>
            <div className="mt-6">
                <WeatherDisplay />
            </div>
        </div>
    )
}
