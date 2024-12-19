"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import loginApi from "../../services/loginApi";
import { Alata } from "next/font/google";
import { toast } from "react-hot-toast";
import { useUser } from "../context/UserContext";

const alata = Alata({
  subsets: ["latin"],
  weight: "400",
});

export default function Login() {
  const router = useRouter();
  const { setUser } = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Logging in...");

    try {
      const payload = { username, password };
      const response = await loginApi(payload);

      if (response) {
        localStorage.setItem("accessToken", response.token);
        setUser(response.user);
        router.push("/dashboard");
        toast.success("Logged in Successfully", { id: toastId });
        setUsername("");
        setPassword("");
      }
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  };

  return (
    <div
      className={`${alata.className} w-screen h-screen flex flex-col justify-center items-center`}
    >
      <div className="md:w-[25%] w-[80%] flex flex-col items-start gap-2">
        <div className="flex flex-col gap-1 ">
          <div className="font-semibold text-[2rem] text-[#323334]">Login</div>
          <div className="text-[#323334]">Please enter your details to Log In</div>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-1">
              <div className="text-[#323334]">Username*</div>
              <input
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                className="bg-[#EFEFEF] px-4 py-2 rounded-[5px] w-full text-[#323334]"
                required
              />
            </div>
            <div className="flex flex-col gap-1 ">
              <div className="text-[#323334]">Password*</div>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                className="bg-[#EFEFEF] px-4 py-2 rounded-[5px] w-full text-[#323334]"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-px-4 py-2 text-white bg-blue-500 rounded"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
