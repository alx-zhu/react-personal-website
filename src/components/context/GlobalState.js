import React, { createContext, useReducer } from "react";
import appReducer from "./AppReducer";
import { projectsList } from "./projectsList";
import { homeOptions } from "./homeOptions";

// Initial State
const initialState = {
  selectedHomeOptionId: "about-me",
  homeOptions: homeOptions,
  selectedProjectId: 0,
  projects: projectsList,
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Home Screen Actions
  function selectHomeOption(id) {
    dispatch({
      type: "SELECT_HOME_OPTION",
      payload: id,
    });
  }

  function deselectHomeOptions() {
    dispatch({
      type: "DESELECT_HOME_OPTIONS",
    });
  }

  // Project Actions
  function selectProject(id) {
    dispatch({
      type: "SELECT_PROJECT",
      payload: id,
    });
  }

  function deselectProjects() {
    dispatch({
      type: "DESELECT_PROJECTS",
    });
  }

  function searchProjects(name) {
    dispatch({
      type: "SEARCH_PROJECTS",
      payload: name,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        selectedProjectId: state.selectedProjectId,
        projects: state.projects,
        selectedHomeOptionId: state.selectedHomeOptionId,
        homeOptions: state.homeOptions,
        selectProject,
        deselectProjects,
        searchProjects,
        selectHomeOption,
        deselectHomeOptions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
