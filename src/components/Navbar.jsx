"use client";

import React, { useState } from "react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="flex items-center justify-between max-w-6xl mx-auto py-4 px-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-orange-500">
            <img src={"/logo.png"} alt="Logo" className="" />
          </div>

          {/* Hamburger Icon (visible on mobile) */}
          <button
            className="md:hidden text-2xl text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <a href="#home" className="text-gray-700 hover:text-orange-500">
              Home
            </a>
            <a href="#products" className="text-gray-700 hover:text-orange-500">
              Products
            </a>
            <a href="#services" className="text-gray-700 hover:text-orange-500">
              Services
            </a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500">
              Contact
            </a>
            <a href="#faqs" className="text-gray-700 hover:text-orange-500">
              FAQs
            </a>
          </nav>

          <div className="hidden lg:block">
            <a href="#" className="text-gray-700 hover:text-orange-500 ">
              ☰
            </a>
          </div>
        </div>

        {/* Mobile Navigation (visible when hamburger is clicked) */}
        {menuOpen && (
          <nav className="md:hidden bg-white shadow-lg">
            <div className="flex flex-col items-center gap-4 py-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-orange-500"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#products"
                className="text-gray-700 hover:text-orange-500"
                onClick={() => setMenuOpen(false)}
              >
                Products
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-orange-500"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-orange-500"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="#faqs"
                className="text-gray-700 hover:text-orange-500"
                onClick={() => setMenuOpen(false)}
              >
                FAQs
              </a>
            </div>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Navbar;
