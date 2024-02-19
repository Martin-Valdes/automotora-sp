import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';


export function ProtectedRoute ({children}) {

    const {user} = useAuth()

//aca autorizamos quien puede ingresar a la ruta protegida

    if (user.email!='valdesmartin@gmail.com') return <Navigate to="/login"/>

  return <>{children}</>
}

