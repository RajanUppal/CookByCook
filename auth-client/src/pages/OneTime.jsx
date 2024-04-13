import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import logo from "../assets/CookByCook.png"
import { HiCurrencyRupee } from "react-icons/hi2";
import axios from 'axios';
import { useUserContext } from '../../context/userContext';
import PropTypes from 'prop-types';

const OneTime = ({ curElem }) => {

    const {user, setUser} = useUserContext()

    const [formData, setFormData] = useState({
        user: user?.user?._id,
        name: user?.user?.name,
        email: user?.user?.email,
        country: '',
        state: '',
        city: '',
        street: '',
        zipCode: '',
        mobile: '',
        date: '',
        time_slot: '',
        price: 500,
        payment: false,
        status: 'Pending',
        service_type: 'One Time Cook',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };


    const navigate = useNavigate();
    const handleOnSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/v1/booking/for-one-time', formData, {
                headers: {
                    Authorization:`Bearer ${localStorage.getItem("token")}`
                }
            });
            console.log(response);
            if (response.status === 200) {
                // Handle successful booking creation
                toast.success(response.data.message);
                //navigate(`/pay/${response.data.data.bookingOneTime._id}`);
                navigate('/pay-OneTime', { state: { id: response.data.data.bookingOneTime._id} });
            }
        } catch (error) {
            // Handle error
            console.error('Error creating booking:', error);
            toast.error('Error creating booking. Please try again.');
        }
    };

  return (
    <div className="booking">
    <div className="w-full mx-auto pt-[16vh]">
     <form className="ease-in duration-300 w-[80%] sm:w-max shadow-sm backdrop-blur-md bg-white/80 lg:w-max mx-auto rounded-md px-8 py-5 mb-8" onSubmit={handleOnSubmit}>
         { /*
         <label htmlFor="file-upload" className='custom-file-upload'>
             <img src={image?.url || avatar} alt="" className="h-32 w-32 bg-contain rounded-full mx-auto cursor-pointer" />
         </label>
         <label className='block text-center text-gray-900 text-base mb-2' htmlFor="">Profile Picture</label>
         <input type="file" label="Image" name="myFile" id='file-upload' className='hidden' accept='.jpeg .png .jpg' onChange={handleImage}/>
         */ }

       <NavLink to="/">
         <img src={logo} alt="" className="logo mx-auto mb-4 h-[6rem] w-[6rem] cursor-pointer text-center"/>
       </NavLink>

            <h2 className="text-center mb-6 text-3xl border-solid border-b-2 border-[#c1dadf] font-semibold">One Time Cook</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
                    
                    <input type="text" disabled placeholder={user?.user?.name} name='name' className='shadow-sm bg-white appearance-none border rounded w-full py-3 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={handleInputChange} />

                    <input type="email" disabled placeholder={user?.user?.email} name='email' className='shadow-sm bg-white appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={handleInputChange} />

                    <input type="text" placeholder="Country" name='country' className='shadow-sm bg-white appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={handleInputChange} />
                    
                    <input type="text" placeholder="State" name='state' className='shadow-sm bg-white appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={handleInputChange} />

                    <input type="text" placeholder="City" name='city' className='shadow-sm bg-white appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={handleInputChange}/>
                    
                    <input type="text" placeholder="Apartment No, Street" name='street' className='shadow-sm bg-white appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={handleInputChange}/>
                    
                    <input type="text" placeholder="Zip-Code (eg. 123456)" name='zipCode' className='shadow-sm bg-white appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' pattern="[0-9]{6}" onChange={handleInputChange}/>

                    <input type="text" placeholder="Mobile (eg. 9999888777)" name="mobile" className="shadow-sm bg-white appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  pattern="[0-9]{10}"  required onChange={handleInputChange}/>

                    <input type="date" placeholder="Booking Date" name='date' className='shadow-sm bg-white appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={handleInputChange}/>

                    <select className="select bg-[#142850] text-white select-md w-full max-w-xs" name="time_slot" onChange={handleInputChange}>
                        <option disabled selected className='text-lg text-center'>Time Slot</option>
                        <option className="bg-[#142850] text-white text-lg text-center">8:00 - 8:30 am</option>
                        <option className="bg-[#142850] text-white text-lg text-center">8:30 - 9:00 am</option>
                        <option className="bg-[#142850] text-white text-lg text-center">9:00 - 9:30 am</option>
                        <option className="bg-[#142850] text-white text-lg text-center">9:30 - 10:00 am</option>
                        <option className="bg-white text-[#142850] text-lg text-center">12:30 - 1:00 pm</option>
                        <option className="bg-white text-[#142850] text-lg text-center">1:00 - 1:30 pm</option>
                        <option className="bg-white text-[#142850] text-lg text-center">1:30 - 2:00 pm</option>
                        <option className="bg-white text-[#142850] text-lg text-center">2:00 - 2:30 pm</option>
                        <option className="bg-white text-[#142850] text-lg text-center">2:30 - 3:00 pm</option>
                        <option className="bg-[#142850] text-white text-lg text-center">8:00 - 8:30 pm</option>
                        <option className="bg-[#142850] text-white text-lg text-center">8:30 - 9:00 pm</option>
                        <option className="bg-[#142850] text-white text-lg text-center">9:00 - 9:30 pm</option>
                        <option className="bg-[#142850] text-white text-lg text-center">9:30 - 10:00 pm</option>
                    </select>

            </div>
                <button className="bg-[#142850] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md w-full rounded-full px-8 py-2 text-xl font-medium text-white mx-auto text-center mb-3 mt-5" type='submit'>
                    Confirm Booking
                </button>

            <div className='flex items-center'>
                <HiCurrencyRupee className='w-6 h-6 text-[#142850]'/>
                <p className='px-2 text-[0.75rem]'> If number of people exceeds than 2, then extra ₹100 is applicable per person. </p>
            </div>

         <ToastContainer />

     </form>
 </div>
</div>
  )
}

OneTime.propTypes = {
    curElem: PropTypes.object.isRequired,
  };
  

export default OneTime