import React, { useState } from 'react'
import logo from "../assets/Logo-CookByCook.png"
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/userContext';
import { useBookingOneTimeContext } from '../../context/bookingOneTimeContext';

const Navbar = () => {

    const [nav,setNav] = useState(false)
    const navigate = useNavigate()
    const { user, setUser } = useUserContext()
    

    const handleNav = () => {
        setNav(!nav)
    }

    const { bookingItems } = useBookingOneTimeContext()

    return (
        
    <>
        

        <div className="bg-white/80 shadow-md fixed top-0 left-0 w-full z-40 ease-in duration-300 backdrop-blur-md">

        
            {
                
                user?.user.isVerified === false &&     
                (<div className='bg-[#142850] py-3 px-4 text-white'>
                        <Link to="/verifyOtp">Please verify OTP</Link>
                </div>)
            }
            

                <div className='py-3 px-10 sm:px-4 md:px-6 lg:px-6 container mx-auto'>
                    
                    <div className="flex items-center justify-between">
                      <Link to="/">
                          <img src={logo} alt="cook-by-cook-logo" className='h-14 cursor-pointer' />      
                      </Link>
                        
                            <div className="lg:flex hidden gap-8 items-center">
                                <Link to="/chefs" className="text-[#142850] text-base font-medium hover:text-[#0c7b93]"> Our Chefs </Link>
                                <Link to="/about" className="text-[#142850] text-base font-medium hover:text-[#0c7b93] "> About CookByCook </Link>
                                <Link to="/savemember" className="text-[#142850] text-base font-medium hover:text-[#0c7b93] "> Become a Member </Link>
                                

                                {
                                  user?.user?.role === 'admin' && <Link to="/addchef" className="text-[#142850] text-base font-medium hover:text-[#0c7b93]"> Add Chef </Link>
                                }

                                
                                <Link to="/delicacies" className="text-[#142850] text-base font-medium hover:text-[#0c7b93]"> Delicacies </Link>

                                {
                                    user? (<div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                      <div className="w-10 rounded-full">
                                        <img alt="profile" src={user?.user?.profileImage} />
                                      </div>
                                    </div>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#008bcc16] rounded-box w-32">
                                      <li>
                                        <Link to="/profile" className="justify-between">
                                          Profile
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to={`/my-bookings/${user?.user?._id}`} className="justify-between">
                                          My Bookings
                                        </Link>
                                      </li>
                                      
                                      <li><button className="justify-between" onClick={() => {
                                            localStorage.clear()
                                            location.reload()
                                            navigate("/")
                                      }}>Logout</button></li>
                                    </ul>
                                  </div>) :(<Link to='/login'>
                                    <button className="bg-[#142850] active:scale-90 transition duration-100 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Login</button>
                                </Link>)
                                }
                                
                            </div>      

                        <div className="block lg:hidden z-40" onClick={handleNav}>
                            {
                                nav?(<RxCross2 size={25} className='text-[#142850] cursor-pointer'/>):(<TiThMenu className='text-[#142850] cursor-pointer' size={25}/>)
                            }
                        </div>
                        
                    </div>      

                        <div className={`lg:hidden absolute w-1/2 sm:w-2/5 h-screen px-4 py-2 text-xl font-medium ease-in shadow-sm backdrop-blur-md bg-white/80 top-0 duration-500 ${nav ? "right-0" : "right-[-100%]"} pt-24`}>

                            <div className="flex flex-col gap-8 ">
                                <Link to="/chefs" className="text-[#142850] text-base font-medium hover:text-[#0c7b93]"> Our Chefs </Link>
                                <Link to="/about" className="text-[#142850] text-base font-medium hover:text-[#0c7b93] "> About CookByCook </Link>
                                <Link to="/savemember" className="text-[#142850] text-base font-medium hover:text-[#0c7b93] "> Become a Member </Link>

                                {
                                  user?.user?.role === 'admin' && <Link to="/addchef" className="text-[#142850] text-base font-medium hover:text-[#142850]"> Add Chef </Link>
                                }

                                
                                <Link to="/delicacies" className="text-[#142850] text-base font-medium hover:text-[#0c7b93]"> Delicacies </Link>

                                {
                                    user? (<div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                      <div className="w-10 rounded-full">
                                        <img alt="profile" src={user?.user?.profileImage} />
                                      </div>
                                    </div>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#008bcc16] rounded-box w-full">
                                      <li>
                                        <Link to="/profile" className="justify-between">
                                          Profile
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to={`/my-bookings/${user?.user?._id}`} className="justify-between">
                                          My Bookings
                                        </Link>
                                      </li>
                                      
                                      <li><button onClick={() => {
                                            localStorage.clear()
                                            location.reload()
                                            navigate("/")
                                      }}>Logout</button></li>
                                    </ul>
                                  </div>) :(<Link to='/login'>
                                    <button className="bg-[#142850] active:scale-90 transition duration-100 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">Login</button>
                                </Link>)
                                }
                            </div>      

                        </div>      

                        

                </div>
                        
              </div>

        
    </>
    
  )
}

export default Navbar