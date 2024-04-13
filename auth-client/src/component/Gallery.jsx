import React from 'react'
import gallery1 from "../assets/gallery1.png"
import gallery2 from "../assets/gallery2.png"
import gallery3 from "../assets/gallery3.png"
import gallery4 from "../assets/gallery4.png"
import gallery5 from "../assets/gallery5.png"
import gallery6 from "../assets/gallery6.png"
import gallery7 from "../assets/gallery7.png"
import gallery8 from "../assets/gallery8.png"
import gallery9 from "../assets/gallery9.png"
import gallery10 from "../assets/gallery10.jpg"

const Gallery = () => {
  return (

    <div id="food-gallery">

        <div className="text-2xl md:text-3xl font-bold text-center text-[#142850] lg:text-4xl my-16 ">
              Food <span className='text-[#0c7b93]'>Gallery</span>
        </div>

        <div className="carousel rounded-box mx-16 mb-16">
            <div className="carousel-item">
              <img src={gallery1} alt="Burger" className='border-solid border-4 border-[#e8f0f2] rounded-xl' />
            </div> 
            <div className="carousel-item">
              <img src={gallery2} alt="Burger" className='border-solid border-4 border-[#e8f0f2] rounded-xl' />
            </div> 
            <div className="carousel-item">
              <img src={gallery3} alt="Burger" className='border-solid border-4 border-[#e8f0f2] rounded-xl' />
            </div> 
            <div className="carousel-item">
              <img src={gallery4} alt="Burger" className='border-solid border-4 border-[#e8f0f2] rounded-xl'/>
            </div> 
            <div className="carousel-item">
              <img src={gallery5} alt="Burger" className='border-solid border-4 border-[#e8f0f2] rounded-xl' />
            </div> 
            <div className="carousel-item">
              <img src={gallery6} alt="Burger" className='border-solid border-4 border-[#e8f0f2] rounded-xl' />
            </div> 
            <div className="carousel-item">
              <img src={gallery7} alt="Burger" className='border-solid border-4 border-[#e8f0f2] rounded-xl' />
            </div>
            <div className="carousel-item">
              <img src={gallery8} alt="Burger" className='border-solid border-4 border-[#e8f0f2] rounded-xl' />
            </div> 
            <div className="carousel-item">
              <img src={gallery9} alt="Burger" className='border-solid border-4 border-[#e8f0f2] rounded-xl' />
            </div>
            <div className="carousel-item">
              <img src={gallery10} alt="Burger" className='border-solid border-4 border-[#e8f0f2] rounded-xl' />
            </div>
        </div>

    </div>
  )
}

export default Gallery