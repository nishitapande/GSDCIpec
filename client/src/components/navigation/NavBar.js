import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <div className="navbar">
      <div className="nav-bar">
        <div className="nav-bar-left">
          <div className="logo">
            {" "}
            <img />
          </div>
          <div className="logo-name">
            Google Developers <br /> Student Clubs
          </div>
        </div>
        <div className="nav-bar-right">
          <nav className="nav-links">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link className="nav-link" to="/team">
              Team
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/event">
              Event
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
