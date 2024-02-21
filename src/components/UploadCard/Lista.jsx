import React, {useEffect, useState} from 'react'
import appFirebase from "../../db/db"
import { getFirestore, collection, getDocs,deleteDoc, doc } from 'firebase/firestore'
import { useAuth } from '../../Context/AuthContext';


import "./Lista.scss"

const db = getFirestore(appFirebase)


const Lista = () => {
    
    const {user} = useAuth()

    const [gallery, setGalllery] = useState([])
    
    

    const deleteCar = async (documentoId) => {
        console.log(documentoId)
        try {
          // Llama a deleteDoc para eliminar el documento
          await deleteDoc(doc(db, "autos", documentoId));
          console.log("Documento eliminado correctamente");
        } catch (error) {
          console.error("Error al eliminar documento: ", error);
        }
      };


    useEffect(() =>{
        const getGallery = async()=>{
            try{
                const querySnapshot = await getDocs(collection(db, 'autos'))
                const docs = []
                querySnapshot.forEach((doc)=>{
                    docs.push({...doc.data(),id: doc.id})
                })
                setGalllery(docs)
                
            }catch(error){
                console.log(error)
            };

        }
        getGallery();
        
    },[gallery,])

  return (
    <div className='galleryContainer'>
        
        {
        gallery.map((list)=>(
                
                <div key={list.id} className='card'>
                    
                    <div id={`carousel-${list.id}`} className="carousel slide">
                        <div className="carousel-inner" >
                            <div  className="carousel-item active">
                            <img src={list.img} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src={list.img1} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src={list.img2} className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button className="carousel-control-prev"  type="button" data-bs-target={`#carousel-${list.id}`} data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${list.id}`} data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className=" list-group-item">Marca: {list.marca}</li>
                        <li className="list-group-item">Modelo: {list.modelo}</li>
                        <li className="list-group-item">Kilometros: {list.kilometraje}</li>
                        <li className="list-group-item">Año: {list.año}</li>
                        <li className="list-group-item">Precio: {list.precio}</li>
                    </ul>
                    <div className="card-body">
                        <div className="buttonCard d-grid gap-2 col-6 mx-auto ">
                            <button className="btn btn-primary bg-green-800 btn-lg" type="button">Mas Detalles</button>
                        </div>
                    </div>
                    {user.emailVerified && 
                    
                    <div className="card-body">
                        <div className="  buttonCard d-grid gap-2 col-6 mx-auto ">
                            <button onClick={() => deleteCar(list.id)} className="btn papelera  btn-lg" type="button"><img src="./img/delete.png" alt="" /></button>
                        </div>
                    </div>
                    
                    }
                </div>
                ))
            }
    </div>
  )
}

export default Lista
