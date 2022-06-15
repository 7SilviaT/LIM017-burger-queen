import React from 'react';
import { useState, useContext } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { authContext } from '../context/AuthContext';

const Login =() =>{
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    

    //const login  = useAuth();
    const contextValue = useContext(authContext);
    console.log(contextValue);
    const navigate= useNavigate();
 


    const handleSubmit=  async(e) =>{
        e.preventDefault();      
    try {
    console.log(email, password);
        await contextValue.login(email, password);
      navigate('/Login');
    } catch (error) {
        console.log(error.code);
    }
  };
    

    return(
        <div className='login-page'>
            <form className='login-container' onSubmit={handleSubmit}>
                <h2>INICIAR SESIÓN</h2>
                <hr></hr>
                <input type='email' className='login-inputs' 
                onChange={e=>setEmail(e.target.value)} placeholder='juanperez@bq.com'/>
                
                <input type='password' className='login-inputs' 
                onChange={e=>setPassword(e.target.value)} placeholder='contraseña'/>

                <select id ='user' className='select-user'>
                <option disabled selected>Seleccione su cargo</option>
                <option value='Mesero'>Mesero</option>
                <option value='Admin'>Admin</option>
                <option value='Cocina'>Cocina</option>
                </select>
                
                <button className='login-button' type= 'submit'><Link to='/HomeMain'>Inicia sesión</Link>
                </button>
                          
                    <p> No tienes cuenta?
                    <button type= 'submit'><Link to='/Register' className='login-link'>Register</Link></button>
                    </p>                 
            
                </form> 
                </div>  
    )
};
export default Login;
