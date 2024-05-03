import React from "react";
import "../component styles/footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLetterboxd } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="footer-container">
      <a href="">
        <FaGithub></FaGithub>
      </a>
      <a href="">
        <FaLinkedin></FaLinkedin>
      </a>

      <p>o.ansaharju@gmail.com</p>
    </div>
  );
}

export default Footer;
