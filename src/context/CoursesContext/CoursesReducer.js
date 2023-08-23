const courses = (state, action) => {
    switch (action.type) {
      case "GET_COURSES":
        return {
          ...state,
          courses: action.payload,
        };
      default:
        return state;
    }
  };
  export default courses;