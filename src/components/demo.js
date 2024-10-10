import React from "react";
import "../component styles/demo.css";
import { useTranslation } from "react-i18next";

function Demo() {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="demo-container">
      <h1 className="demo-header">Projects</h1>
      <div className="demo-subcontainer">
        <div className="demo-item">
          <h4 className="demo-label">Golf App</h4>
          <p className="demo-text">{t("demo.demo-text-1")}</p>
          <a href="https://poikainpelit.netlify.app/">Demo</a>

          <a href="https://github.com/OAnsaharju/Golfapp">
            {t("demo.repo-text")}
          </a>
        </div>
        <div className="demo-item">
          <h4 className="demo-label">Delivery Fee Calculator</h4>
          <p className="demo-text">{t("demo.demo-text-2")}</p>

          <a href="https://stalwart-tanuki-79b471.netlify.app/">Demo</a>
          <a href="https://github.com/OAnsaharju/fee-calculator">
            {t("demo.repo-text")}
          </a>
        </div>
      </div>
      <div className="demo-subcontainer">
        <div className="demo-item">
          <h4 className="demo-label">Weather app</h4>
          <p className="demo-text">{t("demo.demo-text-3")}</p>
          <a href="https://6635f483822f94c6101cb192--golden-tapioca-86429d.netlify.app/">
            Demo
          </a>
          <a href="https://github.com/OAnsaharju/weather-app-react">
            {t("demo.repo-text")}
          </a>
        </div>
        <div className="demo-item">
          <h4 className="demo-label">Portfolio</h4>
          <p className="demo-text">{t("demo.demo-text-4")}</p>

          <a href="https://github.com/OAnsaharju/Portfolio">
            {t("demo.repo-text")}
          </a>
        </div>
        <div className="demo-item">
          <h4 className="demo-label">Prosopagnosia</h4>
          <p className="demo-text">{t("demo.demo-text-5")}</p>

          <a href="https://github.com/OAnsaharju/Portfolio">
            {t("demo.repo-text")}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Demo;
