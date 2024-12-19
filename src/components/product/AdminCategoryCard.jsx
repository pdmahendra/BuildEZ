"use client";
import React from "react";
import { useRouter } from "next/navigation";
import DeleteDialogComponent from "../DeleteDialogComponent";
import deleteCategory from "../../services/deleteCategoryApi";
import toast from "react-hot-toast";

const AdminCategoryCard = ({ alata, image, name, id, refetch }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product-categories/${id}`);
  };

  const handleDelete = async () => {
    try {
      const toastId = toast.loading("Deleting Category...");
      const response = await deleteCategory(id);
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
        alt="Category Image"
        className="w-full h-[355px] object-cover rounded-lg"
        onClick={handleClick}
        loading="lazy" 
      />
      <div
        className={`${alata.className} pt-2 text-center text-[#323334] text-xl flex justify-center gap-4 items-center`}
      >
        <p onClick={handleClick}>{name}</p>

        <div>
          <div>
            <DeleteDialogComponent handleDelete={handleDelete} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCategoryCard;
