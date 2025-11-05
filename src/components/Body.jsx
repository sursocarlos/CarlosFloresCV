import React from "react";
import "../styles/Body.css";
import carlos from "../assets/carlos.jpg";

function Body() {
  return (
    <div>
      <section className="Body">
        <div className="containerReal">
          <img src={carlos} alt="" />
          <div className="sobreMi">
            <h2>Sobre mí</h2>
            <br />
            <p>
              Desarrollador Web con experiencia en Administración de Sistemas y
              Redes, apasionado por la tecnología y en constante aprendizaje.{" "}
            </p>
            <br />
            <p>
              A lo largo de mi formación he trabajado con tecnologías como Java,
              JavaScript, HTML, CSS, SQL, Apex, React y Salesforce, lo que me
              permite desenvolverme tanto en el desarrollo backend como
              frontend, además de en entornos cloud orientados a CRM.{" "}
            </p>
            <br />
            <p>
              Cuento además con más de un año y medio de experiencia gestionando
              infraestructuras informáticas: Administración de servidores de
              dominio, configuración y mantenimiento de VPN, gestión de
              servicios en red (DNS, FTP, DHCP, TCP/IP…), así como montaje,
              configuración y reparación de equipos. Esta experiencia me ha
              permitido adquirir una visión global del funcionamiento y la
              seguridad de los sistemas, reforzando mi capacidad para resolver
              incidencias de forma eficiente.
            </p>
            <br />
            <p>
              Me motiva asumir nuevos retos, investigar y encontrar soluciones
              eficientes ante cualquier problema. Mi objetivo es seguir
              creciendo como profesional dentro del ámbito del desarrollo,
              aportando valor y compromiso a cada proyecto en el que participo.
            </p>
          </div>
        </div>

        <div className="container">
          <h2>Proyectos</h2>
          <p>Texto</p>
        </div>

        <div className="container">
          <h2>Contacto</h2>
          <p>Texto</p>
        </div>
      </section>
    </div>
  );
}

export default Body;
