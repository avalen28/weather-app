import React from 'react';
import { useState } from 'react';

// Import components
import City from "../components/City";
import Weather from "../components/Weather";
import locations from "../data/test_locations.json";

const WeatherCity = () => {
  const [currentCity, setCurrentCity] = useState(locations[0].city)
  const onUpdateCity = (e) => {
    setCurrentCity(e.target.value)
  }
  
    return (
      <div>
        <City locations={locations} onUpdateCity={onUpdateCity} />
        <Weather currentCity={currentCity} />
      </div>
    );
};

export default WeatherCity;