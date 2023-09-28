import "./App.css";
import AreaSelector from "./views/AreaSelector.jsx";
import WeatherCity from "./views/WeatherCity.jsx";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const [selfGeoLoc, setSelfGeoLoc] = useState(null)
  const handleSelfGeoLoc = (userCoordinates) => {
    setSelfGeoLoc([userCoordinates.longitude, userCoordinates.latitude]);
  };

  return (
    <div>
      <div>
        <Routes>
          {/* Route - view of Area Selector view */}
          <Route
            path="/area"
            element={<AreaSelector handleSelfGeoLoc={handleSelfGeoLoc} />}
          />
          {/* Route - view of weather info on the city view */}
          <Route
            path="/weather"
            element={<WeatherCity selfGeoLoc={selfGeoLoc} />}
          />
          <Route path="*" element={<Navigate to="/area" />} />
        </Routes>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
