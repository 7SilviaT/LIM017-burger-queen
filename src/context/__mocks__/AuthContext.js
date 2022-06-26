export const signInWithEmailAndPassword = (auth = {},emailUser, passwordUser)=> Promise.resolve({user: { email: emailUser, password: passwordUser}})

export const useAuth = function (){
    return { login: () => Promise.resolve()}
}

export function AuthProvider({ children }) {  
      return <> {children}</>
}