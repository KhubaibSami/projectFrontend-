// CarouselSection.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tab from "../../assets/images/tab.jpg";
import wall from "../../assets/images/wall.jpg";
import { Link } from "react-router-dom";

const CarouselSection = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex">
      <div className="w-1/2 p-8 h-lvh bg-gray-800 text-white">
        <h2 className="text-3xl font-bold mb-4">Special Offer</h2>
        <p className="text-lg mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
          justo nec est feugiat blandit non vel ante. Sed lectus urna, hendrerit
          eu dolor et, varius aliquam massa.
          
        </p>
        <p className="text-lg mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
          justo nec est feugiat blandit non vel ante. Sed lectus urna, hendrerit
          eu dolor et, varius aliquam massa.
          
        </p>
        <div className="mb-4 mt-16">
          <label htmlFor="email" className="block text-sm font-semibold mb-1">
            Enter your email:
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="example@example.com"
          />
        </div>
       <Link to="/order"> <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
          Book Now
        </button> </Link>
      </div>

      <div className="w-1/2 relative">
        <Slider {...settings}>
          <div>
            <img
              src={tab}
              alt="Fixing Tab"
              className="w-full  h-lvh object-cover"
            />
          </div>
          <div>
            <img
              src={wall}
              alt="Painting"
              className="w-full h-lvh object-cover"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CarouselSection;
