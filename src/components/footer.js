import React from "react";
import "../component styles/footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <a href="https://github.com/OAnsaharju">
        <FaGithub></FaGithub>
      </a>

      <p>o.ansaharju@gmail.com</p>
    </div>
  );
}

export default Footer;
