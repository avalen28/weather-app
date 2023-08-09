import React from 'react';

const Location = () => {
    return (
      <div>
        <h2>Location</h2>
        <div>
          <div>
            <label>LATITUDE</label>
            {/* Would be nice to add a min and a max */}
            <input type="number" required />
          </div>
          <div>
            <label>LONGITUDE</label>
            {/* Would be nice to add a min and a max */}
            <input type="number" required />
          </div>
        </div>
      </div>
    );
};

export default Location;