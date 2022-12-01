import {useState,useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Button from '../../components/Button'
import Input from '../../components/Input'
import useAuth from '../../hooks/useAuth'
import './sign.css'

function Signin(){
  const {signin} = useAuth()
  const navigate = useNavigate()
  
  const [email,setEmail] = useState<string>("")
  const [password,setPassword] = useState<string>("")
  const [error,setError] = useState("")
  
  useEffect(()=>{
    var acess = localStorage.getItem("user_token")
    if(acess != null){
      navigate("/home");
    }
  },[])
  
  
  const handleSignin = (e)=>{
     e.preventDefault()
     if(!email | !password){
       setError("Input empty")
       return
     }
     
     const res = signin(email,password)
     if(res){
       setError(res)
       return
     }
     navigate("/home")
  }
    
  return(
   <>
    
     <form onSubmit={handleSignin}>
     	<div class="container" >
			<div class="text" >
				<span><h2>Sign-in</h2></span>
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
      text="Signin"
      onclick={handleSignin}
    />
			</div>
		</div>
   
    </form>
    
    <Link to="/signup">Sign-up</Link>
    </>
  )
}

export default Signin;
