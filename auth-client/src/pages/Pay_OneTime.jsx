import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const Pay_OneTime = () => {

  const {state} = useLocation();
const id = state;
  
  const [bookingDetails, setBookingDetails] = useState([]);
    const getBookingDetails = async () => {
        try {

            const res = await axios.get(`http://localhost:8000/api/v1/booking/getBookingOneTime/${id.id}`);
            if(res.data.success) {
                setBookingDetails(res.data.data.bookingOneTime)
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getBookingDetails()
    }, []);

  return (
    <div>
        <div className="pay_OneTime">
        
           <div className="w-full mx-auto pt-[16vh]">
               <div className="ease-in duration-300 w-[80%] sm:w-max shadow-sm backdrop-blur-md bg-white/80 lg:w-max mx-auto rounded-md px-8 py-5 mb-8" >

                  <h2 className="text-center mt-4 mb-6 text-3xl">Your Booking Details</h2>
                   
                  <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                   
                        <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm text-start font-medium leading-6 text-gray-900">Booking id</dt>
                            <dd className="mt-1 text-sm text-end leading-6 text-gray-700 sm:col-span-2 sm:mt-0"> #{bookingDetails?._id} </dd>
                        </div>
                        <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm text-start font-medium leading-6 text-gray-900">Service Type</dt>
                            <dd className="mt-1 text-sm text-end leading-6 text-gray-700 sm:col-span-2 sm:mt-0"> {bookingDetails?.service_type} </dd>
                        </div>
                        <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm text-start font-medium leading-6 text-gray-900">Name</dt>
                            <dd className="mt-1 text-sm text-end leading-6 text-gray-700 sm:col-span-2 sm:mt-0"> {bookingDetails?.name} </dd>
                        </div>
                        <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm text-start font-medium leading-6 text-gray-900">Email</dt>
                            <dd className="mt-1 text-sm text-end leading-6 text-gray-700 sm:col-span-2 sm:mt-0"> {bookingDetails?.email} </dd>
                        </div>
                        <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm text-start font-medium leading-6 text-gray-900">Service Amount</dt>
                            <dd className="mt-1 text-sm text-end leading-6 text-gray-700 sm:col-span-2 sm:mt-0"> ₹{bookingDetails?.price} </dd>
                        </div>
                        <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm text-start font-medium leading-6 text-gray-900">Platform Fee</dt>
                            <dd className="mt-1 text-sm text-end leading-6 text-gray-700 sm:col-span-2 sm:mt-0">₹99</dd>
                        </div>
                        <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-lg text-start font-medium leading-6 text-gray-900">Total Amount</dt>
                            <dd className="mt-1 font-bold text-lg text-end leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-[#142850]"> ₹599 </dd>
                        </div>
                        
                        
                    </dl>
                  </div>


                <Link to="https://buy.stripe.com/test_6oEeVl4BX68BcWkeUV">
                  <button className="bg-[#142850] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md w-full rounded-full px-8 py-2 text-xl font-medium text-white mx-auto text-center mb-3 mt-5" type='submit'>
                      Pay ₹599
                  </button>
                  </Link>
                   <ToastContainer />
 
               </div>
           </div>
       </div>
 
    </div>
  )
}

export default Pay_OneTime