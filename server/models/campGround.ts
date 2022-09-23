import mongoose from "mongoose";

const campGroundSchema = new mongoose.Schema({
  title: { type: String },
  image: { type: String },
  price: { type: Number },
  description: { type: String },
  location: { type: String },
});

export const CampGround = mongoose.model("CampGround", campGroundSchema);
