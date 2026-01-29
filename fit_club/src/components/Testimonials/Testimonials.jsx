import React from "react";
import "./Testimonials.css";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Yassine B.",
    role: "Membre depuis 1 an",
    image: "/images/client1.jpg",
    review:
      "Salle incroyable ! Coachs professionnels, ambiance motivante et résultats visibles en quelques mois.",
    rating: 5,
  },
  {
    name: "Sara M.",
    role: "Transformation physique",
    image: "/images/client2.jpg",
    review:
      "Le coaching personnalisé m’a permis d’atteindre des objectifs que je pensais impossibles.",
    rating: 5,
  },
  {
    name: "Amine R.",
    role: "CrossFit Athlete",
    image: "/images/client3.jpg",
    review:
      "Un vrai esprit CrossFit, équipements top niveau et coachs toujours présents.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials__container">

        {/* Header */}
        <div className="testimonials__header">
          <h2>
            Avis de <span>Nos Membres</span>
          </h2>
          <p>
            Ils nous font confiance et partagent leur expérience avec Iron Mass.
          </p>
        </div>

        {/* Cards */}
        <div className="testimonials__cards">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial__profile">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>

              <p className="testimonial__text">“{item.review}”</p>

              <div className="testimonial__rating">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
