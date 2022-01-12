import { useContext } from "react";
import { ContextWeather } from "../context/weatherContext";
const api = {
  key: "834d904ec0e6c4cef528f7452845e5bc",
  base: "http://api.openweathermap.org/data/2.5/",
};
async function getWeather(query) {
  const response = await fetch(
    `${api.base}weather?q=${query}&units=metric&APPID=${api.key}`
  );
  const body = await response.json();
  return body;
}

export default getWeather;
