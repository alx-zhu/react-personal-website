import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalState";
const HomeContent = () => {
  const { selectedHomeOptionId, homeOptions } = useContext(GlobalContext);
  const selected = homeOptions.find((h) => h.id === selectedHomeOptionId);
  if (selected) {
    return <HomeContentContainer></HomeContentContainer>;
  }

  return <HomeContentContainer></HomeContentContainer>;
};

export default HomeContent;

// Introduction
const HomeContentContainer = styled.div`
  padding: 50px;
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
