import React from 'react';

const Services = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-green-400 sm:text-4xl">OUR SERVICES</h2>
        <p className="font-semibold mt-2 text-lg leading-8 text-gray-600 ">Find our services given in the below list.</p>
      </div>
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 border-t-2 border-gray-300 pt-10">
        <article className="flex max-w-xl flex-col items-start justify-between">
          <div className="group relative">
            <h3 className="mt-3 text-lg font-bold leading-6 text-gray-600 group-hover:text-gray-500 no-underline hover:underline decoration-4">
                <span className="absolute inset-0"></span>
                ELECTRICAL PROJECTS
            </h3>
            <p className="mt-5 leading-6 text-justify text-gray-400 font-sans text-base">At V-TECH Renewables, we pride ourselves on our in-depth knowledge and experience in electrical projects. From initial design and planning to installation and maintenance, we provide end-to-end consulting services, ensuring that our clients electrical systems meet their specific requirements. Our team of highly skilled electrical engineers and technicians has a proven track record of delivering successful projects for various industries, including residential, commercial, and industrial sectors. We work closely with our clients, understanding their needs and delivering innovative solutions that optimize energy efficiency enhance safety, and ensure reliable power distribution.</p>
          </div>
       </article>
       <article className="flex max-w-xl flex-col items-start justify-between">
          <div className="group relative">
            <h3 className="mt-3 text-lg font-bold leading-6 text-gray-600 group-hover:text-gray-500 no-underline hover:underline decoration-4">
                <span className="absolute inset-0"></span>
                SOLAR POWER PROJECTS  
            </h3>
            <p className="mt-5 leading-6 text-justify text-gray-400 font-sans text-base">As advocates of renewable energy, we offer consultancy and implementation services for solar power projects. Our dedicated team of solar energy experts assists clients in designing, installing, and maintaining efficient solar power solutions. Whether it's a small residential installation or a large-scale commercial project, we tailor our services to each client's unique needs and location. With a focus on maximizing solar energy generation, we utilize the latest technologies, such as photovoltaic (PV) panels, energy storage systems, and smart grid integration, to deliver cost-effective and sustainable solar power projects. Our team also provides ongoing monitoring and maintenance services to ensure optimal system performance and longevity.</p>
          </div>
        </article>
        <article className="flex max-w-xl flex-col items-start justify-between">
          <div className="group relative">
            <h3 className="mt-3 text-lg font-bold leading-6 text-gray-600 group-hover:text-gray-500 no-underline hover:underline decoration-4">
                <span className="absolute inset-0 "></span>
                PROJECT MANAGEMENT
            </h3>
            <p className="mt-5 leading-6 text-justify text-gray-400 font-sans text-base">At V-TECH Renewables, effective project management is at the core of what we do. We understand the complexities involved in electrical and solar power projects and strive to deliver exceptional results within budget and timeline constraints. Our experienced project managers take a proactive approach, ensuring thorough planning, efficient resource allocation, and seamless coordination among various stakeholders. We keep our clients updated throughout the project's lifecycle, providing regular progress reports, and addressing any challenges that may arise. Our commitment to meticulous project management ensures successful project completion and client satisfaction.</p>
          </div>
        </article>
      </div>
    </div>
  </div>
  )
};

export default Services;
