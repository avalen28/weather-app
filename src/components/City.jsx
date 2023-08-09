import React from "react";

const City = ({ locations, onUpdateCity }) => {
  return (
    <div>
      <label>City</label>
      <select name="city" onChange={onUpdateCity}>
        {locations &&
          locations.map((location) => (
              <option value={location.city} key={location.id}>{location.city}</option>
          ))}
      </select>
    </div>
  );
};

export default City;
