import React, { createContext, PropsWithChildren, useState, useContext } from 'react';

const WeatherSearchContext = createContext({
  query: '',
  setQuery: (query: string) => {},
});

export const WeatherSearchProvider = ({ children }: PropsWithChildren<{}>) => {
  const [query, setQuery] = useState('');

  return (
      <WeatherSearchContext.Provider value={{ query, setQuery }}>
        {children}
      </WeatherSearchContext.Provider>
  );
};

export const useWeatherSearchContext = () => {
  const context = useContext(WeatherSearchContext);

  if (!context) {
    throw new Error('useWeatherSearchContext must be used inside the WeatherSearchProvider');
  }

  return context;
};
