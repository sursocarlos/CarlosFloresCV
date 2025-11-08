import React from "react";
import "../styles/Header.css";
import logo from "../assets/logo3.png";

function Header() {
  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#experiencia">Habilidades</a>
          <a href="#certificaciones">Certificaciones</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="lang-switch">
          <div className="tabs">
            <input
              defaultChecked
              name="lang"
              id="es"
              type="radio"
              className="input"
            />
            <label htmlFor="es" className="label">
              Español
            </label>

            <input
              name="lang"
              id="en"
              type="radio"
              className="input"
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
