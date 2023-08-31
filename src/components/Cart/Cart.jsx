import React, { useContext } from "react";
import { CoursesContext } from "../../context/CoursesContext/CoursesState";
import { Divider, List } from "antd";
import { OrdersContext } from "../../context/OrdersContext/OrdersState";
import "./Cart.scss"; 

const Cart = () => {
  const { cart, clearCart } = useContext(CoursesContext);
  const { createOrder } = useContext(OrdersContext);

  const data = cart.map((course) => course.name);

  return (
    <div className="cart-container">
      <Divider className="cart-divider" orientation="left">
        Cart
      </Divider>
      <List
        size="small"
        header={<div className="cart-header">Courses</div>}
        footer={
          <div className="cart-footer">
            <button className="cart-button cart-button-empty" onClick={clearCart}>
              Empty Cart
            </button>
            <button
              className="cart-button cart-button-buy"
              onClick={() => {
                createOrder(cart);
                clearCart();
              }}
            >
              Buy
            </button>
          </div>
        }
        bordered
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
        className="cart-list"
      />
    </div>
  );
};

export default Cart;
