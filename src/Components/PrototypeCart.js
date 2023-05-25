import React, { useState } from "react";
import "../Components/PrototypeCart.css";
import listItems from "../Data/CartListData";
import removeIcon from "../Assets/Images/trash-solid.svg";

const PrototypeCart = () => {
  return (
    <div className="cart">
      <div className="cart__wrapper">
        <div className="cart__header">
          <h3>Cesta</h3>
          <div className="cart__remove">
            <span>
              <img src={removeIcon} alt="dummyText" />
            </span>
            <p>Remover</p>
          </div>
        </div>

        <div className="cart__body">
          <div className="cart__table">
            <div className="cart__table__wrapper">
              <div className="cart__table__header">
                <div className="cart__table__checkbox">
                  <input type="checkbox" id="checkbox" />
                  <label htmlFor="checkbox">
                    <h4>Producto</h4>
                  </label>
                </div>

                <h4 className="cart__table__quantity">Cantidad</h4>

                <h4 className="cart__table__price">Precio</h4>
              </div>
              <div className="cart__table__body">
                <ol className="cart__items">
                  {listItems.map((item, index) => (
                    <CartItem key={index} item={item} />
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CartItem = ({ item }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    if (count < 8) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <li className="cart__item">
      <div className="cart__item__checkbox">
        <input type="checkbox" />
      </div>
      <div className="cart__item__image">
        <figure>
          <img src={item.imageSrc} alt="Dummy Text" />
          <figcaption>
            <h4>{item.name}</h4>
            <span>
              {item.color} | {item.size}
            </span>
          </figcaption>
        </figure>
      </div>
      <div className="cart__item__detail">
        <div className="cart__item__quantity">
          <div className="cart__item__count">
            <button onClick={decrementCount}>-</button>
            <div className="cart__item__items">
              <span>{count}</span>
            </div>
            <button onClick={incrementCount}>+</button>
          </div>
          <div className="cart__item__remove">
            <span>
              <span>
                <img src={removeIcon} alt="dummyText" />
              </span>
            </span>
            <p>Remover</p>
          </div>
        </div>
        <div className="cart__item__price">
          <p>{item.price}</p>
        </div>
      </div>
    </li>
  );
};

export default PrototypeCart;
