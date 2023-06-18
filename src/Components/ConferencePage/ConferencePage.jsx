import React from 'react';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { FaVideo } from 'react-icons/fa';
import { MdCallEnd } from 'react-icons/md';
import { AiFillAudio } from 'react-icons/ai';
import { AiOutlineFullscreen } from 'react-icons/ai';
import Chatroom from '../Chatroom/Chatroom';




const ConferencePage = () => {

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center '>
      <div className="w-full grow flex bg-red-200 ">
        <div className="w-[70%] h-full bg-green-200 "></div>

        <div className="grow h-full p-[1rem] flex bg-green-500 ">
          <Chatroom />
        </div>
      </div>

      <div className="w-full h-[15vh] flex justify-center items-center gap-x-[3rem] border-[1px] border-black ">
        <button><FaVideo className='text-[2rem] bg-gray-200 w-auto h-auto px-[3rem] py-[1.2rem] rounded-[1rem] border-[1px] border-black ' /></button>
        <button><AiFillAudio className='text-[2rem] bg-gray-200 w-auto h-auto px-[3rem] py-[1.2rem] rounded-[1rem] border-[1px] border-black ' /></button>
        <button><MdCallEnd className='text-[2rem] bg-gray-200 w-auto h-auto px-[3rem] py-[1.2rem] rounded-[1rem] border-[1px] border-black ' /></button>
        <button><AiOutlineFullscreen className='text-[2rem] bg-gray-200 w-auto h-auto px-[3rem] rounded-[1rem] py-[1.2rem] border-[1px] border-black ' /></button>
        <button><AiOutlineEllipsis className='text-[2rem] bg-gray-200 w-auto h-auto px-[3rem] rounded-[1rem] py-[1.2rem] border-[1px] border-black ' /></button>
      </div>
    </div>
  )
}

export default ConferencePage;