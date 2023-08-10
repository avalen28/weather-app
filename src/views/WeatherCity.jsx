import React from 'react';
import { useState } from 'react';

// Import components
import City from "../components/City";
import Weather from "../components/Weather";
import locations from "../data/test_locations.json";

const WeatherCity = () => {
  const [coordinates, setCoordinates] = useState(
    locations[0].location.coordinates
  );
  const onUpdateCity = (e) => {
    const citySelected = e.target.value;
    const infoCity = locations.find(elem => elem.city === citySelected)
    setCoordinates(infoCity.location.coordinates);
  }
  
    return (
      <div className='p-5'>
        <h1 className="font-bold text-xl text-center py-10">Weather City</h1>
        {/* we send to City Component the json with all the cities */}
        <City locations={locations} onUpdateCity={onUpdateCity} />
        <Weather coordinates={coordinates} />
      </div>
    );
};

export default WeatherCity;