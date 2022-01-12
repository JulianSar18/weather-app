import React from "react";
import { useContext } from "react";
import styles from "../components/styles/Locations.module.css";
import { ContextWeather } from "../context/weatherContext";
import "./Search";

const Locations = () => {
  const { weather } = useContext(ContextWeather);
  const date = new Date(
    weather.dt * 1000 + weather.timezone * 1000
  ).toUTCString();
  return (
    <div>
      {typeof weather.main != "undefined" ? (
        <div className={styles.container_lctbx}>
          <div className={styles.location_box}>
            <div className={styles.location}>
              {weather.name}, {weather.sys.country}
            </div>
            <div className={styles.date}>{date}</div>
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
