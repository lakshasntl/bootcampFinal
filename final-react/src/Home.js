import React from "react";
import TeamMemberCard from "./TeamMemberCard"; // Import the TeamMemberCard component

const Home = () => {
  const teamMembers = [
    {
      name: "Laksha",
      position: "Project Manager",
      imageUrl: "laksha.JPG",
      buttonRoute: "/laksha",
    },
    {
      name: "Jessica",
      position: "Software Engineer",
      imageUrl: "jessica.JPG",
      buttonRoute: "/jessica",
    },
    {
      name: "Neel",
      position: "Designer",
      imageUrl: "neel.jpg",
      buttonRoute: "/neel",
    },
    {
      name: "Sara",
      position: "Tech Lead",
      imageUrl: "sara.png",
      buttonRoute: "/sara",
    },
    // { name: "Sara", position: "Tech Lead", imageUrl: "", buttonRoute, buttonRoute: "/sara" },
  ];

  return (
    <div className="team-container">
      <h1>H4I Bootcamp Team 4</h1>
      <h2>Meet the Team!</h2>
      <div className="card-container">
        {teamMembers.map((member) => (
          <TeamMemberCard
            key={member.name}
            name={member.name}
            position={member.position}
            imageUrl={member.imageUrl}
            buttonRoute={member.buttonRoute}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
