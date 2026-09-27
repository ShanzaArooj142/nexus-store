import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-gray-300 mt-16 pt-12 pb-8 px-16 border-t border-gray-800">

      <div className="max-w-7xl mx-auto flex flex-wrap pb-12 border-b border-gray-800">

        <div className="w-2/5">
          <div className="w-30 h-30 rounded-sm bg-[#C98F8F] flex items-center justify-center overflow-hidden">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRg8LrjbOHF8oNKcS7K5Kr1Gs72LAzXjg-p65Beum4qANJt0qOti9s2Ex&s=10" alt=""className="w-full h-full object-cover cursor-pointer" />
          </div>

          <p className="text-md text-gray-400 leading-relaxed max-w-sm mt-4">
            Discover the latest trends in fashion <br />and make every moment special<br />  with StyleHub. Your one-stop shop <br />for stylish and affordable outfits.
          </p>

          <div className="flex pt-4">
            <a href="#" className="w-9 h-9 mr-3 rounded-full bg-[#1a1a1a] border border-gray-700 flex items-center justify-center text-gray-300 hover:bg-[#C98F8F] hover:text-white transition">
              <FaFacebookF/>
            </a>

            <a href="#" className="w-9 h-9 mr-3 rounded-full bg-[#1a1a1a] border border-gray-700 flex items-center justify-center text-gray-300 hover:bg-[#C98F8F] hover:text-white transition">
              <FaInstagram/>
            </a>

            <a href="#" className="w-9 h-9 mr-3 rounded-full bg-[#1a1a1a] border border-gray-700 flex items-center justify-center text-gray-300 hover:bg-[#C98F8F] hover:text-white transition">
              <FaPinterestP/>
            </a>

            <a href="#" className="w-9 h-9 rounded-full bg-[#1a1a1a] border border-gray-700 flex items-center justify-center text-gray-300 hover:bg-[#C98F8F] hover:text-white transition">
              <FaTwitter/>
            </a>
          </div>
        </div>

        <div className="w-1/5">
          <h3 className="text-white font-semibold text-lg mb-4 font-serif">
            Quick Links
          </h3>

          <ul className="text-sm">
            <li className="mb-2">
              <Link to="/" className="hover:text-[#C98F8F] transition">Home</Link>
            </li>

            <li className="mb-2">
              <Link to="/shop" className="hover:text-[#C98F8F] transition">Product</Link>
            </li>

            <li className="mb-2">
              <Link to="/men" className="hover:text-[#C98F8F] transition">About</Link>
            </li>

            <li className="mb-2">
              <Link to="/women" className="hover:text-[#C98F8F] transition">Cart</Link>
            </li>

            <li className="mb-2">
              <Link to="/kids" className="hover:text-[#C98F8F] transition">Contact</Link>
            </li>

            <li>
              <Link to="/sale" className="hover:text-[#C98F8F] transition">Sale</Link>
            </li>
          </ul>
        </div>

        <div className="w-1/5">
          <h3 className="text-white font-semibold text-lg font-serif mb-4">
            Customer Service
          </h3>

          <ul className="text-sm">
            <li className="mb-2">
              <a href="#" className="hover:text-[#C98F8F] transition">
                Contact Us
              </a>
            </li>

            <li className="mb-2">
              <a href="#" className="hover:text-[#C98F8F] transition">
                FAQ
              </a>
            </li>

            <li className="mb-2">
              <a href="#" className="hover:text-[#C98F8F] transition">
                Shipping Policy
              </a>
            </li>

            <li className="mb-2">
              <a href="#" className="hover:text-[#C98F8F] transition">
                Return & Refund Policy
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-[#C98F8F] transition">
                Track Your Order
              </a>
            </li>
          </ul>
        </div>

        <div className="w-1/5">
          <h3 className="text-white font-semibold text-lg font-serif mb-4">
            Contact Us
          </h3>

          <ul className="text-sm text-gray-400">
            <li className="flex items-start mb-3">
              <MapPin className="w-5 h-5 text-[#C98F8F] shrink-0 mt-0.5 mr-3" />
              <span>123 Fashion Street, Sargodha, Pakistan</span>
            </li>

            <li className="flex items-center mb-3">
              <Mail className="w-4 h-4 text-[#C98F8F] shrink-0 mr-3" />
              <span>stylehub@gmail.com</span>
            </li>

            <li className="flex items-center mb-3">
              <Phone className="w-4 h-4 text-[#C98F8F] shrink-0 mr-3" />
              <span> +92 341 4486184</span>
            </li>
          </ul>

          <div className="pt-4">
            <h4 className="text-white text-sm font-medium mb-2">
              Subscribe to Our Newsletter
            </h4>

            <div className="flex items-center bg-[#1a1a1a] rounded-full border border-gray-700 overflow-hidden px-3 py-1">
              <input type="email" placeholder="Enter your email address" className="bg-transparent text-xs text-gray-200 focus:outline-none w-full py-2"/>

              <button className="bg-[#C98F8F] text-white p-2 rounded-full  transition">
                <Send />
              </button>
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-6 flex items-center justify-between text-xs text-gray-500">

        <p>© 2025 StyleHub. All rights reserved.</p>

        <div className="flex items-center mt-4">

          <a href="#" className="hover:text-gray-300 transition">
            Privacy Policy
          </a>

          <span className="mx-4">|</span>

          <a href="#" className="hover:text-gray-300 transition">
            Terms & Conditions
          </a>

          <span className="mx-4">|</span>

          <p className="flex items-center">
            Made with
            <span className="text-[#C98F8F] mx-1">♥</span>
            for fashion lovers
          </p>

        </div>
      </div>

    </footer>
  );
};

export default Footer;

