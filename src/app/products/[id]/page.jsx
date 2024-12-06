import React from "react";
import ProductImageSlider from "../../../components/productDetails/ProductImagesSlider";
import ProductCard from "../../../components/product/ProductCard";
import { Alata } from "next/font/google";

const alata = Alata({
  subsets: ["latin"],
  weight: "400",
});
const productImages = [
  "/productDetailImg2.jpg",
  "/productDetailImg2.jpg",
  "/productDetailImg2.jpg",
  "/productDetailImg2.jpg",
  "/productDetailImg2.jpg",
  "/productDetailImg2.jpg",
];

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
];
const page = () => {
  return (
    <div className={`${alata.className}`}>
      <div className="sm:grid sm:grid-cols-2 max-w-[90%] mx-auto mt-8">
        <div className="col-span-1">
          <div>
            <img src="/productDetailImg1.jpg" alt="product image" />
          </div>
          <div className="sm:mr-24">
            <ProductImageSlider images={productImages} />
          </div>
        </div>
        <div className="space-y-12 mt-8 sm:mt-4">
          <h1 className="text-5xl">Product Name</h1>
          <div className="space-y-5">
            <h4 className="text-2xl text-[#344054]">Product Description</h4>
            <p className="text-[#667085] text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="space-y-5">
            {" "}
            <div className="text-2xl text-[#344054]">Benefits</div>
            <div className="text-[#667085] space-y-4">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content
              </p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content
              </p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content
              </p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content
              </p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content
              </p>
            </div>
          </div>{" "}
          <div className="space-y-5">
            {" "}
            <div className="text-2xl text-[#344054]">Product Details</div>
            <div className="text-[#667085] space-y-4">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content
              </p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content
              </p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content
              </p>
            </div>
          </div>{" "}
        </div>
      </div>
      <div className="mt-16 mb-8">
        <div
          className={`${alata.className} text-2xl text-center mb-6 border-2 py-6 text-[#323334]`}
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
