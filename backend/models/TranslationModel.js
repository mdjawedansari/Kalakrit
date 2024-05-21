import { Schema, model, models } from "mongoose";
// Define the schema for your data with validation
const FileSchema = new Schema({
  companyName: {
    type: String,
    required: [true, 'Company Name is required'],
  },
  fullName: {
    type: String,
    required: [true, 'Full Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/\S+@\S+\.\S+/, 'Invalid email format'],
  },
  contactNumber: {
    type: String,
    required: [true, 'Contact Number is required'],
    match: [/^\d+$/, 'Invalid phone number'],
  },
  domain: {
    type: [String],
    required: [true, 'Domain is required'],
    validate: {
      validator: function (value) {
        return value.length > 0;
      },
      message: 'Select at least one domain',
    },
  },
  languageOfPair:String,
  projectType: String,
  message: String,
  public_id: String,
  secure_url: String,

}, { timestamps: true });

// Create a Mongoose model using the schema
const File = models.files || model('files', FileSchema);

export default File;