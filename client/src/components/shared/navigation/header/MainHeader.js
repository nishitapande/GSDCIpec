import React, { useState } from "react";
import NavBar from "./NavBar";
import SideDrawer from "./SideDrawer";
import "./MainHeader.css";
function MainHeader() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const openDrawer = () => {
    setDrawerIsOpen(true);
  };
  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };

  return (
    <div className="main-header">
      <div className="main-header__box">
        {drawerIsOpen && (
          <SideDrawer onClick={closeDrawer}>
            <NavBar />
          </SideDrawer>
        )}

        <div className="main-header__leftbox">
          <button className="main-header__menu-btn" onClick={openDrawer}>
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
