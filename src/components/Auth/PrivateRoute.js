import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLogged } = useSelector(selectUser);
  return isLogged ? <Outlet {...rest} /> : <Navigate to="/zaloguj" />;
};
