import RouterApp from './routes';
import {AuthProvider} from './context/auth'

function App(){
  return(
      <AuthProvider>
        <RouterApp/>
      </AuthProvider>
  )
}

export default App;