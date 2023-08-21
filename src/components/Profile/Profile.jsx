import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Spin } from "antd";

const Profile = () => {
  const { user, getUserInfo } = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, []);
  if (!user) {
    return <Spin size="large" />;
  }

  return (
    <div>{user.name}</div>
  )
}

export default Profile