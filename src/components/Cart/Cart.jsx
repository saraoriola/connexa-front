import React, { useContext } from "react";
import { Divider, List } from "antd";
import { CoursesContext } from "../../context/CoursesContext/CoursesState";

const Cart = () => {
  const { cart } = useContext(CoursesContext);
  const data = cart.map((product) => product.name);

  return (
    <div>
      <Divider orientation="left">Cart</Divider>
      <List
        size="small"
        header={<div>Products</div>}
        footer={
          <div>
            <button onClick={()=>{
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
