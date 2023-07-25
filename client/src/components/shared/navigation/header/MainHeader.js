import React, { useState } from "react";
import NavBar from "./NavBar";
import SlideDrawer from "./SlideDrawer";
import "./MainHeader.css";
function MainHeader() {
  const [sideDrawerIsOpen, setSideDrawerIsOpen] = useState(false);
  const openSideDrawer = () => {
    setSideDrawerIsOpen(true);
  };

  return (
    <div className="main-header">
      <div className="main-header__box">
        <div className="main-header__leftbox">
        //
          {sideDrawerIsOpen &&(
            <SlideDrawer />
          )}

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
