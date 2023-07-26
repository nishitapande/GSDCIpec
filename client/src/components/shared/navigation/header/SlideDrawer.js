import React from "react";
import { NavLink } from "react-router-dom";

import "./SlideDrawer.css";
function SlideDrawer() {
  return (
    <aside className="side-drawer">
      {/* <button>
        <span> X </span>
      </button> */}
      <nav className="side-nav-links">
        <NavLink to="/" className="side-nav-link">
          Home
        </NavLink>
        <NavLink className="side-nav-link" to="/team">
          Team
        </NavLink>
        <NavLink className="side-nav-link" to="/about">
          About
        </NavLink>
        <NavLink className="side-nav-link" to="/event">
          Event
        </NavLink>
        <NavLink className="side-nav-link" to="/contact">
          Contact
        </NavLink>
      </nav>
    </aside>
  );
}

export default SlideDrawer;
