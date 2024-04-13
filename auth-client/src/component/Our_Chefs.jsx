import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import { useChefContext } from '../../context/chefContext';
import axios from 'axios';
import Chefss from './Chefss';

const Our_Chefs = () => {

    const [newChef, setNewChef] = useState([])
    const {Chef, setChef} = useChefContext()
    const getChefs = async () => {
        try {
            const res = await axios.get(`http://localhost:8000/api/v1/chefs/getNewChefs`)
            if(res.data.success) {
                setNewChef(res.data.data.chef)
            } 
        } catch (error) {
            console.log(error);
        }
    }
    // console.log(newChef);
    useEffect(() => {
        getChefs()
    }, [newChef])

  return (

    <div className="py-3 px-10 sm:px-4 md:px-6 lg:px-6">
        <div className="container mx-auto py-[2vh]">
            <div className="text-2xl lg:text-4xl md:text-3xl font-bold text-center text-[#142850]  mb-8">
                Our Top <span className='text-[#0c7b93]'>Chefs</span>
            </div>
            <div className="grid py-6 gap-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">

                {
                    newChef?.map(curElem => <Chefss curElem={curElem}/>)
                }

            </div>

        </div>
    </div>

  )
}

export default Our_Chefs