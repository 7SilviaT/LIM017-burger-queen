import React, { useEffect, useReducer,useState } from "react";
import AuthContext from "./AuthContext";
import reducer from "./AuthReducer";

import { firebase } from "../../firebase";

const AuthState = ({ children }) => {
  const initialState = {
    /**DATA REGISTER */
    loading: false,

    isAuth: false,
    email: null,
    consultando: true,
  };

  const [error,setError]=useState();

  /**
   * FASE DE MONTAJE
   * FASE DE ACTUALIZACIÓN
   * FASE DE DESMONTAJE
   */

  // useEffect(() => {
  //   //Montaje, se ejecuta una unica vez
  // }, []);

  // useEffect(() => {
  //   //ACTUALIZACIÓN, se ejecuta n vez
  // }, [a, b ,c]);

  // useEffect(() => {
  //   //DESMONTAJE, se ejecuta n vez
  //   return () => {

  //   }
  // }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log("mira el user", user);
      let autenticado;
      if (user?.uid) {
        autenticado = true;
      } else {
        autenticado = false;
      }

      dispatch({
        type: "UPDATE_IS_AUTH",
        payload: {
          isAuth: autenticado,
          email: user?.email,
          consultando: false,
        },
      });
    });
  }, []);

  const signIn = async ({ email, position, password }) => {
    dispatch({
      type: "UPLOAD_LOADING",
      payload: true,
    });
    try {
      const newUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
        setError('');

      await newUser.user.updateProfile({
        displayName: JSON.stringify({ position }),
      });
    } catch (error) {
      console.log(error.code,'imprimimos algo en login');
            switch(error.code){
                case '':
                    setError('Campos vacíos.Ingrese correo y contraseña');
                    break;
                case 'auth/user-not-found':
                    setError('Usuario no registrado');
                    break;
                case 'auth/wrong-password':
                    setError('Contraseña inválida.Intente nuevamente');
                    break;
                case 'auth/invalid-email':
                    setError('Ingrese un correo válido');
                break;
                default:setError ('Otro error');
            }

    } finally {
      dispatch({
        type: "UPLOAD_LOADING",
        payload: false,
      });
    }
  };

  const logIn = async (email, password) => {
    try {
      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
        setError('');

      dispatch({
        type: "LOGIN",
        payload: { email: user.email, isAuth: true },
      });
    } catch (error) {
      console.log("mira el error", error);
      console.log(error.code,'imprimimos algo en login');
            switch(error.code){
                case '':
                    setError('Campos vacíos.Ingrese correo y contraseña');
                    break;
                case 'auth/user-not-found':
                    setError('Usuario no registrado');
                    break;
                case 'auth/wrong-password':
                    setError('Contraseña inválida.Intente nuevamente');
                    break;
                case 'auth/invalid-email':
                    setError('Ingrese un correo válido');
                break;
                default:setError ('Otro error');
            }
    }
  };

  const cerrarSesion = async () => {
    try {
      await firebase.auth().signOut();
      dispatch(logout());
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    return {
      type: "LOGOUT",
    };
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, signIn, logIn, cerrarSesion }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
