import {Formik} from 'formik'
import ButtonForm from '../Buttons/ButtonForm'
import InputsForm from '../InputsForm/InputsForm'
import SelectForm from '../InputsForm/SelectForm'

const FormAddOperation = ({handleComeBack, functionUser, setViewModal, amount, concept, category, data ,editing, type, arrCategory}) => {
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

        onSubmit={async (values) => {

            functionUser(values)
            
        }}
        
        >

        {({handleSubmit, values, handleChange}) => (

          <div className="flex relative">

                <form action="" onSubmit={handleSubmit} className=" w-full flex flex-col gap-5 p-5 py-7">

                    <InputsForm
                    type="number"
                    value={values.amount}
                    onChange={handleChange}
                    name="amount"
                    /> 

              
                    <SelectForm name="category" onChange={handleChange} value={values.category}>

                      {arrCategory.map(cat => (

                      <option value={cat} key={cat}>{cat}</option>

                      ))}

                    </SelectForm>


                    <InputsForm
                    type="text"
                    value={values.concept}
                    onChange={handleChange}
                    name="concept"
                    />


                    <InputsForm
                    type="date"
                    value={values.data}
                    onChange={handleChange}
                    name="data"
                    />

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