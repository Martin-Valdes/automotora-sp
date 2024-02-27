import React from 'react'
import { Link } from 'react-router-dom';


import './RedSocialIcons.scss'



const RedSocialIcons = ({props, props2}) => {

    
    console.log(props, props2)
    const phoneNumber = '+59899275858'; 
    const message =`Buen dia, me interesa mas informacion del vehiculo ${props} ${props2}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    const imageUrl = "/img/whatsapp_1_.webp"; 

  return (
    <Link to={whatsappUrl}>
      <img className='imgWatsApp' src={imageUrl}/>
    </Link>
  )
}

export default RedSocialIcons
