"use client";

import React, { useState } from "react";
import { Alata } from "next/font/google";
import contactApi from "../../services/contactApi";
import { toast } from "react-hot-toast";

const alata = Alata({
  subsets: ["latin"],
  weight: "400",
});

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Submitting...");

    try {
      const payload = { fullName, email, phone, address, message };
      const response = await contactApi(payload);

      if (response) {
        toast.success("Contact form submitted successfully...", {
          id: toastId,
        });

        setFullName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setMessage("");
      }
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  };

  return (
    <div className={`${alata.className} space-y-12`}>
      <div className="md:grid md:grid-cols-2 text-[#00000080] text-2xl md:gap-12 max-md:space-y-6">
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Your Full Name"
          className="px-4 py-4 border rounded shadow-md w-full"
          aria-label="Full Name"
          required
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email Address"
          className="px-4 py-4 border rounded shadow-md w-full"
          aria-label="Email"
          required
        />
        <input
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Your Phone Number"
          className="px-4 py-4 border rounded shadow-md w-full"
          aria-label="Phone Number"
          required
        />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Your Address"
          className="px-4 py-4 border rounded shadow-md w-full"
          aria-label="Address"
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter Your Message Here..."
          className="px-4 py-4 border rounded shadow-md w-full h-32 resize-none"
          aria-label="Message"
          required
        />
      </div>
      <button
        type="submit"
        className="text-[12px] sm:text-[20px] bg-[#384353] text-[#FFFFFF] px-14 py-3 rounded"
        onClick={handleSubmit}
      >
        Submit Message
      </button>
    </div>
  );
};

export default ContactForm;
