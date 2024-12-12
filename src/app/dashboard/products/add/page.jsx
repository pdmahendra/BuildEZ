"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "../../../../components/dashboard/Sidebar";
import getAllCategories from "../../../../services/getAllCategoriesApi";
import addProduct from "../../../../services/addProductApi";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Layout from "../../../newLayout";

const AddProduct = () => {
  const router = useRouter();
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productDetails, setProductDetails] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([
    "/productImg4.jpg",
    "/productImg4.jpg",
    "/productImg4.jpg",
    "/productImg4.jpg",
    "/productImg4.jpg",
    "/productImg4.jpg",
    "/productImg4.jpg",
  ]);
  const [categories, setCategories] = useState([]);

  // Get categories
  const getCategories = async () => {
    const response = await getAllCategories();
    setCategories(response.category);
  };

  useEffect(() => {
    getCategories();
  }, []);

  // const [products, setProducts] = useState([]);

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Adding new product");
    const payload = {
      productName,
      price,
      productDescription,
      productDetails,
      category,
      images,
    };

    try {
      const response = await addProduct(payload);
      if (response) {
        toast.success("Product added successfully", { id: toastId });
        router.push("/dashboard/products");
        setProductName("");
        setPrice("");
        setProductDescription("");
        setProductDetails("");
        setCategory("");
        setImages([]);
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
            <h2 className="text-2xl font-bold mb-4">Add Product</h2>
            <form onSubmit={handleProductSubmit} className="mb-6">
              <input
                type="text"
                placeholder="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />
              <input
                type="text"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />
              <textarea
                placeholder="Product Description"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />
              <textarea
                placeholder="Product Details"
                value={productDetails}
                onChange={(e) => setProductDetails(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4"
              >
                <option value="">Select Category</option>
                {categories.map((c) => (
                  <option key={c._id} value={c._id}>
                    {c.category}
                  </option>
                ))}
              </select>
              <input
                type="file"
                multiple
                // onChange={handleImageUpload}
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />
              {/* {images.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold">Uploaded Images:</h4>
                <div className="flex gap-4 mt-2">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(image)}
                      alt={`Uploaded ${index}`}
                      className="w-16 h-16 object-cover rounded border"
                    />
                  ))}
                </div>
              </div>
            )} */}
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded"
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddProduct;
