import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = ({ coordinates }) => {
  console.log(coordinates)
  const API_KEY = "249efd60e5021ba25f979f2caac2b853";
  const basicWeather = {
    weather: "-",
    description: "-",
    sunset: "-",
    sunrise: "-",
    location: "-",
    temperature: "-",
    feelsLike: "-",
    humidity: "-",
  };
  const [currentWeather, setCurrentWeather] = useState(null);
  const [sunsetSunrise, setSunsetSunrise] = useState(null);

  const getWeatherFromAPI = async () => {
    try {
      const weatherResponse = await axios.get(
        //The API.call includes the param units = metric. API returns temp in Celsius
        `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates[1]}&lon=${coordinates[0]}&appid=${API_KEY}&units=metric`
      );
      const newWeatherInfo = weatherResponse.data;
      console.log(newWeatherInfo)
      setCurrentWeather((prev) => ({
        ...prev,
        weather: newWeatherInfo.weather[0].main,
        description: newWeatherInfo.weather[0].description,
        sunset: newWeatherInfo.sys.sunset,
        sunrise: newWeatherInfo.sys.sunrise,
        location: newWeatherInfo.name,
        temperature: newWeatherInfo.main.temp,
        feelsLike: newWeatherInfo.main.feels_like,
        humidity: newWeatherInfo.main.humidity,
      }));
      handleSunsetSunrise(
        newWeatherInfo.sys.sunset,
        newWeatherInfo.sys.sunrise
      );
    } catch (error) {
      setCurrentWeather(basicWeather);
      console.error(error);
    }
  };

  //with this function we update the time from sec (milisec.) to standar hour
  const handleSunsetSunrise = (sunset, sunrise) => {
    const arrWithHours = [sunset, sunrise].map(elem => {
         const date = new Date(elem * 1000);

         const hour = ("0" + date.getHours()).slice(-2);
         const minutes = ("0" + date.getMinutes()).slice(-2);

         const finalHour = `${hour}:${minutes}`;
      
      return finalHour;
    });
    setSunsetSunrise(arrWithHours);
  };


  useEffect(() => {
    getWeatherFromAPI();
    // eslint-disable-next-line
  }, [coordinates]);
  return (
    <div>
      {currentWeather && (
        <>
          <div className="block-1">
            <img src="" alt="" />
            <div>
              <p>weather</p>
              <p>{currentWeather.weather}</p>
            </div>
            <div>
              <p>description</p>
              <p>{currentWeather.description}</p>
            </div>
          </div>
          <div className="block-2">
            <div>
              <p>sunset</p>
              <p>{sunsetSunrise[0]}</p>
            </div>
            <div>
              <p>sunrise</p>
              <p>{sunsetSunrise[1]}</p>
            </div>
            <div>
              <p>location</p>
              <p>{currentWeather.location}</p>
            </div>
          </div>
          <div className="block-3">
            <div>
              <p>temperature</p>
              <p>{currentWeather.temperature}</p>
            </div>
            <div>
              <p>feels like</p>
              <p>{currentWeather.feelsLike}</p>
            </div>
          </div>
          <div className="block-4">
            <p>humidity</p>
            <p>{currentWeather.humidity}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
