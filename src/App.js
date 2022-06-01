import { Switch, Route, Redirect } from "react-router-dom";
import Landing from "pages/Landing";
import Profile from "pages/Profile";
import Login from "pages/Login";
import Register from "pages/Register";

// Font Awesome Style Sheet
import "@fortawesome/fontawesome-free/css/all.min.css";

// Tailwind CSS Style Sheet
import "assets/styles/tailwind.css";
import Land from "pages/Land";
import SingleLand from "pages/SingleLand";
import Dashboard from "components/dashboard/Dashboard";
import Analytics from "components/dashboard/Analytics";
import AddProducts from "components/dashboard/AddProducts";
import Houses from "components/dashboard/Houses";
import Payments from "components/dashboard/Payments";
import Contact from "components/dashboard/Contact";
// import Contact from "components/dashboard/Contact";
// import Dashboard from 'pages/Dashboard'

function App() {
  const userData = window.localStorage.getItem("user");
  const user = JSON.parse(userData);
  // console.log("user", user.token);
  return (
    <Switch>
      {user ? (
        <>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard/add_houses" component={AddProducts} />
          <Route exact path="/dashboard/houses" component={Houses} />
          <Route exact path="/dashboard/payments" component={Payments} />
          <Route exact path="/dashboard/contacts" component={Contact} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/lands" component={Land} />
          <Route exact path="/land/:id" component={SingleLand} />
        </>
      ) : (
        <>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/" component={Landing} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/lands" component={Land} />
          <Route exact path="/land/:id" component={SingleLand} />
        </>
      )}
      <Redirect from="*" to="/" />
    </Switch>
  );
}

export default App;
