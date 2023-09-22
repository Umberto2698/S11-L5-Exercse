const initialState = {
  search: {
    content: "",
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        search: {
          ...state.search,
          contetn: action.payload,
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
