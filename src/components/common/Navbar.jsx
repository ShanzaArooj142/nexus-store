import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-[#111111] text-white px-4 sm:px-6 py-4 shadow-md">

      <div className="flex items-center justify-between">

        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-[#C98F8F] flex items-center justify-center overflow-hidden ml-0 lg:ml-10">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRg8LrjbOHF8oNKcS7K5Kr1Gs72LAzXjg-p65Beum4qANJt0qOti9s2Ex&s=10"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <span className="text-xl sm:text-2xl font-bold tracking-wider font-['Playfair_Display']">
              Style<span className="text-[#C98F8F]">Hub</span>
            </span>

            <p className="text-[8px] sm:text-[10px] tracking-widest text-gray-400 uppercase">
              Fashion For Every You
            </p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">

          <Link
            to="/"
            className="text-gray-300 hover:text-[#C98F8F] hover:border-b-2 hover:border-[#C98F8F] pb-1 transition"
          >
            Home
          </Link>

          <Link
            to="/product"
            className="text-gray-300 hover:text-[#C98F8F] hover:border-b-2 hover:border-[#C98F8F] pb-1 transition"
          >
            Product
          </Link>

          <Link
            to="/about"
            className="text-gray-300 hover:text-[#C98F8F] hover:border-b-2 hover:border-[#C98F8F] pb-1 transition"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="text-gray-300 hover:text-[#C98F8F] hover:border-b-2 hover:border-[#C98F8F] pb-1 transition"
          >
            Contact
          </Link>

        </nav>

        <div className="hidden lg:flex items-center gap-5">

          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="bg-[#1a1a1a] text-sm text-gray-200 px-4 py-2 pl-10 rounded-full border border-gray-700 focus:outline-none focus:border-[#C98F8F] w-64"
            />

            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>

          <button className="text-white hover:text-gray-500">
            Sign In
          </button>

          <Link to="/cart">
            <ShoppingCart className="w-6 h-6 text-gray-300 hover:text-[#C98F8F] transition" />
          </Link>

          <button className="text-white hover:text-gray-500">
            Sign Up
          </button>

        </div>

        <div className="flex lg:hidden items-center gap-4">

          <Link to="/cart">
            <ShoppingCart className="w-6 h-6 text-gray-300 hover:text-[#C98F8F]" />
          </Link>

          <Menu className="w-7 h-7 text-gray-300" />

        </div>

      </div>

    </header>
  );
};

export default Navbar;

