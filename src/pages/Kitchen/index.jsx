import React, { useEffect, useState } from "react";
import KitchenButtons from "../../components/KitchenButtons";
<<<<<<< HEAD
import "../Kitchen/style.css";
=======
>>>>>>> dffa4de98696c54bc62466b71a1609ff19e5a0cb
import { db } from "../../firebase";

const Kitchen = () => {
  const [btnSelect, setBtnSelect] = useState("pedidos en mesa");
  const [loading, setLoading] = useState(true);
  const [ordersTaken, setOrdersTaken] = useState([]);
  const [filterOrder, setFilterOrder] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);
  const fetchOrders = async () => {
    let getOrdersTakenFirebase = [];
    const client = await db.collection("orders").get();
    client.forEach((item) => {
      getOrdersTakenFirebase.push({
        orderId: item.id,
        ...item.data(),
      });
    });
    setLoading(false);

    const filterOrders = getOrdersTakenFirebase.filter(
      (item) => item.status === btnSelect
    );

    console.log(getOrdersTakenFirebase);
    setOrdersTaken(getOrdersTakenFirebase);
    setFilterOrder(filterOrders);
  };

  const updateFilter = (textFilter) => {
    setBtnSelect(textFilter);
    const filterOrders = ordersTaken.filter(
      (item) => item.status === textFilter
    );
    setFilterOrder(filterOrders);
  };

<<<<<<< HEAD
  const updateDateFirestore = async (order, textStatus) => {
=======
  const updateDateFirstore = async (order, textStatus) => {
>>>>>>> dffa4de98696c54bc62466b71a1609ff19e5a0cb
    const orderUpdate = { ...order };
    orderUpdate.status = textStatus;
    delete orderUpdate.orderId;

    await db.collection("orders").doc(order.orderId).update(orderUpdate);

    fetchOrders();
  };

  if (loading) {
    return <h1> Cargando pedidos recientes</h1>;
  }
  return (
    <div className="container">
<<<<<<< HEAD
      <div className="order-container" >        
        <KitchenButtons setBtnSelect={updateFilter} />
        {filterOrder.map((post) => (
          <div key={post.orderId} className="order-container_client" >
            <p>Cliente:{post.client}</p>
            <p>Mesa:{post.table}</p>
=======
      <div className="orders-container">
        <h1>pedidos:</h1>
        <KitchenButtons setBtnSelect={updateFilter} />
        {filterOrder.map((post) => (
          <div key={post.orderId}>
            <p>{post.client}</p>
>>>>>>> dffa4de98696c54bc62466b71a1609ff19e5a0cb
            <ul>
              {post.orders.map((item) => (
                <li key={item.orderId}>
                  <div>
                    {" "}
                    <p>
                      {item.quantity}-{item.product}
                    </p>
                  </div>{" "}
                </li>
              ))}
            </ul>
            {post.status === "pedidos en mesa" && (
<<<<<<< HEAD
              <button className="orderButton"
                onClick={() => updateDateFirestore(post, "en preparacion")}
=======
              <button
                onClick={() => updateDateFirstore(post, "en preparacion")}
>>>>>>> dffa4de98696c54bc62466b71a1609ff19e5a0cb
              >
                preparar
              </button>
            )}
            {post.status === "en preparacion" && (
<<<<<<< HEAD
              <button className="orderButton" onClick={() => updateDateFirestore(post, "despacho")}>
=======
              <button onClick={() => updateDateFirstore(post, "despacho")}>
>>>>>>> dffa4de98696c54bc62466b71a1609ff19e5a0cb
                completado
              </button>
            )}
          </div>
        ))}
        {/* {postMessage.lenght > 0 ? (
            ordersTaken.map((post) => <div key={post.key}>
              <ul>
                {post.orders.map((item)=>
                <li key={item.orderId}>{item.product} - {item.quantity}</li>)}
              </ul>
            </div>)
        ):(<h1> aun no hay pedidos </h1>)} */}
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Kitchen;
=======
export default Kitchen;
>>>>>>> dffa4de98696c54bc62466b71a1609ff19e5a0cb
