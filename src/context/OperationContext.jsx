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



    }, [operations])



    const addOperation = async (value) => {

        try {

            const { data } = await Axios.post('/', value, checkToken(token))
    
            setOperations([data, ...operations])
            
        } catch (error) {

            console.log(error)
            
        }

    }

    const updateOperation = async (values) => {

        try {

            const {data} = await Axios.put(`/${editionOper._id}`, values, checkToken(token))

            const updatedOperations = operations.map(oper => oper._id === data._id ? data : oper)


            setOperations(updatedOperations)

        } catch (error) {
            console.log(error)
        }

    }


    const setEdition = (oper) => {

        setEditionOper(oper)

    }


    const deleteOperation = async ({id, _id}) => {

    const deleted = confirm('Sure you want to delete?')

    if(deleted) {

        try {
            const {data} = await Axios.post(`/${id[0]}`, {_id}, checkToken(token))


            const operationsDelete = operations.filter(operation => operation._id !== id)
            
            setOperations(operationsDelete)
            
        } catch (error) {
            console.log(error)
        }
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