import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  // const colors = [
  //   { id: 1, color: "#4285F4" },
  //   { id: 2, color: "#EA4335" },
  //   { id: 3, color: "#FBBC05" },
  //   { id: 4, color: "#34A853" },
  // ];
  // const [navColor, setNavColor] = useState(colors[0]);
  // const [hover, setHover] = useState(false);
  // const colorHandler = () => {
  //   const randomInt = Math.floor(Math.random() * 4) + 1;
  //   console.log(randomInt);
  //   const newColor = colors[randomInt - 1].color;
  //   setHover(true);
  //   return newColor;
  // };
  // const styles = {
  //   color: navColor,
  // };
  // const handleMouseLeave = () => {
  //   setHover(false);
  //   setNavColor("#000000");
  // };
  return (
    <nav className="nav-links">
      <NavLink to="/" className="nav-link" exact>
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
  );
}

export default NavBar;
