"use client";
import Link from "next/link";
import Sidebar from "../../../components/dashboard/Sidebar";
import ProductCard from "../../../components/product/ProductCard";
import getAllProducts from "../../../services/getAllProductsApi";
import { useState, useEffect } from "react";
import { Alata } from "next/font/google";
import Layout from "../../newLayout"
const alata = Alata({
  subsets: ["latin"],
  weight: "400",
});

const ProductList = () => {
  const [products, setProducts] = useState([]);

  // Get products
  const getProducts = async () => {
    const response = await getAllProducts();
    console.log(response.products);
    
    setProducts(response.products);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Layout>
    <div className="flex">
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
                key={p._id}
                id={p._id}
                image={p.images[0]}
                name={p.productName}
              />
            ))}
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default ProductList;
