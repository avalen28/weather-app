import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
      <div>
        <NavLink to="/area"> area</NavLink>
        <NavLink to="/weather"> weather</NavLink>
      </div>
    );
};

export default Navbar;