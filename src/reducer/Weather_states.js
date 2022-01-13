import Styles from "../components/styles/Search.module.css";
function weatherStates(weatherState, date) {
  const hour = date.getUTCHours();
  console.log(hour);
  switch (weatherState) {
    case "Rain":
      return Styles.rain;
    case "Snow":
      return Styles.snow;
    default:
      return (hour >= 18 || hour < 5) ? Styles.night : Styles.clear;
  }
}

export default weatherStates;
