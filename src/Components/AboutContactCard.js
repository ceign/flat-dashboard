import React from "react";
import "../Components/AboutContactCard.css";
import Carousel from "./AboutCarousel";

const AboutContactCard = () => {
  return (
    <div className="about__contact-card">
      <div className="about__contact-card__wrapper">
        <div className="about__contact-card__info">
          <h3>Contacto</h3>
          <p>
            Sección con muestras de tus mejores proyectos, invita a visitantes o
            potenciales clientes a comunicarse contigo para consultas,
            colaboraciones o propuestas. Menciona el medio de contacto que
            utilices habitualmente.
          </p>
        </div>

        <div className="about__contact-card__images">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default AboutContactCard;
