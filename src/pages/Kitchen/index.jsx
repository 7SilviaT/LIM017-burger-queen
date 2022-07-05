import React, { useEffect,useState } from "react";
import { db } from "../../firebase";

const Kitchen = () => {
    const [loading,setLoading] =useState(true);
    const [ordersTaken,setOrdersTaken]= useState([]);

    useEffect(()=>{
      fetchOrders()
    },[]);
  const fetchOrders =async()=> {
    let getOrdersTakenFirebase =[];
        const client =await db
        .collection("orders").get();
        client.forEach((item) => {
          getOrdersTakenFirebase.push({
            orderId: item.id,
            ...item.data(),
          });
          //console.log(menu);
        });
        setLoading(false);
        console.log(getOrdersTakenFirebase);
        setOrdersTaken(getOrdersTakenFirebase);

  }
    
  if(loading){
    return<h1> Cargando pedidos recientes</h1>
  }           
    return (
      <div className="container">
        <div className="orders-container">
        <h1>pedidos:</h1>
        {ordersTaken.map((post) => <div key={post.key}>
              <ul>
                {post.orders.map((item)=>

                <li key={item.orderId}><div> <p>{post.client}</p>
                
                <p>{item.quantity}-{item.product}</p></div> </li>)}
              </ul>
            </div>)}
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
    )
  };
  
  export default Kitchen;