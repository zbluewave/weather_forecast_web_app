'use client'

import { useWeatherSearchContext } from "@/context/weatherSearchContext";
export const WeatherSearchBar = () => {
    const { setQuery } = useWeatherSearchContext();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const query = formData.get('query') as string;
        setQuery(query);
    }

  return (
      <form className="flex flex-col md:flex-row gap-3" onSubmit={handleSubmit}>
          <div className="flex">
              <input type="text" placeholder="Search by Location Name or Latitude and Longitude" name="query"
                     className="w-full md:w-80 px-3 h-10 rounded-l focus:outline-none focus:border-sky-500"
              />
              <button type="submit" className="bg-sky-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1">
                  Search
              </button>
          </div>
      </form>
  );
}

export default WeatherSearchBar;
