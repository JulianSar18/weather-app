import Styles from "../components/styles/Search.module.css"; 
function weatherStates(weatherState) {
 switch (weatherState) {
     case "Rain": return Styles.rain
     case "Snow": return Styles.snow
    
     default: return Styles.clear
 }   
}

export default weatherStates;