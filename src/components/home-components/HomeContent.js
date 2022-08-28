import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalState";
import HomeCard from "./HomeCard";

const HomeContent = () => {
  const { selectedHomeOptionId, homeOptions } = useContext(GlobalContext);
  const selected = homeOptions.find((h) => h.id === selectedHomeOptionId);
  const scrollRef = useRef(null);
  scrollRef?.current?.scrollIntoView({
    behavior: "smooth",
  });

  if (selected) {
    const { title, content } = selected;
    return (
      <HomeContentContainer ref={scrollRef}>
        <HomeTitle>{title}</HomeTitle>
        {/* {selected.img && (
          <Thumbnail src={selected.img.src} alt={selected.img.alt} />
        )} */}
        {content.map((card) => (
          <HomeCard
            key={card.id}
            id={card.id}
            title={card.title}
            text={card.text}
            other={card}
          />
        ))}
      </HomeContentContainer>
    );
  }
};

export default HomeContent;

// Introduction
const HomeContentContainer = styled.div`
  padding: 50px 0;
  /* flex: 0.7; */
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  opacity: ${(props) => props.opac};
  transition: opacity 500ms ease-in-out;
  position: relative;
  /* background-color: var(--surface-color-dark); */
`;

const HomeTitle = styled.h1`
  font-weight: 400;
  font-size: 40px;
  margin-bottom: 50px;
`;

// const Thumbnail = styled.img`
//   width: 50%;
//   height: auto;
//   max-height: 300px;
//   object-fit: cover;
//   margin-bottom: 50px;
// `;
