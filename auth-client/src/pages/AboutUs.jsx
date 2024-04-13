import React from 'react'
import logo from '../assets/CBC-Logo.png'
const AboutUs = () => {
  return (
    <section className="overflow-hidden pb-12 lg:pt-[120px] lg:pb-[90px] w-full mx-auto pt-[16vh] px-24">
    <div className="container mx-auto">
      <div className="flex flex-wrap items-center justify-between -mx-4">
       

        <div className="w-full px-4 lg:w-3/5">
          <div className="mt-10 lg:mt-0">
            <h2 className="mb-5 text-4xl font-bold text-[#0c7b93] ">
              Welcome to CookByCook, <br /> <span className='text-xl'>online chef aggregator platform where culinary art meets convenience.</span>
            </h2>
            <p className="mb-5 text-base text-body-color dark:text-dark-6">
              At CookByCook, we believe that every meal should be a celebration, a symphony of flavors that brings joy and comfort to the table. That’s why we’ve created a unique platform that connects food enthusiasts with professional chefs who are masters of their craft.
            </p>
            <p className="mb-8 text-base text-body-color dark:text-dark-6">
            Our network of chefs is the heartbeat of our platform. From the aromatic spices of South Indian cuisine to the bold flavors of the North, our chefs bring a diverse palette of regional Indian specialties and international dishes. Each chef is handpicked for their expertise, creativity, and passion for food.
            </p>
          </div>
        </div>

          <img className='lg:w-1/3 md:w-3/4 sm:w-4/5 mx-auto ' src={logo} alt="" />


      </div>
    </div>
  </section>
  )
}

export default AboutUs