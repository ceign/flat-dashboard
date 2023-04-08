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
            Si tienes alguna pregunta o simplemente quieres saludar, no dudes en
            ponerte en contacto conmigo. <br /> Me encantaría saber más sobre ti
            y cómo puedo ayudarte a alcanzar tus objetivos. ¡Espero saber de ti
            pronto!
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
