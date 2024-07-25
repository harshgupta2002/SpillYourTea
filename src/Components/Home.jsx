import React from 'react'
import banner from "../Images/banner.png"
import PostView from './PostView/PostView'

function Home() {
  return (
    <div className='mt-[5.5rem] ml-[14.5rem] w-[82%] flex flex-col gap-[1rem]'>

        <PostView/>        

        <div className=' flex justify-between gap-[4rem] items-center overflow-hidden rounded-2xl h-[45vh] w-full bg-[#E7E7D6]'>
            <div style={{fontFamily:'"Corben", serif'}} className=' ml-[5rem] w-1/2'>
                <p className='text-black text-6xl leading-[.9]'>Share the Gossip, Share the Buzz!</p>
                <div>
                    <button className=' hover:shadow-black h-[3rem] w-[auto] pl-6 pr-6  mt-4 flex justify-center items-center border border-black text-black leading-normal rounded-[2rem]'>Spill the Tea!</button>
                </div>
                
            </div>
            <div className=' h-[auto] w-[32rem]'>
                <img className=' object-cover' src={banner}/>
            </div>
        </div>

        <div className='flex justify-between'>
            <div className="rounded-2xl h-[100vh] w-[68%] bg-gradient-to-r from-[#2c2c2c] to-[#2c2c2c65] shadow-lg">

            </div>
            <div className='rounded-2xl h-[100vh] w-[30%] bg-gradient-to-r from-[#2c2c2c] to-[#2c2c2c65] shadow-lg'>

            </div> 
        </div>



    </div>
  )
}

export default Home