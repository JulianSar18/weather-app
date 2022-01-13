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
      {typeof weather.main != "undefined" ? (
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
      ) : (
        ""
      )}
    </div>
  );
};

export default Locations;
