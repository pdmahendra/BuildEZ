"use client";
import React from "react";
import { useRouter } from "next/navigation";

const ProductCategoryCard = ({ alata, image, name, id }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product-categories/${id}`);
  };
  return (
    <div className="h-[355px] w-[330px] cursor-pointer" onClick={handleClick}>
      <img
        src={image}
        alt="Category Image"
        className="w-full h-[355px] object-cover rounded-lg"
      />
      <div
        className={`${alata.className} pt-2 text-center text-[#323334] text-xl`}
      >
        {name}
      </div>
    </div>
  );
};

export default ProductCategoryCard;
