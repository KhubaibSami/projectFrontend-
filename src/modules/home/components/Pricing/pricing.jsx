import React from 'react';

const Pricing = () => {
  return (
    <>
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold bg-teal-500 ">
              Affordable price
            </h2>
            <p className="mb-5 font-light ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at hendrerit ligula.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <PricingCard
              title="Repairing"
              description="Best option for personal use & for your next project."
              price="$29"
              features={[
                'Bath and sink tabs',
                'Pipelining',
                'Water Tank',
                'Electronics',
                'Furniture',
              ]}
            />
            <PricingCard
              title="Installation"
              description="Relevant for multiple users, extended & premium support."
              price="$99"
              features={[
                'Bath and sink tabs',
                'Pipelining',
                'Water Tank',
                'Electronics',
                'Furniture',
              ]}
            />
            <PricingCard
              title="Cleaning"
              description="Best for large scale uses and extended redistribution rights."
              price="$499"
              features={[
                'Bath and sink tabs',
                'Pipelining',
                'Water Tank',
                'Electronics',
                'Furniture',
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
};

const PricingCard = ({ title, description, price, features }) => {
  return (
    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-white bg-blue-600 rounded-lg border border-blue-200 shadow dark:border-gray-600 xl:p-8  dark:text-white">
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <p className="font-light text-white sm:text-lg dark:text-gray-300">{description}</p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold">{price}</span>
        <span className=" dark:text-gray-300">/starting</span>
      </div>
      <ul role="list" className="mb-8 space-y-4 text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-white dark:text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-blue-900"
      >
        Get started
      </a>
    </div>
  );
};

export default Pricing;
