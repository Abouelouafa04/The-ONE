import "./Footer.css";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">

        {/* BRAND */}
        <div className="footer__brand">
          <h3>
            The <span>ONE</span>
          </h3>
          <p>
            Salle de sport professionnelle dédiée à la performance, au crossfit
            et à la transformation physique.
          </p>

          <div className="footer__socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>
        </div>

        {/* LINKS */}
        <div className="footer__links">
          <h4>Navigation</h4>
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/programmes">Programmes</NavLink>
          <NavLink to="/article">Articles</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* PROGRAMS */}
        <div className="footer__links">
          <h4>Programmes</h4>
          <NavLink to="/programmes">Musculation</NavLink>
          <NavLink to="/programmes">CrossFit</NavLink>
          <NavLink to="/programmes">Cardio Training</NavLink>
          <NavLink to="/programmes">Coaching Privé</NavLink>
        </div>

        {/* CONTACT */}
        <div className="footer__contact">
          <h4>Contact</h4>

          <p>
            <FaMapMarkerAlt />
            Casablanca, Maroc
          </p>

          <p>
            <FaPhoneAlt />
            +212 6 12 34 56 78
          </p>

          <p>
            <FaEnvelope />
            contact@ironmass.ma
          </p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer__bottom">
        <p>
          © {new Date().getFullYear()} The ONE. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
