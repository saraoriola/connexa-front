import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext/UserState";
import { CoursesProvider } from "./context/CoursesContext/CoursesState";
import { OrdersProvider } from "./context/OrdersContext/OrdersState";
import "./App.scss";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import Cart from "./components/Cart/Cart";
import Signup from "./components/SignUp/Signup";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <CoursesProvider>
        <OrdersProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Courses />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Signup />} />
          </Routes>
          <Footer />
          </OrdersProvider>
        </CoursesProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
