import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import App from "App";
import { Switch, Redirect, Route } from "react-router-dom";
import "assets/styles/tailwind.css";
import Land from "pages/Land";
import SingleLand from "pages/SingleLand";
import Dashboard from "components/dashboard/Dashboard";
// import Analytics from "components/dashboard/Analytics";
import AddProducts from "components/dashboard/AddProducts";
import Houses from "components/dashboard/Houses";
import Payments from "components/dashboard/Payments";
import Contact from "components/dashboard/Contact";
import Landing from "pages/Landing";
import Profile from "pages/Profile";
import Login from "pages/Login";
import Register from "pages/Register";
ReactDOM.render(
  <BrowserRouter>
    {/* <App /> */}
    <Switch>
      {/* <></> */}
      <Route exact path="/" component={Landing} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/lands" component={Land} />
      <Route exact path="/land/:id" component={SingleLand} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/dashboard/add_houses" component={AddProducts} />
      <Route exact path="/dashboard/houses" component={Houses} />
      <Route exact path="/dashboard/payments" component={Payments} />
      <Route exact path="/dashboard/contacts" component={Contact} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
