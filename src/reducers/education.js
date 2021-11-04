const educationReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_EDUCATIONS":
      return action.payload;

    case "UPDATE_EDUCATION": {
      return action.payload;
    }

    default:
      return state;
  }
};

export default educationReducer;
