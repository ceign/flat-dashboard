import React from "react";
import "../Components/AboutSkillsCard.css";

const AboutSkillsCard = () => {
  return (
    <div className="about__skills-card">
      <div className="about__skills-card__wrapper">
        <div className="about__skills-card__text">
          <h3>Herramientas</h3>
          <p>
            Aquí puedes listar las herramientas, tecnologías o lenguajes que
            sueles usar para llevar a cabo tus proyectos. Menciona tanto el
            software de diseño como las tecnologías de desarrollo que te ayudan
            a materializar tus ideas.
          </p>
        </div>
        <div className="about__skills-card__tools"></div>
      </div>
    </div>
  );
};

export default AboutSkillsCard;
