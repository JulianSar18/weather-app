import React from "react";
import WeatherProvider from "./context/weatherContext";
import Search from "./components/Search";

const App = () => {
  return (
    <WeatherProvider>
      <Search />
    </WeatherProvider>
  );
};

export default App;
