"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import ProductCard from "../../../components/product/ProductCard";
import { Alata } from "next/font/google";

const alata = Alata({
  subsets: ["latin"],
  weight: "400",
});

const products = [
  {
    id: "1",
    image: "/productImg4.jpg",
    name: "IRON FRAME",
    // price: "$4,990",
    category: "Golf Clubs",
  },
  {
    id: "2",
    image: "/productImg4.jpg",
    name: "IRON FRAME",
    // price: "$4,990",
    category: "Clothing & Rainwear",
  },
  {
    id: "3",
    image: "/productImg4.jpg",
    name: "IRON FRAME",
    // price: "$4,990",
    category: "Golf Balls",
  },
  {
    id: "4",
    image: "/productImg4.jpg",
    name: "IRON FRAME",
    // price: "$4,990",
    category: "Golf Clubs",
  },
  {
    id: "5",
    image: "/productImg4.jpg",
    name: "IRON FRAME",
    // price: "$4,990",
    category: "Clothing & Rainwear",
  },
  {
    id: "6",
    image: "/productImg4.jpg",
    name: "IRON FRAME",
    // price: "$4,990",
    category: "Golf Balls",
  },
  {
    id: "7",
    image: "/productImg4.jpg",
    name: "IRON FRAME",
    // price: "$4,990",
    category: "Golf Clubs",
  },
  {
    id: "8",
    image: "/productImg4.jpg",
    name: "IRON FRAME",
    // price: "$4,990",
    category: "Clothing & Rainwear",
  },
];
const page = () => {
  const { category } = useParams();
  const router = useRouter();

  const decodedCategory = decodeURIComponent(category);

  const filteredProducts = products.filter(
    (product) => product.category === decodedCategory
  );

  const otherProducts = products.filter(
    (product) => product.category !== decodedCategory
  );

  const handleClick = () => {
    router.push(`/products`);
  };

  return (
    <div className={`${alata.className}`}>
      <div className="mt-4 mb-8">
        <div className={`${alata.className} text-2xl text-center mb-6 py-6`}>
          {decodedCategory} Category Products
          <p className="text-xs text-red-400">
            only {filteredProducts.length} products available
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 place-items-center">
          {filteredProducts &&
            filteredProducts.map((p) => (
              <ProductCard
                alata={alata}
                key={p.id}
                id={p.id}
                image={p.image}
                name={p.name}
                price={p.price}
              />
            ))}
        </div>
      </div>

      <div className="mt-28 mb-8">
        <div
          className={`${alata.className} text-2xl text-center mb-6 border-2 py-6`}
        >
          Enjoy our feature products
        </div>
        <p className="text-end mr-6 cursor-pointer" onClick={handleClick}>
          see more
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 place-items-center mt-4">
          {otherProducts &&
            otherProducts
              .slice(0, 4)
              .map((p) => (
                <ProductCard
                  alata={alata}
                  key={p.id}
                  id={p.id}
                  image={p.image}
                  name={p.name}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default page;
