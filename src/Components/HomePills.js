import React from "react";
import "../Components/HomePills.css";
import homePillsInfo from "../Data/HomePillsData";

const HomePills = () => {
  return (
    <div className="home__pills">
      <ul>
        {homePillsInfo.map((item, index) => (
          <li key={index} className="home-pill">
            <div className="home-pill__text">
              <p>{item.text}</p>
              <span>{item.title}</span>
            </div>

            <span className="home-pill__icon">
              <img src={item.icon} alt={item.altImage} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePills;
