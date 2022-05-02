import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import decoration from "../../assets/Decoration.svg";
import { useDispatch } from "react-redux";
import { setMail, setPassword, signIn, signUp } from "../../redux/userSlice";

export const Sign = () => {
  const dispatch = useDispatch();
  const { isLoading, error, password, mail, isLogged } = useUser();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const locationName = pathname.charAt(1).toUpperCase() + pathname.slice(2);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(pathname === "/zaloguj" ? signIn({ mail, password }) : signUp({ mail, password }));
  };
  const handleMailChange = (event) => {
    dispatch(setMail(event.currentTarget.value));
  };

  const handlePasswordChange = (event) => {
    dispatch(setPassword(event.currentTarget.value));
  };
  const handlePasswordConfirmChange = () => {};
  useEffect(() => {
    isLogged && navigate("/");
  }, [isLogged]);

  return (
    <main className="sign">
      <h4 className="sign__headline">{locationName}</h4>
      <img src={decoration} alt="" className="decoration" />
      <form className="sign__form" onSubmit={handleSubmit}>
        {error !== "" && <div className="sign__form__popup--error">{error}</div>}
        <div className="sign__form__wrapper">
          <label className="sign__form__label">Email:</label>
          <input type="email" onInput={handleMailChange} id="email" autoComplete="userName" className="sign__form__input--text" required />
          <label className="sign__form__label">Password:</label>
          <input type="password" onInput={handlePasswordChange} autoComplete="password" id="password" className="sign__form__input--text" required />
          {pathname === "/zarejestruj" && (
            <>
              <label className="sign__form__label">Confirm password:</label>
              <input type="password" autoComplete="password" id="password-confrim" className="sign__form__input--text" required />
            </>
          )}
        </div>
        <div className="sign__form__buttons">
          <div className="sign__form__input--button">{pathname === "/zarejestruj" ? <Link to="/zaloguj">Zaloguj się</Link> : <Link to="/zarejestruj">Zarejestruj się</Link>}</div>
          <button disabled={isLoading} type="submit" className="sign__form__input--button">
            {locationName}
          </button>
        </div>
      </form>
    </main>
  );
};
