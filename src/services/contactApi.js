import axios from "axios";
import { Base_Url } from "../utils/contant";

export default async function contactApi(payload) {
  try {
    const response = await axios.post(`${Base_Url}/contact`, payload, {
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
