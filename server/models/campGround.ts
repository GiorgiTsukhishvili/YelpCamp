import mongoose from "mongoose";

const campGroundSchema = new mongoose.Schema({
  title: { type: String },
  price: { type: String },
  description: { type: String },
  location: { type: String },
});

export const CampGround = mongoose.model("CampGround", campGroundSchema);
