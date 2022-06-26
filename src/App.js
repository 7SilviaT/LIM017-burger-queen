import React from 'react';
 import {
BrowserRouter as Router,
Routes,
Route,
} from 'react-router-dom'; 
import {AuthProvider} from './context/AuthContext';

import  Login  from './components/Login/Login';
import  Register  from './components/Register/Register';
import  Home  from './components/Navigator/index';


      
const App = () =>{
    
  return(    
      <AuthProvider>
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
      </AuthProvider>
    )
}

export default App;

  
