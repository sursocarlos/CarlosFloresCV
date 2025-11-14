import React, { useContext, useState } from "react";
import "../styles/Body.css";
import carlos from "../assets/carlos.png";
import ug21logo from "../assets/ug21logo.png";
import ayesalogo from "../assets/ayesalogo.png";
import grupoacercalogo from "../assets/grupoacercalogo.png";
import { LanguageContext } from "../context/LanguageContext";

function Body() {
  const { lang } = useContext(LanguageContext);

  const [cvOpen, setCvOpen] = React.useState(false);

  return (
    <section className="Body" id="sobre-mi">
      <div className="containerReal">
        <div className="left-side">
          <img src={carlos} alt="carlos" />
          <div className="cv-section">
            <button className="cv-button" onClick={() => setCvOpen(true)}>
              {lang === "es" ? "Ver CV" : "View CV"}
            </button>
            {cvOpen && (
              <>
                <div className="cv-modal">
                  <div className="cv-modal-content">
                    <iframe
                      src="/CARLOSFLORES.pdf"
                      title="CV"
                      frameBorder="0"
                    ></iframe>
                  </div>
                </div>
                <button
                  className="cv-close-floating"
                  onClick={() => setCvOpen(false)}
                >
                  {lang === "es" ? "Cerrar" : "Close"}
                </button>
              </>
            )}
          </div>
        </div>
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
              ? "Mi objetivo: seguir creciendo y aportar valor a cada proyecto con soluciones eficientes."
              : "My goal: to keep growing and add value to every project with efficient solutions."}
          </p>
        </div>
      </div>

      {/* ===== EXPERIENCIA ===== */}
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
            <h3>{lang === "es" ? "Asesor Energético" : "Energy Advisor"}</h3>
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

      {/* ===== EDUCACIÓN ===== */}
      <div className="education-section" id="educacion">
        <h2>{lang === "es" ? "Educación" : "Education"}</h2>

        <div className="education-list">
          <div className="edu-card">
            <h3>
              {lang === "es"
                ? "Ciclo Formativo Grado Superior Desarrollo Aplicaciones Web (DAW)"
                : "Higher Vocational Training in Web Application Development (DAW)"}
            </h3>

            <p className="edu-center">
              {lang === "es"
                ? "I.E.S Sotero Hernández (Sevilla)"
                : "I.E.S Sotero Hernández (Seville)"}
            </p>

            <p className="edu-date">2024 – 2026</p>
          </div>

          <div className="edu-card">
            <h3>
              {lang === "es"
                ? "Ciclo Formativo Grado Medio Sistemas Microinformáticos y Redes (SMR)"
                : "Intermediate Vocational Training in Microcomputer Systems & Networks (SMR)"}
            </h3>

            <p className="edu-center">
              {lang === "es"
                ? "I.E.S Sotero Hernández (Sevilla)"
                : "I.E.S Sotero Hernández (Seville)"}
            </p>

            <p className="edu-date">2022 – 2024</p>
          </div>

          <div className="edu-card">
            <h3>
              {lang === "es"
                ? "Certificación CISCO JavaScript Essentials 1 (JSE)"
                : "CISCO Certification: JavaScript Essentials 1 (JSE)"}
            </h3>

            <p className="edu-center">CISCO Systems</p>

            <p className="edu-date">
              {lang === "es" ? "5 de febrero de 2024" : "05 Feb 2024"}
            </p>
          </div>

          <div className="edu-card">
            <h3>
              {lang === "es"
                ? "Certificación CISCO Cybersecurity Essentials"
                : "CISCO Certification: Cybersecurity Essentials"}
            </h3>

            <p className="edu-center">CISCO Systems</p>

            <p className="edu-date">
              {lang === "es" ? "22 de enero de 2024" : "22 Jan 2024"}
            </p>
          </div>

          <div className="edu-card">
            <h3>
              {lang === "es"
                ? "Certificación CISCO CCNAv7: Introducción a Redes"
                : "CISCO Certification: CCNAv7 - Introduction to Networks"}
            </h3>

            <p className="edu-center">CISCO Systems</p>

            <p className="edu-date">
              {lang === "es" ? "15 de junio de 2023" : "15 Jun 2023"}
            </p>
          </div>
        </div>
      </div>

      {/* ===== HABILIDADES ===== */}
      <div className="container skills" id="habilidades">
        <h2>{lang === "es" ? "Habilidades" : "Skills"}</h2>
        <div className="skills-list">
          {[
            { name: "Java", level: 70 },
            { name: "JavaScript", level: 60 },
            { name: "HTML", level: 65 },
            { name: "CSS", level: 60 },
            { name: "SQL", level: 50 },
            { name: "React", level: 55 },
            { name: "Salesforce", level: 40 },
          ].map((skill) => (
            <div className="skill-row" key={skill.name}>
              <span className="skill-name">{skill.name}</span>
              <div className="skill-bar">
                <div
                  className="skill-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== PROYECTOS ===== */}
      <div className="container projects" id="proyectos">
        <h2>{lang === "es" ? "Proyectos" : "Projects"}</h2>
        <div className="cards">
          <a
            href="https://github.com/sursocarlos/Empresa"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            {lang === "es" ? "Empresa" : "Company"}
          </a>

          <a
            href="https://github.com/sursocarlos/GeoVibes"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            {lang === "es" ? "GeoVibes" : "GeoVibes"}
          </a>

          <a
            href="https://github.com/sursocarlos/CarlosFloresCV"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            {lang === "es" ? "Portafolios personal" : "Personal portfolio"}
          </a>
        </div>
      </div>

      {/* ===== CONTACTO ===== */}
      <div className="contact-section" id="contacto">
        <h2>{lang === "es" ? "Contacto" : "Contact"}</h2>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert(lang === "es" ? "Formulario enviado" : "Message sent");
          }}
        >
          <div>
            <label>{lang === "es" ? "Nombre" : "Name"}</label>
            <input
              type="text"
              required
              placeholder={lang === "es" ? "Tu nombre" : "Your name"}
            />
          </div>

          <div>
            <label>{lang === "es" ? "Correo electrónico" : "Email"}</label>
            <input
              type="email"
              required
              placeholder={lang === "es" ? "Tu email" : "Your email"}
            />
          </div>

          <div>
            <label>{lang === "es" ? "Numero" : "Number"}</label>
            <input
              type="tel"
              required
              placeholder={
                lang === "es" ? "Tu número de teléfono" : "Your phone number"
              }
            />
          </div>

          <div>
            <label>{lang === "es" ? "Mensaje" : "Message"}</label>
            <textarea
              required
              placeholder={
                lang === "es"
                  ? "Escribe tu mensaje..."
                  : "Write your message..."
              }
            ></textarea>
          </div>
          <div className="field">
            <button type="submit">{lang === "es" ? "Enviar" : "Send"}</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Body;
