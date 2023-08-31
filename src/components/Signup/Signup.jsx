import React, { useContext } from "react";
import { Button, Form, Input, notification } from "antd";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";
import "./Signup.scss";

const Signup = () => {
  const { register } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      await register(values);
      notification.success({
        message: "Successfully registered",
      });
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="signup-container">
      <Form
        className="signup-form"
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={onSubmit}
        autoComplete="off"
      >
        <h1 className="signup-title">Sign Up</h1>
        <Form.Item
          className="signup-input"
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please put your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          className="signup-input"
          label="Last name"
          name="lastname"
          rules={[
            {
              required: true,
              message: "Please put your last name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          className="signup-input"
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please put your email!",
            },
            {
              type: "email",
              message: "Please put a correct email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          className="signup-input"
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please put your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button className="signup-button" type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;
