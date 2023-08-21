import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./components/Login/Login";
import { UserProvider } from "./context/UserContext/UserState";


function App() {
  return (
    <>
      <BrowserRouter>
      <UserProvider>
              <Routes>
                <Route path="/login" element={<Login />} />
              </Routes>
      </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
