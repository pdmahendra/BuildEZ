"use client";

import React, { useState, useEffect } from "react";
import ProductCard from "../../components/product/ProductCard";
import { ChevronRight } from "lucide-react";
import getAllProducts from "../../services/getAllProductsApi";
import SkeletonComponent from "../../ui/Skeleton";
import { Alata } from "next/font/google";

const alata = Alata({
  subsets: ["latin"],
  weight: "400",
});

const Page = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get products
  const getProducts = async () => {
    const response = await getAllProducts();
    setProducts(response.products);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={`${alata.className}  pb-[50px]`}>
      {/* <div className="grid grid-cols-1 md:grid-cols-3"> */}
      {/* <div className="relative col-span-2 w-full h-full hidden md:block">
          <img
            src="/productImg1.jpg"
            alt="Product Image 1"
            className="w-full h-full object-cover"
            loading="lazy" 
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
        </div> */}

      {/* <div className="relative col-span-1 w-full h-full hidden md:block">
          <img
            src="/productImg2.jpg"
            alt="Product Image 2"
            className="w-full h-screen object-cover"
            loading="lazy" 
          />
          <div
            className={`${alata.className} text-[#FFFFFF] absolute inset-0 max-md:flex max-md:flex-col max-md:justify-center max-md:w-[60%] max-md:mx-auto md:mt-10 lg:top-40 lg:left-16 space-y-2`}
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
            <button className="bg-white text-black text-xs border-2 rounded px-5 py-1 w-[40%]">
              Connect us
            </button>
          </div>
        </div> */}
      {/* </div> */}
      <div className="mt-14 mb-8">
        <div
          className={`${alata.className} text-2xl text-center mb-6 border-2 py-6 text-[#323334]`}
        >
          Enjoy our feature products
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 place-items-center">
            <SkeletonComponent className="h-[355px] w-[330px] rounded-3xl" />
            <SkeletonComponent className="h-[355px] w-[330px] rounded-3xl" />
            <SkeletonComponent className="h-[355px] w-[330px] rounded-3xl" />
            <SkeletonComponent className="h-[355px] w-[330px] rounded-3xl" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 place-items-center">
            {products &&
              products
                ?.slice(0, 4)
                .map((p) => (
                  <ProductCard
                    alata={alata}
                    key={p._id}
                    id={p._id}
                    image={p.images[0]}
                    name={p.productName}
                  />
                ))}
          </div>
        )}
      </div>
      <div className="max-w-7xl mx-auto p-4 mt-16">
        <div>
          <div className="grid md:grid-cols-2">
            <div className="flex flex-col p-8 flex-grow">
              <h3 className="text-3xl md:text-5xl mb-6 text-[#323334]">
                The Timeless Appeal of Natural Stone in Modern Design
              </h3>

              <div className="space-y-4 max-sm:text-sm text-[#384353]">
                <p>
                  When it comes to design, the choice of building materials can
                  transform an ordinary space into an extraordinary one. we
                  specialize in high-quality materials that blend timeless
                  elegance with modern aesthetic.
                </p>
                <p>
                  Start by clarifying your vision. Are you drawn to classic
                  styles or contemporary designs? This will guide your
                  selections. Prioritize quality and durability materials like
                  natural stone and premium wood not only enhance beauty but
                  also stand the test of time.
                </p>
                <p>
                  Explore versatile options that can be used in various
                  applications, such as decorative tiles for backsplashes or
                  feature walls. Don't forget to consider color and
                  texture—mixing smooth and rough materials can add depth and
                  interest.
                </p>
              </div>
            </div>

            <div className="relative h-[400px] md:h-auto">
              <img
                src={"/article.png"}
                alt="Modern interior design"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 tracking-widest group flex items-center justify-center text-sm text-gray-900 hover:text-gray-700 transition-colors border-2 py-5">
          SEE ALL ARTICLES
          <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};

export default Page;
