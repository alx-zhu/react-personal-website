import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import UnderConstruction from "../utility-components/UnderConstruction";

const Contact = ({ path }) => {
  return (
    <>
      <Navbar path={path} />
      <UnderConstruction />
      <Footer />
    </>
  );
};

export default Contact;
