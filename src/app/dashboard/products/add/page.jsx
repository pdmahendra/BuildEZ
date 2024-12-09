"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "../../../../components/dashboard/Sidebar";
import getAllCategories from "../../../../services/getAllCategoriesApi";
import addProduct from "../../../../services/addProductApi";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

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
    <div className="flex min-h-screen">
      <Sidebar />
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
  );
};

export default AddProduct;
