import React, { createContext, useReducer } from "react";
import axios from "axios";
import CoursesReducer from "./CoursesReducer";

const initialState = {
  courses: [],
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

    return (
        <CoursesContext.Provider
          value={{
            courses: state.courses,
            getCourses
          }}
        >
          {children}
        </CoursesContext.Provider>
    );
};
    