import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Sidebar = ({ opac }) => {
  return (
    <SidebarContainer opac={opac}>
      <GitHubIcon />
      <LinkedInIcon />
      <EmailIcon />
      <InstagramIcon />
      <TwitterIcon />
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  position: fixed;
  top: 30%;
  left: 200px;
  width: 75px;
  height: 300px;
  background-color: var(--p-color-trans);
  box-shadow: var(--box-shadow);
  border-radius: 8px;
  opacity: ${(props) => props.opac};
  transition: 500ms opacity ease-in-out;
  padding: 15px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  > h3 {
    font-weight: 400;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--text-color);
    text-align: center;
  }
  > .MuiSvgIcon-root {
    font-size: 40px;
    transition: color 200ms ease-in-out;
    cursor: pointer;
    :hover {
      color: var(--p-color);
    }
  }
`;
