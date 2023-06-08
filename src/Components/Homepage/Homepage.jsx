import React from 'react';
import Navbar from '../Navbar/Navbar';
import { VscClose } from 'react-icons/vsc';



const Homepage = () => {
    return (
        <div className='w-screen auto box-border flex flex-col justify-start items-start '>
            <Navbar />

            <div className="w-full h-[120vh] flex justify-center items-center ">

                <div className='w-[45%] h-[100%] p-[2rem] flex gap-y-[4rem] flex-col justify-start items-center '>
                    <div className='w-[60%] mt-[6rem] flex flex-wrap text-[4rem] font-[700] ' >Connect, Collaborate, Conquer!</div>
                    <div className='w-[60%] relative h-auto flex justify-between items-center ' >
                        <button className='text-[2rem] font-[500] rounded-[0.5rem] px-[4rem] py-[0.5rem] border border-1 border-black' >Join</button>
                        <button className='text-[2rem] font-[500] rounded-[0.5rem] px-[4rem] py-[0.5rem] border border-1 border-black' >Create</button>
                        <div className='w-[100%] flex justify-between absolute top-[6rem] '>
                            <input className='w-[80%] h-[4rem] rounded-[0.5rem] text-[1.5rem] font-[500] p-[1rem] border border-black bg-slate-100 ' type="text" />
                            <button className='w-[15%] h-[4rem] text-[2.2rem] border border-black flex justify-center items-center rounded-[0.5rem] bg-slate-100 '><VscClose /></button>
                        </div>
                    </div>
                </div>

                <div className='w-[55%] h-[100%] p-[2rem] flex justify-center items-center '>
                    <div className='w-[100%] h-[100%] grid grid-cols-[1fr,1fr] ' >
                        <div className='w-[100%] h-[100%] flex flex-col gap-y-[2rem] justify-start items-center ' >
                            <div className='w-[25rem] h-[28rem] mt-[5rem] object-cover rounded-[0.5rem] overflow-hidden '>
                                <img src="https://images.unsplash.com/photo-1511130558090-00af810c21b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=389&q=80" alt="image" />
                            </div>

                            <div className='w-[25rem] h-auto flex justify-start gap-x-[2rem] '>
                                <span className='w-auto h-auto text-[1.2rem] font-[500] rounded-[2rem] rounded-tr-[0] px-[2rem] py-[0.5rem] flex justify-center items-center bg-slate-200 '>hello world!</span>
                                <span className='w-[3rem] h-[3rem] object-cover rounded-[50%] overflow-hidden'>
                                    <img src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" alt="image" />
                                </span>
                            </div>
                        </div>

                        <div className='w-[100%] h-[100%] flex flex-col gap-y-[2rem] justify-start items-center ' >
                            <div className='w-[25rem] mt-[5rem] h-auto flex justify-start gap-x-[2rem] '>
                                <span className='w-[3rem] h-[3rem] object-cover rounded-[50%] overflow-hidden '>
                                    <img src="https://images.unsplash.com/photo-1511130558090-00af810c21b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=389&q=80" alt="image" />
                                </span>
                                <span className='w-auto h-auto text-[1.2rem] font-[500] rounded-[2rem] rounded-tl-[0] px-[2rem] py-[0.5rem] flex justify-center items-center bg-slate-200 '>hello world!</span>
                            </div>

                            <div className='w-[25rem] h-[28rem] object-cover rounded-[0.5rem] overflow-hidden '>
                                <img src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Homepage;















//  <div className='w-[45%] h-[100%] p-[2rem] flex gap-y-[4rem] flex-col justify-center items-center '>
//                     <div className='w-[60%] flex flex-wrap text-[4rem] font-[700] bg-green-500 ' >Connect, Collaborate, Conquer!</div>
//                     <div className='w-[60%] h-auto flex justify-between items-center bg-blue-400 ' >
//                         <button className='text-[2rem] font-[500] rounded-[0.5rem] px-[4rem] py-[0.5rem] border border-1 border-black' >Join</button>
//                         <button className='text-[2rem] font-[500] rounded-[0.5rem] px-[4rem] py-[0.5rem] border border-1 border-black' >Create</button>
//                     </div>
//                 </div>

//                 <div className='w-[55%] h-[100%] p-[2rem] flex justify-center items-center bg-green-200 '>
//                     <div className='w-[100%] h-[100%] grid grid-cols-[1fr,1fr]  bg-pink-300 ' >
//                         <div className='w-[100%] h-[100%] flex flex-col gap-y-[2rem] justify-center items-center ' >
//                             <div className='w-[70%] h-[60%] rounded-[0.5rem] overflow-hidden bg-red-400 '>
//                                 <img className='w-[100%] h-[100%] object-cover ' src="https://images.unsplash.com/photo-1511130558090-00af810c21b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=389&q=80" alt="image" />
//                             </div>
//                             <div className='w-[70%] h-auto flex justify-start gap-x-[2rem] '>
//                                 <span className='w-auto h-auto text-[1.2rem] rounded-[2rem] rounded-tr-[0] px-[2rem] py-[0.5rem] flex justify-center items-center bg-orange-400 '>hello world!</span>
//                                 <span className='w-[3rem] h-[3rem] rounded-[50%] overflow-hidden bg-orange-400 '>
//                                     <img src="https://images.unsplash.com/photo-1511130558090-00af810c21b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=389&q=80" alt="image" />
//                                 </span>
//                             </div>
//                         </div>

//                         <div className='w-[100%] h-[100%] flex flex-col gap-y-[2rem] justify-center items-center ' >
//                             <div className='w-[70%] h-auto flex justify-start gap-x-[2rem] '>
//                                 <span className='w-[3rem] h-[3rem] rounded-[50%] overflow-hidden bg-orange-400 '>
//                                     <img src="https://images.unsplash.com/photo-1511130558090-00af810c21b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=389&q=80" alt="image" />
//                                 </span>
//                                 <span className='w-auto h-auto text-[1.2rem] rounded-[2rem] rounded-tl-[0] px-[2rem] py-[0.5rem] flex justify-center items-center bg-orange-400 '>hello world!</span>
//                             </div>
//                             <div className='w-[70%] h-[60%] rounded-[0.5rem] overflow-hidden bg-slate-400 '>
//                                 <img className='w-[100%] h-[100%] object-cover ' src="https://images.unsplash.com/photo-1511130558090-00af810c21b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=389&q=80" alt="image" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>  