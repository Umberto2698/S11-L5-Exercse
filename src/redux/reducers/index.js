const initialState = {
  search: {
    content: "",
  },
  rock: {
    content: [],
  },
  pop: {
    content: [],
  },
  hip_hop: {
    content: [],
  },
  player: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        search: {
          ...state.search,
          content: action.payload,
        },
      };
    case "ROCK":
      return {
        ...state,
        rock: { ...state.rock, content: [...state.rock.content, action.payload] },
      };
    case "POP":
      return {
        ...state,
        pop: { ...state.pop, content: [...state.pop.content, action.payload] },
      };
    case "HIP_HOP":
      return {
        ...state,
        hip_hop: { ...state.hip_hop, content: [...state.hip_hop.content, action.payload] },
      };
    case "PLAYER":
      return {
        ...state,
        player: { ...state.player, content: action.payload },
      };
    default:
      return state;
  }
};

export default mainReducer;
