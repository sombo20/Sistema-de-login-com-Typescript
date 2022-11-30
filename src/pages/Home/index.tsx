import {useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Button from '../../components/Button'
import Input from '../../components/Input'
import useAuth from '../../hooks/useAuth'

function Main(){
  const {signout} = useAuth()
  const navigate = useNavigate()
  
  useEffect(()=>{
    var acess = localStorage.getItem("user_token")
    if(acess === null){
      navigate("/");
    }
  },[])
  
 
  const handlogout = ()=>{
     signout()
    navigate("/")
  }
    
  return(
     <>
     <h1>Home</h1>
     
     <Button
      Text="Logout"
      onclick={handlogout}
    />
   
    </>
  )
}

export default Main