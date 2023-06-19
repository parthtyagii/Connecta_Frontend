import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { IoNotificationsOutline } from 'react-icons/io5';
import {BsLinkedin} from 'react-icons/bs';



function Navbar() {
    return (
        <div className='w-full h-auto flex-wrap flex justify-between items-center px-[2rem] py-[1rem]'>
            <div className="leftPart text-[2.5rem] font-[500] flex justify-center items-center">
                <span>Connecta</span>
            </div>

            <div className="flex-wrap flex justify-start items-center gap-x-[2rem]">
                <button className='border border-solid rounded-[0.5rem] flex justify-center items-center text-[1.8rem] px-[1rem] h-[4.5rem]'><BsGithub /></button>
                <button className='border border-solid rounded-[0.5rem] flex justify-center items-center text-[1.8rem] px-[1rem] h-[4.5rem]'><BsLinkedin /></button>
                <button className='border border-solid rounded-[0.5rem] flex justify-center items-center text-[1.8rem] px-[1rem] h-[4.5rem]'><IoNotificationsOutline /></button>
                <button className='border border-solid rounded-[0.5rem] flex justify-center items-center text-[1.8rem] px-[1rem] h-[4.5rem]'>SignIn</button>
                <button className='border border-solid rounded-[0.5rem] flex justify-center items-center text-[1.8rem] px-[1rem] h-[4.5rem]'>SignUp</button>
                <button className='border border-solid rounded-[0.5rem] flex justify-center items-center text-[1.8rem] px-[1rem] h-[4.5rem]'>logout</button>
            </div>
        </div>
    )
};

export default Navbar;