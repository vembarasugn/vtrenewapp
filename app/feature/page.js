import React from 'react';

const Feature = () => {
  return (
  <main className="container mx-auto max-width pt-10 pb-20">
      <section>
        <div className="mt-10 px-8">
          <h1 className="text-green-400 text-7xl font-semibold xxs:text-2xl xs:text-2xl sm:text-3xl lg:text-5xl xl:text-7xl">
          FEATURES<br></br>
          </h1>
          <h2 className="text-gray-500 text-lg mt-5 opacity-50">
            Find our services given in the below list.
          </h2>
        </div>
      </section>
      <section>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row">
          <div className="w-2/6 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-2/6">
            <h1 className="text-gray-500 text-4xl">Stats</h1>
            <div className="mt-5">
              <div>
                <h2 className="text-gray-500 opacity-50 text-xl">Year Founded</h2>
                <h1 className="text-gray-500 text-sm">2023</h1>
              </div>
              <div className="mt-5">
                <h2 className="text-gray-500 opacity-50 text-xl">Total Funding</h2>
                <h1 className="text-gray-500 text-sm">$0M</h1>
              </div>
              <div className="mt-5">
                <h2 className="text-gray-500 opacity-50 text-xl">Team Members</h2>
                <h1 className="text-gray-500 text-sm">12</h1>
              </div>
            </div>
          </div>

          <div className="w-4/6 bg-lightblack p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6">
            <h1 className="text-gray-500 text-3xl">EXPERTISE</h1>
            <p className="mt-4 text-gray-500 text-justify opacity-50">
            With over a decade of experience, our team comprises highly-skilled professionals with extensive knowledge in electrical engineering, solar power projects, and project management. Continuous learning and development are key to our success, and we stay abreast of the latest technologies, regulations, and industry trends. This expertise allows us to provide the best-in-class services to our clients, ensuring that their projects are executed to the highest standards.
            </p><br/>
            <h1 className="text-gray-500 text-3xl">CUSTOMIZED SOLUTIONS</h1>
            <p className="mt-4 text-gray-500 text-justify opacity-50">
            We understand that each client has unique requirements, and we tailor our solutions accordingly. Our team collaborates closely with clients to understand their goals and objectives, site conditions, and budget constraints. This collaborative approach allows us to develop customized strategies and recommendations that meet their specific needs, ensuring optimal system performance, energy savings, and return on investment. We consider factors such as shading analysis, energy consumption patterns, available roof space, and local regulations to design solar power systems that are tailored to each client's location and objectives.
            </p><br/>
            <h1 className="text-gray-500 text-3xl">QUALITY ASSURANCE</h1>
            <p className="mt-4 text-gray-500 text-justify opacity-50">
            At V-TECH Renewables, we prioritize quality in every aspect of our work. We adhere to industry standards and best practices, ensuring that our services are delivered to the highest level of quality. Our team conducts thorough inspections, performs rigorous testing, and implements strict quality control measures throughout the project lifecycle. We source equipment and components from reputable manufacturers and suppliers to ensure reliability and performance. By employing robust quality assurance processes, we guarantee the reliability and longevity of the systems we design and implement, providing peace of mind to our clients.
            </p><br/>
            <h1 className="text-gray-500 text-3xl">CUSTOMER SATISFACTION</h1>
            <p className="mt-4 text-gray-500 text-justify opacity-50">
            Client satisfaction is our ultimate goal.We strive to exceed our clients' expectations by providing exceptional customer service and support throughout the project lifecycle.Our dedicated team of professionals is committed to open communication, transparency, and responsiveness. We listen to our clients' concerns, address their inquiries promptly, and keep them informed at every stage of the project. We also provide comprehensive post-installation support, including maintenance troubleshooting, and system optimization. Our commitment to superior customer service enables us to build long-lasting relationships with our clients, based on trust and mutual success.
            </p>
          </div>
        </div>
      </section>
  </main>
 )
};

export default Feature;

