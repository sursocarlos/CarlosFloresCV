import React, { useContext } from "react";
import "../styles/Body.css";
import carlos from "../assets/carlos.png";
import ug21logo from "../assets/ug21logo.png";
import ayesalogo from "../assets/ayesalogo.png";
import grupoacercalogo from "../assets/grupoacercalogo.png";
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
                ? "Administrador de Sistemas y Redes"
                : "Systems and Networks Administrator"}
            </h3>
            <p>
              {lang === "es"
                ? "Gestión de servidores de dominio, administración de NAS, VPN, servicios en red (DNS, DHCP, TCP/IP), administración de Microsoft 365."
                : "Domain server management, NAS administration, VPN, network services (DNS, DHCP, TCP/IP), and Microsoft 365 administration."}
            </p>
            <span className="duration">
              {lang === "es"
                ? "Marzo 2024 - Octubre 2025"
                : "March 2024 - October 2025"}
              <span className="months">
                {lang === "es" ? "1 año 8 meses" : "1 year 8 months"}
              </span>
            </span>
          </div>
          <div className="experience-item">
            <div className="company-logo">
              <img src={ayesalogo} alt="empresa" />
            </div>
            <h3>
              {lang === "es"
                ? "Desarrollador Web Salesforce en prácticas"
                : "Salesforce Web Developer Intern"}
            </h3>
            <p>
              {lang === "es"
                ? "Desarrollo en Java, JavaScript, HTML, CSS, SQL, Apex y Salesforce."
                : "Development in Java, JavaScript, HTML, CSS, SQL, Apex, and Salesforce."}
            </p>
            <span className="duration">
              {lang === "es"
                ? "Marzo 2025 - Junio 2025"
                : "March 2025 - June 2025"}
              <span className="months">
                {lang === "es" ? "3 meses" : "3 months"}
              </span>
            </span>
          </div>
          <div className="experience-item">
            <div className="company-logo">
              <img src={grupoacercalogo} alt="empresa" />
            </div>
            <h3>{lang === "es" ? "Soporte IT" : "IT Support"}</h3>
            <p>
              {lang === "es"
                ? "Marketing, atención al cliente y telemarketing"
                : "Marketing, customer service, and telemarketing"}
            </p>
            <span className="duration">
              {lang === "es"
                ? "Junio 2023 - Agosto 2023"
                : "June 2023 - August 2023"}
              <span className="months">
                {lang === "es" ? "3 meses" : "3 months"}
              </span>
            </span>
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
