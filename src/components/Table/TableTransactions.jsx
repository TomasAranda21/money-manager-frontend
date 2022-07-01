import React, { useEffect, useState } from 'react'

import { formatDate } from '../../helpers/FormatDate'


const TableTransactions = ({type, operations, deleteOperation, setEdition, setViewModal, isType, _id}) => {

    const [typeOperation, setTypeOperation] = useState([])

    useEffect(() => {

        const filterOperations = operations?.filter(e => e.type === type)

        setTypeOperation(filterOperations)


    }, [operations])


  return (

    <div className={`border-b-2 md:w-2/3   w-full mx-auto overflow-auto   rounded-xl p-5 
    ${type !== 'expense' ? 'border-cyan-500' : 'border-red-600'}   `}>  


        <table className="w-full ">
            
            <thead className=" ">
                <tr className={`${type !== 'expense' ? 'bg-cyan-500' : 'bg-red-600'} text-white font-bold `}>
                    <th className="py-3 px-3">Amount 💷</th>
                    <th>Category 🧮</th>
                    <th>Concept 📝</th>
                    <th>Date 🗓</th>
                    <th></th>
                </tr>
            </thead>

       
            <tbody className="">
                {typeOperation?.map(oper => (

                    <tr className="text-center border hover:bg-slate-200 capitalize" key={oper._id}>

                        <td>${oper.amount}</td>

                        <td>{oper.category}</td>

                        <td>{oper.concept}</td>

                        <td className="">{formatDate(oper.date)}</td>

                        <td className="flex gap-5 my-5">

                            <button onClick={() => {
                            
                            isType(oper.type)
                            setViewModal(true)
                            setEdition(oper)

                            }}>🖊</button>

                            <button onClick={() => deleteOperation({id: [oper._id] , _id})}
                            
                            >🗑</button>
                            
                        </td>

                    </tr>

                ))}

            </tbody>
        </table>

    </div>

  )
}

export default TableTransactions