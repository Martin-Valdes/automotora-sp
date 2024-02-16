import { createContext, useContext, useEffect,useState } from "react"; 
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {auth} from '../db/db'
export const authContext = createContext()

export const useAuth = () =>{

   const context = useContext(authContext)
    return context
}

export function AuthProvider ({children}) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signup = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => signInWithEmailAndPassword(auth, email, password)

    const logout = () => signOut(auth)

    const loginWithGoogle = () =>{
       const googleProvider = new GoogleAuthProvider();
       return signInWithPopup(auth, googleProvider)
    }

    const resetPassword = async (email) => sendPasswordResetEmail(auth, email);

    useEffect(() => {
        const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false);
        });
        return () => unsubuscribe();
      }, []);

    return <authContext.Provider value={{signup, login, logout,loading, user, loginWithGoogle, resetPassword}}>
        {children}
        </authContext.Provider>;

}