const users = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: action.payload.token,
      };

    case "SINGUP":
      return {
        ...state,
        user: action.payload.user,
      };

    case "GET_USER_INFO":
      return {
        ...state,
        user: action.payload,
      };

    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
      };

      case 'GET_USER_COURSE_ORDERS':
        return {
          ...state,
          courseOrders: action.payload,
        };

    default:
      return state;
  }
};

export default users;
