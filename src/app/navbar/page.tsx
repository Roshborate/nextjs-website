"use client";  // Add this line at the top

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          SB Photography
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMenu}
          className="block text-gray-800 md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            ></path>
          </svg>
        </button>

        {/* Menu Items */}
        <div
          className={`absolute inset-x-0 top-0 z-40 flex flex-col items-center w-full h-screen p-4 bg-white transition-transform transform md:relative md:h-auto md:flex-row md:p-0 md:bg-transparent md:w-auto md:transform-none ${
            isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          }`}
        >
          {/* Close button for mobile */}
          <button
            onClick={toggleMenu}
            className="self-end mb-4 text-gray-800 md:hidden focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          {/* Links */}
          <Link href="/" className="px-4 py-2 mt-2 text-lg font-medium text-gray-800 rounded-md hover:text-indigo-500 md:mt-0 md:ml-4">
            Home
          </Link>
          <Link href="#portfolio" className="px-4 py-2 mt-2 text-lg font-medium text-gray-800 rounded-md hover:text-indigo-500 md:mt-0 md:ml-4">
            Portfolio
          </Link>
          <Link href="#product" className="px-4 py-2 mt-2 text-lg font-medium text-gray-800 rounded-md hover:text-indigo-500 md:mt-0 md:ml-4">
            Product
          </Link>
          <Link href="/abouteuspage" className="px-4 py-2 mt-2 text-lg font-medium text-gray-800 rounded-md hover:text-indigo-500 md:mt-0 md:ml-4">
            About
          </Link>
          <Link href="/contactus" className="px-4 py-2 mt-2 text-lg font-medium text-gray-800 rounded-md hover:text-indigo-500 md:mt-0 md:ml-4">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}