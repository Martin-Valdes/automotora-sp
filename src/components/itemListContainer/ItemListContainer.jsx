
import { useEffect,useState, useParams } from "react"
import request from "../utils/carsData";
import ItemList from "../ItemList/ItemList";


import "./itemListContainer.scss"

const ItemListContainer = () => {

    const [car, setCar] = useState([]);
    
    useEffect(() =>{
        request
        .then((respuesta)=>{
            setCar(respuesta)
            
        })
    },[])
        
    return(

         <div className="itemListContainer">
            <ItemList cars = {car}/>
        </div>   
    )

}

export default ItemListContainer