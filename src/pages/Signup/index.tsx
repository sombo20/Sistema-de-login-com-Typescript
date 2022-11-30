import {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Button from '../../components/Button'
import Input from '../../components/Input'
import useAuth from '../../hooks/useAuth'

function Signup(){
  const {signup} = useAuth()
  const navigate = useNavigate()
  
  const [email,setEmail] = useState<string>("")
  const [senha,setSenha] = useState<string>("")
  const [error,setError] = useState<string>("")
  
  const handlesignin = ()=>{
     if(!email | !senha){
       setError("Input empty")
       return
     }
     
     const res = signup(email,senha)
     if(res){
       setError(res)
       return
     }
     alert("Usuario cadastrado")
     navigate("/")
  }
    
  return(
     <>
     <h1>Signup</h1>
     <Input
       type="email"
       placeholder="Set your email.."
       value={email}
       onchange={(e)=>[setEmail(e.target.value),setError("")]}/>
         <Input
       type="password"
       placeholder="Set your senha..."
       value={senha}
       onchange={(e)=>[setSenha(e.target.value),setError("")]}/>
     <Button
      Text="Signin"
      onclick={handlesignin}
    />
    <p>{error}</p>
    </>
  )
}

export default Signup;