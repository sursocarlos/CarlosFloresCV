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

        <div className="body">
          <div className="tabs">
            <input
              defaultChecked
              defaultValue="HTML"
              name="fav_language"
              id="html"
              type="radio"
              className="input"
            />
            <label htmlFor="html" className="label">
              Español
            </label>
            <input
              defaultValue="JavaScript"
              name="fav_language"
              id="javascript"
              type="radio"
              className="input"
            />
            <label htmlFor="javascript" className="label">
              Ingles
            </label>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
