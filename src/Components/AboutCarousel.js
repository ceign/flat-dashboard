import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import slide1 from "../Assets/Images/iphone-12-pro.png";

const AboutCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      perView: 1,
      spacing: 32,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 10, origin: "auto" },
      },
      "(min-width: 1024px)": {
        slides: { perView: 2, spacing: -100, origin: "auto" },
      },
      "(min-width: 1600px)": {
        slides: { perView: 1.9, spacing: 40, origin: "center" },
      },
      "(min-width: 1900px)": {
        slides: { perView: 1.9, spacing: -80, origin: "center" },
      },
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <div className="about__contact-card__image">
            <figure>
              <img src={slide1} alt="Dummy text" />
            </figure>
          </div>
        </div>
        <div className="keen-slider__slide number-slide1">
          <div className="about__contact-card__image">
            <figure>
              <img src={slide1} alt="Dummy text" />
            </figure>
          </div>
        </div>
        <div className="keen-slider__slide number-slide1">
          <div className="about__contact-card__image">
            <figure>
              <img src={slide1} alt="Dummy text" />
            </figure>
          </div>
        </div>
        <div className="keen-slider__slide number-slide1">
          <div className="about__contact-card__image">
            <figure>
              <img src={slide1} alt="Dummy text" />
            </figure>
          </div>
        </div>
        <div className="keen-slider__slide number-slide1">
          <div className="about__contact-card__image">
            <figure>
              <img src={slide1} alt="Dummy text" />
            </figure>
          </div>
        </div>
      </div>
      {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
            disabled={currentSlide === 0}
          />

          <Arrow
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          />
        </>
      )}

      {loaded && instanceRef.current && (
        <div className="about__contact-card__dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={
                  "about__contact-card__dot" +
                  (currentSlide === idx ? "--active" : "")
                }
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
};

function Arrow(props) {
  const disabeld = props.disabled ? "about__contact-card__arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`about__contact-card__arrow ${
        props.left
          ? "about__contact-card__arrow--left"
          : "about__contact-card__arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

export default AboutCarousel;
