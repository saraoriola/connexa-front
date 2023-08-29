import { createContext, useReducer } from "react";
import axios from "axios";
import CoursesReducer from "./CoursesReducer";

const cart = JSON.parse(localStorage.getItem("cart")) || [];

const initialState = {
  courses: [],
  cart:  cart,
};

const API_URL = "http://localhost:3000";

export const CoursesContext = createContext(initialState);

export const CoursesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CoursesReducer, initialState);

  const getCourses = async () => {
    const res = await axios.get(API_URL + "/courses/getCourses");
    dispatch({
      type: "GET_COURSES",
      payload: res.data,
    });
    return res;
  };
  const addCart = (course) => {
    dispatch({
      type: "ADD_CART",
      payload: course,
    });
  };
  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };
  
  return (
    <CoursesContext.Provider
      value={{
        courses: state.courses,
        cart: state.cart,
        getCourses,
        addCart,
        clearCart,
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
};
