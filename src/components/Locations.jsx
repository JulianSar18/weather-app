import React from "react";
import { useContext } from "react";
import styles from "../components/styles/Locations.module.css";
import { ContextWeather } from "../context/weatherContext";
import parseDate from "../services/parseDate";
import "./Search";

const Locations = () => {
  const { weather } = useContext(ContextWeather);
  return (
    <div>
      <div className={styles.weatherCircle}></div>
      {typeof weather.main != "undefined" ? (
        <>
         <div className={styles.more}>
          <div className={styles.temp_web}>
            {weather.main.temp}°C
            <p><img src ={`https://flagcdn.com/48x36/${weather.sys.country.toLowerCase()}.png`} alt="Flag" /> {weather.sys.country}</p>  
          </div>
          <div className={styles.container_temp_web}>
            <ul>
              <li>feels like: {weather.main.feels_like}</li>
              <li>humidity: {weather.main.humidity}</li>
              <li>pressure: {weather.main.pressure}</li>
              <li>temp max: {weather.main.temp_max}</li>
              <li>temp min: {weather.main.temp_min}</li>
            </ul>
          </div>
        </div>
        <div className={styles.container_lctbx}>
          <div className={styles.location_box}>
            <div className={styles.location}>
              {weather.name}, {weather.sys.country}
            </div>
            <div className={styles.date}>{parseDate(weather).toUTCString()}</div>
          </div>
          <div className={styles.weather_box}>
            <div className={styles.temp}>{weather.main.temp}°C</div>
            <div className={styles.weather}>{weather.weather[0].main}</div>
          </div>
        </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Locations;
