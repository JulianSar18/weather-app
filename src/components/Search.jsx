import { useState, useEffect } from "react";
import styles from "../components/styles/Search.module.css";
const api = {
  key: "834d904ec0e6c4cef528f7452845e5bc",
  base: "http://api.openweathermap.org/data/2.5/",
};
const Search = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };
  return (
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
    </div>
  );
};

export default Search;
