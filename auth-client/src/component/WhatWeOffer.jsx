import React from 'react'
import { FaStar } from "react-icons/fa";
import food from "../assets/food.png"
import beverages from"../assets/beverages.png"
import dessert from"../assets/dessert.png"

const WhatWeOffer = () => {
  return (

    <div className="container mx-auto py-[2vh] px-4">
            
            <div className="text-2xl md:text-3xl font-bold text-center text-[#142850] lg:text-4xl my-8">
                What We <span className='text-[#0c7b93]'>Offer</span>
            </div>
            <div className="grid py-6 gap-8 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                
                <div className="food-card bg-[#008bcc16] rounded-xl flex flex-col cursor-pointer items-center p-5" >
                    <div>
                        <img src={food} className='h-60 w-60' alt="" />
                    </div>
                    <div className="flex gap-4 items-center">
                        <p className="text-3xl text-center font-bold text-[#142850] py-4 ">
                            FOOD
                        </p>
                        
                    </div>
                    
                </div> 

                <div className="food-card bg-[#008bcc16] rounded-xl flex flex-col cursor-pointer items-center p-5" >
                    <div>
                        <img src={beverages} className='h-60 w-60' alt="" />
                    </div>
                    <div className="flex gap-4 items-center">
                        <p className="text-3xl text-center font-bold text-[#142850] py-4">
                            BEVERAGES
                        </p>
                    </div>
                    
                </div> 

                <div className="food-card bg-[#008bcc16] rounded-xl flex flex-col cursor-pointer items-center p-5" >
                    <div>
                        <img src={dessert} className='h-60 w-60' alt="" />
                    </div>
                    <div className="flex gap-4 items-center">
                        <p className="text-3xl text-center font-bold text-[#142850] py-4">
                            DESSERT
                        </p>
                    </div>
                    
                </div>

                
            </div>

        </div>

  )
}

export default WhatWeOffer