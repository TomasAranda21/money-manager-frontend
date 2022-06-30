import React from 'react'
import { Link } from 'react-router-dom'
import { BsPlusCircle } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiHome } from 'react-icons/hi';
import { FaHistory } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi'; 
import { useState } from 'react';
import ModalEditBudget from '../Modals/ModalEditBudget';


const Header = ({money, img, logOut}) => {


    const [isMovile, setIsMovile] = useState(false)

    const [viewModal, setViewModal] = useState(false)


  return (


    <header className="">

        <nav className="flex items-center justify-between relative">

        <div className="flex items-center justify-between container mx-auto relative p-5 ">

            <div className="flex flex-col md:flex-row items-center gap-2">
                <div className="h-14 w-14 md:h-20 md:w-20 overflow-hidden shadow-2xl border-2 border-cyan-300 rounded-full">
                    
                {img === 'img' || img == underline ?  <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="" className=" object-cover"/> 
                
                : <img src={img.url} alt="" className=" object-cover"/>
                
                }
                   
                
                </div>

                <div 
                className="flex items-center mb-4 md:mb-0 gap-2 text-sm md:text-xl font-semibold bg-slate-100 shadow-xl p-2 border-2 border-cyan-300 rounded">

                    <p> 💰 My Budget:</p>
                    <h2>${money}</h2>

                    <button onClick={() => setViewModal(true)}
                    className="text-green-500 font-bold text-xl md:text-2xl cursor-pointer hover:text-green-700 md:hover:text-3xl duration-300">
                        <BsPlusCircle />
                    </button>

                </div>

            </div>


            <div className="hidden md:flex md:flex-row items-center gap-5 font-semibold mt-10 md:mt-0 text-2xl md:text-base">

                <Link to='/home' className="">Home</Link>

                <Link to='/home/transactions'>History</Link>

                <button onClick={() => logOut()}>Log out</button>

            </div>

        </div>


            {/* Navbar mobile*/}
                <button className="px-8 text-2xl md:hidden absolute top-10 right-0" onClick={() => setIsMovile(true)}> <GiHamburgerMenu /></button>
                
                 {
                     
                isMovile &&
                 
                <div className="md:hidden absolute top-0 right-0 w-2/4">

                    <div className=" bg-slate-900 text-gray-200 p-5 w-full absolute top-0 right-0 text-md h-screen">

                            <button className="py-5 text-2xl font-bold" onClick={() => setIsMovile(false)}> X </button>

                        <div className=" flex flex-col items-center gap-24 pt-24">

                            <Link to='/home' className="flex gap-2 items-center">
                                <p className="text-2xl"><HiHome /></p>

                                Home

                            </Link>

                            <Link to='/home/transactions' className="flex gap-2 items-center">
                                <p className="text-2xl"><FaHistory /></p>

                                History

                            </Link>


                            <button  className="flex gap-2 items-center" onClick={() => logOut()}>
                                <p className="text-2xl"><BiLogOut /></p>

                                Log out
                            </button>

                        </div>
                    </div>
                    
                </div>
            }


        </nav>


        {viewModal && <ModalEditBudget setViewModal={setViewModal}/> }

    </header>

  )
}

export default Header