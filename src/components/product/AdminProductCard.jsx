"use client";
import React from "react";
import { useRouter } from "next/navigation";
import DeleteDialogComponent from "../DeleteDialogComponent";
import deleteProduct from "../../services/deleteProductApi";
import { toast } from "react-hot-toast";

const AdminProductCard = ({ alata, image, name, id, refetch }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/products/${id}`);
  };

  const handleDelete = async () => {
    try {
      const toastId = toast.loading("Deleting Product...");
      const response = await deleteProduct(id);
      if (response.status === 200) {
        refetch();
        toast.success(response.data.message, { id: toastId });
      }
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  };

  return (
    <div className="h-[355px] w-[330px] cursor-pointer">
      <img
        src={image}
        alt="Product Image"
        className="w-full h-[355px] object-cover rounded-lg"
        onClick={handleClick}
        loading="lazy" 
      />
      <div
        className={`${alata.className} text-center text-[#323334] text-xs tracking-widest pt-2 flex justify-center gap-4`}
      >
        <p onClick={handleClick}>{name}</p>

        <div>
          <DeleteDialogComponent handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default AdminProductCard;
