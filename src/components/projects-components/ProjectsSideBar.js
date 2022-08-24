import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalState";
import SidebarOption from "./SidebarOption";
import SearchIcon from "@mui/icons-material/Search";

const ProjectsSidebar = () => {
  const { projects, searchProjects } = useContext(GlobalContext);
  return (
    <SidebarContainer>
      <SidebarTitle>My Projects</SidebarTitle>
      <FilterBar>
        <SearchBar>
          <input
            type="text"
            placeholder="Search by name or language..."
            onChange={(e) => {
              searchProjects(e.target.value);
            }}
          />
          <SearchIcon />
        </SearchBar>
      </FilterBar>
      {projects.map((p) => {
        return (
          <SidebarOption
            key={p.id}
            id={p.id}
            img={p.img}
            title={p.title}
            date={p.date}
            languages={p.languages}
            hidden={p.hidden}
            pinned={p.pinned}
          />
        );
      })}
    </SidebarContainer>
  );
};

export default ProjectsSidebar;

const SidebarContainer = styled.div`
  flex: 0.35;
  min-height: 500px;
  box-shadow: var(--box-shadow-thick);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;
  padding-bottom: 80px;
  animation: fadeIn 500ms ease-in-out;
  background-color: var(--bg-color);
`;

const SidebarTitle = styled.h1`
  font-weight: 500;
  margin-bottom: 20px;
`;

const FilterBar = styled.div`
  width: 100%;
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  margin: 10px 0 30px 0;
  input {
    width: 80%;
    border: 0;
    background-color: var(--bg-color);
    color: var(--text-color);
    font-size: 18px;
    padding: 10px;
    border-bottom: 1px solid var(--text-color);
    margin-right: 10px;
    ::placeholder {
      font-size: 18px;
    }
    :focus {
      border: 0px;
    }
  }
`;
