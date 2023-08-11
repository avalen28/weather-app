# Weather-app 🌨️🌤️☀️

WeatherApp is a React-based web application that allows users to explore weather conditions for different locations and cities.

## Recomendation 🔍

- Use mobile format.
- The application will prompt the browser to request user permissions for obtaining geolocation. Remember to accept!

## Getting Started 🏃‍♂️
Install dependencies
```bash
npm install
```
Start the development server
```bash
npm start
```
Open your web browser and navigate to http://localhost:3000 to access the Weather-App.

## Features 📦
The WeatherApp consists of the following main features:

### Area Selector (url 👉 http://localhost:3000/area)

The Area Selector screen enables users to view a selected location on the map and adjust the display area:

- The Location component automatically sets the latitude and longitude to the user's current location (with proper permissions).
- Users can manually input latitude and longitude values, and error messages are shown for invalid inputs. The map shows the new position.
- The Area component displays the selected place on the map with a marker.
- A circle is displayed around the marker to represent the area, with a default radius of 1 km.
- A slider allows users to adjust the area radius, and the map zooms in and out correspondingly.

### Weather City (url 👉 http://localhost:3000/weather)
The Weather City screen provides real-time weather conditions for a selected city of a given array:

- The City Selector component displays a list of cities from which the user can choose one.
- When the user selects a city, the app fetches current weather data using the OpenWeatherMap API (passing the latitude and longitude of the selected city as params of the request to the API).
- The Weather component shows the current weather conditions, sunrise and sunset times displayed in the timezone of the selected city, as well as the current temperature and "feels like" temperature (which are displayed in Celsius).

### Navbar 
The Navbar provides easy navigation between the Area Selector and Weather City screens:

- Users can switch between the two main screens using navigation buttons.
- The button give an easy relation button - page 


## Technologies Used 💻
- React.
- Tailwind CSS.
- react-leaflet: Library for interactive maps with Leaflet integration.
- OpenWeatherMap API.
- Postman to test API response.
- FontAwesome to support with icons weather info.

## Personal decisions ✨
Although the exercise did not specify it, I have made some personal decisions for improvement:

- I made the API request using the provided latitude and longitude, as there is a possibility that the city name might be misspelled and the API might not recognize it (e.g., Premià written as Premiá).
- I assumed that the user input for latitude and longitude will always be numeric. However, I have implemented some controls, such as ensuring that the input is of type "number" and that the field is required.
- I have considered the openweather api key that was provided to be public domain, but in a real-life scenario it would have been a good practise to have keys like these private, for instance integrating the dotenv package and using the .env file to store such variables.
- I made the API call directly since it only required a GET request. In case there had been more than one request or more than one API, I would have considered creating a service for each of the APIs, with each service having its own class and methods for each call.


## Improvements for the App 🚀🚀

I have greatly enjoyed building this app; it has been a lot of fun! However, if I had more time, I would like to enhance the following aspects:

- User Experience: Create an entry interface, possibly a "welcome" view style.
- Enhance data handling from the API: Currently, I've assumed that the API will always return complete JSON data. I'd like to handle different scenarios more effectively.
- Complete or enhance some styles: Add finishing touches to styles or create a more visually pleasing design (such as a blurred map effect, presenting data in a more appealing or dynamic manner, etc.).
- Code Refinement: There's always room for improvement in terms of code quality and cleanliness!

It has really been a happy coding time! 💻

![Alt Text](https://i.gifer.com/7VJ3.gif)