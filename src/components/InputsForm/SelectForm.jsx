import React from 'react'

const SelectForm = ({children, name, onChange, value }) => {
  return (

    <select name={name}
    className="p-1 bg-slate-50 border-2 border-blue-500 rounded-md focus:border-violet-500 outline-orange-600" 

    id={name} onChange={onChange} value={value}>

    <option value="">Select Category</option>

        {children}

    </select>
  )
}

export default SelectForm