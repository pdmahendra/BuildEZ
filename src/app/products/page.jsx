import React from "react";
import { Alata } from "next/font/google";
import ProductCard from "../../components/product/ProductCard";
const alata = Alata({
  subsets: ["latin"],
  weight: "400",
});

const Page = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="relative col-span-2 w-full h-full hidden md:block">
          <img
            src="/productImg1.jpg"
            alt="Product Image 1"
            className="w-full h-full object-cover"
          />
          <div
            className={`${alata.className} text-[#FFFFFF] absolute inset-0 mt-16 md:mt-10 top-20 lg:top-40 left-16 space-y-2`}
          >
            <h1 className=" text-xl md:text-2xl lg:text-3xl">
              Building a network <br />
              with durability
            </h1>
            <p className="text-[10px]">
              Serving the world with our versatile <br />
              range of steel products
            </p>
            <h1 className="text-xl md:text-2xl lg:text-3xl pt-1 pb-1">
              $49,500
            </h1>
            <button className="bg-white text-black text-xs border-2 rounded px-5 py-1">
              Connect us
            </button>
          </div>
        </div>

        <div className="relative col-span-1 w-full h-full">
          <img
            src="/productImg2.jpg"
            alt="Product Image 2"
            className="h-auto w-full md:w-full md:h-full object-cover"
          />
          <div
            className={`${alata.className} text-[#FFFFFF] absolute inset-0 mt-16 md:mt-10 top-20 lg:top-40 left-16 space-y-2`}
          >
            <h1 className=" text-xl md:text-2xl lg:text-3xl">
              Building a network <br />
              with durability
            </h1>
            <p className="text-[10px]">
              Serving the world with our versatile <br />
              range of steel products
            </p>
            <h1 className="text-xl md:text-2xl lg:text-3xl pt-1 pb-1">
              $49,500
            </h1>
            <button className="bg-white text-black text-xs border-2 rounded px-5 py-1">
              Connect us
            </button>
          </div>
        </div>
      </div>
      <div className="mt-14 mb-8">
        <div
          className={`${alata.className} text-2xl text-center mb-6 border-2 py-6`}
        >
          Enjoy our feature products
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 place-items-center">
          <ProductCard alata={alata} />
          <ProductCard alata={alata} />
          <ProductCard alata={alata} />
          <ProductCard alata={alata} />
          <ProductCard alata={alata} />
          <ProductCard alata={alata} />
          <ProductCard alata={alata} />
          <ProductCard alata={alata} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-20 p-4">
        <div
          className={`${alata.className} flex flex-col items-center justify-center gap-y-6 md:gap-y-12`}
        >
          <div className={`text-3xl md:text-5xl text-start`}>
            The Timeless Appeal of <br />
            Natural Stone in Modern <br />
            Design
          </div>
          <p className="text-xs text-start">
            When it comes to design, the choice of building materials can
            transform an ordinary space into an <br />
            extraordinary one. we specialize in high-quality materials that
            blend timeless elegance with modern <br /> aesthetics. <br /> Start
            by clarifying your vision. Are you drawn to classic styles or
            contemporary designs? This will guide <br /> your selections.
            Prioritize quality and durability; materials like natural stone and
            premium wood not <br /> only enhance beauty but also stand the test
            of time. <br /> Explore versatile options that can be used in
            various applications, such as decorative tiles for <br />{" "}
            backsplashes or feature walls. Don’t forget to consider color and
            texture—mixing smooth and rough <br /> materials can add depth and
            interest.
          </p>
        </div>
        <div>
          <img
            src="/productImg5.jpg"
            alt="Product Image 2"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div
        className={`${alata.className} text-sm text-center  border-2 py-6 mt-8 tracking-widest`}
      >
        SEE ALL ARTICLES
      </div>
    </div>
  );
};

export default Page;
