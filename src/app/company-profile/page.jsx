import React from "react";
import ProfileCard from "../../components/companyProfile/ProfileCard";
import { Alata } from "next/font/google";

const alata = Alata({
  subsets: ["latin"],
  weight: "400",
});

const page = () => {
  return (
    <div className={`${alata.className}`}>
      <div
        className="bg-cover bg-center h-[500px] md:h-[800px]"
        style={{ backgroundImage: "url('/companyProfileImg1.jpg')" }}
      ></div>
      <div className="md:grid md:grid-cols-2">
        <div className="bg-[#384353] text-[#FFFFFF] flex flex-col justify-center items-center p-8">
          <div className="max-w-lg space-y-12">
            <h3 className="text-start text-4xl">Delight Services</h3>
            <div className="text-base space-y-4">
              <p>
                We understand that choosing the right materials is crucial for
                any project. Our team of experts is available to provide
                personalized consultations and design support to help you select
                the perfect materials for your vision.{" "}
              </p>{" "}
              <p>
                {" "}
                Whether you need a unique finish or a specific size, we offer
                tailored solutions to meet your requirements. Collaborate with
                our designers to create custom products that align with your
                project’s aesthetic.{" "}
              </p>{" "}
              <p>
                {" "}
                We are dedicated to sustainable practices, from sourcing
                materials responsibly to reducing waste in our manufacturing
                processes. Learn more about our eco-friendly initiatives and how
                we contribute to a greener future
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <img src="/companyProfileImg2.jpg" alt="" className="w-full h-full" />
        </div>
      </div>
      <div className="mt-12 max-w-3xl mx-auto">
        <div className="text-[#000000] text-center space-y-8 p-8 md:p-0">
          <h1 className="text-5xl">Meet our team members</h1>
          <p className="text-lg">
            We Focus on the details of everything we do. All to help businesses
            around the world Focus on what's most important to them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-y-9 mt-12">
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>
    </div>
  );
};

export default page;
