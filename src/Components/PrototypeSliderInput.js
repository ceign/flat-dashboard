import { useState } from "react";
import "./PrototypeSliderInput.css";

function ColorSelector() {
  const [selected, setSelected] = useState("black");

  return (
    <div className="carousel__info__variants">
      <ul>
        <li>
          <div
            className={`carousel__info__variant ${
              selected === "black" ? "carousel__info__variant--selected" : ""
            } carousel__info__variant--black`}
            onClick={() => setSelected("black")}
          ></div>
        </li>

        <li>
          <div
            className={`carousel__info__variant ${
              selected === "gray" ? "carousel__info__variant--selected" : ""
            } carousel__info__variant--gray`}
            onClick={() => setSelected("gray")}
          ></div>
        </li>
      </ul>
    </div>
  );
}

export default ColorSelector;
