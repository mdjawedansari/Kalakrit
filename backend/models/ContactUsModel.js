import { Schema, model, models } from "mongoose";
// Define the schema for your data with validation
const ContactUsSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    contactNumber: {
      type: String,
      required: [true, "Contact Number is required"],
      match: [/^\d+$/, "Invalid phone number"],
    },

    message: {
      type: String,
    },
  },
  { timestamps: true }
);

// Create a Mongoose model using the schema
const Contact = models.Contact || model("Contact", ContactUsSchema);

export default Contact;
