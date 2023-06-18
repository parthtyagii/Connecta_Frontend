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
      <div className="w-full h-[85vh] flex ">
        <div className="w-[70%] h-full bg-green-200 "></div>

        <div className="w-[30%] h-full p-[1rem] flex  ">
          <Chatroom />
        </div>
      </div>

      <div className="w-full h-[15vh] flex justify-center items-center gap-x-[3rem] border-[1px] border-black ">
        <button className='w-[7rem] h-[5rem] rounded-[0.5rem] text-[2.3rem] flex justify-center items-center bg-gray-300 '><FaVideo /></button>
        <button className='w-[7rem] h-[5rem] rounded-[0.5rem] text-[2.3rem] flex justify-center items-center bg-gray-300 '><AiFillAudio /></button>
        <button className='w-[7rem] h-[5rem] rounded-[0.5rem] text-[2.3rem] flex justify-center items-center bg-gray-300 '><MdCallEnd /></button>
        <button className='w-[7rem] h-[5rem] rounded-[0.5rem] text-[2.3rem] flex justify-center items-center bg-gray-300 '><AiOutlineFullscreen /></button>
        <button className='w-[7rem] h-[5rem] rounded-[0.5rem] text-[3.5rem] flex justify-center items-center bg-gray-300 '><AiOutlineEllipsis /></button>
      </div>
    </div>
  )
}

export default ConferencePage;