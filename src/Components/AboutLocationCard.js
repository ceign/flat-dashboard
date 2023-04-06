import React from "react";
import "../Components/AboutLocationCard.css";
import locationImage from "../Assets/Images/location.png";

const AboutLocationCard = () => {
  return (
    <div className="about__location-card">
      <div className="about__location-card__wrapper">
        <h3 className="about__location-card__title">Ubicación</h3>
        <div className="about__location-card__map">
          <img src={locationImage} alt="dummText" />
        </div>
      </div>
    </div>
  );
};

export default AboutLocationCard;
