"use client";
import React from "react";
import { useRouter } from "next/navigation";

const ProductCategoryCard = ({ alata, image, name }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product-categories/${name}`);
  };
  return (
    <div className="h-[355px] w-[330px]" onClick={handleClick}>
      <img
        src={image}
        alt="Product Image"
        className="w-full h-[355px] object-contain"
      />
      <div
        className={`${alata.className} text-center text-[#323334] text-xl`}
      >
        {name}
      </div>
    </div>
  );
};

export default ProductCategoryCard;
