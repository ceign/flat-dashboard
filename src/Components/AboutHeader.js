import React from "react";
import "../Components/AboutHeader.css";
import avatarImage from "../Assets/Images/avatar.png";
import ParticlesBg from "./Particles";

const AboutHeader = () => {
  return (
    <div className="about__header">
      <div className="about__header__background">
        <>
          <ParticlesBg />
        </>
      </div>
      <div className="about__header__profile">
        <div className="about__header__avatar">
          <figure>
            <img src={avatarImage} alt="Avatar" />
          </figure>
        </div>

        <div className="about__header__info">
          <h1>Marcelo Gajardo</h1>
          <h3>UI/Front End Designer</h3>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
