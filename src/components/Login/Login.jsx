import { useState } from "react"
import { useAuth } from "../../Context/AuthContext" 
import { useNavigate } from "react-router-dom"

import './Login.scss'

const Login = () => {

  const [user, setUser] = useState({
    email:'',
    password:''
})

const {login,loginWithGoogle} = useAuth();
const navigate = useNavigate();
const [error, setError] = useState();

const handleChange = ({target: {name, value}}) =>
  setUser({...user, [name]: value});

const handleSubmit = async (e) =>{
  e.preventDefault();
  setError('')
  try {
    await login(user.email, user.password)
    navigate("/uploadCard");
  }catch(error){
    setError(error.message);
  }


}
const handleGoogleSignin = async () => {
  await loginWithGoogle()
  navigate('/uploadCard')
}
  return (

    <div className="loginContainer">
      {error && <p>{error}</p> }
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placehoder="Your email" 
        onChange={handleChange}
        placeholder='Your Email'
        />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password"
        onChange={handleChange}
        placeholder='******'/>

        <button>Login</button>
    </form> */}
    {/* <button  onClick={handleGoogleSignin}>login Google</button> */}
    <div className="flex formContainer min-h-full flex-1 flex-col  px-1 py-1 lg:px-1">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl  leading-9 tracking-tight text-gray-100">
            Accede con tu cuenta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-100">
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email" name="email" placehoder="Your email" 
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-100">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  type="password" 
                  name="password" 
                  id="password"
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            
          </form>
          <div>
              <button
                type="submit"
                className="flex mt-3 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm  leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Iniciar sesion
              </button>
              <button
                type="submit" 
                className="flex mt-2 w-full justify-center rounded-md bg-indigo-900 px-3 py-1.5 text-sm  leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleGoogleSignin}
              >
                Acceder con Google
              </button>
            </div>
          
        </div>
      </div>
    </div>
    
  )
}

export default Login