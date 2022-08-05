import React from "react";
import styled from "styled-components";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Project from "./Project";
import ProjectsSideBar from "./ProjectsSideBar";

const Projects = ({ path }) => {
  return (
    <>
      <Navbar path={path} />
      <ProjectsContentContainer>
        <ProjectsSideBar />
        <Project />
      </ProjectsContentContainer>
      <Footer />
    </>
  );
};

export default Projects;

const ProjectsContentContainer = styled.div`
  display: flex;
`;
