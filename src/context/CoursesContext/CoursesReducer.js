const courses = (state, action) => {
    switch (action.type) {
      case "GET_COURSES":
        return {
          ...state,
          courses: action.payload,
        };

       case "ADD_CART":
            return {
              ...state,
              cart: [action.payload, ...state.cart],
            };

      default:
        return state;
    }
  };
  export default courses;