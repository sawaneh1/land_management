import React from "react";
import { Redirect, Route } from "react-router-dom";

import { isAuthenticated } from "../helpers";

const RouteUnauthenticated = ({ component: Component, path }) => {
  if (isAuthenticated()) {
    return <Redirect to="/dashboard" />;
  }

  return <Route component={Component} path={path} />;
};

export default RouteUnauthenticated;
