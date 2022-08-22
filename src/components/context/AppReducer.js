const appReducer = (state, action) => {
  switch (action.type) {
    case "SELECT_PROJECT":
      return {
        ...state,
        selectedProjectId: action.payload,
      };
    case "DESELECT_PROJECTS":
      return {
        ...state,
        selectedProjectId: 0,
      };
    case "SORT_BY_NAME":
      return {
        ...state,
        projects: state.projects.sort((project1, project2) =>
          project1.text.localeCompare(project2.text)
        ),
      };
    case "SEARCH_PROJECTS":
      return {
        ...state,
        projects: state.projects.map((project) => {
          if (
            project.title
              .toLowerCase()
              .includes(action.payload.toLowerCase()) ||
            project.languages
              .toLowerCase()
              .includes(action.payload.toLowerCase())
          ) {
            return {
              ...project,
              hidden: false,
            };
          } else {
            return {
              ...project,
              hidden: true,
            };
          }
        }),
      };
    case "SELECT_HOME_OPTION":
      return {
        ...state,
        selectedHomeOptionId: action.payload,
      };
    case "DESELECT_HOME_OPTIONS":
      return {
        ...state,
        selectedHomeOptionId: 0,
      };
    default:
      return state;
  }
};

export default appReducer;
