import "./App.css";

function App() {
  return (
    <>
      <p>Enter City Below</p>
      <input type="text" placeholder="Enter city name" className="input" />
      <div>
        <input
          type="radio"
          value="fahrenheit"
          name="unit"
          id="fahrenheit"
          defaultChecked
        />
        <label htmlFor="fahrenheit">F</label>
        <input type="radio" value="celsius" name="unit" id="celsius" />
        <label htmlFor="celsius">C</label>
      </div>
      <button className="button" onClick={() => alert("Button clicked!")}>
        Enter
      </button>
    </>
  );
}

export default App;
