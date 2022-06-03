import React from 'react';
import {
BrowserRouter as Router,
Routes,
Route,
// Link
} from 'react-router-dom';

import  Home  from './components/Home';
import  Login  from './components/Login';
import  Menu  from './components/Menu';
import  TableOrders  from './components/TableOrders';
import  AdminRegister  from './components/AdminRegister';
import  AdminMenu  from './components/AdminMenu';

// import logo from './logo.svg';


export function App() {
  return (
    <Router>
      <div className='changeView'>
<Routes>
<Route path='/' exact element={<Home />} />
<Route path='/Login' element={<Login />} />
<Route path='/Menu' element={<Menu />} />
<Route path='/TableOrders' element={<TableOrders />} />
<Route path='/AdminMenu' element={<AdminMenu />} />
<Route path='/AdminRegister' element={<AdminRegister />} />
<Route path='/Home' exact element={<Home />} />
</Routes>
</div>
</Router>
);
  }
  
export default App;
