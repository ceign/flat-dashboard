// import React from "react";
import React, { useState, useEffect } from "react";
import "../Components/AboutHeader.css";
import avatarImage from "../Assets/Images/avatar.png";
import ParticlesBg from "./Particles";

const AboutHeader = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="about__header">
      <div className="about__header__background">
        <>{screenWidth >= 1200 && <ParticlesBg />}</>
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
