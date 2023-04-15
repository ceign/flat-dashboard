import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../Components/PrototypeSlider.css";
import slide1 from "../Assets/Images/carousel-item-1.jpg";
import slide2 from "../Assets/Images/carousel-item-2.jpg";
import slide3 from "../Assets/Images/carousel-item-3.jpg";
import slide4 from "../Assets/Images/carousel-item-4.jpg";

function PrototypeSlider(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

export default function App() {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [PrototypeSlider(instanceRef)]
  );

  return (
    <div>
      <div ref={sliderRef} className="keen-slider carousel__slider">
        <div className="keen-slider__slide">
          <figure>
            <img src={slide1} alt="Dummy text" />
          </figure>
        </div>
        <div className="keen-slider__slide">
          <figure>
            <img src={slide2} alt="Dummy text" />
          </figure>
        </div>
        <div className="keen-slider__slide">
          <figure>
            <img src={slide3} alt="Dummy text" />
          </figure>
        </div>
        <div className="keen-slider__slide">
          <figure>
            <img src={slide4} alt="Dummy text" />
          </figure>
        </div>
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail">
        <ul>
          <li className="keen-slider__slide">
            <figure>
              <img src={slide1} alt="Dummy text" />
            </figure>
          </li>

          <li className="keen-slider__slide">
            <figure>
              <img src={slide2} alt="Dummy text" />
            </figure>
          </li>

          <li className="keen-slider__slide">
            <figure>
              <img src={slide3} alt="Dummy text" />
            </figure>
          </li>

          <li className="keen-slider__slide">
            <figure>
              <img src={slide4} alt="Dummy text" />
            </figure>
          </li>
        </ul>
      </div>
    </div>
  );
}
