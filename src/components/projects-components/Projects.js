import React from "react";
import styled from "styled-components";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Project from "./Project";
import ProjectSidebar from "./ProjectSidebar";

const Projects = ({ path }) => {
  return (
    <>
      <Navbar path={path} />
      <ProjectsContentContainer>
        <ProjectSidebar />
        <Project />
      </ProjectsContentContainer>
      <Footer />
    </>
  );
};

export default Projects;

const ProjectsContentContainer = styled.div`
  display: flex;
  /* margin-top: var(--nav-height); */
  min-height: 1000px;
  background-color: var(--surface-color-dark);
`;
