import { useState } from "react"


const [user, setUser] = useState({
    email:'',
    password:''
})

const Login = () => {
  return (
    <div>
        <form >

            <input type="email" name="email" id="email"/>
            <input type="password" name="password" id="password"/>

        </form>
    </div>
    
  )
}

export default Login