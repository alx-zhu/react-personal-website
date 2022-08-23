import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalState";

const HomeOption = ({ id, title, Icon, iconColor }) => {
  const { selectedHomeOptionId, selectHomeOption, deselectHomeOptions } =
    useContext(GlobalContext);
  return id === selectedHomeOptionId ? (
    <HomeOptionContainer
      id={id}
      iconColor={iconColor}
      selected
      onClick={() => deselectHomeOptions()}
    >
      {<Icon />}
      <TextContainer selected>
        <h3>{title}</h3>
      </TextContainer>
    </HomeOptionContainer>
  ) : (
    <HomeOptionContainer
      id={id}
      iconColor={iconColor}
      onClick={() => selectHomeOption(id)}
    >
      {<Icon />}
      <TextContainer>
        <h3>{title}</h3>
      </TextContainer>
    </HomeOptionContainer>
  );
};

export default HomeOption;

const HomeOptionContainer = styled.div`
  display: ${(props) => (props.hidden ? "none" : "flex")};
  background-color: ${(props) =>
    props.selected ? "var(--dark-hover)" : "none"};
  height: ${(props) => (props.selected ? "50px" : "50px")};
  width: 100%;
  /* ${(props) => (props.selected ? "102%" : "100%")}; */
  padding: 15px 0;
  padding-left: 30px;
  align-items: center;
  border-right: ${(props) =>
    props.selected ? "5px solid var(--p-color)" : ""};
  cursor: pointer;
  transition: 200ms background-color ease-in-out;
  :hover {
    background-color: var(--dark-hover);
  }
  > .MuiSvgIcon-root {
    font-size: ${(props) => (props.selected ? "30px" : "30px")};
    color: ${(props) =>
      props.selected ? props.iconColor : "var(--text-color)"};
    margin-right: 10px;
  }
`;

const TextContainer = styled.div`
  /* flex: 0.7; */
  text-align: left;
  width: 100%;
  h3 {
    font-weight: ${(props) => (props.selected ? "400" : "400")};
    font-size: 18px;
    /* ${(props) => (props.selected ? "20px" : "18px")}; */
    margin: 0;
  }
  h4 {
    font-weight: 300;
    font-size: 14px;
    margin: 5px 0;
  }
`;

// const Thumbnail = styled.img`
//   flex: 0.3;
//   max-height: 100%;
//   width: auto;
//   margin-right: 10px;
//   object-fit: cover;
// `;
