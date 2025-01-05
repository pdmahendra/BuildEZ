"use client";
import React, { useState, useEffect } from "react";
import ProductImageSlider from "../../../components/productDetails/ProductImagesSlider";
import ProductCard from "../../../components/product/ProductCard";
import getProductById from "../../../services/getProduct";
import getAllProducts from "../../../services/getAllProductsApi";
import { useParams } from "next/navigation";
import SkeletonComponent from "../../../ui/Skeleton";
import { Alata } from "next/font/google";
import HTMLReactParser from "html-react-parser";

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

const page = () => {
  const { id } = useParams();

  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(true);
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");

  // Get products
  const getProduct = async () => {
    const response = await getProductById(id);
    setProduct(response.product);
    setSelectedImage(response.product.images[0]);
    setLoading(false);
  };

  useEffect(() => {
    getProduct();
  }, []);

  // Get products
  const getProducts = async () => {
    const response = await getAllProducts();
    setProducts(response.products);
    setProductsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={`${alata.className} pb-[50px] pt-[50px]`}>
      {loading ? (
        <div className="max-w-[90%] mx-auto items-center mt-8">
          {" "}
          <SkeletonComponent className="h-screen w-inherit rounded-3xl" />{" "}
        </div>
      ) : (
        <div className="sm:grid sm:grid-cols-2 max-w-[90%] mx-auto mt-8">
          <div className="col-span-1">
            <div>
              <img
                src={selectedImage}
                alt="product image"
                className="object-contain w-[600px] h-full rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="sm:mr-24">
              <ProductImageSlider
                images={product?.images}
                onImageSelect={setSelectedImage}
              />
            </div>
          </div>
          <div className="space-y-12 mt-8 sm:mt-4 max-w-full">
            <h1 className="text-5xl text-[#000000]">{product?.productName}</h1>
            <div className="space-y-5 max-w-full">
              <h4 className="text-2xl text-[#344054]">Product Description</h4>
              <p className="text-[#667085] text-base break-words">
                <div>{HTMLReactParser(product?.productDescription)}</div>
              </p>
            </div>
            {/* <div className="space-y-5">
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
          </div>{" "} */}
            <div className="space-y-5 max-w-full">
              {" "}
              <div className="text-2xl text-[#344054]">Product Details</div>
              <div className="text-[#667085] space-y-4 break-words">
                {/* <p>
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
              </p> */}
                <div>{HTMLReactParser(product?.productDetails)}</div>
              </div>
            </div>{" "}
            {product?.extraFields.length > 0 &&
              product.extraFields.map((p, index) => (
                <div key={index} className="space-y-5 max-w-full">
                  <div className="text-2xl text-[#344054]">{p?.heading}</div>
                  <div className="text-[#000000]">
                    {HTMLReactParser(p?.value)}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      <div className="mt-16 mb-8">
        <div
          className={`${alata.className} text-2xl text-center mb-6 border-2 py-6 text-[#323334]`}
        >
          Enjoy our feature products
        </div>
        {productsLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 place-items-center">
            <SkeletonComponent className="h-[355px] w-[330px] rounded-3xl" />
            <SkeletonComponent className="h-[355px] w-[330px] rounded-3xl" />
            <SkeletonComponent className="h-[355px] w-[330px] rounded-3xl" />
            <SkeletonComponent className="h-[355px] w-[330px] rounded-3xl" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 place-items-center">
            {products &&
              products?.map((p) => (
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
    </div>
  );
};

export default page;
