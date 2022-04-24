import React, { useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import decoration from "../../assets/Decoration.svg";

export const Sign = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { pathname } = useLocation();

  const locationName = pathname.charAt(1).toUpperCase() + pathname.slice(2);

  async function handleSubmit(event) {
    event.preventDefault();
    if (pathname === "/zarejestruj") {
      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError("Passwords do not match");
      }
    }

    try {
      setError("");
      setLoading(true);
      if (pathname === "/zarejestruj") {
        await signup(emailRef.current.value, passwordRef.current.value);
      } else {
        await login(emailRef.current.value, passwordRef.current.value);
      }
      navigate("/");
    } catch {
      if (pathname === "/zarejestruj") {
        setError("Rejestracja nie powiodła się");
      } else {
        setError("Błędny email lub hasło");
      }
    }
    setLoading(false);
  }

  return (
    <main className="sign">
      <h4 className="sign__headline">{locationName}</h4>
      <img src={decoration} alt="" className="decoration" />
      <form className="sign__form" onSubmit={handleSubmit}>
        {error !== "" && <div className="sign__form__popup--error">{error}</div>}
        <div className="sign__form__wrapper">
          <label className="sign__form__label">Email:</label>
          <input type="email" id="email" autoComplete="userName" className="sign__form__input--text" ref={emailRef} required />
          <label className="sign__form__label">Password:</label>
          <input type="password" autoComplete="password" id="password" className="sign__form__input--text" ref={passwordRef} required />
          {pathname === "/zarejestruj" && (
            <>
              <label className="sign__form__label">Confirm password:</label>
              <input type="password" autoComplete="password" id="password-confrim" className="sign__form__input--text" ref={passwordConfirmRef} required />
            </>
          )}
        </div>
        <div className="sign__form__buttons">
          <div className="sign__form__input--button">{pathname === "/zarejestruj" ? <Link to="/zaloguj">Zaloguj się</Link> : <Link to="/zarejestruj">Zarejestruj się</Link>}</div>
          <button disabled={loading} type="submit" className="sign__form__input--button">
            {locationName}
          </button>
        </div>
      </form>
    </main>
  );
};
