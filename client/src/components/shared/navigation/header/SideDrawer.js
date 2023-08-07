import React from "react";
import { NavLink } from "react-router-dom";

import "./SideDrawer.css";
function SideDrawer(props) {
  return (
    <aside className="side-drawer" onClick={props.onClick}>
      <button className="close-button" onClick={props.onClick}> X </button>
      {props.children}
    </aside>
  );
}

export default SideDrawer;
