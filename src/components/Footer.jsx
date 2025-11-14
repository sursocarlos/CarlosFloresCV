import React, { useContext, useState } from "react";
import "../styles/Footer.css";
import { LanguageContext } from "../context/LanguageContext";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">

        <a
          href="https://www.linkedin.com/in/tu-usuario"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icons/linkedin.png"
            alt="LinkedIn"
            className="footer-icon"
          />
        </a>

        <a
          href="https://github.com/tu-usuario"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icons/github.png"
            alt="GitHub"
            className="footer-icon"
          />
        </a>

      </div>

      <p className="footer-text">© {new Date().getFullYear()} CarlitosKlein</p>
    </footer>
  );
}
export default Footer;