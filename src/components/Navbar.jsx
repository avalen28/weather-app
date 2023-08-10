import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [activeUrl, setActiveUrl] = useState("/area")
    return (
      <div className="absolute bottom-0 flex h-20 border-t-2 border-solid border-t-sky-200 w-full items-center justify-center gap-16">
        <NavLink to="/area" className="w-8">
          <img
            className={(activeUrl !== "/area" ? "opacity-20" : "") + " w-8"}
            src="./images/location.png"
            alt="location symbol"
            onClick={() => setActiveUrl("/area")}
          />
        </NavLink>
        <NavLink to="/weather">
          <img
            className={(activeUrl !== "/weather" ? "opacity-20" : "") + " w-8"}
            src="./images/cloud.png"
            alt="location symbol"
            onClick={() => setActiveUrl("/weather")}
          />
        </NavLink>
      </div>
    );
};

export default Navbar;