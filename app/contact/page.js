import React from 'react';

const Contact = () => {
  return (
  <div className="relative isolate overflow-hidden bg-gray-400 py-16 sm:py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
        <div className="max-w-xl lg:max-w-lg">
        <h1 className="text-3xl font-bold leading-6 text-green-300">CONTACT US</h1><br/><br/>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter.</h2>
        <p className="mt-4 text-lg leading-8 text-gray-300 text-justify">Ready to embark on your electrical or solar power project? Contact us today to discuss your requirements and explore how V-TECH Renewables can help you achieve sustainable energy solutions. Visit our website for more information and to get in touch with our team.</p>
        <div className="mt-6 flex max-w-md gap-x-4">
        <label htmlFor="email-address" className="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autoComplete="email" required className="min-w-0 flex-auto rounded-md border-0 bg-white/1 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6" placeholder="Enter your email"/>
          <button type="submit" className="flex-none rounded-md bg-green-300 px-3.5 py-2.5 text-sm font-semibold text-gray-400 shadow-sm hover:bg-green-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-200">Subscribe</button>
        </div>
      </div>
      <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2 font-semibold">
        <div className="flex flex-col items-start">
           <div className="rounded-md bg-white/5 p-2 ring-2 ring-white/10">  
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-5 text-white" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>  
          </div> 
          <dt className="mt-4 font-semibold text-white">PUNE</dt>
          <dd className="mt-2 leading-7 text-gray-700">#01, Ground Floor,Pinnac Apt.,Vakil Nagar,Erandwane – 411004</dd>
        </div>
        <div className="flex flex-col items-start">
          <div className="rounded-md bg-white/5 p-2 ring-2 ring-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-5 text-white" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </div> 
          <dt className="mt-4 font-semibold text-white">COIMBATORE</dt>
          <dd className="mt-2 leading-7 text-gray-700">Orange Electrical Solutions, Kangeyam Road, Nachipalayam, Tiruppur - 641606</dd>
        </div>
        <div className="flex flex-col items-start">
           <div className="rounded-md bg-white/5 p-2 ring-2 ring-white/10">   
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-5 text-white">
           <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          </div> 
          <dt className="mt-4 font-semibold text-white">EMAIL ADDRESS</dt>
          <dd className="mt-2 leading-7 text-gray-700">info@vtechrenewables.com</dd>
        </div>
        <div className="flex flex-col items-start">
           <div className="rounded-md bg-white/5 p-2 ring-2 ring-white/10">  
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-5 text-white">
           <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          </div> 
          <dt className="mt-4 font-semibold text-white">PHONE NUMBER</dt>
          <dd className="mt-2 leading-7 text-gray-700">+91 9098 797979</dd>
        </div> 
      </dl>
    </div>
  </div>
    <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
      <div className="aspect-[1155/678] w-[72.1875rem] opacity-20"></div>
    </div>
  </div>
 )
};

export default Contact;

