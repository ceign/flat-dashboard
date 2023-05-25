import React, { useState, useEffect } from "react";
import "../Components/PrototypeCard.css";
import productInfo from "../Data/CardsData";

const PrototypeCard = () => {
  const [cardsToShow, setCardsToShow] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      const updatedCardsToShow = isMobile
        ? productInfo.slice(0, 4)
        : productInfo;
      setCardsToShow(updatedCardsToShow);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="cards">
      <div className="cards__wrapper">
        <ul className="cards__items">
          {cardsToShow.map((item, index) => (
            <li key={index}>
              <div className="card">
                <div className="card__wrapper">
                  <div className="card__body">
                    <figure>
                      <img src={item.imageSrc} alt="Dummy text" />
                    </figure>

                    <div className="card__options">
                      <div className="card__options__wrapper">
                        <div className="card__options__size">
                          <h4>Selecciona tu talla</h4>
                          <ol>
                            <li tabIndex="0">XS</li>
                            <li tabIndex="0">S</li>
                            <li tabIndex="0">M</li>
                            <li tabIndex="0">L</li>
                            <li tabIndex="0">XL</li>
                            <li tabIndex="0">XXL</li>
                          </ol>
                        </div>
                        <div className="card__options__button">
                          <button> Añadir a la cesta</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card__footer">
                    <div className="card__footer__wrapper">
                      <h3 className="card__footer__name-product">
                        {item.name}
                      </h3>

                      <p className="card__footer__price"> {item.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PrototypeCard;
