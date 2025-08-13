import React, { useState } from "react";
import FilterMenu from "../Data/FilterMenu";
import "../Components/ProjectsFilter.css";

const GalleryReact = () => {
  const [items, setItems] = useState(FilterMenu);
  const [activeItem, setActiveItem] = useState("Todos");

  const filterItem = (categItem) => {
    const updateItems = FilterMenu.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updateItems);
    setActiveItem(categItem);
  };

  return (
    <>
      <div>
        <ul className="navigation-project">
          <li>
            <button
              className={
                activeItem === "Todos"
                  ? "navigation-project__item navigation-project__item--active"
                  : "navigation-project__item"
              }
              onClick={() => {
                setItems(FilterMenu);
                setActiveItem("Todos");
              }}
            >
              Todos
            </button>
          </li>
          <li>
            <button
              className={
                activeItem === "sitios"
                  ? "navigation-project__item navigation-project__item--active"
                  : "navigation-project__item"
              }
              onClick={() => filterItem("sitios")}
            >
              Sitios
            </button>
          </li>
          <li>
            <button
              className={
                activeItem === "componentes"
                  ? "navigation-project__item navigation-project__item--active"
                  : "navigation-project__item"
              }
              onClick={() => filterItem("componentes")}
            >
              Componentes
            </button>
          </li>
          <li>
            <button
              className={
                activeItem === "retos"
                  ? "navigation-project__item navigation-project__item--active"
                  : "navigation-project__item"
              }
              onClick={() => filterItem("retos")}
            >
              Retos
            </button>
          </li>
        </ul>
      </div>

      <div className="cards-project">
        <ul className="cards-project__list">
          {items.map((elem) => {
            const {
              id,
              image,
              alt,
              subtitle,
              title,
              description,
              stack1,
              stack2,
              stack3,
            } = elem;

            return (
              <li id={id} key={id}>
                <div className="card-project">
                  <div className="card-project__wrapper">
                    <div className="card-project__header">
                      <figure>
                        <img src={image} alt={alt} />
                      </figure>
                    </div>

                    <div className="card-project__body">
                      <p className="card-project__subtitle">{subtitle}</p>

                      <h2 className="card-project__title">{title}</h2>

                      <p className="card-project__description">{description}</p>
                    </div>

                    <div className="card-project__footer">
                      <div className="card-project__footer__wrapper">
                        <a href="/" onClick={(e) => e.preventDefault()}>
                          <button>Ver proyecto</button>
                        </a>

                        <div className="card-project__stack">
                          <span> {stack1} </span>

                          <span> {stack2} </span>

                          <span> {stack3} </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default GalleryReact;
