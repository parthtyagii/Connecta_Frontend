import React from 'react';
import './Navbar.css';
import { BsGithub } from 'react-icons/bs';
import { IoNotificationsOutline } from 'react-icons/io5';



function Navbar() {
    return (
        <div className='border border-solid border-black flex-wrap flex justify-between items-center w-screen h-auto px-[2rem] py-[1rem]'>
            <div className="leftPart text-[2.5rem] font-[500] flex justify-center items-center">
                <span>Connecta</span>
            </div>

            <div className="flex-wrap flex justify-start items-center gap-x-[2rem]">
                <span className='border border-solid rounded-[0.5rem] flex justify-center items-center text-[1.8rem] px-[1rem] h-[4.5rem]'><BsGithub /></span>
                <span className='border border-solid rounded-[0.5rem] flex justify-center items-center text-[1.8rem] px-[1rem] h-[4.5rem]'><IoNotificationsOutline /></span>
                <span className='border border-solid rounded-[0.5rem] flex justify-center items-center text-[1.8rem] px-[1rem] h-[4.5rem]'>SignIn</span>
                <span className='border border-solid rounded-[0.5rem] flex justify-center items-center text-[1.8rem] px-[1rem] h-[4.5rem]'>SignUp</span>
                <span className='border border-solid rounded-[0.5rem] flex justify-center items-center text-[1.8rem] px-[1rem] h-[4.5rem]'>logout</span>
            </div>
        </div>
    )
};

export default Navbar;