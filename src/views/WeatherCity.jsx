import React from 'react';

// Import components
import City from "../components/City";
import Weather from "../components/Weather";
import locations from "../data/test_locations.json";

const WeatherCity = () => {
    return (
      <div>
        <City locations={locations} />
        <Weather />
      </div>
    );
};

export default WeatherCity;