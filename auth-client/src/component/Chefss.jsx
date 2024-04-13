import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const Chefss = ({ curElem }) => {
  return (

        <div className="food-card bg-[#008bcc16] rounded-xl flex flex-col cursor-pointer items-center p-5" >
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
                <button className="bg-[#142850] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white hover:bg-[#0c7b93] "> Read More </button>
            </Link>
        </div> 
         
  )
}

Chefss.propTypes = {
  curElem: PropTypes.object.isRequired,
};

export default Chefss