import React, { useState } from 'react'
import { ExpenseCategory, IncomeCategory } from '../../helpers/ArrOfCaregory'
import FormAddOperation from '../Form/FormAddOperation'

const ModalEditOperation = ({setViewModal, editOperation,  editionOper, alert, type}) => {

  return (
     
    <div className="absolute top-0 w-full h-screen left-0 backdrop-brightness-50">

      <div className="flex justify-center my-32">

        {type === 'expense' ?

        <div className="w-full md:w-1/2 lg:w-1/3 px-4 lg:px-20">
            <FormAddOperation
            setViewModal = {setViewModal} 
            functionUser={editOperation}

            amount={editionOper.amount}
            concept={editionOper.concept}
            category={editionOper.category}
            data={editionOper.data}

            editing={true}

            arrCategory={ExpenseCategory}
            type={true}
            alert={alert}

            
            /> 
        </div>

        : 
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 lg:px-20">

            <FormAddOperation 
            setViewModal = {setViewModal} 
            functionUser={editOperation}
            amount={editionOper.amount}
            concept={editionOper.concept}
            category={editionOper.category}
            data={editionOper.data}

            

            editing={true}
            arrCategory={IncomeCategory}
            alert={alert}
            /> 

        </div>
        
        }

      </div>
      
    </div>
  )
}

export default ModalEditOperation