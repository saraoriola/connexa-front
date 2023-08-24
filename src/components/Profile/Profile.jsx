import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Card, Spin } from "antd";

const Profile = () => {
  const { user, getUserInfo } = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, []);

  if (!user) {
    return <Spin size="large" />;
  }

  return (
    <div>
      <Card
        title={user.name}
        bordered={true}
        style={{
          width: 300,
          borderColor: "pink",
          marginTop: "10px"
        }}
      >
        <p>{user.email}</p>
      </Card>
    </div>
  );
}

export default Profile;
