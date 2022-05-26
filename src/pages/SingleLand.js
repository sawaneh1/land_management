import DefaultFooter from "components/DefaultFooter";
import DefaultNavbar from "components/DefaultNavbar";
import Header from "components/landing/Header";
import SinglePage from "components/landing/SinlgePage";
import TeamSection from "components/landing/TeamSection";
import WorkingSection from "components/landing/WorkingSection";
import React from "react";
import { Route } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import { Router } from "react-router-dom";

const SingleLand = () => {
  const route = useParams();
  console.log("rrr", route.id);

  return (
    <>
      {/* <div className="absolute w-full z-20 mb-20">
        <DefaultNavbar />
      </div> */}
      <main>
        {/* <Header /> */}
        <div>
          <SinglePage />
        </div>

        {/* <TeamSection /> */}
        {/* <ContactSection /> */}
      </main>
      <DefaultFooter />
    </>
  );
};

export default SingleLand;
