import React from "react";
import "./Articles.css"; 

const articlesData = [
  {
    id: 1,
    date: "06 NOVEMBRE 2025",
    title: "OPTIMISER VOTRE 'WINTER ARC'",
    description: "Bienvenue dans votre 'arc hivernal'. C'est le moment idéal pour construire, récupérer et se recentrer sur des objectifs de force pure.",
    image: "/images/article1.jpeg", // Remplacez par votre chemin d'image
  },
  {
    id: 2,
    date: "30 OCTOBRE 2025",
    title: "GARDER LE CAP MALGRÉ L'HIVER",
    description: "Le changement d'heure et le manque de lumière ne doivent pas affecter vos performances. Voici 3 stratégies pour rester motivé.",
    image: "/images/article2.jpeg",
  },
  {
    id: 3,
    date: "09 SEPTEMBRE 2025",
    title: "LE MUSCLE ET LA SANTÉ LONG TERME",
    description: "Nous analysons pourquoi la construction et le maintien de la masse musculaire sont essentiels pour votre santé globale et votre métabolisme.",
    image: "/images/article3.jpeg",
  },
];

const Articles = () => {
  return (
    <section className="articles-section">
        <div className="articles-title">
          <h2>
            Nos <span>Articles</span>
          </h2>
          <p>
            Restez informé avec nos derniers conseils, tendances et actualités
            sur le fitness et la santé.
          </p>
        </div>
      <div className="articles-container">
        {articlesData.map((article) => (
          <div key={article.id} className="article-card">
            <div className="article-image-wrapper">
              <img src={article.image} alt={article.title} className="article-image" />
              <span className="news-badge">NEWS</span>
            </div>
            <div className="article-content">
              <p className="article-date">{article.date}</p>
              <h3 className="article-title">{article.title}</h3>
              <p className="article-description">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="read-more-btn">LIRE LES ARTICLES</button>
    </section>
  );
};

export default Articles;
