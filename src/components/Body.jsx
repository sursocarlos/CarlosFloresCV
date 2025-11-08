import React from "react";
import "../styles/Body.css";
import carlos from "../assets/carlos.jpg";

function Body() {
  return (
    <section className="Body">
      <div className="containerReal">
        <img src={carlos} alt="carlitos" />
        <div className="sobreMi">
          <h2>Sobre mí</h2>
          <p>
            Desarrollador Web con experiencia en Administración de Sistemas y
            Redes, apasionado por la tecnología y en constante aprendizaje.
          </p>
          <p>
            He trabajado con tecnologías como Java, JavaScript, HTML, CSS, SQL,
            React y Salesforce, tanto en backend como frontend.
          </p>
          <p>
            También tengo experiencia en gestión de infraestructuras IT, desde
            servidores de dominio hasta redes VPN y servicios TCP/IP.
          </p>
          <p>
            Mi objetivo: seguir creciendo y aportar valor a cada proyecto con
            soluciones limpias y eficientes.
          </p>
        </div>
      </div>

      <div className="container projects">
        <h2>Proyectos</h2>
        <div className="cards">
          <div className="card">Proyecto 1</div>
          <div className="card">Proyecto 2</div>
          <div className="card">Proyecto 3</div>
        </div>
      </div>

      <div className="container contact">
        <h2>Contacto</h2>
        <p>📩 carlitosklein@example.com</p>
      </div>
    </section>
  );
}

export default Body;
