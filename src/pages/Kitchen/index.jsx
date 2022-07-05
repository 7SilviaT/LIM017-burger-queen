import React, { useEffect, useState } from "react";
import KitchenButtons from "../../components/KitchenButtons";
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

  const updateDateFirstore = async (order, textStatus) => {
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
      <div className="orders-container">
        <h1>pedidos:</h1>
        <KitchenButtons setBtnSelect={updateFilter} />
        {filterOrder.map((post) => (
          <div key={post.orderId}>
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
                onClick={() => updateDateFirstore(post, "en preparacion")}
              >
                preparar
              </button>
            )}
            {post.status === "en preparacion" && (
              <button onClick={() => updateDateFirstore(post, "despacho")}>
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

export default Kitchen;
