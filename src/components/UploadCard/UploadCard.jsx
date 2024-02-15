import React from 'react'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import appFirebase from '../../db/db'


const db = getFirestore(appFirebase)
const storage = getStorage(appFirebase)

const UploadCard = () => {

  let urlImDesc;

  const saveInfo = async (e)=>{
    e.preventDefault()
    const marca = e.target.marca.value;
    const modelo = e.target.modelo.value;
    
    const newCar = {
      marca: marca,
      modelo: modelo,
      img: urlImDesc,
    }
    try{
      await addDoc(collection(db, 'autos'),{
        ...newCar
      })
    }catch(error){
      console.log(error);
    }
    e.target.marca.value ='';
    e.target.modelo.value = '';
    e.target.file.value = '';

  }

  const fileHandler = async (e)=>{
    const fileImg = e.target.files[0];
    const refFile = ref(storage, `documentos/${fileImg.name}` )
    await uploadBytes(refFile, fileImg)
    urlImDesc = await getDownloadURL (refFile)
  }

  return (
    <div className='card card-body'>
      <h3>Agregar auto</h3>
      <form onSubmit={saveInfo}>
        <label>Marca</label>
        <div className='form-group'>
          <input type="text" placeholder='Ingresa la marca' id='marca' className='form-control mt-1' required/>
        </div>
        <label>Modelo</label>
        <div className='form-group'>
          <input type="text" placeholder='Ingresa el modelo' id='modelo' className='form-control mt-1' required/>
        </div>
        <label>Agregar imagen</label>
          <input type="file" id='file' placeholder='add imagen' className='form-control' onChange={fileHandler}/>
        <button className='btn btn-primary mt-3 form-control'>Guardar</button>
      </form>
    </div>
  )
}

export default UploadCard
