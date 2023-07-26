import React, { useState } from "react";
import NavBar from "./NavBar";
import SlideDrawer from "./SlideDrawer";
import "./MainHeader.css";
function MainHeader() {
  const [sideDrawer, setSideDrawer] = useState(false);
  const openSideDrawer = () => {
    setSideDrawer(true);
  };

  return (
    <div className="main-header">
      <div className="main-header__box">
        {sideDrawer ? <SlideDrawer /> : null}
        <div className="main-header__leftbox">
          <button className="main-header__menu-btn" onclick={openSideDrawer}>
            <span />
            <span />
            <span />
          </button>
          <div className="logo">
            {" "}
            <img />
          </div>
          <div className="logo-name">
            Google Developers <br /> Student Clubs
          </div>
        </div>
        <div className="main-header__rightbox">
          <NavBar />
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
