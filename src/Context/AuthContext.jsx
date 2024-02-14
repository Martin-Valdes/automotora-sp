import { createContext, useContext } from "react"; 
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {auth} from '../db/db'
export const authContext = createContext()

export const useAuth = () =>{

   const context = useContext(authContext)
    return context
}

export function AuthProvider ({children}) {

    const signup = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => signInWithEmailAndPassword(auth, email, password)

    const logout = () => signOut(auth)

    const loginWithGoogle = () =>{
       const googleProvider = new GoogleAuthProvider();
       return signInWithPopup(auth, googleProvider)
    }
    const user = {
        login: true,
    };

    return <authContext.Provider value={{signup, login, logout, user, loginWithGoogle}}>
        {children}
        </authContext.Provider>;

}