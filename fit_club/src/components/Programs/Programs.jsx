import "./Programs.css";
import { NavLink } from "react-router-dom";
import { FaDumbbell, FaRunning, FaFireAlt, FaHeartbeat } from "react-icons/fa";

const Programs = () => {
  return (
    <section className="programs">
      <div className="programs__container">

        {/* Title */}
        <div className="programs__header">
          <h2>
            Nos <span>Programmes</span>
          </h2>
          <p>
            Choisis le programme qui correspond à ton objectif et dépasse tes
            limites avec nos coachs professionnels.
          </p>
        </div>

        {/* Cards */}
        <div className="programs__cards">

          <div className="program-card">
            <FaDumbbell />
            <h3>Musculation</h3>
            <p>
              Développement musculaire, force et esthétique avec suivi
              personnalisé.
            </p>
            <NavLink to="/programmes" className="program-btn">
              Découvrir
            </NavLink>
          </div>

          <div className="program-card">
            <FaFireAlt />
            <h3>CrossFit</h3>
            <p>
              Entraînement intensif pour explosivité, endurance et performance.
            </p>
            <NavLink to="/programmes" className="program-btn">
              Découvrir
            </NavLink>
          </div>

          <div className="program-card">
            <FaRunning />
            <h3>Cardio Training</h3>
            <p>
              Brûle des calories et améliore ton endurance efficacement.
            </p>
            <NavLink to="/programmes" className="program-btn">
              Découvrir
            </NavLink>
          </div>

          <div className="program-card">
            <FaHeartbeat />
            <h3>Coaching Privé</h3>
            <p>
              Programme sur mesure selon tes objectifs et ton niveau.
            </p>
            <NavLink to="/programmes" className="program-btn">
              Découvrir
            </NavLink>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Programs;
