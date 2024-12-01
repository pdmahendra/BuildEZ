import React from "react";
import { Alata } from "next/font/google";

const alata = Alata({
  subsets: ["latin"],
  weight: "400",
});

const ContactForm = () => {
  return (
    <div className={`${alata.className} space-y-12`}>
      <div className="md:grid md:grid-cols-2 text-[#00000080] text-2xl md:gap-12 space-y-6">
        <input
          type="text"
          placeholder="Your Full Name"
          className="px-4 py-4 border rounded shadow-md w-full"
        />
        <input
          type="text"
          placeholder="Your Email Address"
          className="px-4 py-4 border rounded shadow-md w-full"
        />
        <input
          type="text"
          placeholder="Your Phone Number"
          className="px-4 py-4 border rounded shadow-md w-full"
        />
        <input
          type="text"
          placeholder="Your Address"
          className="px-4 py-4 border rounded shadow-md w-full"
        />
        <textarea
          placeholder="Enter Your Message Here..."
          className="px-4 py-4 border rounded shadow-md w-full h-32 resize-none"
        />
      </div>
      <button className="text-[12px] sm:text-[20px] bg-[#384353] text-[#FFFFFF] px-14 py-3 rounded">
        Submit Message
      </button>
    </div>
  );
};

export default ContactForm;
