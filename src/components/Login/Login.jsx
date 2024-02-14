import { useState } from "react"
import { useAuth } from "../../Context/AuthContext" 
import { useNavigate } from "react-router-dom"



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

        <button>Login</button>
    </form>
    <button  onClick={handleGoogleSignin}>login Google</button>
    
    </div>
    
  )
}

export default Login