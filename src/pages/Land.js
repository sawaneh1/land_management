import DefaultFooter from "components/DefaultFooter";
import DefaultNavbar from "components/DefaultNavbar";
import ContactSection from "components/landing/ContactSection";
import Header from "components/landing/Header";
import Lands from "components/landing/Lands";
import TeamSection from "components/landing/TeamSection";
import WorkingSection from "components/landing/WorkingSection";
import React from "react";

const Land = () => {
  return (
    <>
      <div className="absolute w-full z-20">
        <DefaultNavbar />
      </div>
      <main>
        <Header />
        <Lands />
        {/* <TeamSection /> */}
        {/* <ContactSection /> */}
      </main>
      <DefaultFooter />
    </>
  );
};

export default Land;
