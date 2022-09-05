import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import UnderConstruction from "../utility-components/UnderConstruction";

const About = ({ path }) => {
  return (
    <>
      <Navbar path={path} />
      <UnderConstruction />
      {/* ADD A MY GOALS SECTION */}
      {/* <h1>MY CURRENT GOALS</h1> */}
      <Footer />
    </>
  );
};

export default About;
