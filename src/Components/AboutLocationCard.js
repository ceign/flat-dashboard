import React from "react";
import "../Components/AboutLocationCard.css";
import AboutMap from "./AboutMap";

const AboutLocationCard = () => {
  return (
    <div className="about__location-card">
      <div className="about__location-card__wrapper">
        <h3 className="about__location-card__title">Ubicación</h3>
        <div className="about__location-card__map">
          <AboutMap />
        </div>
      </div>
    </div>
  );
};

export default AboutLocationCard;
