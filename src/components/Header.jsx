import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Carlos Flores</h1>
      <nav>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#proyectos">Proyectos</a>
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
  );
}

export default Header;
