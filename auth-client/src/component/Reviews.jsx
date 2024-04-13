import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviewsData = [
    {
      text:
        "Abhishek Was The Chef For Our Party. He Made The Amazing Winter Delicacy Moong Dal Halwa, Perfectly Sweet & Less Ghee, Spent A Good Amount Of Time & Cooked With Patience.",
      author: "Vivek"
    },
    {
      text:
        "CookByCook Is A Safe And Secure Platform I Can Trust. Their Commitment To Quality And Customer Satisfaction Is Unmatched In The Industry.",
      author: "Rajan"
    },
    {
      text:
        "I Joined A Home With A CookByCook Cook 3 Months Ago. It Has Been Very Easy For Me To Be Onboarded Onto The Process And To Be Able To Manage My Cook, Timings, Etc.",
      author: "Ayush"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === reviewsData.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? reviewsData.length - 1 : prevSlide - 1));
  };

  return (
    <div>
      <div className="relative">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#00a8cc] text-white rounded-full p-2 shadow-md opacity-30 hover:opacity-60 transition-opacity mx-16"
          onClick={prevSlide}
        >
          <FaChevronLeft />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#00a8cc] text-white rounded-full p-2 shadow-md opacity-30 hover:opacity-60 transition-opacity mx-16"
          onClick={nextSlide}
        >
          <FaChevronRight />
        </button>
        <div className="text-2xl md:text-3xl font-bold text-center text-[#142850] lg:text-4xl mt-16">
          Customer <span className="text-[#0c7b93]">Reviews</span>
        </div>
        <div className="flex w-[75%] carousel rounded-box items-center m-auto">
          {reviewsData.map((review, index) => (
            <div
              key={index}
              className={`grid reviews carousel-item w-full lg:text-4xl md:text-3xl sm:text-3xl m-16 text-center ${
                index === currentSlide ? "" : "hidden"
              }`}
            >
              <p className="text-[#142850]">{review.text}</p>
              <p className="text-2xl py-2 text-end text-[#0c7b93]">- {review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
