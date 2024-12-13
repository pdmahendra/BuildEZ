import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price must be a positive value"],
    },
    productDescription: {
      type: String,
      required: [true, "Product description is required"],
      trim: true,
    },
    // productBenefit: {
    //   type: String,
    //   trim: true,
    // },
    productDetails: {
      type: String,
      trim: true,
    },
    // primaryImage: {
    //   type: String,
    //   required: [true, "Primary image is required"],
    // },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
    images: [
      {
        type: String,
      },
    ],
    extraFields: [
      {
        heading: {
          type: String,
          trim: true,
        },
        value: {
          type: String,
          trim: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
