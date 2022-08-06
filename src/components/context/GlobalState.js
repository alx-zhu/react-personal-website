import React, { createContext, useReducer } from "react";
import appReducer from "./AppReducer";

// Initial State
const initialState = {
  selectedId: 0,
  projects: [
    {
      id: 4,
      img: {
        src: "images/projects/react-personal-website.png",
        alt: "React Personal Website Home Page",
      },
      title: "React Personal Website",
      date: "10/2021 - 11/2021",
      languages: "React, Styled Components",
    },
    {
      id: 3,
      img: {
        src: "images/projects/html-css-website.png",
        alt: "HTML Personal Website Home Page",
      },
      title: "HTML/CSS Personal Website",
      date: "10/2021 - 11/2021",
      languages: "HTML, CSS",
    },
    {
      id: 2,
      img: {
        src: "images/projects/labyrinth-thumbnail.png",
        alt: "Andy's Labyrinth Thumbnail",
      },
      title: "Andy's Labyrinth",
      date: "10/2021 - 11/2021",
      languages: "Python",
    },
    {
      id: 1,
      img: {
        src: "images/projects/pgpatch-thumbnail.png",
        alt: "The Pacific Garbage Patch",
      },
      title: "The Pacific Garbage Patch",
      date: "10/2021 - 11/2021",
      languages: "Unity Game Engine, C#",
    },
  ],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Actions

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
        selectedId: state.selectedId,
        projects: state.projects,
        selectProject,
        deselectProjects,
        searchProjects,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
