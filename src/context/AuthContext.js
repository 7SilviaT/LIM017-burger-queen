import { createContext, useContext } from 'react';
//useEffect, useState y de firebase  onAuthStateChanged,
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../Firebase/configFirebase.js';

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

export function AuthProvider({ children }) {

/*   const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); */

  const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) => {
    const userCredential = signInWithEmailAndPassword(auth, email, password)
    console.log(userCredential);
  }

  const logout = () => signOut(auth);

  /* useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log({ currentUser });
      setUser(currentUser);
      setLoading(false);
    }); 
    return () => unsubuscribe();
  }, []);*/

  return (
    <authContext.Provider
      value={{
        signup,
        login,
        logout,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

//        user,loading,