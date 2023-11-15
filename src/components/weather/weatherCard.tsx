'use client'
import { CurrentWeatherData } from "@/interfaces/weather";

export const WeatherCard = (props: CurrentWeatherData) => {
  return (
      <div className="px-4">
          <div className="mb-6 m-auto w-full rounded-lg bg-white p-6">
              <div className="flex items-center justify-between">
                  <div className="flex items-center">
                      <div>
                          <h3 className="text-8xl font-semibold text-gray-900">{props.temperature}</h3>
                          <span className="block text-3xl font-normal text-gray-500">{props.weatherDescription}</span>
                      </div>
                  </div>
                  <img className="mr-2 h-36 w-36 rounded-full object-cover"
                       src={props.weatherIconUrl}
                       alt="profile"/>
              </div>
              <div className="mt-6 grid grid-cols-2 lg:gap-x-16 justify-between text-sm font-semibold text-gray-900">
                  <div className="flex justify-between">
                      <div className="flex">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                               stroke="currentColor" className="mr-2 h-5 w-5 text-base text-gray-500">
                              <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"/>
                          </svg>
                          <span className="mr-1">Humidity</span>
                      </div>
                      <div className="flex">{props.humidity}</div>
                  </div>
                  <div className="flex justify-between">
                      <div className="flex">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                               stroke="currentColor" className="mr-2 h-5 w-5 text-base text-gray-500">
                              <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"/>
                          </svg>
                          <span className="mr-1">Wind</span>
                      </div>
                      <div className="flex">{props.windDirection} {props.windSpeed}</div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default WeatherCard;
