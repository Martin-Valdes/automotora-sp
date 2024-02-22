
    import { useState, useEffect } from "react"
    import { useParams } from "react-router-dom"
    import CarDetail from "../CarDetail/CarDetail"
    import { doc, getDoc, getFirestore } from "firebase/firestore"
    import appFirebase from "../../db/db"
    
    const db = getFirestore(appFirebase)
   
    
    const CarDetailContainer = () => {
    
        const [car, setCar] = useState({})
        const {id} = useParams()
        const [productExist, setProductExist] = useState(false);
    
       
    
        useEffect(()=>{
            
            const productsRef = doc(db, "autos", id)
            getDoc(productsRef)
            .then((respuesta)=>{
                const productDb ={id: respuesta.id, ...respuesta.data()}
                if (!respuesta.exists()){
                    setProductExist(true)
                }
                setCar(productDb)
            })
        },[id])
    
        return(
            
                <div className="detailContainer">
                    {
                        productExist ?(
                            <div>El producto no existe</div>
                        ):(
                            <CarDetail car = {car}/>
                        )
                    }
                </div>
            
            
        )
    }

export default CarDetailContainer
