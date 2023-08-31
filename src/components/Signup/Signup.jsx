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
     <div className="desktop">
      <div className="group-wrapper">
        <div className="group">
          <div className="vectores">
            <div className="overlap-group">
              <div className="rectangle" />
              <div className="div" />
              <div className="rectangle-2" />
              <div className="rectangle-3" />
            </div>
          </div>
          <div className="text">
            <p className="text-wrapper">
              Cursos innovadores, charlas inspiradoras y una comunidad de expertos para alcanzar tus metas profesionales.
            </p>
            <p className="descubre-tu">
              <span className="span">
                Descubre tu <br />
              </span>
              <span className="text-wrapper-2">
                potencial <br />
                profesional <br />
              </span>
              <span className="span">con Connexa.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
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
