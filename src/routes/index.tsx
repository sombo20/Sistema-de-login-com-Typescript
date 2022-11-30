import {Fragment} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Main from '../pages/Home'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import Error from '../pages/Error'
import useAuth from '../hooks/useAuth'



function RouterApp(){
  return(
     <BrowserRouter>
       <Fragment>
         <Routes>
           <Route path="/" element={<Signin/>}/>
           <Route exact path="/home" element={<Main/>}/>
           <Route path="/signup" element={<Signup/>}/>
           <Route path="*" element={<Error/>}/>
         </Routes>
       </Fragment>
     </BrowserRouter>
  )
}

export default RouterApp