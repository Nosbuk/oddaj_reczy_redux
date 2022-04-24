import React from "react";
import decoration from "../../assets/Decoration.svg";
import { Link } from "react-router-dom";

export const Logout = () => {
  return (
    <main className="logout">
      <h4 className="logout__headline">
        Wylogowanie nastąpiło
        <br />
        pomyślnie!
      </h4>
      <img src={decoration} alt="" className="decoration" />
      <Link to="/">
        <button className="logout__button">Strona główna</button>
      </Link>
    </main>
  );
};
