import React from "react";
import "../component styles/profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-name">
        <h1>Otto Ansaharju</h1>
        <h3>Software Developer</h3>
        <img className="profile-pic" src="../profile-pic.jpg" alt="My pic" />
      </div>
      <div className="profile-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          tenetur cum repudiandae nostrum maiores dolores suscipit quas odit
          ipsam ut. Aperiam quaerat iure perspiciatis eaque architecto
          voluptates in iusto porro debitis esse culpa earum eum est asperiores
          autem vero, quidem facilis consectetur quam ipsam beatae tenetur
          voluptas excepturi? Laboriosam, voluptatibus.
        </p>
      </div>
    </div>
  );
}

export default Profile;
