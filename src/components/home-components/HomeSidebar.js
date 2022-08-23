import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalState";
import HomeOption from "./HomeOption";

const HomeSidebar = () => {
  const { homeOptions } = useContext(GlobalContext);
  return (
    <HomeSidebarContainer>
      <SidebarTitle>Home</SidebarTitle>
      {/* <HomeOption
        id={homeOptions[0].id}
        title={homeOptions[0].title}
        Icon={AccountCircleIcon}
      /> */}
      {homeOptions?.slice(0, 2).map((h) => {
        return (
          <HomeOption
            key={h.id}
            id={h.id}
            title={h.title}
            Icon={h.Icon}
            iconColor={h.iconColor}
          />
        );
      })}
      <SidebarSubtitle>Projects</SidebarSubtitle>
      {homeOptions?.slice(2, 4).map((h) => {
        return (
          <HomeOption
            key={h.id}
            id={h.id}
            title={h.title}
            Icon={h.Icon}
            iconColor={h.iconColor}
          />
        );
      })}
      <SidebarSubtitle>Contact</SidebarSubtitle>
      {homeOptions?.slice(-1).map((h) => {
        return (
          <HomeOption
            key={h.id}
            id={h.id}
            title={h.title}
            Icon={h.Icon}
            iconColor={h.iconColor}
          />
        );
      })}
    </HomeSidebarContainer>
  );
};

export default HomeSidebar;

const HomeSidebarContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  min-width: 300px;
  height: 600px;
  background-color: rgb(255, 255, 255, 0.02); /*var(--surface-color)*/
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 20px 0;
  padding-bottom: 40px;
  border-radius: 20px;
  margin: 50px;
  margin-right: 0;
  /* height: 1000px; */
`;

const SidebarTitle = styled.h1`
  width: 80%;
  text-align: left;
  font-weight: 400;
  margin-bottom: 20px;
  padding-bottom: 10px;
  margin-left: 25px;
  border-bottom: 1px solid rgb(255, 255, 255, 0.2);
  position: relative;
  font-size: 40px;
`;

const SidebarSubtitle = styled.h2`
  width: 80%;
  text-align: left;
  font-weight: 400;
  margin: 40px 0 15px;
  padding-bottom: 10px;
  margin-left: 25px;
  border-bottom: 1px solid rgb(255, 255, 255, 0.2);
  font-size: 24px;
`;
