import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";

// import { isAuthenticated } from '../helpers';

const RouteAuthenticated = ({ component: Component, path }) => {
  const user = window.localStorage.getItem("user");
  // const [isAuth, setIsAuth] = useState(false)
  // if(!user) return setIsAuth(true)
  if (!user) {
    return <Redirect to="/login" />;
  }

  return <Route component={Component} path={path} />;
};

export default RouteAuthenticated;
