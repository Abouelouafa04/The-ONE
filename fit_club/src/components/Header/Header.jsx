import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <div className="header__container">

        {/* Logo */}
        <NavLink to="/" className="header__logo">
          <span className="logo-iron">The</span>
          <span className="logo-mass">ONE</span>
          <p className="logo-sub"></p>
        </NavLink>

        {/* Navigation */}
        <nav className="header__nav">
          <NavLink
            to="/programmes"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            PROGRAMMES
          </NavLink>

          <NavLink
            to="/article"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            ARTICLE
          </NavLink>

          <NavLink
            to="/abonnements"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Abonnements
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            CONTACT
          </NavLink>
        </nav>

        {/* Socials */}
        <div className="header__socials">
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Whatsapp">
            <FaWhatsapp />
          </a>
        </div>

      </div>
    </header>
  );
};

export default Header;
