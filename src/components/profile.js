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
        <h2>Hauska tutustua!</h2>
        <p>
          Olen Otto ja olen hyvin kiinnostunut kehittämään toimivia, luotettavia
          ja moderneja ratkaisuja. Opiskelen HAMK:issa tietojenkäsittelyä ja
          lisäksi käytän vapaa-aikaani paljon osaamiseni kehittämiseen
          erilaisten projektien muodossa. Olen erityisen kiinnostunut Back-end
          kehittämisestä, mutta uskon että toimivat tausta-ratkaisut ansaitsevat
          miellyttävän käyttäjä-rajapinnan.
        </p>
        <p>Jos kiinnostuit lue toki lisää alhaalta!</p>
      </div>
    </div>
  );
}

export default Profile;
