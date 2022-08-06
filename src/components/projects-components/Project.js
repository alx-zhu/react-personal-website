import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalState";

const Project = () => {
  const { selectedId, projects } = useContext(GlobalContext);
  const selected = projects.find((p) => p.id === selectedId);
  if (selected) {
    const { img, title, date, languages, description, github } = selected;
    return (
      <ProjectContainer>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectImg src={img.src} alt={img.alt} />
        <ProjectTextContainer>
          <h3>
            <strong>Date:</strong> {date}
          </h3>
          <h3>
            <strong>Languages/Tools Used:</strong> {languages}
          </h3>
          <h3>
            <strong>Github:</strong> <a href={github}>{github}</a>
          </h3>
          <h3>
            <strong>Description:</strong>
          </h3>
          <p>{description}</p>
        </ProjectTextContainer>
      </ProjectContainer>
    );
  }
};

export default Project;

const ProjectContainer = styled.div`
  flex: 0.65;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  padding-bottom: 80px;
  animation: fadeIn 500ms ease-in-out;
`;

const ProjectTextContainer = styled.div`
  position: relative;
  margin-top: 30px;
  width: 70%;
  display: flex;
  flex-direction: column;
  background-color: var(--surface-color-solid);
  padding: 20px;
  box-shadow: var(--box-shadow-thin);
  border-radius: 10px;
  strong {
    font-weight: 500;
  }
  h2 {
    font-weight: 300;
  }
  h3 {
    font-weight: 300;
    margin: 10px 5px;
  }
  a {
    color: var(--p-color);
  }
  p {
    font-weight: 300;
    margin: 5px;
    font-size: 18px;
    line-height: 25px;
  }
  ::after {
    content: "";
    position: absolute;
    top: 20px;
    left: 20px;
    right: -10px;
    bottom: -10px;
    background-color: var(--p-color-trans);
    border-radius: 10px;
    box-shadow: var(--box-shadow-thick);
    opacity: inherit;
    z-index: -1;
  }
`;

const ProjectTitle = styled.h1`
  font-weight: 400;
  font-size: 40px;
`;
const ProjectImg = styled.img`
  max-width: auto;
  max-height: 350px;
  object-fit: cover;
  margin-top: 15px;
  margin-bottom: 20px;
`;
