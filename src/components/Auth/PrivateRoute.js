import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectUser } from "../../redux/userSlice";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const currentUser = useSelector(selectUser);
  return currentUser ? <Outlet {...rest} /> : <Navigate to="/zaloguj" />;
};
