import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext/UserState";

import "./App.scss";

import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";



function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}



export default App;
