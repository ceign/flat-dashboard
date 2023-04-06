import React from "react";
import "../Components/HomeCarouselCard.css";
import homeCarouselData from "../Data/HomeCarouselData";

const HomeCarouselCard = () => {
  return (
    <div className="home__carousel-card">
      <div className="home__carousel-card__wrapper">
        <div className="home__carousel-card__header">
          <h3> Carousel subtitle 📱</h3>
          <h2>Carousel title</h2>
        </div>

        <div className="home__carousel-card__body">
          <div className="home__carousel-card__carousels ">
            <div className="home__carousel-card__carousel-column">
              {homeCarouselData.map((item, index) => (
                <figure key={index}>
                  <img src={item.img} alt={item.altImage} />
                </figure>
              ))}
            </div>
          </div>
        </div>

        <div className="home__carousel-card__footer">
          <button>
            Ver más
            <span>
              <svg
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7482 7.46251L7.46246 11.7482C7.29639 11.917 7.07674 12 6.8571 12C6.63746 12 6.41835 11.9163 6.25121 11.7489C5.91639 11.4141 5.91639 10.8717 6.25121 10.5368L9.07496 7.71429H0.8571C0.383796 7.71429 0 7.33126 0 6.85715C0 6.38304 0.383796 6.00001 0.8571 6.00001H9.07496L6.25174 3.17679C5.91692 2.84197 5.91692 2.29956 6.25174 1.96474C6.58656 1.62992 7.12898 1.62992 7.4638 1.96474L11.7495 6.25045C12.083 6.58661 12.083 7.12769 11.7482 7.46251Z"
                  fill="#67748E"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCarouselCard;
