import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PageNavigation from '../component/PageNavigation'

const ChefPage = () => {

    const params = useParams()
    const [chefDetails, setChefDetails] = useState([])
    const getChefDetails = async () => {
        try {
            const res = await axios.get(`http://localhost:8000/api/v1/chefs/getChef/${params.id}`);
            if(res.data.success) {
                setChefDetails(res.data.data.chef)
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getChefDetails()
    }, [])


    return (
    
    <div className="pt-[16vh]">
        <div className="py-3 px-10 sm:px-4 md:px-6 lg:px-6">
            <div className="container mx-auto">
                <PageNavigation title={chefDetails?.name} />

                <div className="grid grid-cols-1 md:grid-cols-2 pb-14 gap-8">
                    <div className="bg-[#008bcc16] border rounded-md mb-5 p-4">
                        <img src={chefDetails?.chefImage} alt="" className='w-full h-full cursor-pointer' />
                    </div>

                    <div className="bg-[#008bcc16] border rounded p-8 text-black mb-5">
                        <div className="text-2xl mb-2 font-bold text-[#142850]">
                            {
                                chefDetails?.name
                            }
                        </div>
                        <div className="text-xl text-justify text-black mb-6">
                            {
                                chefDetails?.description
                            }
                        </div>
                    </div>

                </div>

                <div className="grid lg:grid-cols-2 pb-14 text-lg md:grid-cols-2 grid-cols-2 gap-8 ">
                    <div className="bg-[#142850] py-4 text-center text-white font-semibold">
                        Expertise : {chefDetails?.category}
                    </div>
                    <div className="bg-[#142850] py-4 text-center text-white font-semibold">
                        Experience : {chefDetails?.experience} years
                    </div>
                </div>

            </div>
        </div>
    </div>

  )
}

export default ChefPage