import React from 'react'
import logo from "../assets/CBC-Logo.png"
import { FaFacebookSquare, FaInstagramSquare , FaYoutube,      } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer p-10">
          <aside>
            <img src={logo} className='h-32 w-32'  alt="" />
            <h1 className='text-md'> © 2024 CookByCook </h1>
            <h1 className='text-md'> Designed by V.R.A. </h1>

          </aside> 
          <nav>
            <h6 className="footer-title text-xl text-[#142850]">Services</h6> 
            <a href='/for-one-time' className="link link-hover text-lg">One Time Cook</a>
            <a href='/for-month' className="link link-hover text-lg">Cook for a Month</a>
            <a href='/for-event' className="link link-hover text-lg">Cook for an Event</a>
          </nav> 
          <nav>
            <h6 className="footer-title text-xl text-[#142850]">Company</h6> 
            <a href='/about' className="link link-hover text-lg">About us</a>
            <a href='/savemessage' className="link link-hover text-lg">Contact</a>
            <a href='savemember' className="link link-hover text-lg">Become a Member</a>
          </nav> 
          <nav>
            <h6 className="footer-title text-xl text-[#142850]">Legal</h6> 
            <a className="link link-hover text-lg">Terms of use</a>
            <a className="link link-hover text-lg">Privacy policy</a>
            <a className="link link-hover text-lg">Cookie policy</a>
          </nav>
          <nav >
            <FaFacebookSquare className='text-2xl my-2 hover:text-[#00a8cc] hover:scale-125'/>
            <FaYoutube className='text-2xl my-2 hover:text-[#00a8cc] hover:scale-125'/>
            <FaInstagramSquare className='text-2xl my-2 hover:text-[#00a8cc] hover:scale-125'/>
            <BsTwitterX  className='text-2xl my-2 hover:text-[#00a8cc] hover:scale-125'/>
          </nav>
          

          
    </footer>

    
  )
}

export default Footer