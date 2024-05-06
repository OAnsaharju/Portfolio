import React from "react";
import "../component styles/demo.css";

function Demo() {
  return (
    <div className="demo-container">
      <h1 className="demo-header">Projects</h1>
      <div className="demo-subcontainer">
        <div className="demo-item">
          <h4 className="demo-label">Golf App</h4>
          <p className="demo-text">
            Jokavuotisen golfkilpailumme järjestäminen osui kohdalleni. En
            löytänyt valmista appia joukkueiden arpomiseen golfin
            viitekehyksessä, joten päätin rakentaa sellaisen! Samalla projekti
            osoittautui loistavaksi mahdollisuudeksi opetella
            noSQL-tietokannoista ja State Management-kirjastosta. React JS,
            MongoDB, Redux, Express.
          </p>

          <a href="https://github.com/OAnsaharju/Golfapp">Linkki repoon</a>
        </div>
        <div className="demo-item">
          <h4 className="demo-label">Delivery Fee Calculator</h4>
          <p className="demo-text">
            Projekti, jossa tarkoitus oli harjoitella Reactia ja TypeScriptiä.
            Tarkoituksena oli luoda laskuri, jossa on useita eri lopputulokseen
            vaikuttavia laskutoimituksia. Mm. Korin hinta, matkan pituus,
            tuotteiden määrä, päivä ja aika vaikuttavat lopulliseen hintaan.
            Vahvasti tyypitettynä!
          </p>

          <a href="https://stalwart-tanuki-79b471.netlify.app/">Demo</a>
          <a href="https://github.com/OAnsaharju/fee-calculator">
            Linkki repoon
          </a>
        </div>
      </div>
      <div className="demo-subcontainer">
        <div className="demo-item">
          <h4 className="demo-label">Weather app</h4>
          <p className="demo-text">
            Yksi ensimmäisistä harjoituksista React-ympäristössä, jossa mukana
            myös public API. Klassinen tutorial-projekti, jossa pyrin tekemään
            oman näköisen ratkaisun. Tietoinen päätös olla seuraamatta
            orjallisesti ohjeita opetti paljon.
          </p>
          <a href="https://6635f483822f94c6101cb192--golden-tapioca-86429d.netlify.app/">
            Demo
          </a>
          <a href="https://github.com/OAnsaharju/weather-app-react">
            Linkki repoon
          </a>
        </div>
        <div className="demo-item">
          <h4 className="demo-label">Portfolio</h4>
          <p className="demo-text">
            You are looking at it! Staattinen verkkosivu projektieni, osaamiseni
            ja itseni esittelemiseksi. OnePage ratkaisu on toteutettu käyttäen
            React JS, CSS, HTML.
          </p>

          <a href="https://github.com/OAnsaharju/Portfolio">Linkki repoon</a>
        </div>
      </div>
    </div>
  );
}

export default Demo;
