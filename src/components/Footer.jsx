import React from "react";
import { Alata } from "next/font/google";

const alata = Alata({
  subsets: ["latin"],
  weight: "400",
});

const Footer = () => {
  return (
    <footer
      className={`${alata.className} tracking-wider bg-slate-800 text-gray-300`}
    >
      <div className="mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {/* First Column */}
          <div className="py-6 px-5 border-r">
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white">
                  Journal
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Second Column */}
          <div className="py-6 px-5 border-r">
            <h3 className="text-sm mb-4">Corporate Profile</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-white">
                  About Build22
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white">
                  Featured
                </a>
              </li>
            </ul>
          </div>

          {/* Third Column */}
          <div className="py-6 px-5 border-r">
            <h3 className="text-sm mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-white">
                  Tools
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white">
                  Quality Control
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Fourth Column */}
          <div className="py-6 px-5 ">
            <h3 className="text-sm mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-white">
                  Contact Sheet
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className=" pt-6 border-t border-b">
          <p className="text-xs text-center pb-6 border-b">© BuildEZ 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
