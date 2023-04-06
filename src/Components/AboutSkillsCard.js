import React from "react";
import "../Components/AboutSkillsCard.css";

const AboutSkillsCard = () => {
  return (
    <div className="about__skills-card">
      <div className="about__skills-card__wrapper">
        <div className="about__skills-card__text">
          <h3>Herramientas</h3>
          <p>
            Suelo utilizar herramientas como Figma, React y Sass para crear
            diseños modernos y funcionales que mejoren la experiencia del
            usuario.
          </p>
        </div>
        <div className="about__skills-card__tools"></div>
      </div>
    </div>
  );
};

export default AboutSkillsCard;
