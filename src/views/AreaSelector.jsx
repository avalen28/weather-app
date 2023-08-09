import React, {useState, useEffect} from 'react';

// Import components
import Location from '../components/Location';
import Area from '../components/Area';

const AreaSelector = () => {
    const [coordinates, setCoordinates] = useState({
        latitude: 0, longitude: 0
    })

    const updateCoordinates = (e) => {
        const coordinateIsNumber = Number.isNaN(parseInt(e.target.value));
        if (coordinateIsNumber) {
            setCoordinates(prev => {
                return {
                    ...prev,
                    [e.target.name]: e.target.value
                }
            });
        } else {
            window.alert("Please provide valid coordinates")
        }
    }

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                setCoordinates({
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                });
            });
        }
    }, [])

  return (
    <div>
          <Location coordinates={coordinates} onUpdateCoordinates={updateCoordinates} />
      <Area />
    </div>
  );
};

export default AreaSelector;