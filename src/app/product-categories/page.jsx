"use client";

import React, { useState, useEffect } from "react";
import ProductCard from "../../components/product/ProductCard";
import ProductCategoryCard from "../../components/product/ProductCategoryCard";
import getAllCategories from "../../services/getAllCategoriesApi";
import getAllProducts from "../../services/getAllProductsApi";
import SkeletonComponent from "../../ui/Skeleton";
import { Alata } from "next/font/google";

const alata = Alata({
  subsets: ["latin"],
  weight: "400",
});

const page = () => {
  const [categories, setCategories] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(true);

  // Get categories
  const getCategories = async () => {
    const response = await getAllCategories();
    setCategories(response.category);
    setCategoriesLoading(false);
  };

  useEffect(() => {
    getCategories();
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
    <div className="pb-[50px]">
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

        {categoriesLoading ? (
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 place-items-center">
            <SkeletonComponent className="h-[355px] w-[330px] rounded-3xl" />
            <SkeletonComponent className="h-[355px] w-[330px] rounded-3xl" />
            <SkeletonComponent className="h-[355px] w-[330px] rounded-3xl" />
          </div>
        ) : (
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 place-items-center">
            {categories &&
              categories.map((c) => (
                <ProductCategoryCard
                  alata={alata}
                  key={c._id}
                  id={c._id}
                  image={c.image}
                  name={c.category}
                />
              ))}
          </div>
        )}
      </div>
      <div className="mt-28 mb-8">
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
