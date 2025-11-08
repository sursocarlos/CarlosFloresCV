import React, { useContext } from "react";
import "../styles/Body.css";
import carlos from "../assets/carlos.png";
import ug21logo from "../assets/ug21logo.png";
import ayesalogo from "../assets/ayesalogo.jpg";
import { LanguageContext } from "../context/LanguageContext";

function Body() {
  const { lang } = useContext(LanguageContext);

  return (
    <section className="Body">
      <div className="containerReal" id="sobre-mi">
        <img src={carlos} alt="carlos" />
        <div className="sobreMi">
          <h2>{lang === "es" ? "Sobre mí" : "About Me"}</h2>
          <p>
            {lang === "es"
              ? "Desarrollador Web con experiencia en Administración de Sistemas y Redes, apasionado por la tecnología y en constante aprendizaje."
              : "Web Developer with experience in Systems and Networks administration, passionate about technology and constantly learning."}
          </p>
          <p>
            {lang === "es"
              ? "He trabajado con tecnologías como Java, JavaScript, HTML, CSS, SQL, React y Salesforce, tanto en backend como frontend."
              : "I have worked with technologies such as Java, JavaScript, HTML, CSS, SQL, React, and Salesforce, both in backend and frontend."}
          </p>
          <p>
            {lang === "es"
              ? "También tengo experiencia en gestión de infraestructuras IT, desde servidores de dominio hasta redes VPN y servicios TCP/IP."
              : "I also have experience managing IT infrastructures, from domain servers to VPN networks and TCP/IP services."}
          </p>
          <p>
            {lang === "es"
              ? "Mi objetivo: seguir creciendo y aportar valor a cada proyecto con soluciones limpias y eficientes."
              : "My goal: to keep growing and add value to every project with clean and efficient solutions."}
          </p>
        </div>
      </div>

      {/* Experiencia */}
      <div className="container experience" id="experiencia">
        <h2>{lang === "es" ? "Experiencia" : "Experience"}</h2>
        <div className="experience-list">
          <div className="experience-item">
            <div className="company-logo">
              <img src={ug21logo} alt="empresa" />
            </div>
            <h3>
              {lang === "es"
                ? "Administración de Sistemas"
                : "Systems Administration"}
            </h3>
            <p>
              {lang === "es"
                ? "Gestión de servidores de dominio, mantenimiento de VPN y servicios en red (DNS, DHCP, TCP/IP)."
                : "Management of domain servers, VPN maintenance, and network services (DNS, DHCP, TCP/IP)."}
            </p>
          </div>
          <div className="experience-item">
            <div className="company-logo">
              <img src={ayesalogo} alt="empresa" />
            </div>
            <h3>{lang === "es" ? "Desarrollo Web" : "Web Development"}</h3>
            <p>
              {lang === "es"
                ? "Desarrollo en Java, JavaScript, HTML, CSS, SQL, React y Salesforce."
                : "Development in Java, JavaScript, HTML, CSS, SQL, React, and Salesforce."}
            </p>
          </div>
          <div className="experience-item">
            <div className="company-logo">
              <img src={ug21logo} alt="empresa" />
            </div>
            <h3>{lang === "es" ? "Soporte IT" : "IT Support"}</h3>
            <p>
              {lang === "es"
                ? "Montaje, configuración y reparación de equipos, resolución de incidencias."
                : "Setup, configuration, and repair of devices, troubleshooting issues."}
            </p>
          </div>
        </div>
      </div>

      <div className="container projects" id="proyectos">
        <h2>{lang === "es" ? "Proyectos" : "Projects"}</h2>
        <div className="cards">
          <div className="card">
            {lang === "es" ? "Proyecto 1" : "Project 1"}
          </div>
          <div className="card">
            {lang === "es" ? "Proyecto 2" : "Project 2"}
          </div>
          <div className="card">
            {lang === "es" ? "Proyecto 3" : "Project 3"}
          </div>
        </div>
      </div>

      <div className="container contact" id="contacto">
        <h2>{lang === "es" ? "Contacto" : "Contact"}</h2>
        <p>📩 carlitosklein@example.com</p>
      </div>
    </section>
  );
}

export default Body;
