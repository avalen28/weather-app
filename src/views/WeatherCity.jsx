import axios from "axios";
import React from "react";
import { useState } from "react";

// Import components
import City from "../components/City";
import Weather from "../components/Weather";
import locations from "../data/test_locations.json";

const WeatherCity = ({ selfGeoLoc }) => {
  const API_KEY = "249efd60e5021ba25f979f2caac2b853";
  const [uptadedLocations, setUpdatedLocations] = useState(locations);
  const [fixedCoordinates, setCoordinates] = useState(
    locations[0].location.coordinates
  );

  const onUpdateCity = (e) => {
    const citySelected = e.target.value;
    const infoCity = uptadedLocations.find(
      (elem) => elem.city === citySelected
    );
    console.log(infoCity)
    setCoordinates(infoCity.location.coordinates);
  };
  const getWeatherFromApiOfMyCity = async () => {
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${selfGeoLoc[1]}&lon=${selfGeoLoc[0]}&appid=${API_KEY}&units=metric`
      );
      const { id,name } = weatherResponse.data;
      const cityArrUpdated = [...uptadedLocations];
      if (cityArrUpdated.filter(object => object.city === name).length === 0) {
        const currentCity = {
          id: id,
          city: name,
          location: {
            coordinates: selfGeoLoc,
          },
        };
        cityArrUpdated.push(currentCity);
        setUpdatedLocations(cityArrUpdated);
      } else {
        setUpdatedLocations(cityArrUpdated);
     }
     
      
    } catch (error) {
      console.error(error);
    }


  };

  const handleCheckMyCity = () => {
    setCoordinates(selfGeoLoc);
    getWeatherFromApiOfMyCity();
  };

  return (
    <div className="p-5">
      <h1 className="font-bold text-xl text-center py-10">Weather City</h1>
      {/* we send to City Component the json with all the cities */}
      {fixedCoordinates && (
        <>
          <City
            locations={uptadedLocations}
            onUpdateCity={onUpdateCity}
          />
          <Weather coordinates={fixedCoordinates} />
        </>
      )}
      {/* {!fixedCoordinates && selfCoordinates > 0 && (<SelfCity />)} */}

      <button onClick={handleCheckMyCity}>Check your city!</button>
    </div>
  );
};

export default WeatherCity;
