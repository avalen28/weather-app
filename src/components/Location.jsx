import React from 'react';

const Location = ({latitude, longitude}) => {
  
    return (
      <div>
        <h2>Location</h2>
        <div>
          <div>
            <label>LATITUDE</label>
            {/* Would be nice to add a min and a max */}
            <input type="number" value={latitude ? latitude : "0"} required />
          </div>
          <div>
            <label>LONGITUDE</label>
            {/* Would be nice to add a min and a max */}
            <input type="number" value={longitude ? longitude : "0"} required />
          </div>
        </div>
      </div>
    );
};

export default Location;