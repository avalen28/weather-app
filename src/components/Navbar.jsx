import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
      <div>
        <NavLink to="/area">
          <img src="./images/location.png" alt="location symbol" />
        </NavLink>
        <NavLink to="/weather">
          <img src="./images/cloud.png" alt="location symbol" />
        </NavLink>
      </div>
    );
};

export default Navbar;