// relevantLink?
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalState";
import PushPinIcon from "@mui/icons-material/PushPin";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const HomeCard = ({ id, title, text, other }) => {
  const { selectProject, selectedHomeOptionId } = useContext(GlobalContext);
  const project = selectedHomeOptionId.includes("project");
  const resume = selectedHomeOptionId === "resume";
  const contact = selectedHomeOptionId === "contact";
  return (
    <HomeCardContainer>
      <TitleContainer>
        {project && other.pinned && <PushPinIcon />}
        <h1>{title}</h1>
      </TitleContainer>

      {resume && <iframe src={other.link} title="Resume"></iframe>}
      {other.img && <img src={other.img.src} alt={other.img.alt} />}
      {other.images && (
        <ImageGroup len={other.images.length}>
          {other.images.map((img) => (
            <img key={img.alt} src={img.src} alt={img.alt} />
          ))}
        </ImageGroup>
      )}
      {other.date && (
        <h3>
          <strong>Date:</strong> {other.date}
        </h3>
      )}
      {project && (
        <h3>
          <strong>Languages/Tools Used:</strong> {other.languages}
        </h3>
      )}
      {project && (
        <h3>
          <strong>Github:</strong>{" "}
          <a href={other.github} target="_blank" rel="noopener noreferrer">
            {other.github}
          </a>
        </h3>
      )}

      {project && (
        <h3>
          <strong>Description:</strong>
        </h3>
      )}
      {project && (
        <>
          <p>{text[0].slice(0, 250)} . . .</p>
          <br />
          <p>
            <ProjectsLink
              to="/projects"
              onClick={() => {
                selectProject(other.id);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Click here continue reading on the Projects page.
            </ProjectsLink>
          </p>
        </>
      )}
      {!project &&
        text.map((p, index) => (
          <p key={index} className={!contact ? "m-bot indent" : ""}>
            {p}
          </p>
        ))}

      {contact && (
        <ContactTextContainer>
          <h3>
            <LocalPhoneIcon />
            <strong>Telephone:</strong> {other.phone}
          </h3>
          <h3>
            <EmailIcon />
            <strong>Email:</strong>{" "}
            <a href={"mailto:" + other.email}>{other.email}</a>
          </h3>
          <h3>
            <LinkedInIcon />
            <strong>LinkedIn:</strong>{" "}
            <a href={other.linkedin}>{other.linkedin}</a>
          </h3>
          <h3>
            <GitHubIcon />
            <strong>Github:</strong> <a href={other.github}>{other.github}</a>
          </h3>
        </ContactTextContainer>
      )}
    </HomeCardContainer>
  );
};

export default HomeCard;

const HomeCardContainer = styled.div`
  width: 100%;
  text-decoration: none;
  color: var(--text-color);
  /* border-top: 1px solid rgb(255, 255, 255, 0.2); */
  /* border-bottom: 1px solid rgb(255, 255, 255, 0.1); */
  padding: 30px 10vw 70px 10vw;
  transition: background-color 200ms ease-in-out;
  cursor: ${(props) => (props.clickable ? "pointer" : "default")};
  :hover {
    background-color: var(--dark-hover);
  }
  position: relative;
  ::before {
    content: "";
    position: absolute;
    left: 50px;
    right: 50px;
    top: 0;
    height: 1px;
    background-color: rgb(255, 255, 255, 0.2);
  }
  img {
    width: 60%;
    max-height: 300px;
    object-fit: cover;
    margin-bottom: 20px;
  }
  strong {
    font-weight: 500;
  }
  h1 {
    font-weight: 400;
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
  iframe {
    width: 55vw;
    height: 70vw;
  }
  .m-bot {
    margin-bottom: 20px;
  }
  .indent {
    text-indent: 3em;
  }
`;

const ProjectsLink = styled(Link)`
  font-style: italic;
  text-decoration: none;
  color: var(--p-color);
  font-weight: 200;
  font-size: 16px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  > .MuiSvgIcon-root {
    margin-right: 10px;
  }
`;

const ImageGroup = styled.div`
  display: flex;
  width: ${(props) => (props.len > 1 ? "80%" : "60%")};
  max-height: 300px;
  img {
    flex: 1;
  }
  margin: 20px 0;
`;

const ContactTextContainer = styled.div`
  margin-top: 30px;
  h3 {
    margin-top: 20px;
    display: flex;
    align-items: center;
  }
  strong {
    margin-right: 10px;
  }
  .MuiSvgIcon-root {
    margin-right: 10px;
  }
`;
