import React from 'react';
import { FaHeart, FaShare, FaComment } from 'react-icons/fa';
import { FaRegHeart } from "react-icons/fa";

import { FaRegCommentDots } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";





const Card = (props) => {

  const CardButton = ({ icon, label }) => (
    <div className="card-button flex gap-2 items-center bg-none border-none cursor-pointer">
      {icon} <span className=' text-xs text-[#808080d0]'>{label}</span>
    </div>
  );

  return (
    <div className="justify-center p-2 items-center cursor-pointer card bg-[#1E1E1D] rounded-lg shadow-lg text-white text-left flex flex-col w-[18rem] gap-4 max-h-[31rem]">
      <div className=" h-[15rem] w-[100%]">
        <div style={{ backgroundImage: `url(${props.titleBack})`, backgroundPosition: "center", backgroundSize: "cover" }} className="w-full p-5 h-full font-manrope font-extrabold text-5xl object-cover rounded-t-lg" >{props.title}</div>
      </div>
      <div className="w-full card-details">
        <div className='flex gap-2 justify-between items-center'>
          <div className='flex gap-2 justify-center items-center'>
            <div className='w-[2.8rem] h-[2.8rem] rounded-[100%] overflow-hidden'>
              <img src={props.userPic} />
            </div>
            <div className='userName text-sm text-[#ffffffd7]' id='userName'>
              <p className="author m-0">{props.author}</p>
              <p className=' text-xs'>@{props.userName}</p>
            </div>
          </div>
          <div><p className=' text-3xl'>{props.categoryEmo}</p></div>
        </div>
      </div>

      <div>
        <p className='line-clamp-3 text-sm text-[#ffffffd7] pl-1 pr-1'>
          This is a story about the last night I was at a party with a couple of my friends and where I met this guy who was dancing in between the hall room alng with his friends.
        </p>
        <a className='hover:underline cursor-pointer text-sm pl-1'>Read More...</a>
      </div>

      <div className='w-full text-sm pl-1'>
        <p className=' float-left text-xs text-[#808080d0]'>Posted on: {props.date}</p>
      </div>

      <div className="card-actions w-full flex justify-around pb-2 bg-[#1E1E1D] rounded-b-lg">
        <CardButton className=" font-extrabold" icon={<FaRegHeart color='#808080d0' size={14} />} label={props.likes} />
        <CardButton icon={<FaRegCommentDots color='#808080d0' size={14} />} label={props.comments} />
        <CardButton icon={<IoMdShare color='#808080d0' size={14} />} label={props.share} />
      </div>
    </div>

  );
};

export default Card;

