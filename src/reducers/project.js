const projectReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_PROJECTS":
      return action.payload;

    case "UPDATE_PROJECT": {
      console.log(action.payload)
      return action.payload;
    }
    default:
      return state;
  }
};

export default projectReducer;
