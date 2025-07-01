// models/Contact.ts
import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String },
    email: { type: String, required: true },
    message: { type: String, required: true },
    preferredTime: { type: String },
    service: { type: String },
  },
  { timestamps: true }
);

export const Contact = mongoose.model('Contact', ContactSchema);
