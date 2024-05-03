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
            Jokavuotisen Golfkilpailumme järjestäminen osui kohdalleni. En
            löytänyt valmista appia joukkueiden arpomiseen Golffin
            viitekehyksessä joten päätin rakentaa sellaisen! Samalla projekti
            osoittautui loistavaksi mahdollisuudeksi opetella noSQL
            tietokannoista ja State Management. React JS, MongoDB, Redux,
            Express.
          </p>
          <a href="https://github.com/OAnsaharju/Golfapp">Linkki repoon</a>

          <img src="../golf-app.PNG" alt="Golf app picture" />
        </div>
        <div className="demo-item">
          <h4 className="demo-label">Delivery Fee Calculator</h4>
          <p className="demo-text">
            Projekti jossa tarkoitus oli harjoitella Reactia ja TypeScriptiä.
            Tarkoituksena oli luoda laskuri jossa on useita eri lopputulokseen
            vaikuttavia laskutoimituksia. Korin hinta, matkan pituus, tuotteiden
            määrä, päivä ja aika mm. vaikuttavat lopulliseen hintaan. Vahvasti
            tyypitettynä!
          </p>
          <a href="https://github.com/OAnsaharju/fee-calculator">
            Linkki repoon
          </a>
          <img src="../calculator-fee.PNG" alt="Fee Calculator app picture" />
        </div>
      </div>
      <div className="demo-subcontainer">
        <div className="demo-item">
          <h4 className="demo-label">Weather app</h4>
          <p className="demo-text">
            Yksi ensimmäisistä harjoituksista React JS
          </p>
          <a href="https://github.com/OAnsaharju/weather-app-react">
            Linkki repoon
          </a>
          <img src="../weather-app.PNG" alt="Weather app picture" />
        </div>
        <div className="demo-item">
          <h4 className="demo-label">Portfolio</h4>
          <p className="demo-text">You are looking at it!</p>
          <a href="https://github.com/OAnsaharju/Portfolio">Linkki repoon</a>
        </div>
      </div>
    </div>
  );
}

export default Demo;
