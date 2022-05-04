import React, { useState } from "react";
import decoration from "../../assets/Decoration.svg";
import clothImg from "../../assets/Background-Contact-Form.jpg";
import { useForm } from "react-hook-form";
import axios from "axios";

export const HomeContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm();
  const [postError, setPostError] = useState(false);
  const [wasMessageSent, setWasMessageSent] = useState(false);
  const nameRegex = new RegExp("/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u");
  const mailRegex = new RegExp("^[\\w]+(?:[\\.\\-\\_][\\w]+)*@(?:[\\w]+[\\.\\-\\_]+)+[a-zA-Z]{2,4}$");
  const submitHandler = async (data) => {
    try {
      setWasMessageSent(false);
      setPostError(false);
      const resolute = await axios.post("https://fer-api.coderslab.pl/v1/portfolio/contact", data);
      setWasMessageSent(true);
      return resolute;
    } catch {
      setPostError(true);
    }
  };
  return (
    <section className="contact" id="contact">
      <div className="img-wrapper">
        <img src={clothImg} alt="" className="contact__img" />
        <div className="img-shadow"></div>
      </div>
      <form className="contact__form" onSubmit={handleSubmit(submitHandler)}>
        <h4 className="contact__form__headline">Skontaktuj sie z&nbsp;nami</h4>
        <img src={decoration} alt="" className="decoration" />
        <div className="contact__form__row">
          <label htmlFor="name" className="contact__form__label">
            Wpisz swoje imię
            <input type="text" className="contact__form__input" {...register("name", { required: true }, { pattern: nameRegex })} />
          </label>
          <label htmlFor="email" className="contact__form__label">
            Wpisz swój email
            <input type="email" className="contact__form__input" {...register("email", { required: true }, { pattern: mailRegex })} />
          </label>
        </div>
        <label className="contact__form__label">Wpisz swoją wiadomość</label>
        <textarea className="contact__form__msg" {...register("message", { minLength: 120 })}></textarea>
        <button type="submit" className="contact__form__submit">
          Wyślij
        </button>
        {postError && <p className="popup--error">Wysłanie wiadomości nie powiodło się.</p>}
        {wasMessageSent && <p className="popup--succes">Wysłanie wiadomości powiodło się.</p>}
        {formErrors.name && <p className="popup--error">Wprowadź poprawne imię.</p>}
        {formErrors.email && <p className="popup--error">Wprowadź poprawny email.</p>}
        {formErrors.message && <p className="popup--error">Wiadomość musi składać się z conajmniej 120 znaków.</p>}
      </form>
    </section>
  );
};
