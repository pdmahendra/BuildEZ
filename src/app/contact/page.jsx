import React from "react";
import Card from "../../components/conatctUs/Card";
import ContactForm from "../../components/conatctUs/ContactForm";
import { Alata } from "next/font/google";

const alata = Alata({
  subsets: ["latin"],
  weight: "400",
});

const page = () => {
  return (
    <div className={`${alata.className}`}>
      <div className="md:grid md:grid-cols-2 max-w-6xl mx-auto mt-4 sm:mt-20 items-center max-md:flex max-md:flex-col">
        <img
          src="/contactImg1.jpg"
          alt="Years of exp image"
          className="object-cover "
        />
        <div className="space-y-12 max-md:text-center">
          <div className="space-y-8">
            {" "}
            <p className="text-[#384353] text-sm">About us</p>
            <h3 className="text-3xl md:text-5xl text-[#000000]">
              <p>We 're providing the best</p>
              <p>customer service</p>
            </h3>
          </div>
          <p className="md:w-[80%] sm:px-6 md:px-0 text-lg sm:pt-8 text-[#000000]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
          <h3 className="text-2xl text-[#000000]">John Doe, CEO</h3>
          <button className="text-[12px] sm:text-[20px] bg-[#384353] text-[#FFFFFF] px-8 sm:px-14 py-2 sm:py-3 rounded">
            Learn more
          </button>
        </div>
      </div>{" "}
      <div className="mt-6 sm:mt-16">
        <div className="relative w-full py-16">
          <div>
            <div
              className="bg-cover bg-center h-[500px] md:h-[800px] relative"
              style={{ backgroundImage: "url('/contactImg3.jpg')" }}
            >
              <div
                className={`${alata.className} text-[#FFFFFF] absolute inset-0 flex flex-col items-center justify-center space-y-8`}
              >
                <p className="text-2xl sm:text-4xl">Get a Qoute</p>
                <h1 className="text-3xl sm:text-5xl">
                  Build Your Future Today
                </h1>
                <p className="text-xs sm:text-lg max-w-4xl text-center">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <button className="text-[12px] sm:text-[20px] bg-[#384353] text-[#FFFFFF] px-14 py-3 rounded">
                  Appointment
                </button>
                <div className="hidden md:flex gap-8 absolute bottom-0 translate-y-1/2">
                  <Card />
                  <Card />
                  <Card />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden space-y-4 p-6">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="mt-4 md:mt-0 p-6 md:p-16 lg:p-28">
        <ContactForm />
      </div>
    </div>
  );
};

export default page;
