import React from 'react';

const Services = () => {
  return (
    <>
      <section className="bg-blue-500 dark:bg-gray-800">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-gray-100">
              Services we offer
            </h2>
            <p className="text-white sm:text-xl dark:text-gray-300">
              Every type of household work with well-experienced labor
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Cleaning"
              icon="fas fa-broom"
              bgColor="bg-blue-600"
              textColor="text-white"
            />
            <ServiceCard
              title="Plumber"
              icon="fas fa-tools"
              bgColor="bg-blue-600"
              textColor="text-white"
            />
            <ServiceCard
              title="Personal care"
              icon="fas fa-user"
              bgColor="bg-blue-600"
              textColor="text-white"
            />
            <ServiceCard
              title="Washing"
              icon="fas fa-hand-holding-water"
              bgColor="bg-blue-600"
              textColor="text-white"
            />
            <ServiceCard
              title="Repairing"
              icon="fas fa-wrench"
              bgColor="bg-blue-600"
              textColor="text-white"
            />
            <ServiceCard
              title="Installation"
              icon="fas fa-cogs"
              bgColor="bg-blue-600"
              textColor="text-white"
            />
          </div>
        </div>
      </section>
    </>
  );
};

const ServiceCard = ({ title, icon, bgColor, textColor }) => {
  return (
    <div className={`p-6 rounded-lg ${bgColor} ${textColor} dark:${bgColor} dark:${textColor}`}>
      <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full">
        <i className={`${icon} text-3xl`} />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
  );
};

export default Services;
