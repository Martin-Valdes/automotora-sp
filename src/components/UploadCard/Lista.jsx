import React, {useEffect, useState} from 'react'
import appFirebase from "../../db/db"

import { getFirestore, collection, getDocs } from 'firebase/firestore'

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
    },[gallery])

  return (
    <div>
        <table className="table table-hover">
        <thead>
            <tr>
                 <th scope='col'>Marca</th>
                <th scope='col'>Modelo</th>
                <th scope='col'>Imagen</th>
            </tr>
        </thead>
        <tbody>
            {gallery.map((list)=>(
                <tr key={list.id}>
                    <td>{list.marca}</td>
                    <td>{list.modelo}</td>
                    <td><img height={150} width={200} src={list.img} alt={list.modelo} /></td>
                    <td><img height={150} width={200} src={list.img} alt={list.modelo} /></td>
                    <td><img height={150} width={200} src={list.img} alt={list.modelo} /></td>
                    <td><img height={150} width={200} src={list.img} alt={list.modelo} /></td>
                    <td><img height={150} width={200} src={list.img} alt={list.modelo} /></td>
                </tr>
            )
            )

            }
        </tbody>
      </table>
    </div>
  )
}

export default Lista
