import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header-wrapper"> 
    <header className="header">
      <h1>Carlos Flores</h1>
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
