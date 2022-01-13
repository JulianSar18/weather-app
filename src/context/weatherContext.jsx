import React, { useState } from "react";
export const ContextWeather = React.createContext();
function WeatherProvider({ children }) {
  const [weather, setWeather] = useState({});
  return (
    <ContextWeather.Provider value={{ weather, setWeather }}>{children}</ContextWeather.Provider>
  );
}

export default WeatherProvider;
