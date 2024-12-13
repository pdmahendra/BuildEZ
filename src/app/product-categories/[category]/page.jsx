"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import ProductCard from "../../../components/product/ProductCard";
import { getProductByCategory } from "../../../services/getProduct";
import { Alata } from "next/font/google";
import getAllProducts from "../../../services/getAllProductsApi";

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
  // Get products by category
  const getProductsWithCategories = async () => {
    const response = await getProductByCategory(category);
    setCategoryProducts(response.product);
  };

  useEffect(() => {
    getProductsWithCategories();
  }, []);

  const [products, setProducts] = useState([]);
  // Get products
  const getProducts = async () => {
    const response = await getAllProducts();
    setProducts(response.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={`${alata.className} pb-[50px]`}>
      <div className="mt-4 mb-8">
        <div className={`${alata.className} text-2xl text-center mb-6 py-6`}>
          Products
          <p className="text-xs text-red-400">
            only {categoryProducts?.length} products available
          </p>
        </div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 place-items-center mt-4">
          {products &&
            products
              .slice(0, 4)
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
      </div>
    </div>
  );
};

export default page;
