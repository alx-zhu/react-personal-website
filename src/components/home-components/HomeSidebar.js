import React from "react";
import styled from "styled-components";

const HomeSidebar = () => {
  return (
    <HomeSidebarContainer>
      <SidebarTitle>Home</SidebarTitle>
      <HomeOptionContainer selected>
        <Thumbnail src="images/graduation.jpg" alt="Graduation Picture" />
        <TextContainer selected>
          <h3>A Little Bit About Me</h3>
        </TextContainer>
      </HomeOptionContainer>
      <SidebarSubtitle>Projects</SidebarSubtitle>
      <HomeOptionContainer>
        <Thumbnail src="images/resume-img.png" alt="Resume Img" />
        <TextContainer>
          <h3>Current CV</h3>
        </TextContainer>
      </HomeOptionContainer>
      <HomeOptionContainer>
        <Thumbnail src="images/icons/folder.png" alt="Folder Icon" />
        <TextContainer>
          <h3>Most Recent Projects</h3>
        </TextContainer>
      </HomeOptionContainer>
      <HomeOptionContainer>
        <Thumbnail src="images/icons/pin.png" alt="Pin Icon" />
        <TextContainer>
          <h3>Pinned Projects</h3>
        </TextContainer>
      </HomeOptionContainer>
      <SidebarSubtitle>Contact</SidebarSubtitle>
      <HomeOptionContainer>
        <Thumbnail src="images/icons/contact.jpg" alt="Contact Icon" />
        <TextContainer>
          <h3>Contact Me</h3>
        </TextContainer>
      </HomeOptionContainer>
    </HomeSidebarContainer>
  );
};

export default HomeSidebar;

const HomeSidebarContainer = styled.div`
  flex: 0.3;
  background-color: var(--bg-color);
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

const SidebarTitle = styled.h1`
  width: 40%;
  text-align: center;
  font-weight: 500;
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 2px solid rgb(255, 255, 255, 0.1);
`;

const SidebarSubtitle = styled.h2`
  width: 35%;
  text-align: center;
  font-weight: 400;
  margin: 30px 0 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(255, 255, 255, 0.1);
`;

const HomeOptionContainer = styled.div`
  display: ${(props) => (props.hidden ? "none" : "flex")};
  background-color: var(--surface-color);
  height: ${(props) => (props.selected ? "120px" : "100px")};
  width: ${(props) => (props.selected ? "92%" : "90%")};
  padding: 10px;
  padding-right: 15px;
  margin-bottom: ${(props) => (props.selected ? "10px" : "5px")};
  margin-top: ${(props) => (props.selected ? "5px" : "0px")};
  box-shadow: var(--box-shadow);
  align-items: center;
  border-right: ${(props) =>
    props.selected ? "5px solid var(--p-color)" : ""};
  cursor: pointer;
  transition: 100ms background-color ease-in-out;
  :hover {
    background-color: var(--surface-color-hover);
  }
`;

const TextContainer = styled.div`
  flex: 0.7;
  text-align: right;
  width: 100%;
  h3 {
    font-weight: ${(props) => (props.selected ? "600" : "400")};
    font-size: ${(props) => (props.selected ? "22px" : "20px")};
    margin: 0;
  }
  h4 {
    font-weight: 300;
    font-size: 14px;
    margin: 5px 0;
  }
`;

const Thumbnail = styled.img`
  flex: 0.3;
  max-height: 100%;
  max-width: 30%;
  margin-right: 10px;
  object-fit: cover;
`;
