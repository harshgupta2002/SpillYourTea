import React from 'react'

function SideMenuOpt(props) {
    return (
        <li className='h-10 my-4 font-[sans-serif] hover:bg-[#80808073] cursor-pointer duration-300 pl-4 pr-4 hover:rounded-lg flex justify-between items-center'>
            <span>{props.name}</span>
            <span>{props.icon}</span>

        </li>
    )
}

export default SideMenuOpt