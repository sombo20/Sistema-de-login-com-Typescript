import {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Button from '../../components/Button'
import Input from '../../components/Input'
import useAuth from '../../hooks/useAuth'

function Signup(){
  const {signup} = useAuth()
  const navigate = useNavigate()
  
  const [email,setEmail] = useState<string>("")
  const [password,setPassword] = useState<string>("")
  const [error,setError] = useState<string>("")
  
  const handleSignup = (e)=>{
    e.preventDefault()
     if(!email | !password){
       setError("Input empty")
       return
     }
     
     const res = signup(email,password)
     if(res){
       setError(res)
       return
     }
     alert("User Registed")
     navigate("/")
  }
    
  return(
     <>
   <form onSubmit={handleSignup}>
	<div class="container" >
			<div class="text" >
				<span><h2>Register</h2></span>
			</div>
			<div class="inputs">
			  <div class="item">
				<label>Email</label>
			  <Input
       type="email"
       placeholder="Set your email.."
       value={email}
       onchange={(e)=>[setEmail(e.target.value),setError("")]}/>
			  </div>
			  <div class="item">
			    <label>Password</label>
			             <Input
       type="password"
       placeholder="Set your password..."
       value={password}
       onchange={(e)=>[setPassword(e.target.value),setError("")]}/>
       <p>{error}</p>
			  </div>
			</div>
			<div class="btn">
				<Button
      text="Signup"
      onclick={handleSignup}
    />
			</div>
		</div>
   
    </form>
    </>
  )
}

export default Signup;
