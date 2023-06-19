import React from 'react';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { FaVideo } from 'react-icons/fa';
import { MdCallEnd } from 'react-icons/md';
import { AiFillAudio } from 'react-icons/ai';
import { AiOutlineFullscreen } from 'react-icons/ai';
import Chatroom from '../Chatroom/Chatroom';
import ConferenceRoom from '../ConferenceRoom/ConferenceRoom';


const ConferencePage = () => {

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center '>
      <div className="w-full h-[88vh] flex ">
        <div className="w-[70%] h-full bg-green-200 ">
          <ConferenceRoom />
        </div>

        <div className="w-[30%] h-full p-[1rem] flex  ">
          <Chatroom />
        </div>
      </div>

      <div className="w-full h-[12vh] flex justify-center items-center gap-x-[3rem] border-[1px]  ">
        <button className='w-[7rem] h-[4rem] rounded-[0.5rem] text-[2.3rem] flex justify-center items-center bg-gray-200 '><FaVideo /></button>
        <button className='w-[7rem] h-[4rem] rounded-[0.5rem] text-[2.3rem] flex justify-center items-center bg-gray-200 '><AiFillAudio /></button>
        <button className='w-[7rem] h-[4rem] rounded-[0.5rem] text-[2.3rem] flex justify-center items-center bg-red-500 text-white '><MdCallEnd /></button>
        <button className='w-[7rem] h-[4rem] rounded-[0.5rem] text-[2.3rem] flex justify-center items-center bg-gray-200 '><AiOutlineFullscreen /></button>
        <button className='w-[7rem] h-[4rem] rounded-[0.5rem] text-[3.5rem] flex justify-center items-center bg-gray-200 '><AiOutlineEllipsis /></button>
      </div>
    </div>
  )
}

export default ConferencePage;