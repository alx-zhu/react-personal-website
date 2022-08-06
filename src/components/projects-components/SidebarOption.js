import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalState";

const SidebarOption = ({ id, img, title, date, languages, hidden }) => {
  const { selectedId, selectProject, deselectProjects } =
    useContext(GlobalContext);
  return id === selectedId ? (
    <OptionContainer
      selected
      id={id}
      onClick={() => deselectProjects()}
      hidden={hidden}
    >
      <Thumbnail src={img.src} alt={img.alt} />
      <TextContainer selected>
        <h3>{title}</h3>
        <h4>{date}</h4>
        <h4>{languages}</h4>
      </TextContainer>
    </OptionContainer>
  ) : (
    <OptionContainer id={id} onClick={() => selectProject(id)} hidden={hidden}>
      <Thumbnail src={img.src} alt={img.alt} />
      <TextContainer>
        <h3>{title}</h3>
        <h4>{date}</h4>
        <h4>{languages}</h4>
      </TextContainer>
    </OptionContainer>
  );
};

export default SidebarOption;

const OptionContainer = styled.div`
  display: ${(props) => (props.hidden ? "none" : "flex")};
  background-color: var(--surface-color);
  height: ${(props) => (props.selected ? "120px" : "100px")};
  width: ${(props) => (props.selected ? "92%" : "90%")};
  padding: 10px;
  margin-bottom: ${(props) => (props.selected ? "10px" : "5px")};
  margin-top: ${(props) => (props.selected ? "5px" : "0px")};
  box-shadow: var(--box-shadow);
  align-items: center;
  border-right: ${(props) =>
    props.selected ? "5px solid var(--p-color)" : ""};
  cursor: pointer;
  transition: 100ms background-color ease-in-out;
  :hover {
    background-color: var(--surface-color-hover);
  }
`;

const TextContainer = styled.div`
  flex: 0.7;
  text-align: right;
  width: 100%;
  h3 {
    font-weight: ${(props) => (props.selected ? "600" : "400")};
    font-size: ${(props) => (props.selected ? "24px" : "20px")};
    margin: 0;
    margin-bottom: 10px;
  }
  h4 {
    font-weight: 300;
    font-size: 14px;
    margin: 5px 0;
  }
`;

const Thumbnail = styled.img`
  flex: 0.3;
  max-height: 100%;
  max-width: 30%;
  margin-right: 10px;
  object-fit: cover;
`;
