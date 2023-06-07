import React from 'react';
import Navbar from '../Navbar/Navbar';



const Homepage = () => {
    return (
        <div className='homepageContainer h-screen w-screen flex flex-col justify-start items-start '>
            <Navbar />

            <div className='w-screen flex grow justify-start items-center '>
                <div className='w-[45%] h-[100%] p-[2rem] flex gap-y-[4rem] flex-col justify-center items-center '>
                    <div className='w-[60%] flex flex-wrap text-[4rem] font-[700] bg-green-500 ' >Connect, Collaborate, Conquer!</div>
                    <div className='w-[60%] h-auto flex justify-between items-center bg-blue-400 ' >
                        <button className='text-[2rem] font-[500] rounded-[0.5rem] px-[4rem] py-[0.5rem] border border-1 border-black' >Join</button>
                        <button className='text-[2rem] font-[500] rounded-[0.5rem] px-[4rem] py-[0.5rem] border border-1 border-black' >Create</button>
                    </div>
                </div>

                <div className='w-[55%] h-[100%] p-[2rem] flex justify-center items-center bg-green-200 '>
                    <div className='w-[100%] h-[100%] grid grid-cols-[1fr,1fr]  bg-pink-300 ' >
                        <div className='w-[100%] h-[100%] grid grid-rows-[4fr,1fr] justify-items-center items-center ' >
                            <div className='w-[100%] h-[100%] flex justify-center items-center bg-red-300' >
                                hello world!
                            </div>
                            <div className='w-[100%] h-[100%] flex justify-center items-center bg-orange-300' >
                                hello world!
                            </div>
                        </div>

                        <div className='w-[100%] h-[100%] grid grid-rows-[1fr,4fr] justify-items-center items-center ' >
                            <div className='w-[100%] h-[100%] flex justify-center items-center bg-orange-300' >
                                hello world!
                            </div>
                            <div className='w-[100%] h-[100%] flex justify-center items-center bg-red-300' >
                                hello world!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Homepage;