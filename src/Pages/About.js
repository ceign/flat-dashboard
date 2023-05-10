import React, { useEffect } from "react";
import AboutHeader from "../Components/AboutHeader";
import AboutProfileCard from "../Components/AboutProfileCard";
import AboutSkillsCard from "../Components/AboutSkillsCard";
import AboutExperienceCard from "../Components/AboutExperienceCard";
import AboutLocationCard from "../Components/AboutLocationCard";
import AboutContactCard from "../Components/AboutContactCard";
import "../Pages/About.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="about">
      <AboutHeader />
      <div className="about__content">
        <div>
          <AboutProfileCard />
          <AboutSkillsCard />
        </div>
        <AboutExperienceCard />
        <AboutLocationCard />
        <AboutContactCard />
      </div>
    </section>
  );
};

export default About;
