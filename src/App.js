import "./App.css";
import AreaSelector from "./views/AreaSelector.jsx";
import WeatherCity from "./views/WeatherCity.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Routes>
          {/* Route - view of Area Selector view */}
          <Route path="/area" element={<AreaSelector />} />
          {/* Route - view of weather info on the city view */}
          <Route path="/weather" element={<WeatherCity />} />
          <Route path="*" element={<Navigate to="/area" />} />
        </Routes>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
