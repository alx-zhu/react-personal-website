import React from "react";
import styled from "styled-components";

const Introduction = ({ opac }) => {
  return (
    <IntroContainer opac={opac}>
      <IntroCard vertical>
        <ImageGroup>
          <img src="images/studyfind-logo.png" alt="Studyfind Logo" />
          <img src="images/cmu-cs-academy.png" alt="SCS Logo" />
        </ImageGroup>
        <IntroCardContent>
          <IntroCardTitle>My Current Affiliations</IntroCardTitle>
          <IntroCardText>
            I love to play soccer, and spent several years playing with my
            closest friends in high school. Music is also especially important
            in my life, as I have played piano and violin since elementary
            school.
          </IntroCardText>
        </IntroCardContent>
      </IntroCard>
      <IntroCard>
        <img
          src="images/cmu-logo-filled.jpg"
          alt="Carnegie Mellon University Logo"
        />
        <IntroCardContent>
          <IntroCardTitle>My Education</IntroCardTitle>
          <IntroCardText>
            I am currently a part of the Information Systems at Carnegie Mellon
            University, with the goal of applying my computer science education
            to solving real-world issues that I am passionate about, such as
            increasing the availability of computer science education in primary
            and secondary schools. To fulfill these goals, I am currently
            working as a part of the CMU Computer Science Academy Outreach Team
          </IntroCardText>
        </IntroCardContent>
      </IntroCard>
      <IntroCard>
        <img
          src="images/soccer-team.jpg"
          alt="Carnegie Mellon University Logo"
        />
        <IntroCardContent>
          <IntroCardTitle>My Hobbies</IntroCardTitle>
          <IntroCardText>
            I love to play soccer, and spent several years playing with my
            closest friends in high school. Music is also especially important
            in my life, as I have played piano and violin since elementary
            school.
          </IntroCardText>
        </IntroCardContent>
      </IntroCard>
    </IntroContainer>
  );
};

export default Introduction;

// Introduction
const IntroContainer = styled.div`
  height: auto;
  margin: 70px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  opacity: ${(props) => props.opac};
  transition: opacity 500ms ease-in-out;
  position: relative;
  ::after {
    position: absolute;
    content: "";
    bottom: -30px;
    background-color: var(--text-color);
    width: 50%;
    height: 0.5px;
  }
`;

const ImageGroup = styled.div`
  display: flex;
  justify-content: center;
  > img {
    height: 250px;
    margin: 0 10px;
  }
  margin-top: 10px;
  margin-bottom: 20px;
`;

const IntroCard = styled.div`
  background-color: var(--surface-color-solid);
  width: 60vw;
  height: minmax(300px, auto);
  padding: 20px;
  margin: 40px 0px;
  box-shadow: var(--box-shadow-thin);
  border-radius: 10px;
  display: flex;
  flex-direction: ${(props) => (props.vertical ? "column" : "row")};
  justify-content: flex-start;
  align-items: center;
  text-align: ${(props) => (props.vertical ? "center" : "left")};
  position: relative;
  /* align-self: flex-end;
  margin-right: 100px; */
  > img {
    height: 250px;
    margin-right: 30px;
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
    z-index: -1;
    box-shadow: var(--box-shadow-thick);
  }
`;

const IntroCardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const IntroCardText = styled.p`
  max-width: 40vw;
  margin-top: 10px;
  margin-bottom: 20px;
  padding-right: 20px;
  line-height: 22px;
`;

const IntroCardTitle = styled.h2`
  font-weight: 600;
`;
