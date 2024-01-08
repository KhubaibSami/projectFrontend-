// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="list-none p-0">
            <li className="mb-2">
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/about" className="hover:text-gray-400">
                About Us
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/contact" className="hover:text-gray-400">
                Contact Us
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/categories" className="hover:text-gray-400">
                Categories
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Important Links</h3>
          <ul className="list-none p-0">
            <li className="mb-2">
              <Link to="/privacy-policy" className="hover:text-gray-400">
                Privacy Policy
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/terms-of-service" className="hover:text-gray-400">
                Terms of Service
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/faq" className="hover:text-gray-400">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Social Media Links</h3>
          <ul className="list-none p-0 flex space-x-4">
            <li>
              <Link to="#" className="hover:text-gray-400">
                <i className="fab fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="mb-2">123 Example Street</p>
          <p className="mb-2">City, Country</p>
          <p className="mb-2">Email: info@example.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
