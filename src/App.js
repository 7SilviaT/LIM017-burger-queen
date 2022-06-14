import React from 'react';
 import {
BrowserRouter as Router,
Routes,
Route,
} from 'react-router-dom'; 


import  Login  from './components/Login';
import  Register  from './components/Register';
import  Home  from './components/HomeNav/HomeMain';
/* import  Orders  from './components/HomeNav/WaiterOrders';
import  TableOrders  from './components/HomeNav/KitchenOrders';
import  AdminMenu  from './components/HomeNav/AdminItems'; */

      
const App = () =>{
    return(
      <div className='changeView'>
        <Router>
      <Routes>
<Route exact path='/' element={<Login />} />
<Route path='/Login' element={<Login />} />
<Route path='/Register' element={<Register />} />
<Route path='/Home' element={<Home />} />
</Routes>
        </Router>
      </div>
    )
}

export default App;

  
