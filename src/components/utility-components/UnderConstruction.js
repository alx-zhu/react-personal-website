import React from "react";
import styled from "styled-components";
import ConstructionIcon from "@mui/icons-material/Construction";
import { Link } from "react-router-dom";

const UnderConstruction = () => {
  return (
    <UnderConstructionContainer>
      <IconContainer>
        <ConstructionIcon />
      </IconContainer>
      <TextContainer>
        <h1>Sorry! This page is still under construction.</h1>
        <h2>
          Thank you very much for visiting my website! Please be sure to check
          out the <StyledLink to="/">Home</StyledLink> and{" "}
          <StyledLink to="/projects">Projects</StyledLink> pages while I
          continue to work on this page.
        </h2>
      </TextContainer>
    </UnderConstructionContainer>
  );
};

export default UnderConstruction;

const UnderConstructionContainer = styled.div`
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconContainer = styled.div`
  width: 40%;
  > .MuiSvgIcon-root {
    font-size: 500px;
  }
`;
const TextContainer = styled.div`
  width: 40%;
  h1 {
    font-weight: 500;
  }
  h2 {
    font-weight: 400;
  }
`;

const StyledLink = styled(Link)`
  font-weight: 400;
  color: var(--p-color);
`;
