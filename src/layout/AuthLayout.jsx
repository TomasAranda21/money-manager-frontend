import { Outlet } from 'react-router-dom'

const AuthLayout = () => {

    return (

        <>  
        <div className="bg-gradient-to-r from-red-400 to-gray-500 min-h-screen w-full">

            <main className= 'container mx-auto p-10 pt-20'>
            < Outlet /> 
        
            </main>

        </div>
    
        </>
    )
}


export default AuthLayout