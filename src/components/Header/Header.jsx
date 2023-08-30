import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { UserContext } from "../../context/UserContext/UserState";
import { CoursesContext } from "../../context/CoursesContext/CoursesState";
import { HomeOutlined, ShoppingCartOutlined, UserAddOutlined, UserDeleteOutlined, UserOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import "./Header.scss";

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
    <div className="header">
      <Link to="/" className="icon-link">
        <HomeOutlined />
      </Link>
      {token ? (
        <>
          <Link to="/cart" className="badge-icon-link">
            <Badge count={cart.length} size="small">
              <ShoppingCartOutlined />
            </Badge>
          </Link>

          <Link to="/profile" className="icon-link">
            <UserOutlined />
          </Link>

          <button className="user-icon" onClick={logoutUser}>
            <UserDeleteOutlined />
          </button>
        </>
      ) : (
        <>
<Link to="/login" className="icon-link login-link">Login</Link>


          <Link to="/register" className="signup-link">           
            Sign Up <UserAddOutlined />
          </Link>
        </>
      )}
    </div>
  );
};

export default Header;
