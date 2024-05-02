import React from "react";
import "../component styles/about.css";

function About() {
  return (
    <div className="about-container">
      <h3 className="about-label">Taustaa</h3>
      <p className="about-text">
        Suhtaudun tietojenkäsittelyyn intohimoisesti, ja jo ennen koulua
        opiskelin itsenäisesti ohjelmoinnin alkeita. Olen kartuttanut
        osaamistani useilla eri osa-alueilla, enkä ole löytänyt aihetta joka ei
        kiinnostaisi Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quasi necessitatibus eveniet quos. Maiores ad assumenda aliquid porro
        quos! Voluptas molestiae hic adipisci architecto voluptates. Veniam
        delectus atque nobis dignissimos neque quae eligendi beatae itaque
        nesciunt quas repellat eos corrupti minima quos repellendus non aut
        harum quaerat quod eius, sunt enim.
      </p>
      <h3 className="about-label">Lähestymiseni ohjelmointiin</h3>
      <p className="about-text">
        Jatkuvasti uuden tiedon kerääminen ja osaamisen kartuttaminen omien
        projektien avulla ei ainoastaan ole minulle tärkeää mutta välttämätöntä.
        Olen pyrkinyt tekemään projekteja jotka tuntuvat minulle tärkeiltä
        oppimisen näkökulmasta. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Sint blanditiis perferendis beatae, necessitatibus
        eaque voluptate magni in debitis pariatur, laborum totam, soluta
        quibusdam adipisci dolor quo iste deleniti. Iste minima nisi tempora
        alias maxime esse assumenda dicta expedita neque eveniet?
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
        <p>JS</p>
        <p>React</p>
        <p>Node JS</p>
        <p>Java</p>
        <p>Python</p>
        <p>Git</p>
        <p>Mongo DB</p>
        <p>MySQL</p>
      </div>
    </div>
  );
}

export default About;
