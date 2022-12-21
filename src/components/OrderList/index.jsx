import React, { useState } from "react";
import ItemOrder from "../ItemOrder/index.jsx";
import style from "./style.module.css";

const initialState = {
  table: "",
  client: "",
};

const OrderList = ({
  orders,
  updatedOrder,
  total,
  deleteOrder,
  saveOrders,
}) => {
  const [dataForm, setDataForm] = useState(initialState);

  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveOrders(dataForm);
    setDataForm(initialState);
  };

  return (
    <section className={style.containerTable}>
      <h2 className={style.title}>PEDIDOS</h2>
      {orders.length > 0 ? (
        <section className={style.containerOperation}>
          <form>
            <input
              type="number"
              placeholder="Ingresar Nro de Mesa"
              name="table"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Nombre de cliente"
              name="client"
              onChange={handleChange}
            />
          </form>
          {orders.map((item) => (
            <ItemOrder
              key={item.menuId}
              order={item}
              updatedOrder={updatedOrder}
              deleteOrder={() => deleteOrder(item.menuId)}
            />
          ))}

          <div className={style.total}>
            <p>TOTAL: </p>
            <p>S/. {total} </p>
          </div>
          <div className={style.containerButton}>
            <button onClick={handleSubmit}>ENVIAR A COCINA</button>
          </div>
        </section>
      ) : (
        <p>Aún no tiene ninguna Orden</p>
      )}
    </section>
  );
};

export default OrderList;
