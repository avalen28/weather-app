import React from 'react';

const Location = ({
  coordinates: { latitude, longitude },
  onUpdateCoordinates
}) => {
  return (
    <div className="h-1/4">
      <h2 className="font-semibold text-lg">Location</h2>
      <div className="py-2 flex">
        <div className="flex flex-col gap-2">
          <label className="text-xs">LATITUDE</label>
          {/* Would be nice to add a min and a max */}
          <input
            type="number"
            name="latitude"
            value={latitude ? latitude : "0"}
            required
            onChange={onUpdateCoordinates}
            className="bg-sky-100 p-2 w-full border-r-2 border-solid border-r-sky-200 rounded-l-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs">LONGITUDE</label>
          {/* Would be nice to add a min and a max */}
          <input
            type="number"
            name="longitude"
            value={longitude ? longitude : "0"}
            required
            onChange={onUpdateCoordinates}
            className="bg-sky-100 p-2 w-full rounded-r-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Location;