
import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';
import axios from 'axios';
import { IoIosCheckmarkCircle } from "react-icons/io";
const MyBooking = () => {
  
  
    const params = useParams()
    const [bookingOneTimeDetails, setBookingOneTimeDetails] = useState()
    const [bookingForMonthDetails, setBookingForMonthDetails] = useState()
    const [bookingForEventDetails, setBookingForEventDetails] = useState()
    
    const [copied, setCopied] = useState(false);

    const getBookingOneTimeDetails = async () => {
        try {
            const res = await axios.get(`http://localhost:8000/api/v1/booking/myBookingOneTime/${params.id}`);
            if(res.data.success) {
                setBookingOneTimeDetails(res.data.data.bookingOneTime)
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getBookingOneTimeDetails()
    }, []);

    const getBookingForMonthDetails = async () => {
        try {
            const res = await axios.get(`http://localhost:8000/api/v1/booking/myBookingForMonth/${params.id}`);
            if(res.data.success) {
                setBookingForMonthDetails(res.data.data.bookingForMonth)
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getBookingForMonthDetails()
    }, []);

    const getBookingForEventDetails = async () => {
      try {
          const res = await axios.get(`http://localhost:8000/api/v1/booking/myBookingForEvent/${params.id}`);
          if(res.data.success) {
              setBookingForEventDetails(res.data.data.bookingForEvent)
          }
      } catch (error) {
          console.log(error);
      }
  }
  useEffect(() => {
      getBookingForEventDetails()
  }, []);


    /*
    const tableRows = bookingOneTimeDetails && bookingOneTimeDetails.map((booking) => (
      <tr key={booking._id}>
        <td>{booking._id}</td>
        <td>{booking.name}</td>
        <td>{booking.price+99}</td>
      </tr>
    ));
    */

    const handleCopy = async (id) => {
      try {
        await navigator.clipboard.writeText(id);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1000);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    };

    

    
  return (
    <div className='my-bookings'>
      <div className='w-full mx-auto pt-[16vh]'>
        <h2 className='text-center text-[#142850] text-2xl lg:text-4xl md:text-3xl sm:text-2xl font-bold py-8'>
          My Bookings
        </h2>
        <div className='px-12 mb-12'>

          <span className='text-xl text-[#0c7b93] font-bold'>Your One Time Cook Bookings</span>

          {copied && <span className="fixed top-24 left-10 bg-[#0c7b93] rounded-xl text-lg px-16 font-medium text-[#f2f6f7]">Copied to clipboard!</span>}
          
            <div className="my-2">

              <div className="relative pl-8 sm:pl-32 group">
                {
                  bookingOneTimeDetails && bookingOneTimeDetails.map((booking) => (
                    <span key={booking._id}>  
                        
                        <div className='py-4'>
                            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#00a8cc] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center text-center justify-center text-xs font-semibold uppercase lg:w-[5.5rem] md:w-[5.5rem] sm:w-auto h-auto px-2 py-1 mb-3 sm:mb-0 text-[#0c7b93] bg-[#008bcc16] rounded-full">
                              {new Date(booking.createdAt).toLocaleDateString('en-CA', { day: '2-digit', month: '2-digit', year: 'numeric' })} <p className='lg:hidden md:hidden px-2'></p> {new Date(booking.createdAt).toLocaleTimeString('en-CA', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })}
                            </time>
                                <div className="text-md font-semibold text-[#00a8cc]" onClick={() => handleCopy(booking._id)}># { booking._id }</div>

                            </div>
                            <div className="text-md text-[#142850] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1"> 
                                <span className='px-4'>Name: { booking.name }</span>
                                <span className='px-4'>Booking Date: {new Date(booking.date).toLocaleDateString('en-CA', { day: '2-digit', month: '2-digit', year: 'numeric' })}</span>
                                <span className='px-4'>Booking Time: { booking.time_slot }</span>
                                <span className='px-4'>Booking Amount: ₹{ booking.price + 99 }</span>
                            </div>
                            
                        </div>
                    </span> 
                    
                  ))
                }
              </div>
            </div>
        </div>


        

        <div className='px-12 mb-12'>

          <span className='text-xl text-[#0c7b93] font-bold'>Your Cook for a Month Bookings</span>
          
            <div className="my-2">

              <div className="relative pl-8 sm:pl-32 group">
                {
                  bookingForMonthDetails && bookingForMonthDetails.map((booking) => (
                    <span key={booking._id}>  
                        
                        <div className='py-4'>
                            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-[#142850] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#00a8cc] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center text-center justify-center text-xs font-semibold uppercase lg:w-[5.5rem] md:w-[5.5rem] sm:w-auto h-auto px-2 py-1 mb-3 sm:mb-0 text-[#0c7b93] bg-[#008bcc16] rounded-full">
                              {new Date(booking.createdAt).toLocaleDateString('en-CA', { day: '2-digit', month: '2-digit', year: 'numeric' })} <p className='lg:hidden md:hidden px-2'></p> {new Date(booking.createdAt).toLocaleTimeString('en-CA', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })}
                            </time>
                                <div className="text-md font-semibold text-[#00a8cc]" onClick={() => handleCopy(booking._id)}># { booking._id }</div>

                            </div>
                            <div className="text-md text-[#142850] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1"> 
                                <span className='px-4'>Name: { booking.name }</span>
                                <span className='px-4'>Booking Date: {new Date(booking.date).toLocaleDateString('en-CA', { day: '2-digit', month: '2-digit', year: 'numeric' })}</span>
                                <span className='px-4'>Booking Time: { booking.time_slot }</span>
                                <span className='px-4'>Booking Amount: ₹{ booking.price + 99 }</span>
                            </div>
                        </div>
                    </span> 
                  ))
                }
              </div>
            </div>
        </div>


        <div className='px-12 mb-12'>

          <span className='text-xl text-[#0c7b93] font-bold'>Your Cook for an Event Bookings</span>
          
            <div className="my-2">

              <div className="relative pl-8 sm:pl-32 group">
                {
                  bookingForEventDetails && bookingForEventDetails.map((booking) => (
                    <span key={booking._id}>  
                        
                        <div className='py-4'>
                            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-[#142850] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#00a8cc] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center text-center justify-center text-xs font-semibold uppercase lg:w-[5.5rem] md:w-[5.5rem] sm:w-auto h-auto px-2 py-1 mb-3 sm:mb-0 text-[#0c7b93] bg-[#008bcc16] rounded-full">
                              {new Date(booking.createdAt).toLocaleDateString('en-CA', { day: '2-digit', month: '2-digit', year: 'numeric' })} <p className='lg:hidden md:hidden px-2'></p> {new Date(booking.createdAt).toLocaleTimeString('en-CA', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })}
                            </time>
                                <div className="text-md font-semibold text-[#00a8cc]" onClick={() => handleCopy(booking._id)}># { booking._id }</div>
                            </div>
                            <div className="text-md text-[#142850] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1"> 
                                <span className='px-4'>Name: { booking.name }</span>
                                <span className='px-4'>Booking Date: {new Date(booking.date).toLocaleDateString('en-CA', { day: '2-digit', month: '2-digit', year: 'numeric' })}</span>
                                <span className='px-4'>Booking Time: { booking.time_slot }</span>
                                <span className='px-4'>Booking Amount: ₹{ booking.price + 99 }</span>
                            </div>
                        </div>
                    </span> 
                  ))
                }
              </div>
            </div>
        </div>


      </div>

    </div>
  )
}

export default MyBooking
