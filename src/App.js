import "./scss/main.scss";
import React from "react";
import { Home } from "./components/Home/Home";
import { Sign } from "./components/Auth/Sign";
import { Form } from "./components/Form/Form";
import { Nav } from "./components/Nav/Nav";
import { Logout } from "./components/Auth/Logout";
import { PrivateRoute } from "./components/Auth/PrivateRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPartners, selectPartners } from "./redux/partnersSlice";
function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectPartners);
  if (isLoading) {
    dispatch(getPartners());
  }
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/oddaj-rzeczy" element={<PrivateRoute />}>
          <Route exact path="/oddaj-rzeczy" element={<Form />} />
        </Route>
        <Route path="/zaloguj" element={<Sign />} />
        <Route path="/zarejestruj" element={<Sign />} />
        <Route path="/wyloguj" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
