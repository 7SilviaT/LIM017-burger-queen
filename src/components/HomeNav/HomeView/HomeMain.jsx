import React, { useState, useContext } from 'react';
import { useNavigate  } from 'react-router-dom';
import { authContext } from '../../../context/AuthContext';
import { auth } from '../../../Firebase/configFirebase';


import './HomeMain.css'

export const Home =() =>{
  
  //variables para autentificación
  const [email, setEmail] = useState();
  const contextValue = useContext(authContext);
  const navigate= useNavigate();
  let user = auth.currentUser.email; 

  // estado de desayuno con listado de productos
  const [breakfastCart, setBreakfast] = useState([
    { id:1, nombre:'Café americano', precio: 5 },
    { id:2, nombre:'Café con leche', precio: 7},
    { id:3, nombre:'Sandwich de jamón y queso', precio: 10 },
    { id:4, nombre:'Jugo natural', precio: 7 },
  ])
  // estado de la orden(carrito)
const [order, setOrder] = useState([])

//evento logout
    const handleLogout =  (e) => {
      contextValue.logout(email) 
      .then (()=> navigate ('/Login'))
      .catch ((error)=> {
        console.log(error.code)
      })
    }
    
    return(
        <div className='home-page'>
            <nav>
                
                <ul>
                    <li onChange={e=>setEmail(e.target.value)}> Bienvenido {user} <strong></strong>   </li>
                    <li>Pedidos</li>
                    <li>Cocina</li>
                    <li>Admin Menu</li>
                    <li><button onClick={handleLogout}>Cerrar sesión</button></li>
                </ul>
            </nav>
            //hook que sera un contenedor
    <>
      <button className='breakfast_btn-title'><h3>Desayuno</h3></button>
      {breakfastCart.map((breakfastItem)=> (
        <BreakfastCart
        key={breakfastCart.id}
        breakfastItem={breakfastItem}
        order={order}
        setOrder={setOrder}
        setBreakfast={setBreakfast}
        />
      ))}
    </>

        </div>
    );
}

export default Home;