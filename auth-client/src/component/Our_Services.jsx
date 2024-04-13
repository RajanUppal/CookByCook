import React from 'react'
import { Link } from 'react-router-dom'

const OurServices = () => {
  return (
    
    <div className="py-3 px-10 sm:px-4 md:px-6 lg:px-6">
        <div className="container mx-auto py-[2vh]">
            <div className="text-3xl md:text-3xl lg:text-5xl font-bold text-center text-[#142850]  mb-8">
                Our <span className='text-[#0c7b93]'>Services</span>
            </div>
            <div className='grid py-6 gap-8 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
            <div className="food-card bg-[#008bcc16] rounded-xl flex flex-col cursor-pointer items-center p-5">
                    <div className="flex gap-4 items-center">
                        <p className='text-3xl text-center font-bold text-[#27496d] mt-4 border-solid border-b-2 border-[#27496d]'> One-Time Cook </p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <p className='text-md text-center mx-1 my-6 text-[#191919] px-12'> Skip the kitchen stress – our chef handles the cooking while you relax and enjoy. </p>
                    </div>
                    
                    <div>
                        <p className='text-md text-center mx-1 my-6 text-[#191919]'> Trained & Verified Cook</p>
                        <p className='text-md text-center mx-1 my-6 text-[#191919]'> One-Time Service</p>
                        <p className='text-md text-center mx-1 my-6 text-[#191919]'> Quick Service</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <p className='text-md text-center text-[#191919] mb-6'> Starting from <span className='font-bold text-2xl text-[#142850]'>₹500</span> </p>
                    </div>
                    <Link to="/for-one-time">
                        <button className="bg-[#142850] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white hover:bg-[#0c7b93]"> Book Now </button>
                    </Link>
                </div>

                <div className="food-card bg-[#008bcc16] rounded-xl flex flex-col cursor-pointer items-center p-5">
                    <div className="flex gap-4 items-center">
                        <p className='text-3xl text-center font-bold text-[#27496d] mt-4 border-solid border-b-2 border-[#27496d]'> Cook for a Month</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <p className='text-md text-center mx-1 my-6 text-[#191919] px-12 '> Monthly feasts without lifting a finger – our cook brings flavors to your table. </p>
                    </div>
                    
                    <div>
                        <p className='text-md text-center mx-1 my-6 text-[#191919]'> Healthy & Hygienic Food</p>
                        <p className='text-md text-center mx-1 my-6 text-[#191919]'> 30 Day Assured Service</p>
                        <p className='text-md text-center mx-1 my-6 text-[#191919]'> Multi-Cuisine Chefs</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <p className='text-md text-center text-[#191919] mb-6'> Starting from <span className='font-bold text-2xl text-[#142850]'>₹5000</span> </p>
                    </div>
                    <Link to="for-month">
                        <button className="bg-[#142850] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white hover:bg-[#0c7b93]"> Book Now </button>
                    </Link>
                </div>

                <div className="food-card bg-[#008bcc16] rounded-xl flex flex-col cursor-pointer items-center p-5">
                    <div className="flex gap-4 items-center">
                        <p className='text-3xl text-center font-bold text-[#27496d] mt-4 border-solid border-b-2 border-[#27496d]'> Cook for Event</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <p className='text-md text-center mx-1 my-6 text-[#191919] px-12'> Impress your guests – our chefs create a memorable feast tailored to your taste. </p>
                    </div>
                    
                    <div>
                        <p className='text-md text-center mx-1 my-6 text-[#191919]'> Multi-Cuisine Chefs</p>
                        <p className='text-md text-center mx-1 my-6 text-[#191919]'> Customizable Menu</p>
                        <p className='text-md text-center mx-1 my-6 text-[#191919]'> Extra Helpers</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <p className='text-md text-center text-[#191919] mb-6'> Starting from <span className='font-bold text-2xl text-[#142850]'>₹2000</span> </p>
                    </div>
                    <Link to="for-event">
                        <button className="bg-[#142850] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white hover:bg-[#0c7b93]"> Book Now </button>
                    </Link>
                </div>

                

            </div>
        </div>
    </div>

  )
}

export default OurServices