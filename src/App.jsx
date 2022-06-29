import { BrowserRouter, Routes, Route } from 'react-router-dom'


import { AuthProvider } from './context/AuthContext'


import AuthLayout from './layout/AuthLayout'



// Auth path
import Login from './pages/LoginUser'
import Register from './pages/RegisterUser'


function App() {

  return (
    <BrowserRouter>
      <AuthProvider>

          <Routes>


            <Route path="/" element={<AuthLayout/>}>

                  <Route index element={<Login />} /> 
             
            
                  <Route path="sign-in" element={ <Register />} />
          
            </Route>




          </Routes>

      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
