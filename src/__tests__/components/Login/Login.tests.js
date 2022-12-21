import React from 'react';
/* import {createMemoryHistory} from 'history';
import { Router } from 'react-router-dom'; */
import { render, screen } from '@testing-library/react';
import Login from '../../../pages/Login'
//import { AuthProvider } from '../../../context/AuthContext.js';
import AuthState from '../../../context/auth/AuthState';
//jest.mock('../../../context/AuthContext.js');


//testeamos botón Ingresar se encuentre en Login

/* test('rendering Login page', () => {
  render(
    <AuthState>
      <Login />
    </AuthState>    
  )
  expect(screen.getByRole('button')).toHaveTextContent(/INGRESAR/)
}) */
