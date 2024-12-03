"use client";

import React, { useState } from "react";
import Link from "next/link";

import { Alata } from "next/font/google";

const alata = Alata({
  subsets: ["latin"],
  weight: "400",
});
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header
        className={`${alata.className} bg-white shadow-md fixed w-full top-0 z-50`}
      >
        <div className="flex items-center justify-between max-w-6xl mx-auto py-4 px-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-orange-500">
            <img src={"/logo.png"} alt="Logo" className="w-[99px] h-[56px]" />
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
            <Link href="/" className="text-gray-700 hover:text-orange-500">
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-orange-500"
            >
              Products
            </Link>
            <Link
              href="/product-categories"
              className="text-gray-700 hover:text-orange-500"
            >
              Product Categories
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-orange-500"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-orange-500"
            >
              Contact
            </Link>
            <Link
              href="/company-profile"
              className="text-gray-700 hover:text-orange-500"
            >
              Company Profile
            </Link>
            <Link href="/faqs" className="text-gray-700 hover:text-orange-500">
              FAQs
            </Link>
          </nav>

          <div className="hidden lg:block">
            <Link href="#" className="text-gray-700 hover:text-orange-500 ">
              ☰
            </Link>
          </div>
        </div>

        {/* Mobile Navigation (visible when hamburger is clicked) */}
        {menuOpen && (
          <nav className="md:hidden bg-white shadow-lg">
            <div className="flex flex-col items-center gap-4 py-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-orange-500"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-gray-700 hover:text-orange-500"
                onClick={() => setMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/product-categories"
                className="text-gray-700 hover:text-orange-500"
                onClick={() => setMenuOpen(false)}
              >
                Product Categories
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-orange-500"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-orange-500"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/company-profile"
                className="text-gray-700 hover:text-orange-500"
                onClick={() => setMenuOpen(false)}
              >
                Company Profile
              </Link>
              <Link
                href="/faqs"
                className="text-gray-700 hover:text-orange-500"
                onClick={() => setMenuOpen(false)}
              >
                FAQs
              </Link>
            </div>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Navbar;
