import React from "react";

function TeamItem(props) {
  return (
    <li>
      <div>
        <div className="image">
          <img src={props.image} alt={props.name} />
        </div>
        <div className="info">
          <h2> {props.position} </h2>
          <h3> {props.name} </h3>
        </div>
      </div>
    </li>
  );
}

export default TeamItem;
