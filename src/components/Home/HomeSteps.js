import React from "react";
import decoration from "../../assets/Decoration.svg";
import icon1 from "../../assets/Icon-1.svg";
import icon2 from "../../assets/Icon-2.svg";
import icon3 from "../../assets/Icon-3.svg";
import icon4 from "../../assets/Icon-4.svg";

export const HomeSteps = () => {
  return (
    <section className="steps" id="steps">
      <div className="steps__header">
        <h4 className="steps__header__text">Wystarczą 4 proste kroki</h4>
        <img src={decoration} alt="" className="decoration" />
      </div>

      <div className="steps__wrapper">
        <div className="steps__container">
          <div className="steps__box">
            <img src={icon1} alt="" className="steps__box__img" />
            <h5 className="steps__box__headline">Wybierz rzeczy</h5>
            <p className="steps__box__text">
              ubrania, zabawki,
              <br />
              sprzęt i inne
            </p>
          </div>
          <div className="steps__box">
            <img src={icon2} alt="" className="steps__box__img" />
            <h5 className="steps__box__headline">Spakuj je</h5>
            <p className="steps__box__text">
              skorzystaj z <br />
              worków na śmieci
            </p>
          </div>
          <div className="steps__box">
            <img src={icon3} alt="" className="steps__box__img" />
            <h5 className="steps__box__headline">
              Zdecyduj komu
              <br />
              chcesz pomóc
            </h5>
            <p className="steps__box__text">wybierz zaufane miejsce</p>
          </div>
          <div className="steps__box">
            <img src={icon4} alt="" className="steps__box__img" />
            <h5 className="steps__box__headline">Zamów kuriera</h5>
            <p className="steps__box__text">
              kurier przyjedzie
              <br />w dogodnym terminie
            </p>
          </div>
        </div>
      </div>
      <div className="buttons-row">
        <button className="button">ODDAJ RZECZY</button>
      </div>
    </section>
  );
};
