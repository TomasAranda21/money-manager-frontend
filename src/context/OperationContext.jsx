import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import Axios from '../config/Axios'
import checkToken from '../helpers/CheckToken'

const OperationContext = createContext()



export const OperationProvider = ({children}) => {

    const [operations, setOperations] = useState([])

    const [loadingOper, setLoadingOper] = useState(true)

    const [editionOper, setEditionOper] = useState([])

    const token = localStorage.getItem('token_user000123040501')

    useEffect(() => {

        const getOperation = async () => {

            try {

                const {data} = await Axios('/', checkToken(token))
    
                setOperations(data)
                
            } catch (error) {
                
                console.log(error)

            }

            setLoadingOper(false)

        }
        
        getOperation()


    }, [])



    const addOperation = async (value) => {

        try {

            const { data } = await Axios.post('/', value, checkToken(token))
    
            console.log(data)
            
        } catch (error) {

            console.log(error)
            
        }

    }

    const updateOperation = async (id) => {

        console.log(id)

    }


    const setEdition = (oper) => {

        console.log(oper)
        setEditionOper(oper)

    }


    const deleteOperation = async (id) => {

        try {
            const {data} = await Axios.delete(`/${id}`, checkToken(token))

            const operationsDelete = operations.filter(operation => operation._id !== id)

            setOperations(operationsDelete)
            
        } catch (error) {
            console.log(error)
        }


    }




  return (

    <OperationContext.Provider

    value={{
        addOperation,
        updateOperation,
        deleteOperation,
        setEdition,
        editionOper,
        operations,
        loadingOper


    }}

    >

    {children}

    </OperationContext.Provider>

  )
}

export default OperationContext