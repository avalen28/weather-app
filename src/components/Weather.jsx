import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = ({ coordinates }) => {
  const API_KEY = "249efd60e5021ba25f979f2caac2b853";
  const basicWeather = {
    weather: "-",
    description: "-",
    sunset: "-",
    sunrise: "-",
    location: "-",
    temperature: "-",
    clouds: "-",
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
      setCurrentWeather((prev) => ({
        ...prev,
        weather: newWeatherInfo.weather[0].main,
        description: newWeatherInfo.weather[0].description,
        sunset: newWeatherInfo.sys.sunset,
        sunrise: newWeatherInfo.sys.sunrise,
        location: newWeatherInfo.name,
        temperature: newWeatherInfo.main.temp,
        clouds: newWeatherInfo.clouds.all,
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
    const arrWithHours = [sunset, sunrise].map((elem) => {
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
        <div className="border-2 border-solid border-sky-200 rounded-md p-4 h-64 flex flex-col justify-around">
          <div className="border-b-2 border-solid border-b-sky-200 flex justify-start gap-5">
            <img
              src="./images/cloud.png"
              alt=""
              className="w-7 h-7 object-contain"
            />
            <div>
              <p className="text-xs">WEATHER</p>
              <p>{currentWeather.weather}</p>
            </div>
            <div>
              <p className="text-xs">DESCRIPTION</p>
              <p>{currentWeather.description}{currentWeather.clouds > 0 && ": "+currentWeather.clouds+"%"}</p>
            </div>
          </div>
          <div className="flex justify-start gap-5">
            <div>
              <p className="text-xs">SUNSET</p>
              <p>{sunsetSunrise[0]}</p>
            </div>
            <div>
              <p className="text-xs">SUNRISE</p>
              <p>{sunsetSunrise[1]}</p>
            </div>
            <div>
              <p className="text-xs">LOCATION</p>
              <p>{currentWeather.location}</p>
            </div>
          </div>
          <div className="flex justify-start gap-5">
            <div>
              <p className="text-xs">TEMPERATURE</p>
              <p>{currentWeather.temperature}</p>
            </div>
            <div>
              <p className="text-xs">FEELS LIKE</p>
              <p>{currentWeather.feelsLike}</p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-xs mb-2"> {currentWeather.humidity}% humidity</p>
            <progress
              className="w-full border-2 border-solid border-sky-200 rounded-md h-3"
              max="100"
              value={currentWeather.humidity}
            ></progress>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
