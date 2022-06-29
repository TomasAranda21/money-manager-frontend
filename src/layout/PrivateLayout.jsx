import { Outlet, Navigate } from 'react-router-dom'

import Header from '../components/Header/HeaderMain'

import useAuth from '../hooks/useAuth'
import useOperation from '../hooks/useOperation'

const PrivateLayout = () => {


    const { auth, loading} = useAuth()

    const { loadingOper } = useOperation()

    if(loading) return 'cargando'

    if(loadingOper) return 'cargando'

    return (
        <>
            <Header money={auth.budget} img={auth.img}/>
  
            { auth?._id ? (
            <main className="container mx-auto mt-13">
              <Outlet /> 
              
            </main>
            ): <Navigate to="/" /> }
  
        </>
    )



}

export default PrivateLayout