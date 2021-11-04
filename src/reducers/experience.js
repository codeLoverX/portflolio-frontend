const experienceReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_EXPERIENCES":
      return action.payload;
    case "UPDATE_EXEPERIENCE":
      return action.payload;
    default:
      return state;
  }
};

export default experienceReducer;
