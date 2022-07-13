import React, { useEffect, useState } from "react";
import KitchenButtons from "../../components/KitchenButtons";
import { db } from "../../firebase";
import './style.css';

const Kitchen = () => {
  const [btnSelect, setBtnSelect] = useState("pedidos en mesa");
  const [loading, setLoading] = useState(true);
  const [ordersTaken, setOrdersTaken] = useState([]);
  const [filterOrder, setFilterOrder] = useState([]);


  useEffect(() => {
    fetchOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const updateDateFirestore = async (order, textStatus) => {
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

      <h1>Pedidos-Cocina</h1>
      <KitchenButtons setBtnSelect={updateFilter} />
      <div className='order-container' >{filterOrder.map((post) => (
        <div className='order-container_client' key={post.orderId}>
          <p>{post.client}</p>
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
            <button
              onClick={() => updateDateFirestore(post, "en preparacion")}
            >
              preparar
            </button>
          )}
          {post.status === "en preparacion" && (
            <button onClick={() => updateDateFirestore(post, "despacho")}>
              completado
            </button>
          )}
        </div>
      ))}</div>

      {/* {postMessage.lenght > 0 ? (
            ordersTaken.map((post) => <div key={post.key}>
              <ul>
                {post.orders.map((item)=>
                <li key={item.orderId}>{item.product} - {item.quantity}</li>)}
              </ul>
            </div>)
        ):(<h1> aun no hay pedidos </h1>)} */}
    </div>
  );
};

export default Kitchen;
