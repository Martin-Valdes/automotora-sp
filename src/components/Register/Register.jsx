import React from 'react'
import { useState } from 'react'
import { useAuth } from '../../Context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';

export const Register = () => {

    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const {signup} = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState()


    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value})
    }

    const handleSubmit = async (e) =>{
      e.preventDefault();
      setError('');
      try{
        await signup(user.email,user.password)
        navigate('/')

      }catch (error){
        console.log(error.code)
        
      }
    }

  return (
    <div>

      {error && <p>{error}</p> }

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placehoder="Your email" 
        onChange={handleChange}
        placeholder='Your Email'
        />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password"
        onChange={handleChange}
        placeholder='******'/>

        <button>Register</button>
    </form>
    </div>
  )
}


export default Register