import { createContext } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000";

export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const createOrder = async (order) => {
    const token = JSON.parse(localStorage.getItem("token"));
console.log(order)
    try {
      await axios.post(
        API_URL + "/orders/create",
        { courseIds: order.map(course => course.id) }, 

        {
          headers: {
            authorization: token,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <OrdersContext.Provider 
      value={{
        createOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
 