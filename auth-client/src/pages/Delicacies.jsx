import React from 'react'
import delicacy1 from '../assets/Delicacy/delicacy1.jpg'
import delicacy2 from '../assets/Delicacy/delicacy2.jpg'
import delicacy3 from '../assets/Delicacy/delicacy3.jpg'
import delicacy4 from '../assets/Delicacy/delicacy4.jpg'
import delicacy5 from '../assets/Delicacy/delicacy5.jpg'
import delicacy6 from '../assets/Delicacy/delicacy6.jpg'
import delicacy7 from '../assets/Delicacy/delicacy7.jpg'
import delicacy8 from '../assets/Delicacy/delicacy8.jpg'
import delicacy9 from '../assets/Delicacy/delicacy9.jpg'
import delicacy10 from '../assets/Delicacy/delicacy10.jpg'
import delicacy11 from '../assets/Delicacy/delicacy11.jpg'
import delicacy12 from '../assets/Delicacy/delicacy12.jpg'

const Delicacies = () => {
  return (
    <div className="container px-5 lg:px-32 lg:pt-24 flex items-center w-full mx-auto pt-[16vh] py-8">

    <div className="-m-1 flex flex-row sm:flex-wrap md:-m-2">
      <div className="flex w-full sm:w-1/2 flex-wrap lg:flex-row flex-row-reverse">
        <div className="w-full lg:w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
            src={delicacy6}
          />
        </div>
        <div className="w-full lg:w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
            src={delicacy2}
          />
        </div>
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center max-h-none lg:max-h-[1000px]"
            src={delicacy3}
          />
        </div>
      </div>
      <div className="flex w-full sm:w-1/2 flex-wrap">
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
            src={delicacy1}
          />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
            src={delicacy4}
          />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
            src={delicacy5}
          />
        </div>
      </div>

      <div className="flex w-full sm:w-1/2 flex-wrap">
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
            src={delicacy8}
          />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
            src={delicacy9}
          />
        </div>
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
            src={delicacy10}
          />
        </div>
      </div>

      <div className="flex w-full sm:w-1/2 flex-wrap">
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
            src={delicacy7}
          />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
            src={delicacy11}
          />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
            src={delicacy12}
          />
        </div>
      </div>

    </div>
  </div>
  )
}

export default Delicacies