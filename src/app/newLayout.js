"use client";

import { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Footer from "../components/Footer";
import { Alata } from "next/font/google";

const alata = Alata({
  subsets: ["latin"],
  weight: "400",
});

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const yes = isOpen === true ? "block" : "hidden";

  const handleSidebar = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`${alata.className} md:flex max-md:relative`}>
      <div className={`${yes} max-md:absolute max-md:w-[100%] md:flex`}>
        <Sidebar setIsOpen={setIsOpen} />
      </div>
      {/* {isOpen === false && ( */}
        <div>
          <button
            className="md:hidden text-2xl text-black focus:outline-none mt-6 ml-4"
            onClick={handleSidebar}
          >
            ☰
          </button>
        </div>
      {/* )} */}

      <main className="w-full pb-[50px] min-h-screen">{children}</main>
    </div>
  );
}
