import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useChefContext } from '../../context/chefContext';
import { FaStar } from 'react-icons/fa';
import Chef1 from "../assets/chef-1.png"
import { Link, useParams } from 'react-router-dom';
import { useBookingOneTimeContext } from '../../context/bookingOneTimeContext';

const Chefs = () => {

    const {Chef, setChef} = useChefContext()
    const [active, setActive] = useState(0)

    const [value, setValue] = useState('all');

    const category = [
        {
            id: 0,
            name: 'All',
            value: 'all'
        },
        {
            id: 1,
            name: 'Indian',
            value: 'Indian'
        },
        {
            id: 2,
            name: 'Chinese',
            value: 'Chinese'
        },
        {
            id: 3,
            name: 'Italian',
            value: 'Italian'
        },
        {
            id: 4,
            name: 'Mediterranean',
            value: 'Mediterranean'
        },
        {
            id: 5,
            name: 'Drinks',
            value: 'Drinks'
        },
        {
            id: 6,
            name: 'Bakery',
            value: 'Bakery'
        },
    ]

    const handleBtn = (btn)=>{
        setActive(btn.id)
        setValue(btn.value)
    }

    const params = useParams()

    const getChefs = async () => {
        try {
            const res = await axios.get(`http://localhost:8000/api/v1/chefs/getAllChefs?category=${value}`);
            if(res.data.success) {
                setChef(res.data.data.chef)
            } 
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getChefs()
    }, [value])


    const { addToBooking } = useBookingOneTimeContext()


  return (
    
    <div className="pt-[16vh]">
        <div className="container mx-auto py-8">
            <div className="p-5 mb-14">

                <div className="flex flex-wrap justify-center mb-8 gap-5">
                    {
                        category?.map(btn => (
                            <button className={active===btn.id? "text-xl px-4 py-3 text-center text-white bg-[#00a8cc] border-[#00a8cc] border-2 rounded-xl justify-center font-medium" : "text-xl px-4 py-3 text-[142850] rounded-xl border-[#142850] border-2   font-medium"} onClick={()=>{
                                handleBtn(btn)
                            }} key={btn.id}>{btn.name}</button>
                        ))
                    }
                </div>
                <div className="grid py-6 gap-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                    {
                        Chef?.map((curElem, index) => (
                            <div key={index} className="food-card bg-[#008bcc16] rounded-xl flex flex-col cursor-pointer items-center p-5" >
                                <div>
                                    <Link to={`/chefs/${curElem?._id}`}>
                                    <img src={curElem?.chefImage} alt="" className='hover:scale-110 transition duration-300'/>
                                    </Link>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <p className="text-xl text-center font-bold text-[#142850] py-4">
                                        {curElem?.name}
                                    </p>
                                    <div className="flex text-sm space-x-2 cursor-pointer">
                                        <span className="font-normal text-[#00a8cc]">4.4</span>
                                        <FaStar size={16} className='text-[#00a8cc]'/>
                                    </div>
                                </div>
                                <Link to={`/chefs/${curElem?._id}`}>
                                        <button className="bg-[#142850] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white" > Book Now </button>
                                </Link>
                            </div> 
         
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chefs

