import React from 'react';

const Location = ({
  coordinates: { latitude, longitude },
  onUpdateCoordinates
}) => {
  return (
    <div>
      <h2>Location</h2>
      <div>
        <div>
          <label>LATITUDE</label>
          {/* Would be nice to add a min and a max */}
          <input
            type="number"
            name="latitude"
            value={latitude ? latitude : "0"}
            required
            onChange={onUpdateCoordinates}
          />
        </div>
        <div>
          <label>LONGITUDE</label>
          {/* Would be nice to add a min and a max */}
          <input
            type="number"
            name="longitude"
            value={longitude ? longitude : "0"}
            required
            onChange={onUpdateCoordinates}
          />
        </div>
      </div>
    </div>
  );
};

export default Location;