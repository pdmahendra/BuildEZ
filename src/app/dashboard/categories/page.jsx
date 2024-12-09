'use client'
import { useState } from "react";
import Link from "next/link";
import Sidebar from "../../../components/dashboard/Sidebar";

const CategoryList = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Shirts", image: "shirt.jpg" },
    { id: 2, name: "Pants", image: "pants.jpg" },
    { id: 3, name: "Shoes", image: "shoes.jpg" },
    { id: 4, name: "Hats", image: "hats.jpg" },
    { id: 5, name: "Jackets", image: "jackets.jpg" },
  ]);

  const handleDelete = (id) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          <Link
            href="/dashboard/categories/add"
            className="bg-blue-500 text-white p-2 rounded mb-4 inline-block"
          >
            Add Category
          </Link>

          {/* Category Table */}
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="border px-4 py-2 text-left">Image</th>
                <th className="border px-4 py-2 text-left">Category</th>
                <th className="border px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.id}>
                  <td className="border px-4 py-2">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-16 h-16 object-cover"
                    />
                  </td>
                  <td className="border px-4 py-2">{category.name}</td>
                  <td className="border px-4 py-2">
                    <Link
                      href={`/dashboard/categories/edit/${category.id}`}
                      className="text-blue-500 mr-4"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(category.id)}
                      className="text-red-500"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
