import React from "react";
import "../component styles/navbar.css";
import { FaArrowUp } from "react-icons/fa";

function Navbar() {
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
      <a href="https://github.com/OAnsaharju">Github</a>
      <a href="#" onClick={scrollToBottom}>
        Yhteystiedot
      </a>

      <a href="#" onClick={scrollUp}>
        <FaArrowUp></FaArrowUp>
      </a>
    </div>
  );
}

export default Navbar;
