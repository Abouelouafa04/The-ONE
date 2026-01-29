import React from "react";
import "./Cta.css";

const ContactCTA = () => {
  return (
    <section className="contact-cta">
      <div className="cta-overlay">
        <h2>BESOIN D'AIDE OU D'INFORMATIONS ?</h2>
        <p>
          Notre équipe est à votre écoute. Contactez-nous pour toute question sur
          nos services ou pour signaler un problème technique au sein du club.
        </p>
        <button className="cta-btn">NOUS CONTACTER</button>
      </div>
    </section>
  );
};

export default ContactCTA;
