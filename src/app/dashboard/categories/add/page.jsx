"use client";

import React, { useEffect, useState } from "react";
import addCategory from "../../../../services/addCategoryApi";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Layout from "../../../newLayout";

const AddProduct = () => {
  const router = useRouter();
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Adding new category");
    const payload = {
      category,
      image: "/productCat4.jpg",
    };

    try {
      const response = await addCategory(payload);
      if (response) {
        toast.success("Category added successfully", { id: toastId });
        router.push("/dashboard/categories");
        setCategory("");
        setImage([]);
      }
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  };

  // const handleImageUpload = (e) => {
  //   const selectedFiles = Array.from(e.target.files);
  //   setImages((prevImages) => [...prevImages, ...selectedFiles]);
  // };

  // const handleDeleteProduct = (id) => {
  //   setProducts((prevProducts) =>
  //     prevProducts.filter((prod) => prod.id !== id)
  //   );
  // };

  return (
    <Layout>
      <div className={`flex min-h-screen`}>
        <div className="flex-1">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Add Category</h2>
            <form onSubmit={handleProductSubmit} className="mb-6">
              <input
                type="text"
                placeholder="Category Name"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />
              <input
                type="file"
                // onChange={handleImageUpload}
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded"
              >
                Add Product
              </button>
            </form>

            {/* Product Table View */}
            {/* <h3 className="text-xl font-semibold mb-4">Products List</h3> */}
            {/* {products.length > 0 ? (
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="border px-4 py-2 text-left">Image</th>
                  <th className="border px-4 py-2 text-left">Product Name</th>
                  <th className="border px-4 py-2 text-left">Price</th>
                  <th className="border px-4 py-2 text-left">Category</th>
                  <th className="border px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((prod, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">
                      {prod.images.length > 0 ? (
                        <img
                          src={URL.createObjectURL(prod.images[0])}
                          alt={prod.name}
                          className="w-16 h-16 object-cover"
                        />
                      ) : (
                        "No Image"
                      )}
                    </td>
                    <td className="border px-4 py-2">{prod.name}</td>
                    <td className="border px-4 py-2">${prod.price}</td>
                    <td className="border px-4 py-2">{prod.category}</td>
                    <td className="border px-4 py-2">
                      <button
                        className="text-blue-500 mr-4"
                        onClick={() => console.log("Edit product", index)}
                      >
                        Edit
                      </button>
                      <button
                        className="text-red-500"
                        onClick={() => handleDeleteProduct(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No products added yet.</p>
          )} */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddProduct;
