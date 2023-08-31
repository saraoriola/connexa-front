import React, { useContext } from "react";
import { CoursesContext } from "../../context/CoursesContext/CoursesState";
import { Divider, List } from "antd";
import { OrdersContext } from "../../context/OrdersContext/OrdersState";

const Cart = () => {
  const { cart, clearCart } = useContext(CoursesContext);
  const { createOrder } = useContext(OrdersContext);

  const data = cart.map((course) => course.name);

  return (
    <div>
      <Divider orientation="left">Cart</Divider>
      <List
        size="small"
        header={<div>Courses</div>}
        footer={
          <div>
            <button onClick={clearCart}>Empty Cart</button>
            <button onClick={() => {
                createOrder(cart);
                clearCart();
            }}>Buy</button>
          </div>
        }
        bordered
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </div>
  );
};

export default Cart;
