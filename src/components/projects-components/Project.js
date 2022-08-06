import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalState";

const Project = () => {
  const { selectedId, projects } = useContext(GlobalContext);
  const selected = projects.find((p) => p.id === selectedId);
  if (selected) {
    const { img, title, date, languages } = selected;
    return (
      <ProjectContainer>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectImg src={img.src} alt={img.alt} />
        <h2>{date}</h2>
        <h3>{languages}</h3>
      </ProjectContainer>
    );
  }
};

export default Project;

const ProjectContainer = styled.div`
  flex: 0.65;
  min-height: 500px;
`;

const ProjectTitle = styled.h1``;
const ProjectImg = styled.img`
  max-width: 100%;
  max-height: 300px;
`;
