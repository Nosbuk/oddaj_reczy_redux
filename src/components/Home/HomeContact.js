import React from "react";
import decoration from "../../assets/Decoration.svg";
import clothImg from "../../assets/Background-Contact-Form.jpg";

export const HomeContact = () => {
  return (
    <section className="contact" id="contact">
      <div className="img-wrapper">
        <img src={clothImg} alt="" className="contact__img" />
        <div className="img-shadow"></div>
      </div>
      <form action="" className="contact__form">
        <h4 className="contact__form__headline">Skontaktuj sie z nami</h4>
        <img src={decoration} alt="" className="decoration" />
        <div className="contact__form__row">
          <label htmlFor="name" className="contact__form__label">
            Wpisz swoje imię
            <input type="text" name="name" id="" className="contact__form__input" />
          </label>
          <label htmlFor="email" className="contact__form__label">
            Wpisz swój email
            <input type="email" name="email" id="" className="contact__form__input" />
          </label>
        </div>
        <label className="contact__form__label">Wpisz swoją wiadomość</label>
        <textarea name="" id="" cols="30" rows="10" className="contact__form__msg"></textarea>
        <button type="submit" className="contact__form__submit">
          Wyślij
        </button>
      </form>
    </section>
  );
};
