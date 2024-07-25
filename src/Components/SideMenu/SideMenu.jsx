import React from 'react'
import SideMenuOpt from './SideMenuOpt'
import { IoMdHome } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FaFire } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { IoMdSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa";


const MenuOpt = [
    {
        name: "Home",
        icon: <IoMdHome
            size={18}
        />
    },
    {
        name: "Categories",
        icon: <IoIosArrowDropdownCircle
            size={18}
        />
    },
    {
        name: "Trending Gossips",
        icon: <FaFire
            size={18}
        />
    },
    {
        name: "Liked Gossips",
        icon: <FcLike 
            size={18}
        />
    },
    {
        name: "Settings",
        icon: <IoMdSettings 
            size={18}
        />
    },
    {
        name: "Profile",
        icon: <FaUser 
            size={18}
        />
    },

]

function SideMenu() {
    return (
        <div className='mt-[4rem] fixed w-[16%] h-screen border-r-[#80808073] border-r'>
            <div className='flex pr-[1rem] flex-col justify-between gap-[4rem]'>
                <ul className='text-sm'>
                    {MenuOpt.map((opt) => {
                        return (<SideMenuOpt
                            name={opt.name}
                            icon={opt.icon}
                        />)
                    })}
                </ul>
                <ul className='  pl-4 pr-4 font-[sans-serif] text-sm flex justify-center flex-col'>
                    <li className='hover:underline cursor-pointer'>About</li>
                    <li className='hover:underline cursor-pointer'>Terms & Conditions</li>
                    <li className='hover:underline cursor-pointer'>Privacy & Policy</li>
                    <li className='hover:underline cursor-pointer'>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

export default SideMenu