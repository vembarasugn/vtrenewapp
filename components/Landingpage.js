import React from 'react'

const Home = () => {
  return (
  <div className="relative isolate px-6 pt-16 lg:px-8">
  {/* <img src="/vt-renewables.jpg" alt="background-img" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center bg-opacity-50"></img> */}
    <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-lime-100 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
    </div>
    <div className="mx-auto max-w-2xl py-26 sm:py-48 lg:py-56">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-green-400 sm:text-6xl">V-Tech Renewables Consultancy Services</h1>
        <p className="mt-6 text-lg leading-8 text-gray-800">We strive to deliver the best results for every project and are continually improving our processes and technology to ensure that our customers get the most value for their money.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#" className="rounded-md bg-indigo-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
          <a href="/ourservices" className="text-sm font-semibold leading-6 text-gray-800">Learn more <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div> 
  </div>
  )
};

export default Home;
