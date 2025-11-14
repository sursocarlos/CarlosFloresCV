import React, { useContext, useState } from "react";
import "../styles/Footer.css";
import Github from "../assets/github.png";
import LinkedIn from "../assets/linkedIn.png";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">

        <a
          href="https://www.linkedin.com/in/carlos-flores-hern%C3%A1ndez-0a63862b1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={LinkedIn}
            alt="LinkedIn"
            className="linkedIn"
          />
        </a>
        <a
          href="https://github.com/sursocarlos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Github}
            alt="GitHub"
            className="github"
          />
        </a>
      </div>
    </footer>
  );
}
export default Footer;