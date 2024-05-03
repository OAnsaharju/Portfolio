import React from "react";
import "../component styles/about.css";
import {
  FaGit,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { DiMongodb, DiMysql } from "react-icons/di";
import { BiColor } from "react-icons/bi";

function About() {
  return (
    <div className="about-container">
      <h3 className="about-label">Taustaa</h3>
      <p className="about-text">
        Suhtaudun tietojenkäsittelyyn intohimoisesti, ja jo ennen koulua
        opiskelin itsenäisesti ohjelmoinnin alkeita. Olen kartuttanut
        osaamistani useilla eri osa-alueilla, enkä ole löytänyt aihetta joka ei
        kiinnostaisi.
      </p>
      <h3 className="about-label">Lähestymiseni ohjelmointiin</h3>
      <p className="about-text">
        Jatkuvasti uuden tiedon kerääminen ja osaamisen kartuttaminen omien
        projektien avulla ei ainoastaan ole minulle tärkeää mutta välttämätöntä.
        Olen pyrkinyt tekemään projekteja jotka tuntuvat minulle tärkeiltä
        oppimisen näkökulmasta.
      </p>
      <h3 className="about-label">Koulutus</h3>
      <p className="about-text">
        Koulutukseni Hämeenlinnan ammattikorkeakoulussa on tarjonnut minulle
        useita hyödyllisiä kursseja ja ryhmätöitä joissa olen oppinut paljon
        ryhmässä työskentelemisestä. Useissa projekteissa on ollut käytössä
        versionhallinta-työkalut (git) ja Agile työskentelytavat(Scrum) joten
        nämä ovat tulleet tutuiksi. Ohessa pientä listausta projekteista ja
        kursseista joille olen osallistunut.
      </p>
      <ul className="about-subject-list">
        <li className="about-subject-item">
          Azure projekti - Intranet Autokaupalle
        </li>
        <li className="about-subject-item">Agile/Scrum perusteet</li>
        <li className="about-subject-item">Java OOP perusteet</li>
        <li className="about-subject-item">
          Diili projekti - Road to Vostok bug report system ideointi
        </li>
        <li className="about-subject-item">
          Käyttöjärjestelmien perusteet Linux, Windows
        </li>
        <li className="about-subject-item">
          Tietojärjestelmien ja tietoturvallisuuden perusteet
        </li>
        <li className="about-subject-item">Wordpress projekti</li>
        <li className="about-subject-item">
          Datan analysointi Pythonilla (matplotlib, pandas)
        </li>
      </ul>
      <div className="tech-stack-bar">
        <p>
          <FaHtml5 size={40} color="#e34c26"></FaHtml5>
        </p>
        <p>
          <FaReact size={40} color="#16c8f2"></FaReact>
        </p>

        <p>
          <FaNodeJs size={40} color="6cc24a"></FaNodeJs>
        </p>
        <p>
          <FaJava size={40} color="#e34c26"></FaJava>
        </p>
        <p>
          <FaPython size={40} color="4584b6"></FaPython>
        </p>
        <p>
          <FaGitAlt size={40} color="#F1502F"></FaGitAlt>
        </p>
        <p>
          <DiMongodb size={40} color="#589636"></DiMongodb>
        </p>
        <p>
          <DiMysql size={40} color="#00758f"></DiMysql>
        </p>
      </div>
    </div>
  );
}

export default About;