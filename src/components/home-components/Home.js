import { useEffect, useState } from "react";
import Footer from "../Footer";
import Heading from "./Heading";
// import Introduction from "./Introduction";
import Navbar from "../Navbar";
import styled from "styled-components";
import HomeSidebar from "./HomeSidebar";
import HomeContent from "./HomeContent";
// import Sidebar from "./Sidebar";

const Home = ({ path }) => {
  const [navOpacity, setNavOpacity] = useState(1);
  const [headerOpacity, setHeaderOpacity] = useState(1);
  // const [introOpacity, setIntroOpacity] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    const navThreshold = 550;
    const headerThreshold = 100;
    // const introThreshold = 100;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > navThreshold) {
      setNavOpacity(0);
    } else {
      setNavOpacity(1);
    }

    if (winScroll > headerThreshold) {
      setHeaderOpacity(0);
    } else {
      setHeaderOpacity(1);
    }

    // if (winScroll > introThreshold) {
    //   setIntroOpacity(1);
    // } else {
    //   setIntroOpacity(0);
    // }
  };

  return (
    <>
      <Navbar opac={navOpacity} path={path} />
      <Heading opac={headerOpacity} />
      <BodyContainer>
        <HomeSidebar />
        <HomeContent />
        {/* <Introduction /> */}
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
