import React from "react";

const ProductCard = ({ alata }) => {
  return (
    <div className="h-[355px] w-[330px]">
      <img src="/productImg4.jpg" alt="Product Image" className="w-full h-[355px] object-cover" />
      <div
        className={`${alata.className} flex justify-between text-[#323334] text-xs tracking-widest pt-2`}
      >
        <p>IRON FRAME</p>
        <p>$4,990</p>
      </div>
    </div>
  );
};

export default ProductCard;
