import React from 'react';

// Import components
import City from "../components/City";
import Weather from "../components/Weather";

const WeatherCity = () => {
    return (
      <div>
        Hello! this is the weather city view
        <City />
        <Weather />
      </div>
    );
};

export default WeatherCity;