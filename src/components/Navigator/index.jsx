import React, { useState, useContext,Link } from 'react';
import { useNavigate  } from 'react-router-dom';
import { authContext } from '../../context/AuthContext';
import { auth } from '../../Firebase/configFirebase';
import  logoutIcon  from '../../icons/logoutIcon.png';


import './style.css'

export const Home =() =>{
  
  //variables para autentificación
  const [email, setEmail] = useState();
  const contextValue = useContext(authContext);
  const navigate= useNavigate();
  let user = auth.currentUser.email; 

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
                    <li onChange={e=>setEmail(e.target.value)}> 
                    Bienvenido  <strong>{user}</strong>   
                    </li>
                    <li>Menu</li>
                    <li><Link to='/WaiterOrders'>Estado de pedidos</Link></li>
                    <li>Cocina</li>
                    <li>Admin Menu</li>
                    <li><img src={logoutIcon} className= 'logout-icon' alt='exit'onClick={handleLogout}/></li>
                </ul>
            </nav>

    {/* <>
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
    </> */}

        </div>
    );
}

export default Home;