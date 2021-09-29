import React from "react";
import grace from "../img/grace.jpg";
import "./ProfileCard.css";

export default function ProfileCard() {
  return (
    <div className="profile-card">
      <div>
        <div>
          <img src={grace} alt="Grace's pic"></img>
        </div>

        <h2>Grace Aranico <span className="dot"></span></h2>
        <p>React Native Apprentice</p>
        <p>She/Her</p>
      </div>
    </div>
  );
}
