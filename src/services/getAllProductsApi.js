import axios from "axios";

export default async function getAllProducts(payload) {
  try {
    const response = await axios.get(`api/product`, {
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
