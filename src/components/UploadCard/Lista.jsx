import React, {useEffect, useState} from 'react'
import appFirebase from "../../db/db"
import { getFirestore, collection, getDocs } from 'firebase/firestore'

import "./Lista.scss"

const db = getFirestore(appFirebase)


const Lista = () => {

    const [gallery, setGalllery] = useState([])
    
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
                    <div className="card-body">
                        <h5 className="card-title">Marca: {list.marca}</h5>
                        <p className="card-text">Modelo: {list.modelo}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Kilometros: {list.kilometraje}</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                    </ul>
                    <div className="card-body">
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>

                </div>
                
                
                ))
            }
    </div>
  )
}

export default Lista
