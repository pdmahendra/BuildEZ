"use client";
import React from "react";
import { useRouter } from "next/navigation";

const ProductCard = ({ alata, image, name, price, id }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/products/${id}`);
  };
  return (
    <div className="h-[355px] w-[330px]" onClick={handleClick}>
      <img
        src={image}
        alt="Product Image"
        className="w-full h-[355px] object-cover"
      />
      <div
        className={`${alata.className} flex justify-between text-[#323334] text-xs tracking-widest pt-2`}
      >
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
