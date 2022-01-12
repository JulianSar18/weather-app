import { useContext, useState } from "react";
import styles from "../components/styles/Search.module.css";
import weatherStates from "../reducer/Weather_states";
import getWeather from "../services/getWeather";
import { ContextWeather } from "../context/weatherContext";
import Locations from "./Locations";

const Search = () => {
  const [query, setQuery] = useState("");
  const { weather, setWeather } = useContext(ContextWeather);

  const search = async (evt) => {
    if (evt.key === "Enter") {
       setWeather( await getWeather(query));
    }
  };
  
  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weatherStates(weather.weather[0].main)
          : `${styles.clear}`
      }
    >
      <main>
        <div className={styles.container}>
          <div className={styles.searchbox}>
            <input
              type="text"
              className={styles.searchbar}
              placeholder="Input city for search..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
          <Locations/>
        </div>
      </main>
    </div>
  );
};

export default Search;
