"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../../../../components/dashboard/Sidebar";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState(null);
  const [categories, setCategories] = useState([
    { id: 1, name: "Shirts", image: "shirt.jpg" },
    { id: 2, name: "Pants", image: "pants.jpg" },
  ]);

  const router = useRouter();

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCategoryImage(URL.createObjectURL(file)); // Temporarily display the image
    }
  };

  const handleAddCategory = (e) => {
    e.preventDefault();

    const newCategory = {
      id: categories.length + 1, // Dummy id, replace with actual logic if using a database
      name: categoryName,
      image: categoryImage || "default.jpg", // Use default if no image is uploaded
    };

    setCategories([...categories, newCategory]);
    setCategoryName(""); // Clear the input after submission
    setCategoryImage(null); // Clear the image input
    router.push("/dashboard/categories"); // Redirect or stay on the same page
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Add Category</h2>
          <form onSubmit={handleAddCategory} className="mb-6">
            <input
              type="text"
              placeholder="Category Name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input type="file" onChange={handleImageChange} className="mb-4" />
            {categoryImage && (
              <img
                src={categoryImage}
                alt="Category Preview"
                className="w-16 h-16 object-cover mb-4"
              />
            )}
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded"
            >
              Add
            </button>
          </form>

          {/* Preview of Categories */}
          <h3 className="text-xl font-semibold mb-4">Category Preview</h3>
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="border px-4 py-2 text-left">Image</th>
                <th className="border px-4 py-2 text-left">Category</th>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
