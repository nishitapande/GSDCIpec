import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
function Hero() {
  return (
    <div className="hero-section">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="primary-heading">Welcome To GDSC</h1>
          <p className="hero-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            necessitatibus incidunt ut officiis explicabo inventore.
          </p>
          <div className="hero-links">
            <Link className="hero-link">Know More</Link>
            <Link className="hero-link">Be a Part of the Team</Link>
          </div>
        </div>
        <div>Image box</div>
      </div>
    </div>
  );
}

export default Hero;
