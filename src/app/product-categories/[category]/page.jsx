"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import ProductCard from "../../../components/product/ProductCard";
import { getProductByCategory } from "../../../services/getProduct";
import getAllProducts from "../../../services/getAllProductsApi";
import SkeletonComponent from "../../../ui/Skeleton";
import { Alata } from "next/font/google";

const alata = Alata({
  subsets: ["latin"],
  weight: "400",
});

const page = () => {
  const { category } = useParams();

  const router = useRouter();

  const handleClick = () => {
    router.push(`/products`);
  };

  const [categoryProducts, setCategoryProducts] = useState([]);
  const [categoryProductsLoading, setCategoryProductsLoading] = useState(true);

  // Get products by category
  const getProductsWithCategories = async () => {
    const response = await getProductByCategory(category);
    setCategoryProducts(response.product);
    setCategoryProductsLoading(false);
  };

  useEffect(() => {
    getProductsWithCategories();
  }, []);

  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(true);

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
    <div className={`${alata.className} pb-[50px]`}>
      <div className="mt-4 mb-8">
        <div className={`${alata.className} text-2xl text-center mb-6 py-6`}>
          Products
          {categoryProductsLoading ? (
            <div>
              {" "}
              <SkeletonComponent className="text-center rounded-3xl" />
            </div>
          ) : (
            <p className="text-xs text-red-400">
              only {categoryProducts?.length} products available
            </p>
          )}
        </div>
        {categoryProductsLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 place-items-center">
            <SkeletonComponent className="h-[355px] w-[330px] rounded-3xl" />
            <SkeletonComponent className="h-[355px] w-[330px] rounded-3xl" />
            <SkeletonComponent className="h-[355px] w-[330px] rounded-3xl" />
            <SkeletonComponent className="h-[355px] w-[330px] rounded-3xl" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 place-items-center">
            {categoryProducts &&
              categoryProducts.map((p) => (
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

      <div className="mt-28 mb-8">
        <div
          className={`${alata.className} text-2xl text-center mb-6 border-2 py-6`}
        >
          Enjoy our feature products
        </div>
        <p className="text-end mr-6 cursor-pointer" onClick={handleClick}>
          see more
        </p>
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
    </div>
  );
};

export default page;
