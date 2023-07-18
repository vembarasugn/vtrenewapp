'use client';
import Image from 'next/image';
import Link from 'next/link';
import About from './About/About';
import Services from '../components/Services';
import Chooseus from '../components/Whychooseus';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useRouter } from 'next/navigation';
//import { useRouter } from "next/router";

function Home() {
  
const router = useRouter();

return (   
<div className="bg-white">
  <header className="absolute inset-x-0 top-0 z-50">
    <nav className="flex bg-gray-900 items-center justify-between p-6 lg:px-8.5" aria-label="Global">
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">vtrenewables</span>
          <img className="h-10 w-auto" src="v-techlogo.svg" alt=""/>
        </a>
      </div>
     
      <div className="hidden lg:flex lg:gap-x-12">
        <Link href='#' onClick={() => router.push('/About')} className="text-sm hover:text-green-400 no-underline hover:underline decoration-4 font-semibold leading-6 text-gray-300">ABOUT US</Link>
        <a href="#" className="text-sm hover:text-green-400 no-underline hover:underline decoration-4 font-semibold leading-6 text-gray-300">OUR SERVICES</a>
        <a href="#" className="text-sm hover:text-green-400 no-underline hover:underline decoration-4 font-semibold leading-6 text-gray-300">WHY CHOOSE US ?</a>
        <a href="#" className="text-sm hover:text-green-400 no-underline hover:underline decoration-4 font-semibold leading-6 text-gray-300">CONTACT US</a>
      </div>
    </nav>  
  </header>

  <div className="relative isolate px-6 pt-14 lg:px-8 ">
  <img src="/vt-renewables.jpg" alt="background-img" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center bg-opacity-50"></img>
    <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-lime-100 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
    </div>
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-green-400 sm:text-6xl">V-Tech Renewables Consultancy Services</h1>
        <p className="mt-6 text-lg leading-8 text-gray-200">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#" className="rounded-md bg-indigo-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-200">Learn more <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div> 
  </div>
  <About/>
  <Services/>
  <Chooseus/>
  <Contact/>
  <Footer/> 
</div>
 )
};

export default Home;
