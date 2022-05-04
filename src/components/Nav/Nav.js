import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";
import { signOut } from "../../redux/userSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
export const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [burger, setBurger] = useState(false);
  const { mail, isLogged, isLoading } = useSelector(selectUser);
  const { pathname } = useLocation();
  const handleLogout = () => {
    dispatch(signOut()).then(navigate("/wyloguj"));
  };
  const handleBurger = () => setBurger(!burger);
  const handleScrollLink = () => {
    setBurger(false);
    if (pathname !== "/") navigate("/");
  };

  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__main">
          {isLogged ? (
            <>
              <div className="nav__main__link">Cześć {mail}</div>
              <div className="nav__main__link main-link">
                <Link to="/oddaj-rzeczy">Oddaj rzeczy</Link>
              </div>
              <button disabled={isLoading} onClick={handleLogout} className="nav__main__link">
                Wyloguj
              </button>
            </>
          ) : (
            <>
              <div className="nav__main__link">
                <Link to="/zaloguj">Zaloguj</Link>
              </div>
              <div className="nav__main__link main-link">
                <Link to="/zarejestruj">Załóż konto</Link>
              </div>
            </>
          )}
          <button onClick={handleBurger} className="burger__button">
            {!burger ? <GiHamburgerMenu size="20px" /> : <IoClose size="20px" />}
          </button>
        </div>

        <div className={"nav__scroll" + (burger ? " active" : "")}>
          <div className="nav__scroll__link">
            <LinkScroll onClick={handleScrollLink} to="header" offset={-150} smooth>
              Start
            </LinkScroll>
          </div>
          <div className="nav__scroll__link">
            <LinkScroll onClick={handleScrollLink} to="steps" offset={-120} smooth>
              O co chodzi?
            </LinkScroll>
          </div>
          <div className="nav__scroll__link">
            <LinkScroll onClick={handleScrollLink} to="about" offset={-150} smooth>
              O nas
            </LinkScroll>
          </div>
          <div className="nav__scroll__link">
            <LinkScroll onClick={handleScrollLink} to="partners" offset={-150} smooth>
              Fundacja i organizacje
            </LinkScroll>
          </div>
          <div className="nav__scroll__link">
            <LinkScroll onClick={handleScrollLink} to="contact" offset={-120} smooth>
              Kontakt
            </LinkScroll>
          </div>
        </div>
      </div>
    </nav>
  );
};
