import React from 'react';
import {FaLinkedin} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
    <div className='bg-gray-200 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-23'>
      <div className='p-10'>
        <ul>
          <p className='text-gray-600 font-bold text-3xl pb-6'>
            VT <span className='text-green-400'> Renewables </span>
          </p>
          <div className='flex gap-6 pb-5'>
            <FaLinkedin className='text-2xl text-gray-600 cursor-pointer hover:text-blue-400'/>
            <FaTwitter className='text-2xl text-gray-600 cursor-pointer hover:text-blue-600'/>
            <FaYoutube className='text-2xl text-gray-600 cursor-pointer hover:text-red-500'/>
          </div>
        </ul>
      </div>
      <div className='p-10'>
        <ul>
          <p className='text-gray-600 font-semibold text-2xl pb-3'>Projects</p>
          <li className='text-gray-500 text-md pb-1 font-semibold hover:text-green-400 cursor-pointer no-underline hover:underline decoration-4'>Electrical Projects</li>
          <li className='text-gray-500 text-md pb-1 font-semibold hover:text-green-400 cursor-pointer no-underline hover:underline decoration-4'>SolarPower Projects</li>
        </ul>
      </div>
      <div className='p-10'>
        <ul>
          <p className='text-gray-600 font-semibold text-2xl pb-3'>Company</p>
          <li><Link href="/" className='text-gray-500 text-md pb-1 font-semibold hover:text-green-400 cursor-pointer no-underline hover:underline decoration-4'>Home</Link></li>
          <li><Link href="/careers" className='text-gray-500 text-md pb-1 font-semibold hover:text-green-400 cursor-pointer no-underline hover:underline decoration-4'>Careers</Link></li>
          <li className='text-gray-500 text-md pb-1 font-semibold hover:text-green-400 cursor-pointer no-underline hover:underline decoration-4'>Press & Media</li>
        </ul>
      </div>
      <div className='p-10'>
        <ul>
          <p className='text-gray-600 font-semibold text-2xl pb-3'>Support</p>
          <li><Link href="/careers" className='text-gray-500 text-md pb-1 font-semibold hover:text-green-400 cursor-pointer no-underline hover:underline decoration-4'>Services</Link></li>
          <li className='text-gray-500 text-md pb-1 font-semibold hover:text-green-400 cursor-pointer no-underline hover:underline decoration-4'>Blog</li>
          <li className='text-gray-500 text-md pb-1 font-semibold hover:text-green-400 cursor-pointer no-underline hover:underline decoration-4'>Downloads & Resources</li>
        </ul>
      </div>
    </div>
    <div className='flex flex-col justify-center items-center text-center p-5 bg-gray-200'>
      <h1 className='text-gray-500 font-semibold'> © 2023 All Rights Reserved.</h1>
    </div>
    </>
  )
}

export default Footer;
