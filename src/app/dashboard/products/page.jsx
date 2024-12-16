"use client";
import Link from "next/link";
import ProductCard from "../../../components/product/ProductCard";
import getAllProducts from "../../../services/getAllProductsApi";
import { useState, useEffect } from "react";
import Layout from "../../newLayout";
import SkeletonComponent from "../../../ui/Skeleton";
import { Alata } from "next/font/google";

const alata = Alata({
  subsets: ["latin"],
  weight: "400",
});

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get products
  const getProducts = async () => {
    const response = await getAllProducts();
    setProducts(response.products);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Layout>
      <div className="flex">
        <div className="flex-1">
          <div className="p-6 flex justify-between">
            <h2 className="text-2xl font-bold mb-4 text-[#000000]">Products</h2>
            <Link
              href="/dashboard/products/add"
              className="bg-blue-500 text-white p-2 rounded mb-4 inline-block md:mr-10"
            >
              Add Product
            </Link>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 place-items-center">
              <SkeletonComponent className="h-[355px] w-[330px] rounded-3xl" />
              <SkeletonComponent className="h-[355px] w-[330px] rounded-3xl" />
              <SkeletonComponent className="h-[355px] w-[330px] rounded-3xl" />
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductList;
