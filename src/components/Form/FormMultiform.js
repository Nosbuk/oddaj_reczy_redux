import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const FormMultiform = () => {
  const [step, setStep] = useState();
  const { register, handleSubmit } = useForm();

  const submitHandler = (data) => {
    console.log(data);
    console.log(
      Object.values(data)
        .filter((item) => item)
        .join(" ")
    );
  };
  return (
    <section className="multiform">
      {step === 1 && (
        <form onSubmit={handleSubmit(submitHandler)} className="multiform__form">
          <h4 className="multiform__form__title">Zaznacz co chcesz oddać:</h4>
          <label className="multiform__form__label">
            <input {...register("one")} type="checkbox" className="multiform__form__checkbox" value="ubrania, które nadają się do ponownego użycia" />
            ubrania, które nadają się do ponownego użycia
          </label>
          <label className="multiform__form__label">
            <input {...register("two")} type="checkbox" className="multiform__form__checkbox" value="ubrania, do wyrzucenia" />
            ubrania, do wyrzucenia
          </label>
          <label className="multiform__form__label">
            <input {...register("three")} type="checkbox" className="multiform__form__checkbox" value="zabawki" />
            zabawki
          </label>
          <label className="multiform__form__label">
            <input {...register("four")} type="checkbox" className="multiform__form__checkbox" value="książki" />
            książki
          </label>
          <label className="multiform__form__label">
            <input {...register("five")} type="checkbox" className="multiform__form__checkbox" value="Inne" />
            Inne
          </label>
          <input type="submit" value="Dalej" />
        </form>
      )}
      {step === 2 && (
        <form onSubmit={handleSubmit(submitHandler)} className="multiform__form">
          <h4 className="multiform__form__title">Zaznacz co chcesz oddać:</h4>
          <label className="multiform__form__label">
            <input {...register("one")} type="checkbox" className="multiform__form__checkbox" value="ubrania, które nadają się do ponownego użycia" />
            ubrania, które nadają się do ponownego użycia
          </label>
          <label className="multiform__form__label">
            <input {...register("two")} type="checkbox" className="multiform__form__checkbox" value="ubrania, do wyrzucenia" />
            ubrania, do wyrzucenia
          </label>
          <label className="multiform__form__label">
            <input {...register("three")} type="checkbox" className="multiform__form__checkbox" value="zabawki" />
            zabawki
          </label>
          <label className="multiform__form__label">
            <input {...register("four")} type="checkbox" className="multiform__form__checkbox" value="książki" />
            książki
          </label>
          <label className="multiform__form__label">
            <input {...register("five")} type="checkbox" className="multiform__form__checkbox" value="Inne" />
            Inne
          </label>
          <input type="submit" value="Dalej" />
        </form>
      )}
      {step === 3 && (
        <form onSubmit={handleSubmit(submitHandler)} className="multiform__form">
          <h4 className="multiform__form__title">Zaznacz co chcesz oddać:</h4>
          <label className="multiform__form__label">
            <input {...register("one")} type="checkbox" className="multiform__form__checkbox" value="ubrania, które nadają się do ponownego użycia" />
            ubrania, które nadają się do ponownego użycia
          </label>
          <label className="multiform__form__label">
            <input {...register("two")} type="checkbox" className="multiform__form__checkbox" value="ubrania, do wyrzucenia" />
            ubrania, do wyrzucenia
          </label>
          <label className="multiform__form__label">
            <input {...register("three")} type="checkbox" className="multiform__form__checkbox" value="zabawki" />
            zabawki
          </label>
          <label className="multiform__form__label">
            <input {...register("four")} type="checkbox" className="multiform__form__checkbox" value="książki" />
            książki
          </label>
          <label className="multiform__form__label">
            <input {...register("five")} type="checkbox" className="multiform__form__checkbox" value="Inne" />
            Inne
          </label>
          <input type="submit" value="Dalej" />
        </form>
      )}
      {step === 4 && (
        <form onSubmit={handleSubmit(submitHandler)} className="multiform__form">
          <h4 className="multiform__form__title">Zaznacz co chcesz oddać:</h4>
          <label className="multiform__form__label">
            <input {...register("one")} type="checkbox" className="multiform__form__checkbox" value="ubrania, które nadają się do ponownego użycia" />
            ubrania, które nadają się do ponownego użycia
          </label>
          <label className="multiform__form__label">
            <input {...register("two")} type="checkbox" className="multiform__form__checkbox" value="ubrania, do wyrzucenia" />
            ubrania, do wyrzucenia
          </label>
          <label className="multiform__form__label">
            <input {...register("three")} type="checkbox" className="multiform__form__checkbox" value="zabawki" />
            zabawki
          </label>
          <label className="multiform__form__label">
            <input {...register("four")} type="checkbox" className="multiform__form__checkbox" value="książki" />
            książki
          </label>
          <label className="multiform__form__label">
            <input {...register("five")} type="checkbox" className="multiform__form__checkbox" value="Inne" />
            Inne
          </label>
          <input type="submit" value="Dalej" />
        </form>
      )}
    </section>
  );
};
