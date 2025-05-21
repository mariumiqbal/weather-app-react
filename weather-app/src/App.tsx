import "./App.css";

function App() {
  const getWeather = async (city: string, unit: string) => {
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid
  return await fetch(api)
= ${import.meta.env.VITE_API_KEY}`;
  };

  return (
    <>
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
      <button className="button" onClick={() => alert("Button clicked!")}>
        Enter
      </button>
    </>
  );
}

export default App;
