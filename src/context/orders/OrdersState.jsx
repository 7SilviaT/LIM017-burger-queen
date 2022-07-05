import React, { useReducer } from "react";
import OrdersContext from "./OrdersContext";
import reducer from "./OrdersReducer";

import { db } from "../../firebase";

const OrdersState = ({ children }) => {
  const initialState = {
    orders: [],
    total: 0,
  };

  const addOrder = (data) => {
    dispatch({
      type: "SET_ORDERS",
      payload: data,
    });
    dispatch({
      type: "GET_TOTAL_AMOUNT",
    });
  };

  const updatedOrder = (id, operation) => {
    //increment, decrement
    dispatch({
      type: "UPDATED_ORDERS",
      payload: { id, operation },
    });
    dispatch({
      type: "GET_TOTAL_AMOUNT",
    });
  };

  const deleteOrder = (id) => {
    dispatch({
      type: "DELETE_ORDER",
      payload: id,
    });
    dispatch({
      type: "GET_TOTAL_AMOUNT",
    });
  };

  const saveOrders = async (data) => {
    const generalOrder = {
      orders: state.orders,
      total: state.total,
      table: data.table,
      client: data.client,
      status:'pedidos en mesa',
    };

    try {
      await db.collection("orders").add(generalOrder);
      dispatch({
        type: 'CLEAR_ORDERS'
      })
    } catch (error) {
      console.log(error);
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <OrdersContext.Provider
      value={{
        addOrder,
        updatedOrder,
        deleteOrder,
        saveOrders,
        orders: state.orders,
        total: state.total,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};

export default OrdersState;
