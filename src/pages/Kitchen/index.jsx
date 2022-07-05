import React, { useEffect,useState } from "react";
import { db } from "../../firebase";

const Kitchen = () => {
    const [loading,setLoading] =useState(true);
    const [ordersTaken,setOrdersTaken]= useState([]);

    useEffect(()=>{
        const getOrdersTakenFirebase =[];
        const client =db
        .collection("orders")
        .onSnapshot((querySnapshot) =>{
            querySnapshot.forEach((doc)=>{
                getOrdersTakenFirebase.push({
                    ...doc.data(),
                key:doc.id,
            })
            setOrdersTaken(getOrdersTakenFirebase);
            setLoading(false);
            })
        })
        // retorna una funcion limpia
        return ()=>client();
    },[]);
  
    /* const getMenu = async () => {
      try {
        const info = await db.collection("orders").get();
        const ordersTakenList = [];
  
        info.forEach((item) => {
            ordersTakenList.push({
            ordersId: item.id,
            ...item.data(),
          });
          console.log(menu);
        });
    }
    catch(error){
        console.log(error.code);
    }
    } */
  if(loading){
    return<h1> Cargando pedidos recientes</h1>

  }
       
    
    return (
      <div className="container">
        <div className="orders-container">
        <h1>pedidos:</h1>
        {postMessage.lenght > 0 ? (
            ordersTaken.map((post) => <div key={post.key}>{post.orders}</div>)
        ):(<h1> aun no hay pedidos </h1>)}
        </div>
      </div>
    )
  };
  
  export default Kitchen;