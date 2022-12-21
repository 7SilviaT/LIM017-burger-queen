import React from "react";
import style from "./style.module.css";
import { BiTrash } from 'react-icons/bi'

const ItemOrder = ({ order, updatedOrder, deleteOrder }) => {
  return (
    <div className={style.containerItem}>
      <div className={style.quantity}>
        <button onClick={() => updatedOrder(order.menuId, -1)}>-</button>
        <span>{order.quantity}</span>
        <button onClick={() => updatedOrder(order.menuId, 1)}>+</button>
      </div>
      <p className={style.itemName}>{order.product}</p>
      <p className={style.itemPrice}>S/. {order.price * order.quantity}</p>
      <div>
        <button onClick={deleteOrder}><BiTrash /></button>
      </div>
    </div>
  );
};

export default ItemOrder;
