import {
     createContext,
     useState,
     useEffect
    } from 'react'

export const AuthContext = createContext({});

export const AuthProvider = ({children})=>{
  const [user,setUser] = useState("")
  
  useEffect(()=>{
     const token = localStorage.getItem("user_token")
     
     const db = localStorage.getItem("users_db")
     
     if(token && db){
       const validate = JSON.parse(db).filter((user)=> user.email === JSON.parse(token).email)
       if(validate){
         setUser(validate[0])
       }
     }
  },[])
  
  localStorage.getItem("user_token","")
  const signin = (email:string,password:string)=>{
      const usersStorage = JSON.parse(localStorage.getItem("users_db"))
      
      const hasUser = usersStorage?.filter((user)=>user.email === email)
      
      if(hasUser?.length){
        if(hasUser[0].email === email && hasUser[0].password === password){
          const token = Math.random().toString(36).substring(2)
          
          localStorage.setItem("user_token",JSON.stringify({email,token}));
          
          setUser({email,password})
          return 
        }else{
          
          return "Email or Password wrong"
        }
      }else{
        return "Usuario not register"
      }
    }
    
  const signup = (email:string,password:string)=>{
     const usersStorage = JSON.parse(localStorage.getItem("users_db"))
     
     const hasUsers = usersStorage?.filter((user)=>user.email === email)
     
     if(hasUsers?.length){
       return "That email was register"
     }
     
    let newUser;
    if(usersStorage){
      newUser = [...usersStorage,{email,password}]
    }else{
      newUser = [{email,password}]
    }
    localStorage.setItem("users_db",JSON.stringify(newUser));
    return
  }
  
  const signout = ()=>{
    setUser(null)
    localStorage.removeItem("user_token")
  }
  
  return(
    <AuthContext.Provider
      value={{signin,signup,signout}}>{children}</AuthContext.Provider>
  )
}