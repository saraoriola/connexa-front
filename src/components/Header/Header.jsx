import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { UserContext } from "../../context/UserContext/UserState";
import { HomeOutlined, ShoppingCartOutlined, UserAddOutlined, UserDeleteOutlined, UserOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { CoursesContext } from "../../context/CoursesContext/CoursesState";

const Header = () => {
    const { token, logout } = useContext(UserContext);
    const { cart } = useContext(CoursesContext);
    const navigate = useNavigate();
        useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
  
    const logoutUser = () => {
      logout();
      navigate("/login");
    };
  return (
    <div>
        <Link to="/"><HomeOutlined                 
        style={{ color: "#f8ff7a", width: "50px" }}/> </Link>
    {
        token ? (
        <>
          <Link to="/cart" style={{ marginRight: "5px" }}>
            <Badge
              count={cart.length}
              size="small"
              style={{ marginRight: "5px" }}
            >
              <ShoppingCartOutlined
                style={{ color: "#f8ff7a", width: "50px" }}
              />
            </Badge>
          </Link>
            <Link to="/profile"><UserOutlined                 
            style={{ color: "#f8ff7a", width: "50px" }}/> </Link> 
            <button onClick={logoutUser}><UserDeleteOutlined /></button>
        </> 
        ) : (
            <Link to="/login"><UserAddOutlined /></Link>
        )
    }
    </div>
  );
};

export default Header;
