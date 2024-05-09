import React from "react";
import "../component styles/profile.css";
import { useTranslation } from "react-i18next";

function Profile() {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="profile-container">
      <div className="profile-name">
        <h1>Otto Ansaharju</h1>
        <h2>Software Developer</h2>
        <img
          className="profile-pic"
          src="../profile-pic.jpg"
          alt="Picture of the creator"
        />
      </div>
      <div className="profile-content">
        <h3>{t("profile.profile-content-h2")}</h3>
        <p>{t("profile.profile-content-p1")}</p>
        <p>{t("profile.profile-content-p2")}</p>
      </div>
    </div>
  );
}

export default Profile;
