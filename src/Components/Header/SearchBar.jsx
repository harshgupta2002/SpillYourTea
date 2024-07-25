import React from 'react'
import { FaSearch } from "react-icons/fa";


function SearchBar() {
    return (
        <div>
            <div className='flex justify-between w-[30rem] border border-[#4A4A4A] rounded-[2rem] overflow-hidden bg-[#80808021] h-10 text-sm'>
                <input name='search' placeholder='Search Profile' className=' w-full pl-8 focus:outline-none bg-transparent '/>
                <button className='w-24 hover:bg-[#ff5900d5] flex justify-center items-center bg-[#ff5800] rounded-[2rem]'><FaSearch size={16}/></button>
            </div>
        </div>
    )
}

export default SearchBar