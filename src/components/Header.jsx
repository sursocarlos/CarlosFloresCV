import React, { useContext, useState } from "react";
import "../styles/Header.css";
import logo from "../assets/logo3.png";
import { LanguageContext } from "../context/LanguageContext";

function Header() {
  const { lang, toggleLang } = useContext(LanguageContext);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <div>
      <div className="header-wrapper">
        <header className="header">
          <div className="logo">
            <a href="#sobre-mi">
            <img src={logo} alt="logo"/>
            </a>
          </div>
          <nav className="desktop-nav">
            <a href="#sobre-mi">{lang === "es" ? "Sobre mí" : "About Me"}</a>
            <a href="#experiencia">
              {lang === "es" ? "Experiencia" : "Experience"}
            </a>
            <a href="#habilidades">
              {lang === "es" ? "Habilidades" : "Skills"}
            </a>
            <a href="#proyectos">
              {lang === "es" ? "Proyectos" : "Projects"}
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

      <div>
        <nav className={`mobile-menu ${menuOpen ? "active" : ""}`}>
          <a href="#sobre-mi" onClick={handleLinkClick}>
            {lang === "es" ? "Sobre mí" : "About Me"}
          </a>
          <a href="#experiencia" onClick={handleLinkClick}>
            {lang === "es" ? "Experiencia" : "Experience"}
          </a>
          <a href="#habilidades" onClick={handleLinkClick}>
            {lang === "es" ? "Habilidades" : "Skills"}
          </a>
          <a href="#proyectos" onClick={handleLinkClick}>
            {lang === "es" ? "Proyectos" : "Projects"}
          </a>
          <a href="#contacto" onClick={handleLinkClick}>
            {lang === "es" ? "Contacto" : "Contact"}
          </a>
        </nav>
        
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={handleMenuToggle}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
}

export default Header;
