"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "../../../components/dashboard/Sidebar";
import ProductCategoryCard from "../../../components/product/ProductCategoryCard";
import getAllCategories from "../../../services/getAllCategoriesApi";
import Layout from "../../newLayout";
import { Alata } from "next/font/google";

const alata = Alata({
  subsets: ["latin"],
  weight: "400",
});

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  // Get categories
  const getCategories = async () => {
    const response = await getAllCategories();
    setCategories(response.category);
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
            <h2 className="text-2xl font-bold mb-4">Categories</h2>
            <Link
              href="/dashboard/categories/add"
              className="bg-blue-500 text-white p-2 rounded mb-4 inline-block md:mr-10"
            >
              Add Category
            </Link>

            {/* Category Table */}
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 place-items-center">
            {categories &&
              categories.map((c) => (
                <ProductCategoryCard
                  alata={alata}
                  key={c._id}
                  id={c._id}
                  image={"/productCat4.jpg"}
                  name={c.category}
                />
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryList;
