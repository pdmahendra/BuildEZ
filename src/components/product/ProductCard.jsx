"use client";
import React from "react";
import { useRouter } from "next/navigation";

const ProductCard = ({ alata, image, name, id }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/products/${id}`);
  };
  return (
    <div
      className="min-h-[340px] w-[330px] cursor-pointer"
      onClick={handleClick}
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt="Product Image"
          className="w-full min-h-[365px] max-h-[365px] object-cover rounded-lg transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
      </div>
      <div
        className={`${alata.className} text-center text-[#323334] text-lg tracking-widest pt-2`}
      >
        <p>{name}</p>
      </div>
    </div>
  );
};

export default ProductCard;
