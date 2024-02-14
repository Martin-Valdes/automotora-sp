import React from 'react'
import { useState } from 'react'

export const Register = () => {

    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value})
    }

  return (
    <form >
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placehoder="Your email" 
        onChange={handleChange}/>

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password"
        onChange={handleChange}/>

        <button>Register</button>
    </form>
  )
}


export default Register