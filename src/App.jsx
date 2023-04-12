import { useState, useEffect } from "react";
import "./App.css";
import Weather from "./Component/Weather";
import api from "./weatherAPI.json";

function App(props) {
  const lat = 44.34;
  const lon = 10.99;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0157f8a1719453ae506dbe25b6d72672`;

  const [weatherData, setWeatherData] = useState({});
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setWeatherData(data);
      })
      .catch(error => {
        console.error(` Error fetching weather......${error}`);
      });
  }, []);
  console.log(weatherData);
  return (
    <div className="App">
      <h4>React Vite is working.......</h4>

      <Weather
        name={weatherData.name}
        main={weatherData.weather?.[0]?.main}
        city={weatherData.name}
        temp={weatherData.main?.temp}
        desc={weatherData.weather?.[0]?.description}
      />
    </div>
  );
}

export default App;
