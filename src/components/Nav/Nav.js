import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { useAuth } from "../../hooks/useAuth";
export const Nav = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleLogout = async () => {
    setError("");
    try {
      await logout();
      navigate("/wyloguj");
    } catch {
      setError("Failed to log out");
    }
  };
  return (
    <nav className="nav">
      <div className="nav__container">
        {currentUser ? (
          <ul className="nav__main">
            {error && <li className="error-popup">{error}</li>}
            <li className="nav__main__link">Cześć {currentUser}</li>
            <li className="nav__main__link main-link">
              <Link to="/oddaj-rzeczy">Oddaj rzeczy</Link>
            </li>
            <li onClick={handleLogout} className="nav__main__link">
              Wyloguj
            </li>
          </ul>
        ) : (
          <ul className="nav__main">
            <li className="nav__main__link">
              <Link to="/zaloguj">Zaloguj</Link>
            </li>
            <li className="nav__main__link main-link">
              <Link to="/zarejestruj">Załóż konto</Link>
            </li>
          </ul>
        )}
        <ul className="nav__scroll">
          <li className="nav__scroll__link">
            <LinkScroll to="/">Start</LinkScroll>
          </li>
          <li className="nav__scroll__link">
            <LinkScroll to="/">O co chodzi?</LinkScroll>
          </li>
          <li className="nav__scroll__link">
            <LinkScroll to="/">O nas</LinkScroll>
          </li>
          <li className="nav__scroll__link">
            <LinkScroll to="/">Fundacja i organizacje</LinkScroll>
          </li>
          <li className="nav__scroll__link">
            <LinkScroll to="/">Kontakt</LinkScroll>
          </li>
        </ul>
      </div>
    </nav>
  );
};
