import React from 'react';
import { TiLocationArrow } from 'react-icons/ti';



const Chatroom = () => {
    return (
        <div className='w-full h-full p-[1.5rem] flex flex-col rounded-[1rem] bg-gray-100  '>
            <div className="w-full p-[0.5rem] flex rounded-[1rem] bg-white " >
                <div className="w-[50%] text-[1.3rem] font-[700] p-[1rem] rounded-[1rem] flex justify-center items-center bg-green-100  ">Messages( )</div>
                <div className="w-[50%] text-[1.3rem] font-[700] p-[1rem] rounded-[1rem] flex justify-center items-center  ">Participants( )</div>
            </div>

            <div className="w-full mt-[2rem] mb-[2rem]  relative ">
                <span className='bg-gray-100 text-gray-400 text-[1.2rem] font-[500] px-[2rem] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  '>Messages</span>
                <hr className='border-[1px] border-gray-300 ' />
            </div>

            <div className="w-full mb-[1rem] flex flex-col items-start gap-y-[1rem] grow overflow-y-scroll newScroll ">
                <div className=" h-auto flex  flex-col gap-y-[0.2rem] px-[1rem] py-[0.5rem] rounded-[1rem] bg-white  ">
                    <div className=" text-[1.4rem] font-[600] flex  ">Parth</div>
                    <div className=" text-[1.3rem] font-[400] flex ">
                        Lorem ipsum dolor sit, amet consectetur 
                    </div>
                </div>

                <div className=" h-auto flex flex-col gap-y-[0.2rem] px-[1rem] py-[0.5rem] rounded-[1rem] bg-white  ">
                    <div className=" text-[1.4rem] font-[600] flex  ">Parth</div>
                    <div className=" text-[1.3rem] font-[400] flex ">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </div>
                </div>

                <div className=" h-auto flex self-end flex-col gap-y-[0.2rem] px-[1rem] py-[0.5rem] rounded-[1rem] bg-white  ">
                    <div className="text-[1.4rem] font-[600] flex justify-end  ">Parth</div>
                    <div className="text-[1.3rem] font-[400] flex justify-end ">
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                </div>

                <div className=" h-auto flex flex-col gap-y-[0.2rem] px-[1rem] py-[0.5rem] rounded-[1rem] bg-white  ">
                    <div className=" text-[1.4rem] font-[600] flex  ">Parth</div>
                    <div className=" text-[1.3rem] font-[400] flex ">
                        Lorem ipsum dolor
                    </div>
                </div>
            </div>

            <div className="w-full p-[0.5rem] flex bg-white rounded-[1rem] ">
                <input className='h-[6vh] text-[1.4rem] px-[1rem] flex grow focus:outline-none  ' type="text" placeholder='Write a message' />
                <button className='w-[3.5rem] h-full text-[2rem] rounded-[0.5rem] flex justify-center items-center bg-yellow-300  '><TiLocationArrow /></button>
            </div>

        </div >
    )
};

export default Chatroom;