import React from "react";
import "../component styles/navbar.css";
import { FaArrowUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [t, i18n] = useTranslation("global");

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const scrollToBottom = () => {
    const appWrapper = document.getElementById("app-wrapper");
    if (appWrapper) {
      appWrapper.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  const scrollUp = () => {
    const appWrapper = document.getElementById("app-wrapper");

    appWrapper.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="navbar-container">
      <div className="language-buttons">
        <button onClick={() => handleChangeLanguage("en")}>en</button>
        <button onClick={() => handleChangeLanguage("fin")}>fin</button>
      </div>
      <a href="https://github.com/OAnsaharju">Github</a>
      <a href="#" onClick={scrollToBottom}>
        {t("navbar.contact-link")}
      </a>

      <a alt={"Scroll up button"} href="#" onClick={scrollUp}>
        <FaArrowUp></FaArrowUp>
      </a>
    </div>
  );
}

export default Navbar;
