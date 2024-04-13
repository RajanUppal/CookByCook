import React from 'react'
import sheff from "../assets/3chefs.png"
import { PiUserCirclePlusFill } from "react-icons/pi";
import { MdPlaylistAddCheckCircle , MdAccessTimeFilled  } from "react-icons/md";
import { HiCurrencyRupee } from "react-icons/hi2";


const Service = () => {
  return (
    <div className="py-3 px-10 sm:px-4 md:px-6 lg:px-6">
        <div className="container mx-auto py-[2vh]">
            <div className="grid grid-cols-1 relative lg:grid-cols-2 gap-8 items-center">
                <img src={sheff} alt="" className='h-[28rem] mx-auto justify-end' />
                <div className="w-full md:w-[32rem] flex flex-col space-y-6 ">
                    <div className="text-2xl md:text-3xl font-bold text-[#142850] lg:text-4xl">
                        How it <span className='text-[#0c7b93]'> Works?</span>
                    </div>
                    <div className="grid grid-cols-1 divide-y divide-[#f0f5f7] py-8 space-y-12">
                            <div className=' flex items-center text-lg'> 
                                <PiUserCirclePlusFill className='text-[#0c7b93] h-10 w-10'/>
                                <span className='px-4'>Register yourself as an user on the platform</span>
                            </div>
                            <div className=' flex items-center text-lg '> 
                                <MdPlaylistAddCheckCircle className='text-[#0c7b93] h-10 w-10'/>
                                <span className='px-4'>You choose the required service form the list</span>
                            </div>
                            <div className='flex items-center text-lg '>
                                <MdAccessTimeFilled className='text-[#0c7b93] h-10 w-10'/>
                                <span className='px-4'>Choose the preferred date and time of your booking</span>
                            </div>
                            <div className=' flex items-center text-lg '>
                                <HiCurrencyRupee className='text-[#0c7b93] h-10 w-10'/>
                                <span className='px-4'>Complete the payment and enjoy the chef's service</span>
                            </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Service