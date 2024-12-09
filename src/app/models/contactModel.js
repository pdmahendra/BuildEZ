import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "Full name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
  },
  phone: {
    type: String,
    required: [true, "Phone Number is required"],
    trim: true,
  },
  address: {
    type: String,
    required: [true, "Address is required"],
    trim: true,
  },
  message: {
    type: String,
    required: [true, "Message is required"],
    trim: true,
  },
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);
export default Contact;
