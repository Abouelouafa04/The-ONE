import "./Pricing.css";
import { NavLink } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  return (
    <section className="pricing">
      <div className="pricing__container">

        {/* Header */}
        <div className="pricing__header">
          <h2>
            Nos <span>Abonnements</span>
          </h2>
          <p>
            Des offres flexibles adaptées à tous les niveaux et objectifs.
          </p>
        </div>

        {/* Cards */}
        <div className="pricing__cards">

          {/* BASIC */}
          <div className="pricing-card">
            <h3>Basic</h3>
            <div className="price">
              <span>299</span> MAD / mois
            </div>

            <ul>
              <li><FaCheck /> Accès salle</li>
              <li><FaCheck /> Cardio & musculation</li>
              <li><FaCheck /> Vestiaires</li>
            </ul>

            <NavLink to="/contact" className="pricing-btn">
              Choisir
            </NavLink>
          </div>

          {/* POPULAR */}
          <div className="pricing-card popular">
            <div className="badge">Populaire</div>

            <h3>Premium</h3>
            <div className="price">
              <span>499</span> MAD / mois
            </div>

            <ul>
              <li><FaCheck /> Accès illimité</li>
              <li><FaCheck /> CrossFit</li>
              <li><FaCheck /> Programmes personnalisés</li>
              <li><FaCheck /> Suivi coach</li>
            </ul>

            <NavLink to="/contact" className="pricing-btn primary">
              S’abonner
            </NavLink>
          </div>

          {/* PRO */}
          <div className="pricing-card">
            <h3>Coaching Privé</h3>
            <div className="price">
              <span>799</span> MAD / mois
            </div>

            <ul>
              <li><FaCheck /> Coach dédié</li>
              <li><FaCheck /> Plan nutrition</li>
              <li><FaCheck /> Transformation physique</li>
            </ul>

            <NavLink to="/contact" className="pricing-btn">
              Commencer
            </NavLink>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Pricing;
