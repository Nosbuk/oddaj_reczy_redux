import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLogged } = useUser();
  return isLogged ? <Outlet {...rest} /> : <Navigate to="/zaloguj" />;
};
