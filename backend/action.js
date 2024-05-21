"use server";

import Contact from "./models/ContactUsModel";
import sendMail from "./utils/mailer";

export default async function contactUs(formData) {
  function validateEmail(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  }

  try {
    const validEmail = validateEmail(formData.email);
    if (formData.fullName && formData.email && formData.phoneNumber) {
      if (validEmail) {
        // Check if a user already exists
        // const user = await Contact.findOne({email});

        // if (!user) {
        // Create a new user and send a confirmation email
        // Insert a document into a non-existing collection (it will create the collection)

        await Contact.create({
            fullName:formData.fullName,
            email:formData.email,
            phoneNumber:formData.phoneNumber,
            message:formData.message,
          });
          console.log('Data inserted successfully.');
        // sendMail(formData);
        return {
          statusbarbar: "success",
          message: "Thank you for Contacting 😄",
        };
        // } else {
        // return { statusbar: "info", message: "Already cnnnected please try with different email" };
        // }
      }
    } else {
      return { statusbar: "error", message: "please fill all required input" };
    }
  } catch (error) {
    return { statusbar: "error", message: "Internal error" };
  }
}
