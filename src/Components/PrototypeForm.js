import React from "react";
import "../Components/PrototypeForm.css";
import visaLogo from "../Assets/Images/visa.png";
import mcLogo from "../Assets/Images/mc-logo.svg";
import ppLogo from "../Assets/Images/pp-logo.svg";
import ntLogo from "../Assets/Images/neteller-logo.svg";
import amzLogo from "../Assets/Images/amazonpay-logo.svg";

const PrototypeForm = () => {
  return (
    <div className="form">
      <div className="form__wrapper">
        <div className="form__header">
          <h3>Selecciona el método de pago</h3>
        </div>

        <div className="form__body">
          <div className="credit-card">
            <div className="credit-card__header">
              <div className="credit-card__input">
                <input type="radio" id="credit-card" name="payment-method" />
                <label htmlFor="credit-card">Tarjeta de crédito</label>
              </div>

              <div className="credit-card__logos">
                <figure>
                  <img src={visaLogo} alt="Logo Visa" />
                </figure>

                <figure>
                  <img src={mcLogo} alt="Logo Masterd Card" />
                </figure>
              </div>
            </div>

            <div className="credit-card__body">
              <div className="credit-card__form">
                <div className="credit-card__form__group">
                  <form>
                    <input
                      type="text"
                      id="card-number"
                      placeholder="Número de tarjeta"
                    />
                  </form>
                </div>

                <div className="credit-card__form__group">
                  <form>
                    <input
                      type="text"
                      id="card-name"
                      placeholder="Nombre del titular"
                    />
                  </form>
                </div>

                <div className="credit-card__form__group">
                  <form>
                    <input
                      type="text"
                      id="card-date"
                      placeholder="Fecha de expiración"
                    />
                  </form>
                </div>

                <div className="credit-card__form__group">
                  <form>
                    <input type="text" id="card-cvv" placeholder="CVV" />
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="paypal">
            <div className="paypal__input">
              <input type="radio" id="paypal" name="payment-method" />
              <label htmlFor="paypal">Paypal</label>
            </div>

            <figure>
              <img src={ppLogo} alt="Paypal" />
            </figure>
          </div>

          <div className="neteller">
            <div className="neteller__input">
              <input type="radio" id="neteller" name="payment-method" />
              <label htmlFor="neteller">Neteller</label>

              <figure>
                <img src={ntLogo} alt="Neteller" />
              </figure>
            </div>
          </div>

          <div className="amazon">
            <div className="amazon__input">
              <input type="radio" id="amazon" name="payment-method" />
              <label htmlFor="amazon">Amazon Pay</label>

              <figure>
                <img src={amzLogo} alt="amazon" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrototypeForm;
