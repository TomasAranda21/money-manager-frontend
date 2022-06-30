import {Formik} from 'formik'
import exp_reg from '../../helpers/Exp_reg'
import AlertAuth from '../Alerts/AlertAuth'
import AlertInputs from '../Alerts/AlertInputs'
import ButtonForm from '../Buttons/ButtonForm'
import InputsForm from '../InputsForm/InputsForm'
import SelectForm from '../InputsForm/SelectForm'

const FormAddOperation = ({handleComeBack, functionUser, setViewModal, amount, concept, category, data ,editing, type, arrCategory, alert}) => {


    const {name_exp, budget_exp} = exp_reg


  return (

    <>
    <div className="shadow-2xl bg-gray-100 rounded">

        <Formik
        initialValues={{
            amount,
            concept,
            category,
            data,
        }}


        validate={({amount, concept, category, data}) => {

            let errors = {}

            if(!amount){

                errors.amount = 'Enter a valid amount.'

            }else if(!budget_exp.test(amount)){

                errors.amount = 'Please only numbers and at most 12 digits.'

            }else if(amount < 0){

                errors.amount = 'Please only numbers greater than 0.'

            }

            if(!category){

                errors.category = 'Please choose a category.'

            }else if(!arrCategory.some(e => [category].includes(e))){

                errors.category = 'Enter a valid category.'
            }


            if(!concept){

                errors.concept = 'Enter a valid concept.'

            }else if(!name_exp.test(concept)){
                errors.concept = 'No special characters allowed.'
            }

            if(!data){

                errors.data = 'Enter a valid data.'
            }




            return errors

        }}


        onSubmit={async (values) => {
            console.log(values)

            // functionUser(values)
            
        }}
        
        >

        {({handleSubmit, values,errors, touched, handleChange, handleBlur}) => (

          <div className="flex relative">
                {alert.msg && <AlertAuth text={alert.msg} error={alert.error}/>}

                <form action="" onSubmit={handleSubmit} className=" w-full flex flex-col gap-5 p-5 py-7">

                    <div>

                        <InputsForm
                        type="number"
                        value={values.amount}
                        onChange={handleChange}
                        name="amount"

                        touched={ touched.amount}
                        error={errors.amount}
                        onBlur={handleBlur}
                        />
                        <div className="mt-1">
                            {errors.amount && touched.amount && <AlertInputs error={errors.amount}/>}
                        </div>

                    </div>

              <div className="w-full mx-auto">
                    <SelectForm name="category" onChange={handleChange} 
                    value={values.category}    
                    touched={ touched.category}
                    error={errors.category}
                    onBlur={handleBlur}>

                      {arrCategory.map(cat => (

                      <option value={cat} key={cat}>{cat}</option>

                      ))}

                    </SelectForm>
                    <div className="mt-1">
                        {errors.category && touched.category && <AlertInputs error={errors.category}/>}
                    </div>
              </div>


                
                <div>

                    <InputsForm
                    type="text"
                    value={values.concept}
                    onChange={handleChange}
                    name="concept"

                    touched={ touched.concept}
                    error={errors.concept}
                    onBlur={handleBlur}
                    />
                    <div className="mt-1">
                        {errors.concept && touched.concept && <AlertInputs error={errors.concept}/>}
                    </div>
                </div>


                    <div>
                        <InputsForm
                        type="date"
                        value={values.data}
                        onChange={handleChange}
                        name="data"

                        touched={ touched.data}
                        error={errors.data}
                        onBlur={handleBlur}
                        />
                        <div className="mt-1">
                            {errors.data && touched.data && <AlertInputs error={errors.data}/>}
                        </div>

                    </div>

                    <div className="mt-2">
                        <ButtonForm text='Add'/>
                    </div>


                </form>

             
                
            </div>

        )}

    </Formik>

</div>
   
   </>

  )
}

export default FormAddOperation