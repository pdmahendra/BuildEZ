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
    console.error("Error while creating contact:", error);
    throw new Error(
      error.response?.data?.message || "Failed to create contact"
    );
  }
}
