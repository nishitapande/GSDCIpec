import React from "react";
import TeamItem from "./TeamItem";
function TeamList(props) {
  return (
    <ul>
      {props.members.map((member) => {
        return (
          <TeamItem
            key={member.id}
            id={member.id}
            name={member.name}
            position={member.position}
            image={member.image}
          />
        );
      })}
    </ul>
  );
}

export default TeamList;
