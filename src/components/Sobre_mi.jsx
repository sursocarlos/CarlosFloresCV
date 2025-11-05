import React from "react";
import "../styles/Sobre_mi.css";

function Sobre_mi() {
  return (
    <div>
      <section className="Sobre_mi">
        
        <div class="container">
          
          <a
            href
            src="https://via.placeholder.com/300x300?text=Foto+de+Alex"
            alt="Foto de Alex Developer"
          >

          </a>
          <div class="about-text">
            <h2>Sobre mí</h2>
            <p>
              Soy Alex, un apasionado desarrollador de software con enfoque en
              full stack. Actualmente estudio Desarrollo de Aplicaciones Web
              (DAW).
            </p>
            <p>
              Formación: Grado en Informática, cursos en Udemy sobre JavaScript
              y Python.
            </p>
            <p>
              Intereses: IA, desarrollo web responsive, y programación
              competitiva.
            </p>
            <p>
              Tecnologías favoritas: JavaScript, React (aunque aquí usamos
              puro), Node.js.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sobre_mi;
