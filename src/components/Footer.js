import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <h1>Alexander Zhu</h1>
      </div>
      <NavContainer>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </NavContainer>
      <SocialsContainer>
        <GitHubIcon />
        <LinkedInIcon />
        <InstagramIcon />
        <TwitterIcon />
      </SocialsContainer>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: rgba(0, 0, 0, 0.7);
  height: 200px;
  align-items: center;
  margin-top: 100px;
  > div {
    display: flex;
    justify-content: center;
  }
  h1 {
    font-weight: 500;
    cursor: default;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > ul {
    list-style: none;
    line-height: 25px;
  }
  li {
    cursor: pointer;
    transition: color 200ms ease-in-out;
    :hover {
      color: var(--p-color);
    }
  }
`;

const SocialsContainer = styled.div`
  > .MuiSvgIcon-root {
    margin-right: 10px;
    font-size: 30px;
    transition: color 200ms ease-in-out;
    cursor: pointer;
    :hover {
      color: var(--p-color);
    }
  }
`;
