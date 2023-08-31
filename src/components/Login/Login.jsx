import React, { useContext } from "react";
import { Button, Form, Input, notification } from "antd";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";
import "./Login.scss"; 

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const onFinish = (values) => {
    login(values);
    notification.success({
      message: "Logged in successfully",
      description: "Welcome!",
    });
    setTimeout(() => {
      navigate("/profile");
    }, 3000);
  };

  return (
    <div className="login-container">
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
  className="login-form"
  name="basic"
  labelCol={{
    span: 24,
  }}
  wrapperCol={{
    span: 24,
  }}
  onFinish={onFinish}
  autoComplete="off"
>
  <Form.Item
    className="login-input"
    label="Email"
    name="email"
    rules={[
      {
        required: true,
        message: "Please input your email!",
      },
      {
        type: "email",
        message: "Please input a valid email!",
      },
    ]}
  >
    <Input />
  </Form.Item>

  <Form.Item
    className="login-input"
    label="Password"
    name="password"
    rules={[
      {
        required: true,
        message: "Please input your password!",
      },
    ]}
  >
    <Input.Password />
  </Form.Item>

  <Form.Item
    wrapperCol={{
      offset: 0,
      span: 24,
    }}
  >
    <Button className="login-button" type="primary" htmlType="submit">
      Submit
    </Button>
  </Form.Item>
</Form>
    </div>
  );
};

export default Login;
