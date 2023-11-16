import WeatherSearchBar from '@/components/weather/weatherSearchBar'
import React from "react";
import WeatherDisplay from "@/components/weather/weatherDisplay";
import UnitToggle from "@/components/weather/unitToggle";

export default function Home() {
    return (
        <div className="min-h-screen text-gray-700 p-10 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200">
            <UnitToggle />
            <WeatherSearchBar />
            <WeatherDisplay />
        </div>
    )
}
