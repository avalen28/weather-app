import './App.css';
import AreaSelector from "./views/AreaSelector.jsx"
import WeatherCity from "./views/WeatherCity.jsx"
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Routes>
          {/* Route - view of Area Selector view */}
          <Route path="/area" element={<AreaSelector />} />
          {/* Route - view of weather info on the city view */}
          <Route path="/weather" element={<WeatherCity />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
