
import { useEffect,useState, useParams } from "react"
import { collection, getDocs, query, where } from "firebase/firestore"
import ItemList from "../ItemList/ItemList";


import "./itemListContainer.scss"

const ItemListContainer = () => {

    // const [car, setCar] = useState([]);
    
    useEffect(() =>{
        // const carsRef = collection( db, "vehiculos")
        
        // getDocs(carsRef)
        // .then((request)=>console.log(request))
        // .catch((error)=>console.log(error))
    },[])
        
    return(
         <div className="itemListContainer">
            
            <ItemList cars = {car}/>
        </div>   
    )
}

export default ItemListContainer