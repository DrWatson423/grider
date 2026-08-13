import mongoose from "mongoose";

const riderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    ride: {
      type: String,
      enum: ["Motorcycle", "Bike", "Car"],
      required: true,
    },

    deliveryType: {
      type: String,
      enum: ["Food", "Parcel", "Groceries"],
      required: true,
    },

    available: {
      type: Boolean,
      default: true,
    },

    rating: {
      type: Number,
      default: 0,
    },

    profileImage: {
      type: String,
      default: "",
    },

    bio: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Rider", riderSchema);