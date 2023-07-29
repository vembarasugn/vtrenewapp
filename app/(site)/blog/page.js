import React from 'react';

const About = () => {
  return (
  <div className="w-full">
    <div className="flex bg-white h-auto mt-14">
        <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2 ">
            <div>
                <h2 className="text-3xl font-semibold text-green-400 md:text-4xl"> ABOUT US </h2>
                <h3 className="font-semibold mt-2 text-lg leading-8 text-gray-600">Find our services given in the below list.</h3>
                <p className="mt-5 leading-6 text-justify text-gray-400 font-sans text-base border-t-2 border-gray-200 pt-10">
                V-TECH Renewables(Formerly known as V-TECH Consultancy Services) as is a highly reputable consultancy service provider that focuses on electrical projects and solar power projects. With our establishment in 2009, we have accumulated more than a decade of experience in the industry, making us one of the most knowledgeable and  reliable companies in the field. We are committed to providing quality services to our clients and have established an excellent track record over the years. Our team of expert engineers and technicians are well-equipped to handle any electrical or solar projects. We strive to meet the highest standards of customer satisfaction.<br/>
                We adhere to strict safety protocols and only use the best quality materials and equipment available. Our team is available 24/7 to provide assistance and ensure that all projects are completed on time and to the highest standards. We are proud to have earned the trust of our customers over the years.
                <br/>
                We strive to deliver the best results for every project and are continually improving our processes and technology to ensure that our customers get the most value for their money. Our commitment to excellence and customer satisfaction is unmatched.
                </p>
                <div className="flex justify-center lg:justify-start mt-6 ">
                    <a className="mx-4 px-4 py-3 bg-gray-300 text-gray-800 text-xs font-semibold rounded hover:bg-gray-400" href="#">Learn More</a>
                </div> 
            </div>
        </div>
      <div className="w-full md:w-1/2 relative z-0 px-8 md:px-0 md:py-14 mt-14"> 
        <div className="bg-gray-700 text-white rounded-b md:rounded-b-none md:rounded-r shadow-lg overflow-hidden">
          <div className="text-lg font-medium uppercase p-8 text-center border-b border-white-2 tracking-wide">Enterprise</div>
          <div className="text-center text-sm sm:text-md max-w-sm mx-auto mt-8 text-gray-200 px-8 lg:px-0">
            VTrenewables offers a range of services to help your business.Lets get in touch for details.
          </div>
          <div className="mt-8 border border-white-300 mx-8 lg:mx-16 flex flex-wrap">
            <div className="flex items-center justify-center w-1/2 text-center p-4 border-r border-b border-white-400">Project management</div>
            <div className="flex items-center justify-center w-1/2 text-center p-4 border-b border-white-300">Implementation Services</div>
            <div className="flex items-center justify-center w-1/2 text-center p-4 border-r border-white-300">Migration assistance</div>
            <div className="flex items-center justify-center w-1/2 text-center p-4">Dedicated support</div>
          </div>
          <a className="block flex items-center justify-center bg-green-300 hover:bg-green-300 p-8 text-md font-semibold text-gray-700 uppercase mt-8" href="#">
            <span>Contact sales</span>
            <span className="font-medium text-gray-700 ml-2">➔</span>
          </a>
        </div>
      </div>
    </div>
  </div>
)
};

export default About;

