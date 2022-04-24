import React from "react";
import decoration from "../../assets/Decoration.svg";
import signature from "../../assets/Signature.svg";
import peopleImg from "../../assets/People.jpg";

export const HomeAbout = () => {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__box">
          <h4 className="about__box__headline">O nas</h4>
          <img src={decoration} alt="" className="decoration" />
          <p className="about__box__text">
            Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. <img src={signature} alt="" className="about__box__signature" />
          </p>
        </div>
        <img src={peopleImg} alt="" className="about__img" />
      </div>
    </section>
  );
};
