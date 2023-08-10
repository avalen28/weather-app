import React from "react";

const City = ({ locations, onUpdateCity }) => {
  return (
    <div className="flex flex-col">
      <label className="font-semibold text-lg">City</label>
      <select
        name="city"
        onChange={onUpdateCity}
        className="bg-sky-100 p-2 w-full rounded-md my-3"
      >
        {locations &&
          locations.map((location) => (
            <option value={location.city} key={location.id}>
              {location.city}
            </option>
          ))}
      </select>
    </div>
  );
};

export default City;
