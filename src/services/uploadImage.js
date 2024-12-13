import axios from "axios";

export default async function uploadImage(formData) {
  try {
    const token = localStorage.getItem("accessToken");
    console.log(token);
    
    const response = await axios.post(`/api/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error while uploding image:", error);
    throw new Error(
      error.response?.data?.message || "Failed to upload image"
    );
  }
}
