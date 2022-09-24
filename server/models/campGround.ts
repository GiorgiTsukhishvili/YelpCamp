import mongoose from "mongoose";

const campGroundSchema = new mongoose.Schema({
  title: { type: String, required: [true, "Campground must have a title"] },
  image: { type: String, required: [true, "Campground must have a image"] },
  price: { type: Number, required: [true, "Campground must have a price"] },
  description: {
    type: String,
    required: [true, "Campground must have a description"],
  },
  location: {
    type: String,
    required: [true, "Campground must have a location"],
  },
});

export const CampGround = mongoose.model("CampGround", campGroundSchema);
