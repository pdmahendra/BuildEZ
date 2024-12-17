import axios from "axios";

export default async function deleteProduct(id) {
  try {
    const token = localStorage.getItem("accessToken");
    const response = await axios.delete(`/api/dashboard/product/${id}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    console.error("Error while deleting product:", error);
    throw new Error(
      error.response?.data?.message || "Failed to delete product"
    );
  }
}
