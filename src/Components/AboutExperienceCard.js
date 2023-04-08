import React from "react";
import "../Components/AboutExperienceCard.css";
import experienceCardData from "../Data/AboutExperienceCardData";

const ExperienceCard = () => {
  return (
    <div className="about__experience-card">
      <div className="about__experience-card__wrapper">
        <h3 className="about__experience-card__title">Experiencia</h3>

        <ul>
          {experienceCardData.map((item, index) => (
            <li key={index}>
              <div>
                <h4 className="about__experience-card__company">
                  {item.company}
                </h4>
                <p className="about__experience-card__role"> {item.role} </p>
              </div>
              <p className="about__experience-card__date"> {item.date} </p>
            </li>
          ))}
        </ul>

        <p className="about__experience-card__linkedin">
          Puedes ver los detalles en mi <a href="dummyText">Linkedin!</a>
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
