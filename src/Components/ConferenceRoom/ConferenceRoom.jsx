import React from 'react';



const ConferenceRoom = () => {

    return (
        <div className='w-full h-full flex flex-col '>
            <div className="w-full h-full px-[3rem] py-[2rem] flex justify-center items-center  ">
                <div className="w-full h-full relative bg-slate-300 rounded-[1rem] ">
                    {/* video to be streamed */}
                    <div className="w-[15%] h-[25%] relative top-[10px] left-[10px] bg-slate-400 rounded-[1rem] "></div>
                </div>
            </div>
        </div>
    )
};

export default ConferenceRoom;