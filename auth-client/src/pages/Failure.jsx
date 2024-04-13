import React from 'react'

const Failure = () => {
  return (
    <div className="failure">
        <div className="w-full mx-auto pt-[16vh] my-12 space-y-6">
        <h1 className="text-4xl text-center px-4 text-[#0c7b93] font-bold">Oops! Something went wrong</h1>
        <p className="text-center text-[hsl(220,60%,20%)] px-4 text-lg">We're sorry, but it looks like there was a problem processing your booking. Please try again later or contact our support team for assistance.</p>
        <h2 className="text-lg text-center mt-4 px-4 text-[#142850]"> <span className=' text-xl text-[#0c7b93]'>What Happened?</span> There may have been a technical issue or problem with processing your payment. Our team is on it to resolve this as soon as possible.</h2>
        <h2 className="text-lg text-center mt-4 px-4 text-[#142850]"> <span className=' text-xl text-[#0c7b93]'>What To Do Next?</span> In the meantime, why not you check out or explore our website to learn more about what we have to offer? We hope to see you again soon!</h2>
        </div>
    </div>
  )
}

export default Failure