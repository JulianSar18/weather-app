import React from "react";
import styles from "../components/styles/Locations.module.css";
import "./Search";

const Locations = () => {
  return (
      <div>
      {typeof weather.main != "undefined" ? (
        <div>
          <div className={styles.location_box}>
            <div className={styles.location}>asd</div>
            <div className={styles.date}>{new Date().toDateString()}</div>
          </div>
          <div className={styles.weather_box}>
            <div className={styles.temp}>15°C</div>
            <div className={styles.weather}>sunny</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Locations;
