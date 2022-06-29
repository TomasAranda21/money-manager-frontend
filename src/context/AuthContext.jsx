import React, {useState, useEffect} from 'react'
import { createContext } from 'react'
import Axios from '../config/Axios'
import checkToken from '../helpers/CheckToken'

const AuthContext = createContext()

export const AuthProvider = ({children}) => {

  const [auth, setAuth] = useState({})

  const [loading, setLoading] = useState(true)

  const [alert, setAlert ] = useState({});


  useEffect(() => {

    const authUser = async () => {

      const token = localStorage.getItem('token_user000123040501')

      if(!token){

        setLoading(false)
        return

      }

      try {
        
        const { data } = await Axios('/profile', checkToken(token))

        setAuth(data)


      } catch (error) {
        
        setAuth({})

        return {
          msg: error?.response.data.msg,
          error: true
        }

      }

      setLoading(false)

    }

    authUser()



  }, [])

  
  
  const loginUser = async ({ email, password }) => {
    
    try {
      
      const {data} = await Axios.post('/login', {  email, password})
      
      localStorage.setItem('token_user000123040501', data.token)
      
        setAuth(data)
        
        window.location.href = "/home"

        
      } catch (error) {
        
        setAlert({
          msg: error?.response.data.msg,
          error:true
        })
        
        setTimeout(() => {

          setAlert({})

        }, 5000)
        
        
      }
      
    }
    
  const registerUser = async ({ name, email, password}) => {

    console.log(name)

    try {

      await Axios.post('/register-users', { name, email, password})
      
    } catch (error) {
      console.log(error)
    }

  }






  return (
    <AuthContext.Provider
    value={{
      registerUser,
      loginUser,
      auth,
      loading,
      alert,


    }}
    >

    {children}

    </AuthContext.Provider>
  )



}


export default AuthContext