import mongoose from 'mongoose';

const contactsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber : {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
    },
    isFavourite: {
      type: Boolean,
      required: false,
      default: false,
    },
    contactType: {
        type: String,
        enum: ['work', 'home', 'personal'],
        required: true,
        default: 'personal',
    }
  },
  {
    timestamps: true,
  },
);

export const ContactColection = mongoose.model('Contact', contactsSchema); // collection name: contacts