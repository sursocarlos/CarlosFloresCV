import React, { useContext, useState } from "react";
import "../styles/Header.css";
import logo from "../assets/logo3.png";
import { LanguageContext } from "../context/LanguageContext";

function Header() {
  const { lang, toggleLang } = useContext(LanguageContext);

  // Pruebas cambios random (Eliminar)
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  const handleLinkClick = () => setMenuOpen(false);
  // Pruebas cambios random (Eliminar)

  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        {/* Pruebas cambios random (Eliminar)*/}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={handleMenuToggle}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        {/* Pruebas cambios random (Eliminar) */}

        {/*  CODIGO ORIGINAL (NO ELIMINAR)
        <nav>
          <a href="#sobre-mi">{lang === "es" ? "Inicio" : "Home"}</a>
          <a href="#experiencia">
            {lang === "es" ? "Experiencia" : "Experience"}
          </a>
          <a href="#habilidades">{lang === "es" ? "Habilidades" : "Skills"}</a>
          <a href="#certificaciones">
            {lang === "es" ? "Certificaciones" : "Certifications"}
          </a>
          <a href="#contacto">{lang === "es" ? "Contacto" : "Contact"}</a>
        </nav>
        CODIGO ORIGINAL (NO ELIMINAR) */}

        {/* Pruebas cambios random (Eliminar) */}
        <nav className={`nav ${menuOpen ? "active" : ""}`}>
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
        {/* Pruebas cambios random (Eliminar) */}

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
