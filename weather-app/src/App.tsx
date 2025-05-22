import "./App.css";
import reactLogo from "./assets/react.svg";

function App() {
  const getWeather = async (city: string, unit: string) => {
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid
  return await fetch(api)
= ${import.meta.env.VITE_API_KEY}`;
  };

  return (
    <div className="wrapper">
      <div className="input-wrapper">
        <div className="weather-card">
          <p>Enter city Below</p>
          <input type="text" placeholder="Enter city name" className="input" />
          <div className="radio-group">
            <label className="circle-radio" htmlFor="fahrenheit">
              <input
                type="radio"
                value="fahrenheit"
                name="unit"
                id="fahrenheit"
                defaultChecked
              />
              <span className="dot"></span>F
            </label>
            <label className="circle-radio" htmlFor="celsius">
              <input type="radio" value="celsius" name="unit" id="celsius" />
              <span className="dot"></span>C
            </label>
          </div>
        </div>
        <button onClick={() => alert("Button clicked!")}>Enter</button>
      </div>
      <div className="output-wrapper">
        <div className="weather-forecast">
          <img src={reactLogo} className="logo react" alt="weather icon" />
          <h2> Temperature 52F</h2>
          <h2>Chicago</h2>
        </div>
        <div className="favorite">
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">Save as Favorite</label>
        </div>
        <div className="forecast">
          <div className="forecast-day">
            <p className="temp">52°F</p>
          </div>
          <div className="forecast-day">
            <p className="temp">48°F</p>
          </div>
          <p className="forecast-label"> 3-5 day Forecast</p>
        </div>
      </div>
    </div>
  );
}

export default App;
