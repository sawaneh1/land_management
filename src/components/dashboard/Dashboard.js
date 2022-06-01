import React, { useEffect, useState } from "react";
import Aside from "./Aside";
import AddProducts from "./AddProducts";
import { Link } from "react-router-dom";
import Analytics from "./Analytics";
import { useHistory, useParams, Router } from "react-router-dom";
import Header from "./Header";

const Dashboard = () => {
  const history = useHistory();

  console.log("path", history.location.pathname);

  useEffect(() => {
    const user = window.localStorage.getItem("user");
    if (!user) {
      console.log("ttettte");
    }
  }, []);

  const [isAddproductsRoute, setAddProductsRoute] = useState(false);
  //   const handleRoute = (e) => {
  //     console.log('clicked', e);

  //   }
  return (
    <Header>
      <Analytics />
    </Header>
  );
};

export default Dashboard;
