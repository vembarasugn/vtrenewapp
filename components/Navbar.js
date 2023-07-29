"use client";
import React from 'react';
import Link from 'next/link';
//import { useRouter } from 'next/navigation';


const Navbar = () => {
 
  const [isOpen,setIsOpen] = React.useState(false);
  
  return (
  <header className="absolute inset-x-0 top-0 z-50">
  <nav className="bg-gray-800">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button type="button" onClick ={()=> setIsOpen((prev) => !prev)} className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            { isOpen ?
              <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6L18 18" stroke="#DDE6ED" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
            :
              <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="#DDE6ED" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
            }
          </button>
        </div>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">  
        <div className="flex flex-shrink-0 items-center">
          <Link href="/"><img className="h-10 w-14 " src="/v-techlogo.svg" alt="vtech-logo"/></Link>           
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              <Link href="/" className="bg-gray-800 px-3 py-2 font-bold text-base hover:text-green-400 no-underline hover:underline decoration-4 text-gray-300">HOME</Link>
              <Link href="/about" className="bg-gray-800 px-3 py-2 font-bold text-base hover:text-green-400 no-underline hover:underline decoration-4 text-gray-300">ABOUT</Link>
              <Link href="/ourservices" className="bg-gray-800 px-3 py-2 font-bold text-base hover:text-green-400 no-underline hover:underline decoration-4 text-gray-300">SERVICES</Link>
              <Link href="/feature" className="bg-gray-800 px-3 py-2 font-bold text-base hover:text-green-400 no-underline hover:underline decoration-4 text-gray-300">FEATURES</Link>
              <Link href="/contact" className="bg-gray-800 px-3 py-2 font-bold text-base hover:text-green-400 no-underline hover:underline decoration-4 text-gray-300">CONTACT</Link>
            </div>
          </div> 
          </div>
        </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">    
      </div>
    </div>
   
    <div className={`sm:hidden ${ isOpen ? 'block' : 'hidden'}`} id="mobile-menu">  
      <div className="space-y-2 px-2 pb-5 pt-3" onClick ={()=> setIsOpen((prev) => !prev)}>
      <ul>
        <li><Link href="/" className="bg-gray-800 px-3 py-2 font-semibold text-base hover:text-green-400 decoration-4 text-gray-300">HOME</Link></li>
        <li><Link href="/about" className="bg-gray-800 px-3 py-2 font-semibold text-base hover:text-green-400 decoration-4 text-gray-300">ABOUT</Link></li>
        <li><Link href="/ourservices" className="bg-gray-800 px-3 py-2 font-semibold text-base hover:text-green-400 decoration-4 text-gray-300">SERVICES</Link></li>
        <li><Link href="/feature" className="bg-gray-800 px-3 py-2 font-senmibold text-base hover:text-green-400 decoration-4 text-gray-300">FEATURES</Link></li>
        <li><Link href="/contact" className="bg-gray-800 px-3 py-2 font-semibold text-base hover:text-green-400 decoration-4 text-gray-300">CONTACT</Link></li>
      </ul>
      </div>  
    </div>
  </nav> 
</header>
)
};

export default Navbar;


