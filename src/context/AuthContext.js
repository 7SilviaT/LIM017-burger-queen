import { createContext, useContext } from 'react';
//useEffect, useState y de firebase  onAuthStateChanged,
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../Firebase/configFirebase.js';

export const authContext = createContext();

export const useAuth = () => useContext(authContext);


export function AuthProvider({ children }) {
console.log(children.email);
/*   ;
  const [loading, setLoading] = useState(true); */

  const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) =>  signInWithEmailAndPassword(auth, email, password);
  
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