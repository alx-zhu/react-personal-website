import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = ({ opac, path }) => {
  const paths = [
    { rawPath: "/", pathName: "Home" },
    { rawPath: "/about", pathName: "About" },
    { rawPath: "/projects", pathName: "Projects" },
    { rawPath: "/contact", pathName: "Contact" },
  ];
  return (
    <NavbarContainer opac={opac}>
      <NameLogo>Alexander Zhu</NameLogo>
      <Nav>
        <ul>
          {paths.map((p) => {
            if (p.rawPath === path)
              return (
                <li key={p.pathName}>
                  <StyledLink to={p.rawPath} selected>
                    {p.pathName}
                  </StyledLink>
                </li>
              );
            else
              return (
                <li key={p.pathName}>
                  <StyledLink to={p.rawPath}>{p.pathName}</StyledLink>
                </li>
              );
          })}
        </ul>
      </Nav>
    </NavbarContainer>
  );
};

export default Navbar;

// Navbar
const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 75px;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5vw;
  transition: 200ms background-color ease-in-out, 500ms opacity ease-in-out;
  z-index: 1;
  opacity: ${(props) => props.opac};
  :hover {
    background-color: rgba(0, 0, 0, 0.9);
    opacity: 1;
  }
`;

const NameLogo = styled.h1`
  font-weight: 500;
  cursor: default;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    font-size: 17px;
    li {
      margin: 0 5px;
      padding: 10px;
      cursor: pointer;
      transition: 100ms background-color ease-in-out;
      border-radius: 6px;
      :hover {
        background-color: var(--surface-color);
        box-shadow: var(--box-shadow-thick);
      }
    }
  }
`;

const StyledLink = styled(Link)`
  color: ${(props) => (props.selected ? "var(--p-color)" : "inherit")};
  opacity: inherit;
  text-decoration: none;
`;
