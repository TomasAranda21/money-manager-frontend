import React from 'react'

const ButtonsTypeTransaction = ({type, onClick}) => {

  return ( 
    <>
    
    <button onClick={onClick}
    className={`text-center font-bold text-lg md:text-2xl uppercase border-2 p-1 px-3
    focus:border-b-4 active:border-b-4 ${type === true ? 'focus:border-red-500' : 'focus:border-cyan-500'} `}>
      
    {` ${type === true ? 'Expense 💸' : 'Income 💵'}`}</button>
    
    </>

  )

}

export default ButtonsTypeTransaction