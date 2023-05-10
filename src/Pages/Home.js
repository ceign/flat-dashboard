import React, { useEffect } from "react";
import "../Pages/Home.css";
import Pill from "../Components/HomePills";
import HomeJumbotron from "../Components/HomeJumbotron";
import HomeAboutCard from "../Components/HomeAboutCard";
import HomeCarouselCard from "../Components/HomeCarouselCard";
import HomeProjectCardLarge from "../Components/HomeProjectCardLarge";
import HomeProjectCardSmall from "../Components/HomeProjectCardSmall";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="home">
      <div className="home__header">
        <Pill />
      </div>
      <div className="home__body">
        <HomeJumbotron />
        <HomeAboutCard />
        <HomeCarouselCard />
        <div className="home__projects-cards">
          <h3>Últimos Proyectos</h3>
          <div className="home__projects-cards__wrapper">
            <HomeProjectCardLarge />
            <HomeProjectCardSmall />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
