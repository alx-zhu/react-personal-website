const appReducer = (state, action) => {
  switch (action.type) {
    case "SELECT_PROJECT":
      return {
        ...state,
        selectedId: action.payload,
        // projects: state.projects.map((project) => {
        //   if (project.id === action.payload) {
        //     return {
        //       ...project,
        //       selected: true,
        //     };
        //   } else {
        //     return {
        //       ...project,
        //       selected: false,
        //     };
        //   }
        // }),
      };
    case "DESELECT_PROJECTS":
      return {
        ...state,
        selectedId: 0,
        // projects: state.projects.map((project) => {
        //   return {
        //     ...project,
        //     selected: false,
        //   };
        // }),
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
    default:
      return state;
  }
};

export default appReducer;
