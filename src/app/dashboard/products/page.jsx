"use client";
import Link from "next/link";
import Sidebar from "../../../components/dashboard/Sidebar";
import ProductCard from "../../../components/product/ProductCard";
import getAllProducts from "../../../services/getAllProductsApi";
import { useState, useEffect } from "react";
import { Alata } from "next/font/google";

const alata = Alata({
  subsets: ["latin"],
  weight: "400",
});

const ProductList = () => {
  const [products, setProducts] = useState([]);

  // Get products
  const getCategories = async () => {
    const response = await getAllProducts();
    console.log(response.products);
    
    setProducts(response.products);
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <div className="p-6 flex justify-between">
          <h2 className="text-2xl font-bold mb-4">Products</h2>
          <Link
            href="/dashboard/products/add"
            className="bg-blue-500 text-white p-2 rounded mb-4 inline-block md:mr-10"
          >
            Add Product
          </Link>

          {/* Category Table */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 place-items-center">
          {products &&
            products?.map((p) => (
              <ProductCard
                alata={alata}
                key={p.id}
                id={p.id}
                image={"/productImg4.jpg"}
                name={p.productName}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
