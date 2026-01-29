import "../Hero/Hero.css";
import { NavLink } from "react-router-dom";

const Hero = () => {
  const heroStyle = {
    backgroundImage: "url(/images/hero-gym.jpeg)",
  };

  return (
    <section className="hero" style={heroStyle}>
      <div className="hero__overlay"></div>

      <div className="hero__content">
        <h1>
          DÉPASSE <span>TES LIMITES</span>
        </h1>

        <p>
          Rejoins une salle de sport professionnelle dédiée à la performance,
          au crossfit et à la transformation physique.
        </p>

        <div className="hero__buttons">
          <NavLink to="/contact" className="btn btn-primary">
            ESSAI GRATUIT
          </NavLink>

          <NavLink to="/programmes" className="btn btn-outline">
            NOS PROGRAMMES
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
