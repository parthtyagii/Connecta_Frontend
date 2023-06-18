import React from 'react';
import {TiLocationArrow} from 'react-icons/ti';



const Chatroom = () => {
    return (
        <div className='w-full h-full p-[1.5rem] flex flex-col bg-pink-400  '>
            <div className="w-full p-[0.5rem] flex bg-yellow-400  " >
                <div className="w-[50%] text-[1.3rem] font-[700] p-[1rem] rounded-[1rem] flex justify-center items-center bg-green-400  ">Messages( )</div>
                <div className="w-[50%] text-[1.3rem] font-[700] p-[1rem] rounded-[1rem] flex justify-center items-center bg-green-400  ">Participants( )</div>
            </div>

            <div className="w-full mt-[2rem] mb-[2rem]  relative ">
                <span className='bg-gray-100 text-[1.2rem] font-[500] px-[2rem] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  '>Messages</span>
                <hr className='border-[2px] border-white ' />
            </div>

            <div className="w-full flex grow bg-yellow-200 ">

            </div>

            <div className="w-full p-[0.5rem] flex bg-red-400 ">
                <input className='h-[6vh] flex grow  ' type="text" placeholder='Write x x xa messagennnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn' />
                <button className='w-[3.5rem] h-full text-[2rem] rounded-[0.5rem] flex justify-center items-center bg-yellow-300 '><TiLocationArrow /></button>
            </div>

        </div >
    )
};

export default Chatroom;