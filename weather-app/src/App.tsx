import "./App.css";
import { useState } from "react";

const APIKey = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL;

function App() {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [weatherData, setWeatherData] = useState<any>(null);
  const [unit, setUnit] = useState("fahrenheit");

  const getWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a valid city name");
      return;
    }
    setError(""); // Clear previous error
    try {
      const api = `${BASE_URL}forecast.json?key=${APIKey}&q=${city}&aqi=no&days=5`;
      const response = await fetch(api);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setWeatherData(data);
      console.log("Weather data fetched successfully:", data);
    } catch (error) {
      console.log("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <div className="wrapper">
      <div className="input-wrapper">
        <div className="weather-card">
          <p>Enter city Below</p>
          <input
            type="text"
            placeholder="Enter city name"
            className="input"
            onChange={(e) => setCity(e.target.value)}
          />
          <div className="radio-group">
            <label className="circle-radio" htmlFor="fahrenheit">
              <input
                type="radio"
                value="fahrenheit"
                name="unit"
                id="fahrenheit"
                checked={unit === "fahrenheit"}
                onChange={(e) => setUnit(e.target.value)}
              />
              <span className="dot"></span>F
            </label>
            <label className="circle-radio" htmlFor="celsius">
              <input
                type="radio"
                value="celsius"
                name="unit"
                id="celsius"
                checked={unit === "celsius"}
                onChange={(e) => setUnit(e.target.value)}
              />
              <span className="dot"></span>C
            </label>
          </div>
        </div>
        {error && <span style={{ color: "red" }}>{error}</span>}-
        <button onClick={getWeather}>Enter</button>
      </div>
      {weatherData && (
        <div className="output-wrapper">
          <div className="weather-forecast">
            <img
              src={weatherData.current.condition.icon || ""}
              alt="weather icon"
            />
            <h2>
              {unit === "celsius"
                ? `${weatherData.current.temp_c}°C`
                : `${weatherData.current.temp_f}°F`}
            </h2>
            <h2>{weatherData.location.name}</h2>
          </div>
          <label className="favorite">
            <input type="checkbox" id="checkbox" />
            <span className="checkmark"></span>Save as Favorite
          </label>
          <div className="forecast">
            {weatherData.forecast.forecastday.map((day: any, idx: number) => (
              <div className="forecast-day" key={idx}>
                <p className="temp">
                  {unit === "celsius"
                    ? `${day.day.avgtemp_c}C`
                    : `${day.day.avgtemp_f}F`}
                </p>
              </div>
            ))}
          </div>
          <div className="forecast-label"> 3-5 day Forecast</div>
        </div>
      )}
    </div>
  );
}

export default App;
