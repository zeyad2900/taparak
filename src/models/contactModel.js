import mongoose from "mongoose";

const contactUsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Please enter your phone number"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
  },
  message: {
    type: String,
    required: [true, "Please enter your message"],
  },
});

const ContactUs = mongoose.models.contactUs || mongoose.model("contactUs", contactUsSchema);

export default ContactUs;
