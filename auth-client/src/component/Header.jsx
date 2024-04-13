import React, { useState } from 'react'
import {FaPlay} from 'react-icons/fa'
import header from '../assets/cbc-head.png'
import header_video from '../assets/cbc_video.mp4'
import { IoArrowBackOutline, IoBackspace } from "react-icons/io5";

const Header = () => {

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const toggleDialog = () => {
      setIsDialogOpen(!isDialogOpen);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

  return (
        <div className="py-3 px-10 sm:px-4 md:px-6 lg:px-6">
            <div className="container mx-auto py-[14vh]">

                <div className="grid grid-cols-1 relative lg:grid-cols-2 gap-8 items-center">
                    <div className="w-[32rem] flex flex-col space-y-6 ">
                        <div className="text-4xl md:text-5xl font-bold text-[#2e2e2e] lg:text-6xl">
                            <span  className="text-[#142850]"> CookByCook
                            <br />
                            </span> <span className='text-4xl text-[#0c7b93]'> because every Meal Matters</span> 
                        </div>

                        <div className=" lg:text-xl text-[#142850] md:text-lg text-base">
                        Experience culinary freedom with our online chef booking platform. Talented chefs bring luxurious hotel cuisine to your home, eliminating kitchen stress. Enjoy restaurant-quality meals cooked in your own kitchen with just a click.
                        </div>

                        <div className="flex gap-4 items-center">
                            <div className="h-14 w-14 shadow-md cursor-pointer relative bg-white rounded-full" onClick={toggleDialog}>
                                <FaPlay size={18} className='cursor-pointer text-[#0c7b93] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
                            </div>
                            <div className="lg:text-xl text-[#142850] md:text-lg text-base cursor-pointer">
                                Watch Now
                            </div>
                        </div>
                    </div>

                    <img src={header} className='h-[28rem] mx-auto justify-end' alt="" />
                </div>

            </div>

            {isDialogOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="bg-black bg-opacity-75 absolute inset-0 flex justify-center items-center">
                        <div className="bg-white w-1/2 p-1 rounded-lg relative">
                            <div className='flex m-0 px-1 text-[#494999]'>
                                <button onClick={closeDialog} className= "hover:text-gray-700">
                                    <IoArrowBackOutline size={26}/>
                                </button>
                                <h2 className='text-xl text-start pl-2 font-medium'>CookByCook</h2>
                            </div>
                            
                            <video src={header_video} className="w-full rounded-lg" controls autoPlay></video>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
};

export default Header