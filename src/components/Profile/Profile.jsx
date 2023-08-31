import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Card, Spin } from "antd";
import "./Profile.scss";

const Profile = () => {
  const { user, getUserInfo} = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, []);

  if (!user) {
    return <Spin size="large" />;
  }


  return (
    <div className="profile-container">
      <h1 className="welcome-message">Hi, {user.name}!</h1>
      <Card
        title="User Information"
        bordered={true}
        className="full-width-card"
      >
        <p>Name: {user.name} {user.lastName}</p>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
        <p>Company: {user.company}</p>
      </Card>

    </div>
  );
};

export default Profile;
