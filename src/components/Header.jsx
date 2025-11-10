import React, { useContext } from "react";
import "../styles/Header.css";
import logo from "../assets/logo3.png";
import { LanguageContext } from "../context/LanguageContext";

function Header() {
  const { lang, toggleLang } = useContext(LanguageContext);

  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        
        <nav>
          <a href="#sobre-mi">{lang === "es" ? "Inicio" : "Home"}</a>
          <a href="#experiencia">{lang === "es" ? "Experiencia" : "Experience"}</a>
          <a href="#habilidades">{lang === "es" ? "Habilidades" : "Skills"}</a>
          <a href="#certificaciones">
            {lang === "es" ? "Certificaciones" : "Certifications"}
          </a>
          <a href="#contacto">{lang === "es" ? "Contacto" : "Contact"}</a>
        </nav>

        <div className="lang-switch">
          <div className="tabs">
            <input
              type="radio"
              name="lang"
              id="es"
              className="input"
              checked={lang === "es"}
              onChange={() => toggleLang()}
            />
            <label htmlFor="es" className="label">
              Español
            </label>

            <input
              type="radio"
              name="lang"
              id="en"
              className="input"
              checked={lang === "en"}
              onChange={() => toggleLang()}
            />
            <label htmlFor="en" className="label">
              English
            </label>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
