import React, {useState, useEffect} from 'react';

// Import components
import Location from '../components/Location';
import Area from '../components/Area';

const AreaSelector = () => {
  // Nice to add, implementation that takes into account absence of coordinates
    const [coordinates, setCoordinates] = useState(null)

    const updateCoordinates = (e) => {
        // Check if the provided value is a valid coordinate
        const coordinateIsNumber = !Number.isNaN(parseInt(e.target.value));
        if (coordinateIsNumber) {
            setCoordinates(prev => {
                return {
                    ...prev,
                    [e.target.name]: Number(e.target.value)
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
    <div className='p-5'>
      <h1 className="font-bold text-xl text-center py-10">Area selector</h1>
      {coordinates && (
        <>
          <Location
            coordinates={coordinates}
            onUpdateCoordinates={updateCoordinates}
          />
          <Area coordinates={coordinates} />
        </>
      )}
    </div>
  );
};

export default AreaSelector;