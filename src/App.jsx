import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext/UserState";
import { CoursesProvider } from "./context/CoursesContext/CoursesState";

import "./App.scss";

import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";



function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <CoursesProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        </CoursesProvider>
      </UserProvider>
    </BrowserRouter>
  );
}



export default App;
