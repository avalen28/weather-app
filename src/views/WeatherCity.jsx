import React from 'react';

// Import components
import CitySelector from '../components/CitySelector';
import InfoWeather from '../components/InfoWeather';

const WeatherCity = () => {
    return (
        <div>
            Hello! this is the weather city view
            <CitySelector />
            <InfoWeather />
        </div>
    );
};

export default WeatherCity;