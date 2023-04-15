import React from "react";
import "../Components/PrototypeCarousel.css";
import PrototypeSlider from "./PrototypeSlider";
import PrototypeSliderData from "./PrototypeSliderData";

const PrototypeCarousel = () => {
  return (
    <div className="carousel">
      <div className="carousel__wrapper">
        <PrototypeSlider />
        <PrototypeSliderData />
      </div>
    </div>
  );
};

export default PrototypeCarousel;
