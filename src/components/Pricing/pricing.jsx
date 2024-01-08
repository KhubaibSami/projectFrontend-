// Pricing.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import repairingImage from '../../assets/images/repairing.jpg';

const services = [
  { title: "Repairing", price: "$50/hour", image: repairingImage  },
  { title: "Washing", price: "$30/hour" },
  { title: "AC Installation", price: "$80/hour" },
  { title: "Electrical Work", price: "$60/hour", link: "/order" },
];

const Pricing = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex">
      {/* Text Content Section */}
      <div className="w-1/2 p-8 bg-gray-200">
        <h2 className="text-3xl font-bold mb-4">Trending Services</h2>
        <p className="text-lg mb-4">
          Explore our trending services that cater to your needs. From repairing
          to washing, we've got you covered.
        </p>
        <h2 className="text-3xl font-bold mb-4">Checkout</h2>
        <div className="flex items-center">
          <p className="text-lg">Explore our services and book now!</p>
          <span className="ml-2 text-8xl">&#8594;</span>
        </div>
      </div>

      <div className="w-1/2 p-8">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <div className="mb-4">
              <img src={service.image} alt={service.title} className="mb-4 w-full h-32 object-cover rounded-md" />
                <p className="text-lg font-semibold">{service.title}</p>
                <p className="text-gray-500">{service.price}</p>
              </div>{" "}
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                <Link to={services.link}>Book Now</Link>
              </button>{" "}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Pricing;
