import React from "react";
import { NavLink } from "react-router-dom";

import "./SlideDrawer.css";
function SlideDrawer() {
  return (
    <aside className="side-drawer">
      <nav className="nav-links">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/team">
          Team
        </NavLink>
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
        <NavLink className="nav-link" to="/event">
          Event
        </NavLink>
        <NavLink className="nav-link" to="/contact">
          Contact
        </NavLink>
      </nav>
    </aside>
  );
}

export default SlideDrawer;
