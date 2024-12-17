import axios from "axios";

export default async function getProductById(id) {
  try {
    const response = await axios.get(`/api/dashboard/product/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error while fetching product:", error);
    throw new Error(
      error.response?.data?.message || "Failed to fetch product"
    );
  }
}

export async function getProductByCategory(id) {
  try {
    const response = await axios.get(`/api/dashboard/category/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error while fetching product:", error);
    throw new Error(
      error.response?.data?.message || "Failed to fetch product"
    );
  }
}


