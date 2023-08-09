import React, {useState, useEffect} from 'react';

// Import components
import Location from '../components/Location';
import Area from '../components/Area';

const AreaSelector = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            });
        }
    }, [])

  return (
    <div>
          <Location latitude={latitude} longitude={longitude} />
      <Area />
    </div>
  );
};

export default AreaSelector;