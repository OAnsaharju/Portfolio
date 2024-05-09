import React from "react";
import "../component styles/about.css";
import { FaGitAlt, FaHtml5, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { DiMongodb, DiMysql } from "react-icons/di";
import { useTranslation } from "react-i18next";

function About() {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="about-container">
      <h4 className="about-label"> {t("about.about-header-1")}</h4>
      <p className="about-text">{t("about.about-text-1")}</p>
      <h4 className="about-label">{t("about.about-header-2")}</h4>
      <p className="about-text">{t("about.about-text-2")}</p>
      <h4 className="about-label">{t("about.about-header-3")}</h4>
      <p className="about-text">{t("about.about-text-3")}</p>
      <ul className="about-subject-list">
        <li className="about-subject-item">{t("about.about-subject-1")}</li>
        <li className="about-subject-item">{t("about.about-subject-2")}</li>
        <li className="about-subject-item">{t("about.about-subject-3")}</li>
        <li className="about-subject-item">{t("about.about-subject-4")}</li>
        <li className="about-subject-item">{t("about.about-subject-5")}</li>
        <li className="about-subject-item">{t("about.about-subject-6")}</li>
        <li className="about-subject-item">{t("about.about-subject-7")}</li>
        <li className="about-subject-item">{t("about.about-subject-8")}</li>
      </ul>
      <div className="tech-stack-bar">
        <p alt={"HTML5 logo"}>
          <FaHtml5 size={40} color="#e34c26"></FaHtml5>
        </p>
        <p alt={"React logo"}>
          <FaReact size={40} color="#16c8f2"></FaReact>
        </p>

        <p alt={"Node JS logo"}>
          <FaNodeJs size={40} color="6cc24a"></FaNodeJs>
        </p>
        <p alt={"Java logo"}>
          <FaJava size={40} color="#e34c26"></FaJava>
        </p>
        <p alt={"Python logo"}>
          <FaPython size={40} color="4584b6"></FaPython>
        </p>
        <p alt={"Git logo"}>
          <FaGitAlt size={40} color="#F1502F"></FaGitAlt>
        </p>
        <p alt={"Mongo DB logo"}>
          <DiMongodb size={40} color="#589636"></DiMongodb>
        </p>
        <p alt={"MySQL logo"}>
          <DiMysql size={40} color="#00758f"></DiMysql>
        </p>
      </div>
    </div>
  );
}

export default About;
