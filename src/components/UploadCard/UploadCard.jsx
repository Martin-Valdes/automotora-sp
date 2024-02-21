import React from 'react'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import {getStorage, ref, uploadBytes, getDownloadURL, list} from 'firebase/storage'
import appFirebase from '../../db/db'
import Lista from './Lista'


import './UploadCard.scss'


const db = getFirestore(appFirebase)
const storage = getStorage(appFirebase)


const UploadCard = () => {

 
  
  let urlImDesc;
  let urlImDesc1;
  let urlImDesc2;
  let urlImDesc3;
  let urlImDesc4;

  const saveInfo = async (e)=>{
    e.preventDefault()
    const marca = e.target.marca.value;
    const modelo = e.target.modelo.value;
    const kilometraje = e.target.kilometraje.value;
    const año = e.target.año.value;
    const precio = e.target.año.value;

    const newCar = {
      marca: marca,
      modelo: modelo,
      kilometraje: kilometraje,
      año: año,
      precio: precio,
      img: urlImDesc,
      img1: urlImDesc1,
      img2: urlImDesc2,
      img3: urlImDesc3,
      img4: urlImDesc4,
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
    e.target.kilometraje.value = '';
    e.target.año.value = '';
    e.target.precio.value = '';
    e.target.file.value1 = '';
    e.target.file.value2 = '';
    e.target.file.value3 = '';
    e.target.file.value4 = '';
  }
  
  const fileHandler = async (e)=>{
    const fileImg = e.target.files[0];
    const refFile = ref(storage, `documentos/${fileImg.name}` )
    await uploadBytes(refFile, fileImg)


    urlImDesc = await getDownloadURL (refFile)

  }
  const fileHandler1 = async (e)=>{

    const fileImg1 = e.target.files[0];

    const refFile1 = ref(storage, `documentos/${fileImg1.name}` )
    await uploadBytes(refFile1, fileImg1)

    urlImDesc1 = await getDownloadURL (refFile1)

  }
  const fileHandler2 = async (e)=>{

    const fileImg2 = e.target.files[0];

    const refFile2 = ref(storage, `documentos/${fileImg2.name}` )
    await uploadBytes(refFile2, fileImg2)

    urlImDesc2 = await getDownloadURL (refFile2)

  }
  
  const fileHandler3 = async (e)=>{


    const fileImg3 = e.target.files[0];

    const refFile3 = ref(storage, `documentos/${fileImg3.name}` )
    await uploadBytes(refFile3, fileImg3)

    urlImDesc3 = await getDownloadURL (refFile3)

  }
  const fileHandler4 = async (e)=>{
   
    const fileImg4 = e.target.files[0];

    const refFile4 = ref(storage, `documentos/${fileImg4.name}` )
    await uploadBytes(refFile4, fileImg4)

    urlImDesc4 = await getDownloadURL (refFile4)
  }
  

  return (
    <div className='cardUpload card  card-body'>
      <h3>Agregar auto</h3>
      <form onSubmit={saveInfo} className='form cardUpload card  card-body'>
        <label>Marca</label>
        <div className='form-group'>
          <input type="text" placeholder='Ingresa la marca' id='marca' className='form-control mt-1' required/>
        </div>
        <label>Modelo</label>
        <div className='form-group'>
          <input type="text" placeholder='Ingresa el modelo' id='modelo' className='form-control mt-1' required/>
        </div>
        <label>Kilometraje</label>
        <div className='form-group'>
          <input type="text" placeholder='Ingresa el kilometraje' id='kilometraje' className='form-control mt-1' />
        </div>
        <label>Precio</label>
        <div className='form-group'>
          <input type="text" placeholder='Ingresa el Precio' id='precio' className='form-control mt-1' />
        </div>
        <label>año</label>
        <div className='form-group'>
          <input type="text" placeholder='Ingresa el año' id='año' className='form-control mt-1' />
        </div>
        <label>Agregar imagen</label>
          <input type="file" id='file' placeholder='add imagen' className='form-control' onChange={fileHandler}/>
          <label>Agregar imagen</label>
          <input type="file" id='file1' placeholder='add imagen' className='form-control' onChange={fileHandler1}/>
          <label>Agregar imagen</label>
          <input type="file" id='file2' placeholder='add imagen' className='form-control' onChange={fileHandler2}/>
          <label>Agregar imagen</label>
          <input type="file" id='file3' placeholder='add imagen' className='form-control' onChange={fileHandler3}/>
          <label>Agregar imagen</label>
          <input type="file" id='file4' placeholder='add imagen' className='form-control' onChange={fileHandler4}/>
          
        <button className='btn btn-primary mt-3 form-control'>Guardar</button>
      </form>
      <Lista />
    </div>
  )
}

export default UploadCard
