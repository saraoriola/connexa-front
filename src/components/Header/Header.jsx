import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { UserContext } from "../../context/UserContext/UserState";
import { UserAddOutlined, UserDeleteOutlined, UserOutlined } from "@ant-design/icons";

const Header = () => {
    const {token, logout} = useContext(UserContext)
    const navigate = useNavigate();
    const logoutUser = () => {
        logout();
        navigate("/login");
      };

  return (
    <div>
    {
        token ? (
        <>
            <Link to="/profile"><UserOutlined /> </Link> 
            <button onClick={logoutUser}><UserDeleteOutlined /></button>
            <Link to="/">Home </Link>
        </> 
        ) : (
            <Link to="/login"><UserAddOutlined /></Link>
        )
    }
    </div>
  );
};

export default Header;
