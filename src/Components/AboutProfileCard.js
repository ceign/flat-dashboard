import React from "react";
import "../Components/AboutProfileCard.css";

const AboutProfileCard = () => {
  return (
    <div className="about__profile-card">
      <div className="about__profile-card__wrapper">
        <h3>Perfil</h3>

        <p>
          Aquí puedes escribir un resumen sobre ti, tu enfoque profesional y lo
          que te apasiona en tu trabajo. Incluye detalles como tu especialidad,
          tus valores al diseñar o desarrollar, y lo que te diferencia de otros
          profesionales.
        </p>
      </div>
    </div>
  );
};

export default AboutProfileCard;
