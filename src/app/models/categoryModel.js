import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
  {
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.models.Category || mongoose.model("Category", categorySchema);
export default Category;
