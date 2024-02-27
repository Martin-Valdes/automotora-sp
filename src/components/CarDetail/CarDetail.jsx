import React from 'react'
import RedSocialIcons from '../RedSocialIcons/RedSocialIcons';
import { Link } from 'react-router-dom';
import ItemListContainer from '../ItemListContainer/ItemListContainer'

import "./CarDetail.scss"

const CarDetail = ({car}) => {

    

  return (
    <div className='carouselContainerDetail'>
        <div id="carouselExample" className="carouselDetail carousel  slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={car.img} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={car.img1} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={car.img2} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={car.img3} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={car.img4} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        <div className='containerDescription shadow-2xl'>
            <h4>Detalles del vehiculo {car.marca} {car.modelo}</h4>
            <div className="card ulDetail shadow-2xl" >
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Marca: {car.marca}</li>
                    <li className="list-group-item">Modelo: {car.modelo}</li>
                    <li className="list-group-item">Puertas:{car.puertas}</li>
                    <li className="list-group-item">Trasmision: {car.cambios}</li>
                    <li className="list-group-item">Color: {car.color}</li>
                    <li className="list-group-item">Kilometros: {car.kilometraje}</li>
                    <li className="list-group-item">Velocidades: {car.velocidades}</li>
                    <li className="list-group-item">Combustible: {car.combustible}</li>
                    <li className="list-group-item">Precio: {car.precio}</li>
                </ul>
                <div className="card-footer">
                    <div className='iconsDetail'>
                        <p>Contactanos</p>
                        <p className='numberClass'>(+598) 095 094 096</p>
                    <section className='iconsCtto'>
                            <RedSocialIcons props = {car.marca} props2 = {car.modelo} />
                            <Link to="mailto:spautos2024@gmail.com" ><img className='icoEmail' src="/img/pngwing.com (4).png" alt="" /></Link>
                    </section>
                    
                    </div>
                </div> 
            </div>
        </div>
            
            <ItemListContainer/>
    </div>
  )
}

export default CarDetail
