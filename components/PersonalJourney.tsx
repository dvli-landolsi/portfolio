import React from "react";

const ServicesLayout = () => {
  const servicesData = {
    frontend: [
      "Modern React development with optimized performance and clean architecture",
      "Next.js apps with SSR, static generation, and API routes",
      "UI/UX implementation with accessibility and modern design",
      "Responsive design for all devices with mobile-first approach",
    ],
    backend: [
      "Node.js development for scalable and secure applications",
      "RESTful API design with authentication and error handling",
      "Database architecture with efficient models and security",
      "Server management for reliable infrastructure",
    ],
    fullstack: [
      "End-to-end web development with seamless integration",
      "Custom software solutions with scalable architecture",
      "Cloud and DevOps for reliable deployment",
      "Performance and security optimization",
    ],
  };

  return (
    <div className="relative bg-gradient-to-br">
      <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden relative z-10">
        {/* Header Section */}
        <div className="relative pt-8">
          <div
            className="absolute inset-0 bg-cover w-[65%] left-1/2 -translate-x-1/2 bg-center opacity-10"
            style={{
              backgroundImage: 'url("/dots.svg")',
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
            }}
          />
          <div className="text-center text-black relative z-10">
            <h1 className="text-3xl  mb-4 drop-shadow-lg">My Services</h1>
            <p className="text-sm opacity-90 max-w-2xl rounded-2xl mx-auto border-2 p-4 border-blue-600/10 leading-relaxed">
              I provide comprehensive software development solutions tailored to
              your needs, from frontend development to full-stack applications,
              with a focus on modern technologies and best practices.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="p-12">
          {/* Frontend Row */}
          <div className="grid grid-cols-5 gap-3 mb-12">
            <div className="inline-block">
              <div className="relative text-blue-300 font-semibold">
                <div className="absolute z-10 inset-0 bg-blue-100/50 bg h-1/2 bottom-0 left-0 w-full rounded-sm"></div>
                <div className="relative text-blue-500 text-2xl z-10">
                  Frontend
                </div>
              </div>
            </div>
            {servicesData.frontend.map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-blue-600/10 rounded-2xl p-4 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <h3 className="font-medium text-gray-800 text-sm leading-relaxed">
                  {service}
                </h3>
              </div>
            ))}
          </div>

          {/* Backend Row */}
          <div className="grid grid-cols-5 gap-3 mb-12 items-start">
            <div className="inline-block">
              <div className="relative text-blue-300 font-semibold">
                <div className="absolute z-10 inset-0 bg-blue-100/50 bg h-1/2 bottom-0 left-0 w-full rounded-sm"></div>
                <div className="relative text-blue-500 text-2xl z-10">
                  Backend
                </div>
              </div>
            </div>
            {servicesData.backend.map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-blue-600/10 rounded-2xl p-4 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {service}
                </p>
              </div>
            ))}
          </div>

          {/* Fullstack Row */}
          <div className="grid grid-cols-5 gap-3 items-start">
            <div className="inline-block">
              <div className="relative text-blue-300 font-semibold">
                <div className="absolute z-10 inset-0 bg-blue-100/50 bg h-1/2 bottom-0 left-0 w-full rounded-sm"></div>
                <div className="relative text-blue-500 text-2xl z-10">
                  Fullstack
                </div>
              </div>
            </div>
            {servicesData.fullstack.map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-blue-600/10 rounded-2xl p-4 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="text-gray-700 text-sm leading-relaxed">
                  {service.split("\n").map((line, lineIndex) => (
                    <div key={lineIndex} className="mb-1">
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute  bottom-0 transform left-1/2 -translate-x-1/2  w-120 h-120 rounded-full bg-gradient-to-br from-blue-50 via-white to-blue-50 border-blue-200 "></div>
    </div>
  );
};

export default ServicesLayout;
