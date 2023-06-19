import React from 'react';



const ConferenceRoom = () => {

    return (
        <div className='w-full h-full flex flex-col bg-pink-300 '>
            <div className="w-full h-[70%] px-[3rem] py-[2rem] flex justify-center items-center bg-yellow-100 ">
                <div className="w-full h-full bg-gray-300 rounded-[1rem] ">

                </div>
            </div>

            <div className="w-full h-[30%] px-[3rem] py-[1rem] flex bg-violet-200  ">
                <div className="w-full h-full flex overflow-x-scroll whitespace-nowrap">
                    <div className="w-auto h-full flex gap-x-[1rem] ">
                        <div className="w-[200px] h-full rounded-[1rem] bg-gray-300  "></div>
                        <div className="w-[200px] h-full rounded-[1rem] bg-gray-300  "></div>
                        <div className="w-[200px] h-full rounded-[1rem] bg-gray-300  "></div>
                        <div className="w-[200px] h-full rounded-[1rem] bg-gray-300  "></div>
                        <div className="w-[200px] h-full rounded-[1rem] bg-gray-300  "></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ConferenceRoom;