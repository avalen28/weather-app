import React, { useEffect, useState } from "react";
import axios from "axios";

// 249efd60e5021ba25f979f2caac2b853

const Weather = ({ currentCity }) => {
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
  const [currentWeather, setCurrentWeather] = useState(basicWeather);
  const getWeatherFromAPI = async () => {
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${API_KEY}&units=metric`
      );
        console.log(weatherResponse)
       
          const newWeatherInfo = weatherResponse.data;
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
        
      } catch (error) {
      setCurrentWeather(
        basicWeather
        );
      console.error(error);
    }
  };
  useEffect(() => {
    getWeatherFromAPI();
    // eslint-disable-next-line
  }, [currentCity]);
  return (
    <div>
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
          <p>{currentWeather.sunset}</p>
        </div>
        <div>
          <p>sunrise</p>
          <p>{currentWeather.sunrise}</p>
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
    </div>
  );
};

export default Weather;
