import { Formik } from 'formik'
import React from 'react'
import exp_reg from '../../helpers/Exp_reg'
import AlertAuth from '../Alerts/AlertAuth'
import AlertInputs from '../Alerts/AlertInputs'
import ButtonClose from '../Buttons/ButtonClose'
import ButtonForm from '../Buttons/ButtonForm'
import InputsForm from '../InputsForm/InputsForm'

const FormEditBudget = ({setViewModal, functionOperation, id, alert, user_budget}) => {

    const { budget_exp} = exp_reg


  return (

    <div className="shadow-2xl bg-gray-100 rounded md:w-1/2 mx-auto my-40 p-5 relative">

        <h2 className="text-center md:text-2xl underline uppercase font-medium text-stone-800">Change your budget here</h2>

        <div className="border border-yellow-600 md:w-2/3 mx-auto my-5 p-2">
            <p className="text-center text-xl font-medium ">Your current budget is: 
            
            <span className="text-orange-700 font-bold"> ${user_budget}</span></p>

        </div>

        <Formik
        initialValues={{
            budget : ''
        }}

        validate={({budget}) => {

            let errors = {}

            if(!budget){

                errors.budget = 'Enter a valid budget.'

            }else if(!budget_exp.test(budget)){
                errors.budget = 'Please only numbers and at most 12 digits.'
            }

            return errors

        }}


        onSubmit={({budget}) => {
            console.log(budget)

            functionOperation({id, budget})

        }}
        
        >

            {({handleSubmit,values, handleChange, handleBlur, errors, touched}) => (

                <form action="" className="p-5 md:w-2/3 mx-auto" onSubmit={handleSubmit}>
                    
                    <div className="mb-5">
                        <InputsForm 
                        type="number"
                        value={values.budget}
                        onChange={handleChange}
                        name="budget"
                        placeholder='Please enter your new budget '

                        touched={ touched.budget}
                        error={errors.budget}
                        onBlur={handleBlur}
                        />

                        <div className="mt-1">
                            {errors.budget && touched.budget && <AlertInputs error={errors.budget}/>}
                        </div>

                    </div>

                    {alert.msg && <AlertAuth text={alert.msg} error={alert.error}/>}


                    <div className="mt-10 w-2/3 mx-auto">
                        <ButtonForm text='update budget'/>
                    </div>

                </form>

            )}


        </Formik>


        <ButtonClose onClick={() => setViewModal(false)}/>

    </div>

  )
}

export default FormEditBudget