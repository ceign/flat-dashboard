import React from "react";
import "../Components/AboutProfileCard.css";

const AboutProfileCard = () => {
  return (
    <div className="about__profile-card">
      <div className="about__profile-card__wrapper">
        <h3>Perfil</h3>

        <p>
          Como diseñador de interfaces de usuario, mi objetivo es crear
          experiencias de usuario intuitivas y atractivas que cumplan con las
          necesidades y expectativas de los usuarios finales.
        </p>

        <p>
          Me enfoco en cada detalle, desde la elección de los colores hasta la
          disposición de los elementos, para lograr una experiencia de usuario
          perfecta.
        </p>
      </div>
    </div>
  );
};

export default AboutProfileCard;
