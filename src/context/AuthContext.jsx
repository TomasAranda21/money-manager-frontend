import React, {useState, useEffect} from 'react'
import { createContext } from 'react'
import Axios from '../config/Axios'
import checkToken from '../helpers/CheckToken'

import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2/dist/sweetalert2.all.js';


const AuthContext = createContext()

export const AuthProvider = ({children}) => {

  const [auth, setAuth] = useState({})

  const [loading, setLoading] = useState(true)

  const [alert, setAlert ] = useState({});

  const token = localStorage.getItem('token_user000123040501')

  const MySwal = withReactContent(Swal)



  useEffect(() => {

    const authUser = async () => {

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



  }, [auth])

  
  
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

    try {

      const {data} = await Axios.post('/register-users', { name, email, password})

      setAlert({
        msg: "Your account was created successfully!, Now you can login",
        error: false
      })

      setTimeout(() => {
  
        window.location.href = "/"
  
      }, 1000)

    } catch (error) {
      
      setAlert({
        msg: error?.response.data.msg,
        error:true
      })
      
      return
    }

    
  }


  const updateBudget = async ({ id, budget }) => {

    try {

      const {data} = await Axios.put(`/update-budget/${id}`, {budget}, checkToken(token))

      setAuth(data)


      await MySwal.fire({
        position: 'top-end',
        icon: 'success',
        title: "Congratulations change made successfully!",
        showConfirmButton: false,
        timer: 1500
      })


    } catch (error) {

      console.log(error)

      return
      
    }

    
  }



  const logOut = async () => {


        MySwal.fire({
            title: 'Are you sure you want to log out?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if (result.isConfirmed) {

                localStorage.removeItem('token_user000123040501')

                setAuth({})
                
                return
            }
          })

  }




  return (
    <AuthContext.Provider
    value={{
      registerUser,
      loginUser,
      updateBudget,
      logOut,
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