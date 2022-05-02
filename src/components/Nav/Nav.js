import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { useUser } from "../../hooks/useUser";
import { useDispatch } from "react-redux";
import { signOut } from "../../redux/userSlice";
export const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mail, isLogged, isLoading, error } = useUser();
  const handleLogout = () => {
    dispatch(signOut());
  };
  const isFirstEffect = useRef(true);
  useEffect(() => {
    console.log(isFirstEffect);
    console.log(isLogged);
    if (!isLogged && !isFirstEffect) navigate("/wyloguj");
    if (!isLogged && isFirstEffect) isFirstEffect.current = false;
  }, [isLogged, navigate]);

  return (
    <nav className="nav">
      <div className="nav__container">
        {isLogged ? (
          <div className="nav__main">
            {error && <div className="error-popup">{error}</div>}
            <div className="nav__main__link">Cześć {mail}</div>
            <div className="nav__main__link main-link">
              <Link to="/oddaj-rzeczy">Oddaj rzeczy</Link>
            </div>
            <button disabled={isLoading} onClick={handleLogout} className="nav__main__link">
              Wyloguj
            </button>
          </div>
        ) : (
          <div className="nav__main">
            <div className="nav__main__link">
              <Link to="/zaloguj">Zaloguj</Link>
            </div>
            <div className="nav__main__link main-link">
              <Link to="/zarejestruj">Załóż konto</Link>
            </div>
          </div>
        )}
        <div className="nav__scroll">
          <div className="nav__scroll__link">
            <LinkScroll to="header" offset={-150} smooth>
              Start
            </LinkScroll>
          </div>
          <div className="nav__scroll__link">
            <LinkScroll to="steps" offset={-120} smooth>
              O co chodzi?
            </LinkScroll>
          </div>
          <div className="nav__scroll__link">
            <LinkScroll to="about" offset={-150} smooth>
              O nas
            </LinkScroll>
          </div>
          <div className="nav__scroll__link">
            <LinkScroll to="/" offset={-150} smooth>
              Fundacja i organizacje
            </LinkScroll>
          </div>
          <div className="nav__scroll__link">
            <LinkScroll to="contact" offset={-120} smooth>
              Kontakt
            </LinkScroll>
          </div>
        </div>
      </div>
    </nav>
  );
};
