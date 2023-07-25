import React from "react";
import TeamList from "../component/TeamList";
function Members() {
  const teamMembers = [
    {
      id: "m1",
      name: "Nishita Pande",
      Position: "Women Lead",
      image:
        "https://i.pinimg.com/originals/fa/1d/7a/fa1d7a0cc5eb2f5d73e311013bf66941.jpg",
    },
    {
      id: "m2",
      name: "Nishita Pande",
      Position: "Women Lead",
      image:
        "https://i.pinimg.com/originals/fa/1d/7a/fa1d7a0cc5eb2f5d73e311013bf66941.jpg",
    },
  ];
  return (
    <>
      <TeamList members={teamMembers} />
    </>
  );
}

export default Members;
