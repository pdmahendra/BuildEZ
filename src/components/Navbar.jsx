"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import getAllCategories from "../services/getAllCategoriesApi";
import SkeletonComponent from "../ui/Skeleton";

import { Alata } from "next/font/google";

const alata = Alata({
  subsets: ["latin"],
  weight: "400",
});
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  // Get categories
  const getCategories = async () => {
    const response = await getAllCategories();
    setCategories(response.category);
    setCategoriesLoading(false);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <header
        className={`${alata.className} bg-white shadow-md fixed w-full top-0 z-50`}
      >
        <div className="w-full top-0 flex justify-center items-center bg-orange-200 gap-8 ">
          <p>Reach out to us</p>
          <Link href="/contact" className="border-2 bg-gray-200 p-2">
            Request a quote
          </Link>
        </div>
        <div className="flex items-center justify-between w-full mx-auto px-4 md:pr-10">
          {/* Logo */}
          <Link href="/">
            <div className="text-2xl font-bold text-orange-500">
              <img
                src={"/logo.png"}
                alt="Logo"
                className="w-[160px] h-[90px]"
                loading="lazy"
              />
            </div>
          </Link>

          {/* Hamburger Icon (visible on mobile) */}
          <button
            className="md:hidden text-2xl text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-lg font-sans font-bold">
            <Link href="/" className="text-gray-700 hover:text-orange-500">
              Home
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              {/* Main Tab */}
              <Link
                href="/product-categories"
                className="text-gray-700 hover:text-orange-500 px-4 py-2"
              >
                Products →
              </Link>
              {isOpen && (
                <div className="absolute top-full left-[-15vw] bg-white shadow-lg rounded-md border mt-2 z-50 w-[500px]">
                  {categoriesLoading ? (
                    <div className="place-items-center p-2">
                      <SkeletonComponent />
                      <SkeletonComponent />
                    </div>
                  ) : (
                    <ul className="flex flex-wrap p-4 gap-2">
                      {categories.map((category) => (
                        <li key={category._id}>
                          <Link
                            href={`/product-categories/${category._id}`}
                            className="block px-4 py-2 text-gray-700 hover:text-orange-500 bg-gray-100"
                          >
                            {category.category}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>

            {/* <Link
                href="/product-categories"
                className="text-gray-700 hover:text-orange-500"
              >
                Product Categories
              </Link> */}
            {/* <Link
              href="/services"
              className="text-gray-700 hover:text-orange-500"
            >
              Services
            </Link> */}
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
            {/* <Link href="/faqs" className="text-gray-700 hover:text-orange-500">
              FAQs
            </Link> */}
          </nav>

          {/* <div className="md:hidden block">
            <Link href="#" className="text-gray-700 hover:text-orange-500 ">
              ☰
            </Link>
          </div> */}
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
              <div className="w-full relative">
                <div className="w-full flex items-center justify-center px-4 py-2 text-gray-700 hover:text-orange-500">
                  {/* Centered Products Tab */}
                  <Link
                    href="/product-categories"
                    className="pl-4 flex-grow text-center"
                  >
                    Products
                  </Link>

                  {/* Arrow Icon */}
                  <span
                    className="text-gray-700 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent navigation when arrow is clicked
                      setMobileDropdownOpen(!mobileDropdownOpen);
                    }}
                  >
                    {mobileDropdownOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 15l6-6 6 6"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 9l-6 6-6-6"
                        />
                      </svg>
                    )}
                  </span>
                </div>

                {/* Dropdown Content */}
                {mobileDropdownOpen && (
                  <div className="bg-white rounded-md">
                    {categoriesLoading ? (
                      <div className="place-items-center p-2">
                        <SkeletonComponent />
                        <SkeletonComponent />
                      </div>
                    ) : (
                      <ul className="flex flex-col p-2 text-center">
                        {categories.slice(0, 5).map((category) => (
                          <li key={category._id}>
                            <Link
                              href={`/product-categories/${category._id}`}
                              className="block px-4 py-2 text-gray-700 hover:text-orange-500"
                              onClick={() => setMenuOpen(false)}
                            >
                              {category.category}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
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
              {/* <Link
                href="/faqs"
                className="text-gray-700 hover:text-orange-500"
                onClick={() => setMenuOpen(false)}
              >
                FAQs
              </Link> */}
            </div>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Navbar;
