import React from 'react'
import banner from "../Images/banner.png"

function Home() {
  return (
    <div>
        <div className=' flex justify-between gap-[4rem] items-center overflow-hidden rounded-lg h-[40vh] w-full bg-[#E7E7D6]'>
            <div className=' ml-[5rem] w-1/2'>
                <p className='text-black text-6xl'>Share the Gossip, Share the Buzz!</p>
                <div>
                    <button className=' hover:shadow-black h-[3rem] w-[6rem] mt-4 flex justify-center items-center border border-black text-black leading-normal rounded-[2rem]'>Gossip!</button>
                </div>
            </div>
            <div className=' h-[auto] w-[32rem]'>
                <img className=' object-cover' src={banner}/>
            </div>
        </div>
    </div>
  )
}

export default Home