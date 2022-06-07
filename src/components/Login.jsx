import React, { useRef } from 'react'
import app from '../Firebase/config-FB';
import {
    Link
    } from 'react-router-dom';

const Login =() =>{
    const emailRef = useRef();
    const passwordRef = useRef();
/*     const loginClick =()=>{
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        console.log(email);
        //fire.auth().signInWith
    } */

    return(
        
        <div className='login-container'>
            <div className='login-box'>
        <h2>Iniciar sesión</h2>
        <hr></hr>
        <select>
                <option disabled selected>Seleccione su cargo</option>
                <option value='Mesero'>Mesero</option>
                <option value='Admin'>Admin</option>
                <option value='Cocina'>Cocina</option>
            </select>
        <form>
            <input
            id ='email' type='email' ref={emailRef} placeholder='📧 juanperez@bq.com' required/><br/><br/>
            <input
            id='password' type='password'ref={passwordRef} placeholder='🔒contraseña' required/>
            <button type='submit' className='login-btn' onClick={loginClick}>INGRESAR</button>
        </form>
        </div>
        </div>
    )
}


export default Login