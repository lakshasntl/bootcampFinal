import React from "react";
import { Link } from "react-router-dom";
import "./TeamMemberCard.css"; // Assuming styles are in this CSS file

const TeamMemberCard = ({ name, position, imageUrl, buttonRoute }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="card-info">
        <h3>{name}</h3>
        <p>{position}</p>
        <Link to={buttonRoute} className="learn-more-btn">
          Learn More!
        </Link>
      </div>
    </div>
  );
};

export default TeamMemberCard;
