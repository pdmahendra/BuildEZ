import axios from "axios";
import { Base_Url } from "../utils/contant";

export default async function loginApi(payload) {
  try {
    const response = await axios.post(`${Base_Url}/user/login`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error while login:", error);
    throw new Error(error.response?.data?.message || "Failed to login");
  }
}
