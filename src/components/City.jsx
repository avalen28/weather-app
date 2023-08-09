import React from "react";

const City = ({ locations }) => {
  return (
    <div>
      <label>City</label>
      <select name="city">
        {locations &&
          locations.map((location) => (
            <option value={location.city}>{location.city}</option>
          ))}
      </select>
    </div>
  );
};

export default City;
