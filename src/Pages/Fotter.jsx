import React from 'react';
import logo from '../assets/logo.png';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const footerRoutes = ["/", "/Blog", "/Products", "/Discover", "/Categories"];

  return (
    footerRoutes.includes(location.pathname) && (
      <section className="bg-gray-900 w-full py-8">
        <div className="footer-container max-w-7xl mx-auto px-4">
          
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-white">
            
            {/* Logo & Description */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <img src={logo} alt="Logo" className="h-12 w-32" />
              <p className="text-gray-400 mt-3 text-sm md:text-base">
                MasterKart is the biggest market of grocery products. Get your daily needs from our store.
              </p>
            </div>

            {/* Category Section */}
            <div>
              <h1 className="text-lg font-semibold">Category</h1>
              <ul className="text-gray-400 mt-3 space-y-2 text-sm md:text-base">
                <li className="hover:text-blue-500 cursor-pointer">Dairy & Milk</li>
                <li className="hover:text-blue-500 cursor-pointer">Snack & Spices</li>
                <li className="hover:text-blue-500 cursor-pointer">Fast Food</li>
                <li className="hover:text-blue-500 cursor-pointer">Juice & Drinks</li>
                <li className="hover:text-blue-500 cursor-pointer">Bakery</li>
                <li className="hover:text-blue-500 cursor-pointer">Seafood</li>
              </ul>
            </div>

            {/* Company Section */}
            <div>
              <h1 className="text-lg font-semibold">Company</h1>
              <ul className="text-gray-400 mt-3 space-y-2 text-sm md:text-base">
                <li className="hover:text-blue-500 cursor-pointer">About Us</li>
                <li className="hover:text-blue-500 cursor-pointer">Delivery</li>
                <li className="hover:text-blue-500 cursor-pointer">Legal Notice</li>
                <li className="hover:text-blue-500 cursor-pointer">Terms & Conditions</li>
                <li className="hover:text-blue-500 cursor-pointer">Secure Payment</li>
                <li className="hover:text-blue-500 cursor-pointer">Contact Us</li>
              </ul>
            </div>

            {/* Account Section */}
            <div>
              <h1 className="text-lg font-semibold">Account</h1>
              <ul className="text-gray-400 mt-3 space-y-2 text-sm md:text-base">
                <li className="hover:text-blue-500 cursor-pointer">Sign in</li>
                <li className="hover:text-blue-500 cursor-pointer">View Cart</li>
                <li className="hover:text-blue-500 cursor-pointer">Return Policy</li>
                <li className="hover:text-blue-500 cursor-pointer">Become a Vendor</li>
                <li className="hover:text-blue-500 cursor-pointer">Affiliate Program</li>
                <li className="hover:text-blue-500 cursor-pointer">Payment</li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h1 className="text-lg font-semibold">Contact</h1>
              <ul className="text-gray-400 mt-3 space-y-3 text-sm md:text-base">
                <li className="flex items-center gap-2">
                  <i className="bx bxl-whatsapp text-xl"></i>
                  <span>9307433918</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="bx bxl-gmail text-xl"></i>
                  <span>ganeshmgr8776@gmail.com</span>
                </li>
                {/* Social Icons */}
                <li className="flex gap-4 text-xl">
                  <i className="bx bxl-twitter cursor-pointer hover:text-blue-500"></i>
                  <i className="bx bxl-instagram cursor-pointer hover:text-blue-500"></i>
                  <i className="bx bxl-facebook cursor-pointer hover:text-blue-500"></i>
                  <i className="bx bxl-linkedin cursor-pointer hover:text-blue-500"></i>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Section */}
          <div className="text-gray-400 text-center mt-6 text-xs md:text-sm">
            © 2025 MasterKart. All rights reserved.
          </div>
        </div>
      </section>
    )
  );
};

export default Footer;
