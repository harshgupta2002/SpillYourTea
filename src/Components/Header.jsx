import React from 'react'
import logo from "../Images/logo.png"

function Header() {
  return (
    <div>
        <header className=' flex justify-between items-center h-[8rem] overflow-hidden '>
            <div className='h-auto overflow-hidden'>
                <img className='h-[6rem] w-auto' src={logo}/>

            </div>
            <div>
                <ul className='flex gap-[5rem]'>
                    <a><li className=' duration-300 relative cursor-pointer'>Home</li></a>
                    <a><li className=' duration-300 relative cursor-pointer'>Category</li></a>
                    <a><li className=' duration-300 relative cursor-pointer'>About Us</li></a>
                    <a><li className=' duration-300 relative cursor-pointer'>My Profile</li></a>
                    
            
                </ul>
            </div>

        </header>
    </div>
  )
}

export default Header