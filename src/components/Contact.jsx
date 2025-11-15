import React, { useContext, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";
import { LanguageContext } from "../context/LanguageContext";

function Contact() {
  const { lang } = useContext(LanguageContext);
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_2rxaqus",
        "template_0dxk8oe",
        e.target,
        "64CLG5btNs5oMvi3y"
      )
      .then(() => {
        alert(
          lang === "es"
            ? "Mensaje enviado correctamente"
            : "Message sent successfully"
        );
        setSending(false);
        e.target.reset();
      })
      .catch(() => {
        alert(
          lang === "es" ? "Error al enviar el mensaje" : "Error sending message"
        );
        setSending(false);
      });
  };

  return (
    <div className="contact-section" id="contacto">
      <h2>{lang === "es" ? "Contacto" : "Contact"}</h2>

      <form className="contact-form" onSubmit={sendEmail}>
        <div>
          <label>{lang === "es" ? "Nombre" : "Name"}</label>
          <input
            name="from_name"
            type="text"
            required
            placeholder={lang === "es" ? "Tu nombre" : "Your name"}
          />
        </div>

        <div>
          <label>{lang === "es" ? "Correo electrónico" : "Email"}</label>
          <input
            name="email"
            type="email"
            required
            placeholder={lang === "es" ? "Tu email" : "Your email"}
          />
        </div>

        <div>
          <label>{lang === "es" ? "Número" : "Number"}</label>
          <input
            name="phone"
            type="tel"
            placeholder={
              lang === "es" ? "Tu número de teléfono" : "Your phone number"
            }
          />
        </div>

        <div>
          <label>{lang === "es" ? "Mensaje" : "Message"}</label>
          <textarea
            name="message"
            required
            placeholder={
              lang === "es" ? "Escribe tu mensaje..." : "Write your message..."
            }
          ></textarea>
        </div>
        <input type="hidden" name="time" value={new Date().toLocaleString()} />
        <div className="field">
          <button type="submit" disabled={sending}>
            {sending
              ? lang === "es"
                ? "Enviando..."
                : "Sending..."
              : lang === "es"
              ? "Enviar"
              : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
