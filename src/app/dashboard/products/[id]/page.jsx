"use client";

import React, { useEffect, useState, useRef } from "react";
import getAllCategories from "../../../../services/getAllCategoriesApi";
import editProduct from "@/services/editProductApi";
import { toast } from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import Layout from "../../../newLayout";
import uploadImage from "../../../../services/uploadImage";
import getProductById from "@/services/getProduct";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
const EditProduct = () => {
  const router = useRouter();
  const imageInputRef = useRef(null);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productDetails, setProductDetails] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [imageUploadLoading, setImageUploadLoading] = useState(false);
  const [extraFields, setExtraFields] = useState([]);
  const editor = useRef(null);
  console.log(productDescription);
  const [content, setContent] = useState("");
  // Get categories
  const { id } = useParams();
  const [product, setProduct] = useState();
  console.log(product);
  const getProduct = async () => {
    const response = await getProductById(id);
    setProduct(response.product);
    setProductName(response.product?.productName);
    setPrice("0");
    setProductDescription(response.product?.productDescription);
    setImages(response.product?.images);
    setCategory(response.product?.category);
    setProductDetails(response.product?.productDetails);
    setExtraFields(response.product?.extraFields);
  };

  useEffect(() => {
    getProduct();
  }, []);
  const getCategories = async () => {
    const response = await getAllCategories();
    setCategories(response.category);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Editing product");
    const payload = {
      productId: id,
      productName,
      price,
      productDescription,
      productDetails,
      category,
      images,
      extraFields: extraFields,
    };
    console.log(payload);

    try {
      const response = await editProduct(payload);
      if (response) {
        toast.success("Product edited successfully", { id: toastId });
        router.push("/dashboard/products");
        setProductName("");
        setPrice("");
        setProductDescription("");
        setProductDetails("");
        setCategory("");
        setImages([]);
        setExtraFields([]);
      }
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  };

  const handleImageUpload = async (e) => {
    const toastId = toast.loading("uploading Image");
    setImageUploadLoading(true);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);

    try {
      const response = await uploadImage(formData);
      if (response && response.contentUrl) {
        setImageUploadLoading(false);
        setImages((prev) => [...prev, response.contentUrl]);

        if (imageInputRef.current) {
          imageInputRef.current.value = null;
        }

        toast.success("Image uploaded successfully!", { id: toastId });
      }
    } catch (error) {
      toast.error(error.message, { id: toastId });
    } finally {
      setImageUploadLoading(false);
    }
  };

  const handleAddField = () => {
    setExtraFields((prev) => [...prev, { heading: "", value: "" }]);
  };

  const handleExtraFieldChange = (index, key, value) => {
    const updatedFields = [...extraFields];
    updatedFields[index][key] = value;
    setExtraFields(updatedFields);
  };

  const handleRemoveField = (index) => {
    setExtraFields((prev) => prev.filter((_, i) => i !== index));
  };
  const handleRemoveImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };
  return (
    <Layout>
      <div className={`flex min-h-screen`}>
        <div className="flex-1">
          <div className="p-6 text-[#000000]">
            <h2 className="text-2xl font-bold mb-4 text-[#000000]">
              Edit Product
            </h2>
            {/* <JoditEditor
              ref={editor}
              value={content}
              onChange={(newContent) => setContent(newContent)}
            /> */}
            <form onSubmit={handleProductSubmit} className="mb-6">
              <input
                type="text"
                placeholder="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4 text-[#323334]"
              />
              <input
                type="text"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4 text-[#323334]"
              />
              <h4>Product Description</h4>
              <JoditEditor
                ref={editor}
                placeholder="Product Description"
                value={productDescription}
                onChange={(e) => setProductDescription(e)}
                className="w-full p-2 border border-gray-300 rounded mb-4 text-[#323334]"
              />
              <h4>Product Details</h4>
              <JoditEditor
                ref={editor}
                placeholder="Product Details"
                value={productDetails}
                onChange={(e) => setProductDetails(e)}
                className="w-full p-2 border border-gray-300 rounded mb-4 text-[#323334]"
              />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4 text-[#323334]"
              >
                <option value="">Select Category</option>
                {categories.map((c) => (
                  <option key={c._id} value={c._id}>
                    {c.category}
                  </option>
                ))}
              </select>
              <input
                ref={imageInputRef}
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />

              {images.length > 0 && (
                <div className="mb-4">
                  <div className="flex gap-4 mt-2">
                    {images.map((image, index) => (
                      <>
                        <img
                          key={index}
                          src={image}
                          alt={`Uploaded ${index}`}
                          className="w-16 h-16 object-cover rounded border"
                          loading="lazy"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveImage(index)}
                          className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                          Remove
                        </button>
                      </>
                    ))}
                  </div>
                </div>
              )}

              {extraFields.map((field, index) => (
                <div
                  key={index}
                  className="flex flex-col max-md:space-y-4 gap-4 mb-4 items-center w-full"
                >
                  <div className="w-full">
                    {" "}
                    <h2>New Field Heading</h2>
                  </div>
                  <input
                    type="text"
                    placeholder="Field Heading"
                    value={field.heading}
                    onChange={(e) =>
                      handleExtraFieldChange(index, "heading", e.target.value)
                    }
                    className="flex-1 p-2 border border-gray-300 rounded max-md:w-full w-full"
                  />
                  <div className="w-full">
                    <h2>New Field Description</h2>
                  </div>
                  <JoditEditor
                    ref={editor}
                    placeholder="Field Value"
                    value={field.value}
                    onChange={(e) => handleExtraFieldChange(index, "value", e)}
                    className="flex-1 p-2 border border-gray-300 rounded max-md:w-full"
                  />{" "}
                  <button
                    type="button"
                    onClick={() => handleRemoveField(index)}
                    className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={handleAddField}
                className="p-2 bg-green-500 text-white px-4 rounded mb-4 hover:bg-green-600 max-md:mt-4"
              >
                Add More Fields
              </button>

              <button
                type="submit"
                disabled={imageUploadLoading}
                className={`bg-blue-500 text-white px-4 p-2 ml-8 rounded ${
                  imageUploadLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                Edit Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EditProduct;
