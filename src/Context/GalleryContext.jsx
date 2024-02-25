import { createContext, useContext, useEffect,useState } from "react"; 
import { getFirestore, collection, getDocs,deleteDoc, doc } from 'firebase/firestore'
import appFirebase from "../db/db"
import {auth} from '../db/db'



const db = getFirestore(appFirebase)

export const GalleryContext = createContext()

export const useData = () => useContext(GalleryContext);


export const GalleryCars = ({children}) =>{
    
    const [allCars, setAllCars] = useState([])

    useEffect(() =>{

    const getGallery = async()=>{
        try{
            const querySnapshot = await getDocs(collection(db, 'autos'))
            const docs = []
            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(),id: doc.id})
            })
            setAllCars(docs)
            
        }catch(error){
            console.log(error)
        };

    }
    getGallery();
    
},[])


return <GalleryContext.Provider value={{allCars}}>
        {children}
        </GalleryContext.Provider>;
}



