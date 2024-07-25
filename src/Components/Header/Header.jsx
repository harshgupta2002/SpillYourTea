import React from 'react'
import logo from "./logo.png";
import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import SearchBar from './SearchBar';


function Header() {
  return (
    <div className='fixed left-0 w-full border-b-[#b82c2c]'>
        <header className=' bg-[#1E1E1D] pr-10 pl-10 flex justify-between items-center h-[4rem] overflow-hidden'>
            <div className='h-auto overflow-hidden'>
                <img className='h-[5rem] w-auto' src={logo}/>

            </div>

            <div>
                <SearchBar/>
            </div>

            <div>
                <ul className=' font-[sans-serif] flex justify-center items-center gap-[.5rem]'>
                    <a><li className=' rounded-lg hover:bg-[#80808073] p-2 duration-300 relative cursor-pointer'><IoMdHome size={30} color='#FF5800'/></li></a>
                    <a><li className=' rounded-lg hover:bg-[#80808073] p-2 duration-300 relative cursor-pointer'><IoMdNotifications  size={30}/></li></a>
                    <a><li className=' rounded-lg hover:bg-[#80808073] p-3 duration-300 relative cursor-pointer'><FaUser size={22}/></li></a>
                    <a><li className=' rounded-[100%] hover:bg-[#80808073] p-4 duration-300 relative cursor-pointer'><BsThreeDots /></li></a>
                    
            
                </ul>
            </div>

        </header>
        <hr className="border-[#80808073]"></hr>

    </div>
  )
}

export default Header