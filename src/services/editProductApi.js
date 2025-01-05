import axios from "axios";

export default async function editProduct(payload) {
  try {
    const token = localStorage.getItem("accessToken");
    const response = await axios.put(`/api/dashboard/edit`, payload, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error while creating contact:", error);
    throw new Error(
      error.response?.data?.message || "Failed to create contact"
    );
  }
  //   console.log(payload);
}
