import React from 'react'

const Success = () => {
  return (
    <div className="success">
        <div className="w-full mx-auto pt-[16vh] my-12 space-y-6">
            <h1 className="text-4xl text-center px-4 text-[#0c7b93] font-bold">Congratulations!</h1>
            <p className="text-center text-[#142850] px-4 text-lg">Your booking has been confirmed. Get ready for an unforgettable experience!</p>
            <h2 className="text-lg text-center mt-4 px-4 text-[#142850]"> <span className=' text-xl text-[#0c7b93]'>What to Expect? </span> Prepare to be amazed by our expert chefs and their exceptional service. We can't wait to serve you!</h2>
            <h2 className="text-lg text-center mt-4 px-4 text-[#142850]"> <span className=' text-xl text-[#0c7b93]'>Next Steps - </span> In the meantime, why not you check out or explore our website to learn more about what we have to offer?</h2>
        </div>
    </div>
  )
}

export default Success