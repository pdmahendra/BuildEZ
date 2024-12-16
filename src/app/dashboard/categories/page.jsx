"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ProductCategoryCard from "../../../components/product/ProductCategoryCard";
import getAllCategories from "../../../services/getAllCategoriesApi";
import Layout from "../../newLayout";
import SkeletonComponent from "../../../ui/Skeleton";
import { Alata } from "next/font/google";

const alata = Alata({
  subsets: ["latin"],
  weight: "400",
});

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get categories
  const getCategories = async () => {
    const response = await getAllCategories();
    setCategories(response.category);
    setLoading(false);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleDelete = (id) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  return (
    <Layout>
      <div className={`flex min-h-screen`}>
        <div className="flex-1">
          <div className="p-6 flex justify-between">
            <h2 className="text-2xl font-bold mb-4 text-[#000000]">
              Categories
            </h2>
            <Link
              href="/dashboard/categories/add"
              className="bg-blue-500 text-white p-2 rounded mb-4 inline-block md:mr-10"
            >
              Add Category
            </Link>
          </div>
          {loading ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 place-items-center">
                <SkeletonComponent className="h-[355px] w-[330px] rounded-3xl" />
                <SkeletonComponent className="h-[355px] w-[330px] rounded-3xl" />
                <SkeletonComponent className="h-[355px] w-[330px] rounded-3xl" />
              </div>{" "}
            </>
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
      </div>
    </Layout>
  );
};

export default CategoryList;
