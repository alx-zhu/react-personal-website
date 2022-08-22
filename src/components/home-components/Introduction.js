import React from "react";
import styled from "styled-components";
import IntroCard from "./IntroCard";

const Introduction = ({ opac }) => {
  const IntroCards = [
    {
      id: 1,
      images: [
        { src: "images/studyfind-logo.png", alt: "Studyfind Logo" },
        { src: "images/cmu-cs-academy.png", alt: "SCS Logo" },
      ],
      title: "My Current Affiliations",
      text: "I love to play soccer, and spent several years playing with my closest friends in high school. Music is also especially important in my life, as I have played piano and violin since elementary school.",
      vertical: true,
    },
    {
      id: 2,
      images: [
        {
          src: "images/cmu-logo-filled.jpg",
          alt: "Carnegie Mellon University Logo",
        },
      ],
      title: "My Education",
      text: "I am currently a part of the Information Systems at Carnegie Mellon University, with the goal of applying my computer science education to solving real-world issues that I am passionate about, such as increasing the availability of computer science education in primary and secondary schools. To fulfill these goals, I am currently working as a part of the CMU Computer Science Academy Outreach Team",
    },
    {
      id: 3,
      images: [
        {
          src: "images/soccer-team.jpg",
          alt: "Alex's Soccer Team",
        },
      ],
      title: "My Hobbies",
      text: "I love to play soccer, and spent several years playing with my closest friends in high school. Music is also especially important in my life, as I have played piano and violin since elementary school.",
    },
  ];

  return (
    <IntroContainer opac={opac}>
      {IntroCards.map((card) => {
        return (
          <IntroCard
            key={card.id}
            images={card.images}
            title={card.title}
            text={card.text}
            vertical={card.vertical}
          />
        );
      })}
    </IntroContainer>
  );
};

export default Introduction;

// Introduction
const IntroContainer = styled.div`
  padding: 50px;
  flex: 0.7;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  opacity: ${(props) => props.opac};
  transition: opacity 500ms ease-in-out;
  position: relative;
  /* overflow-y: scroll;
  height: 1000px; */

  /* background-color: var(--surface-color-dark); */
`;
