import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import UnderConstruction from "../utility-components/UnderConstruction";

const About = ({ path }) => {
  return (
    <>
      <Navbar path={path} />
      <UnderConstruction />
      <Footer />
    </>
  );
};

export default About;
