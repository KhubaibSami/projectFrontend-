import React from "react";
import { Link } from "react-router-dom";

const ImportantServices = () => {
  const services = [
    {
      title: "Cleaning",
      description: "Professional cleaning services for homes and offices.",
      link: "/cleaning",
    },
    {
      title: "Installation",
      description:
        "Expert installation services for various appliances in every place.",
      link: "/installation",
    },
    {
      title: "Repairing",
      description: "Fast and reliable repair services for your appliances.",
      link: "/repairing",
    },
    {
      title: "Washing",
      description: "Fast and reliable washing services for your appliances.",
      link: "/washing",
    },
    {
      title: "Personal-Care",
      description: "Reliable Personal-care services for your refreshment.",
      link: "/care",
    },
    {
      title: "Painting",
      description:
        "Fast and reliable painting services for your every part of home.",
      link: "/painting",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 w-100vw">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our Important Services
        </h2>

        <div className="flex flex-wrap justify-center">
          {services.map((service, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
              <Link to={service.link}>
                {" "}
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-4 cursor-pointer">
                    {service.title}
                  </h3>
                  <p>{service.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportantServices;
