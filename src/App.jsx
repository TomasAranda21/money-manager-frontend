import { BrowserRouter, Routes, Route } from 'react-router-dom'


import { AuthProvider } from './context/AuthContext'

import { OperationProvider } from './context/OperationContext'




// Auth path
import AuthLayout from './layout/AuthLayout'
import Login from './pages/LoginUser'
import Register from './pages/RegisterUser'


// Private path

import PrivateLayout from './layout/PrivateLayout'
import Home from './pages/HomeUser'
import History from './pages/HistoryUser'



function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <OperationProvider>

          <Routes>


            <Route path="/" element={<AuthLayout/>}>

                  <Route index element={<Login />} /> 
             
            
                  <Route path="sign-in" element={ <Register />} />
          
            </Route>


            <Route path="/home" element={<PrivateLayout/>}>

              <Route index element={<Home />} /> 


              <Route path="transactions" element={ <History />} />


            </Route>


          </Routes>

        </OperationProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
