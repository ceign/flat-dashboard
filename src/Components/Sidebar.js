import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import menuItem from "../Data/NavData";
import sidebarContact from "../Data/ContactInfo";
import sidebarIconsLinks from "../Data/ContactInfoLinks";
import sidebarCard from "../Data/SidebarCard";
import "../Components/Sidebar.css";
import "../Components/ButtonSidebar.css";
import avatarImage from "../Assets/Images/avatar.png";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <aside className="sidebar" style={{ left: !isOpen ? "-90%" : "0" }}>
        <div className="sidebar__wrapper">
          <div className="sidebar__header">
            <div className="sidebar__logo">
              <a href="/inicio" aria-current="page">
                <svg
                  width="61"
                  height="25"
                  viewBox="0 0 61 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.7403 23.8616C16.9196 25.6918 9.7991 22.2003 7.02542 15.6656L0.375977 0L40.0917 19.474L23.7403 23.8616Z"
                    fill="#344767"
                  ></path>
                  <path
                    d="M59.2299 13.7535C57.8695 18.8589 52.6568 21.8887 47.5847 20.522L43.7881 19.499L60.2481 9.93188L59.2299 13.7535Z"
                    fill="#344767"
                  ></path>
                </svg>
                <p>Light UI Dashboard</p>
              </a>
            </div>
          </div>

          <div className="sidebar__body">
            <nav className="sidebar__navigation">
              <ul className="sidebar__list">
                {menuItem.map((item, index) => (
                  <li key={index} className="sidebar__item">
                    <NavLink
                      to={item.path}
                      key={index}
                      className="sidebar__link"
                    >
                      <span>{item.icon}</span>
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {sidebarContact.map((item, index) => (
              <div key={index} className="sidebar__contact">
                <h3>{item.title}</h3>
                <div className="sidebar__information">
                  <div className="sidebar__avatar">
                    <img src={avatarImage} alt="Avatar" />
                  </div>
                  <address>
                    <div className="sidebar__data">
                      <p className="sidebar__data-name">{item.dataName}</p>
                      <p className="sidebar__data-role">{item.dataRole}</p>
                      <p className="sidebar__data-location">
                        {item.dataLocation}
                      </p>
                      <ul className="sidebar__icons">
                        {sidebarIconsLinks.map((item, index) => (
                          <li key={index} className="sidebar__icon">
                            <NavLink to={item.linkHref}>
                              <span>{item.icon}</span>
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </address>
                </div>
              </div>
            ))}
          </div>

          <div className="sidebar__footer">
            {sidebarCard.map((item, index) => (
              <div key={index} className="sidebar__card">
                <div className="sidebar__card-header">
                  <span>
                    <svg
                      width="14"
                      height="20"
                      viewBox="0 0 14 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.69 -1V2.71667C6.69 2.91381 6.76831 3.10288 6.90772 3.24228C7.04712 3.38168 7.23619 3.46 7.43333 3.46C7.63048 3.46 7.81955 3.38168 7.95895 3.24228C8.09835 3.10288 8.17667 2.91381 8.17667 2.71667V-1H9.66333V4.19441C9.66333 4.39156 9.74165 4.58063 9.88105 4.72003C10.0205 4.85943 10.2095 4.93775 10.4067 4.93775C10.6038 4.93775 10.7929 4.85943 10.9323 4.72003C11.0717 4.58063 11.15 4.39156 11.15 4.19441V-1H13.38V7.91703H0V-1H6.69ZM0 9.40369V10.147C0 10.9356 0.313261 11.6919 0.870869 12.2495C1.42848 12.8071 2.18476 13.1204 2.97333 13.1204H4.46V17.5789C4.46 18.1703 4.69495 18.7375 5.11315 19.1557C5.53136 19.5739 6.09857 19.8089 6.69 19.8089C7.28143 19.8089 7.84864 19.5739 8.26685 19.1557C8.68505 18.7375 8.92 18.1703 8.92 17.5789V13.1189H10.4067C11.1952 13.1189 11.9515 12.8056 12.5091 12.248C13.0667 11.6904 13.38 10.9341 13.38 10.1455V9.40369H0Z"
                        fill="url(#paint0_linear_1013_309)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1013_309"
                          x1="-1"
                          y1="-1"
                          x2="10.5"
                          y2="14"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#60BFFF" />
                          <stop offset="1" stopColor="#0074C1" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </div>

                <div className="sidebar__card-body">
                  <p className="sidebar__card-title">{item.title}</p>

                  <p className="sidebar__card-text">{item.text}</p>
                </div>

                <div className="sidebar__card-footer">
                  <button>
                    <span>{item.textButton}</span>
                  </button>
                </div>
              </div>
            ))}

            <div className="sidebar__button">
              <button>
                <span>Sexy Button</span>
              </button>
            </div>
          </div>
        </div>
      </aside>

      <button
        className={`button-menu ${isOpen ? "button-menu--open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
      </button>

      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
