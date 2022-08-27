import React from "react";
import styled from "styled-components";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import EmailIcon from "@mui/icons-material/Email";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <h1>Alexander Zhu</h1>
      </div>
      <NavContainer>
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/about">About</StyledLink>
          </li>
          <li>
            <StyledLink to="/projects">Projects</StyledLink>
          </li>
          <li>
            <StyledLink to="/contact">Contact</StyledLink>
          </li>
        </ul>
      </NavContainer>
      {/* <SocialsContainer>
        <a></a>
        <EmailIcon />
        <a href="https://github.com/alx-zhu"></a>
        <GitHubIcon />
        <LinkedInIcon />
      </SocialsContainer> */}
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  /* display: grid;
  grid-template-columns: repeat(3, 1fr); */
  display: flex;
  justify-content: space-between;
  padding: 100px;
  background-color: rgba(0, 0, 0, 0.7);
  height: 200px;
  align-items: center;
  margin-top: 0;
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
  > ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    list-style: none;
    line-height: 25px;
  }
  li {
    margin: 0 10px;
  }
`;

// const SocialsContainer = styled.div`
//   > .MuiSvgIcon-root {
//     margin-right: 20px;
//     font-size: 30px;
//     transition: color 200ms ease-in-out;
//     cursor: pointer;
//     :hover {
//       color: var(--p-color);
//     }
//   }
// `;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 400;
  font-size: 18px;
  color: var(--text-color);
  cursor: pointer;
  transition: color 200ms ease-in-out;
  :hover {
    color: var(--p-color);
  }
`;
