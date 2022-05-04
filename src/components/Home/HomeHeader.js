import React from "react";
import { Link } from "react-router-dom";
import decoration from "../../assets/Decoration.svg";

export const HomeHeader = () => {
  return (
    <header className="header" id="header">
      <div className="header__container">
        <div className="header__CTA">
          <h4 className="header__CTA__headline">
            Zacznij pomagać!
            <br /> Oddaj niechciane rzeczy w&nbsp;zaufane ręce
          </h4>
          <img className="decoration" src={decoration} alt="" />
          <div className="buttons-row">
            <Link to="/oddaj-rzeczy">
              <button className="button">ODDAJ RZECZY</button>
            </Link>
            <Link to="/oddaj-rzeczy">
              <button className="button">ZORGANIZUJ ZBIÓRKĘ</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
