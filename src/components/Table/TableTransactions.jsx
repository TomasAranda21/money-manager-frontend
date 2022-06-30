import React, { useEffect, useState } from 'react'

import { format} from 'date-fns'
import esLocale from 'date-fns/locale/es'


const TableTransactions = ({type, operations, deleteOperation, setEdition, setViewModal, isType}) => {

    const [typeOperation, setTypeOperation] = useState([])

    function formatDate (data) {
        const [ year, month, day ] = data.substr(0, 10).split('-')
        return format(new Date(
                year,
                (month - 1),
                day,
        ), "LLL 'of' do yyyy", )
    }

    useEffect(() => {

        const filterOperations = operations?.filter(e => e.type === type)

        setTypeOperation(filterOperations)


    }, [type])


  return (

    <div>
        <table className={`w-2/3 mx-auto border-b-2 rounded-xl ${type !== 'expense' ? 'border-cyan-500' : 'border-red-600'}  p-5 shadow-xl`}>
            <thead className="">
                <tr className={`${type !== 'expense' ? 'bg-cyan-500' : 'bg-red-600'} text-white font-bold `}>
                    <th className="py-3">Amount 💷</th>
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

                        <td>{formatDate(oper.date)}</td>

                        <td className="flex gap-5 my-5">

                            <button onClick={() => {
                            
                            isType(oper.type)
                            setViewModal(true)
                            setEdition(oper)

                            }}>🖊</button>

                            <button onClick={() => deleteOperation(oper._id)}
                            
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