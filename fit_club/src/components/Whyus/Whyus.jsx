import React from "react";
import "./Whyus.css";
import { FaDumbbell, FaUsers, FaFire, FaClock } from "react-icons/fa";


const WhyUs = () => {
  return (
    <section className="why">
      <div className="why__container">

        {/* Image à gauche */}
        <div className="why__image">
          <img src="/images/why-us.jpeg" alt="Salle de sport professionnelle" />
        </div>

        {/* Contenu à droite */}
        <div className="why__content">
          <h2>
            Pourquoi <span>Nous Choisir</span> ?
          </h2>

          <p className="why__intro">
            Nous ne sommes pas une simple salle de sport.  
            Nous sommes un espace dédié à la performance, à la discipline
            et à la transformation physique.
          </p>

          <div className="why__features">

            <div className="why__feature">
              <FaDumbbell />
              <div>
                <h4>Équipements haut de gamme</h4>
                <p>Machines professionnelles adaptées à tous les niveaux.</p>
              </div>
            </div>

            <div className="why__feature">
              <FaUsers />
              <div>
                <h4>Coachs certifiés</h4>
                <p>Encadrement personnalisé par des experts qualifiés.</p>
              </div>
            </div>

            <div className="why__feature">
              <FaFire />
              <div>
                <h4>Programmes efficaces</h4>
                <p>Musculation, crossfit, cardio & transformation physique.</p>
              </div>
            </div>

            <div className="why__feature">
              <FaClock />
              <div>
                <h4>Horaires flexibles</h4>
                <p>Ouvert 7j/7 pour s’adapter à ton rythme.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyUs;
