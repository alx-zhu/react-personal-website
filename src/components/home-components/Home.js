import { useEffect, useState } from "react";
import Footer from "../Footer";
import Heading from "./Heading";
import Introduction from "./Introduction";
import Navbar from "../Navbar";
import styled from "styled-components";
import HomeSidebar from "./HomeSidebar";
// import Sidebar from "./Sidebar";

const Home = ({ path }) => {
  const [navOpacity, setNavOpacity] = useState(0);
  // const [introOpacity, setIntroOpacity] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    const navThreshold = 100;
    // const introThreshold = 100;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > navThreshold) {
      setNavOpacity(1);
    } else {
      setNavOpacity(0);
    }

    // if (winScroll > introThreshold) {
    //   setIntroOpacity(1);
    // } else {
    //   setIntroOpacity(0);
    // }
  };

  return (
    <>
      <Navbar opac={1} path={path} />
      <Heading opac={1 - navOpacity} />
      <BodyContainer>
        <HomeSidebar />
        <Introduction />
      </BodyContainer>
      <Footer />
    </>
  );
};

export default Home;

const BodyContainer = styled.div`
  display: flex;
  background-color: var(--surface-color-dark);
`;
