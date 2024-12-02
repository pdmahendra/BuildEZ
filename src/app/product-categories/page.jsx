import React from "react";
import ProductCard from "../../components/product/ProductCard";
import ProductCategoryCard from "../../components/product/ProductCategoryCard";
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
    price: "$4,990",
  },
  {
    id: "2",
    image: "/productImg4.jpg",
    name: "IRON FRAME",
    price: "$4,990",
  },
  {
    id: "3",
    image: "/productImg4.jpg",
    name: "IRON FRAME",
    price: "$4,990",
  },
  {
    id: "4",
    image: "/productImg4.jpg",
    name: "IRON FRAME",
    price: "$4,990",
  },
  {
    id: "5",
    image: "/productImg4.jpg",
    name: "IRON FRAME",
    price: "$4,990",
  },
  {
    id: "6",
    image: "/productImg4.jpg",
    name: "IRON FRAME",
    price: "$4,990",
  },
  {
    id: "7",
    image: "/productImg4.jpg",
    name: "IRON FRAME",
    price: "$4,990",
  },
  {
    id: "8",
    image: "/productImg4.jpg",
    name: "IRON FRAME",
    price: "$4,990",
  },
];

const productCategories = [
    {
      id: "1",
      image: "productCat.jpg",
      name: "Golf Clubs",
    },
    {
      id: "2",
      image: "productCat2.jpg",
      name: "Clothing & Rainwear",
    },
    {
      id: "3",
      image: "productCat3.jpg",
      name: "Golf Balls",
    },
    {
      id: "4",
      image: "productCat4.jpg",
      name: "Golf Clubs",
    },
    {
      id: "5",
      image: "productCat5.jpg",
      name: "Clothing & Rainwear",
    },
    {
      id: "6",
      image: "productCat6.jpg",
      name: "Golf Balls",
    },

  ];
const page = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-[500px] md:h-[800px]"
        style={{ backgroundImage: "url('/productCat1.jpg')" }}
      ></div>
      <div className="mt-16 mb-8">
        <div
          className={`${alata.className} text-2xl text-center mb-6 py-6 text-[#23262F]`}
        >
          Product Categories
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 place-items-center">
          {productCategories.map((p) => (
            <ProductCategoryCard
              alata={alata}
              key={p.id}
              id={p.id}
              image={p.image}
              name={p.name}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 place-items-center">
          {products.map((p) => (
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
    </div>
  );
};

export default page;
