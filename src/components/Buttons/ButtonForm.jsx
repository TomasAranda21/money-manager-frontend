import React from 'react'

const ButtonForm = ({text}) => {
  return (

   <button className="text-white bg-indigo-500 hover:bg-indigo-600 duration-300 font-semibold p-3 px-5 rounded-md w-full" type="submit">{text}</button>

  )
}

export default ButtonForm