import React from 'react'
import { Link } from 'react-router-dom';


import './RedSocialIcons.scss'



const RedSocialIcons = (car) => {

    
    console.log(car)
    const phoneNumber = '+59899275858'; 
    const message = {car};
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    const imageUrl = "/img/whatsapp_1_.webp"; 

  return (
    <Link to={whatsappUrl}>
      <img className='imgWatsApp' src={imageUrl}/>
    </Link>
  )
}

export default RedSocialIcons
