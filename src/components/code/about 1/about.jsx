// About.js
import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto py-12 text-gray-800">
      <h2 className="text-4xl font-bold mb-8 text-center text-indigo-600">About Our Company</h2>

      <div className="max-w-3xl mx-auto text-lg leading-relaxed">
        <p className="mb-4">
          Welcome to our home maintenance service platform! At [Your Company Name], we are passionate about providing
          exceptional services that simplify your home maintenance needs. Our platform connects customers with skilled
          technicians, ensuring a seamless and reliable experience.
        </p>

        <h2 className="text-3xl font-bold mb-4 text-indigo-600">Our Mission</h2>
        <p className="mb-4">
          Our mission is to revolutionize home maintenance by creating a community where customers can easily find
          trustworthy technicians for various services, from cleaning to installations and repairs.
        </p>

        <h2 className="text-3xl font-bold mb-4 text-indigo-600">Why Choose Us?</h2>
        <ul className="list-disc pl-8 mb-4">
          <li>Quick and reliable service bookings.</li>
          <li>Skilled and experienced technicians.</li>
          <li>Affordable pricing for all services.</li>
          <li>Easy-to-use platform for hassle-free transactions.</li>
        </ul>

        <h2 className="text-3xl font-bold mb-4 text-indigo-600">Contact Us</h2>
        <p className="mb-8">
          Have questions or need assistance? Feel free to reach out to us! We are here to make your experience with our
          platform smooth and enjoyable.
        </p>
        <p className="text-lg">
          <strong>Contact Information:</strong>
          <br />
          Email: info@example.com
          <br />
          Phone: [Your Contact Number]
          <br />
          Address: [Your Company Address]
        </p>
      </div>
    </div>
  );
};

export default About;
