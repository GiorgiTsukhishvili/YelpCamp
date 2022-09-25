"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampGround = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const campGroundSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: [true, "Campground must have a title"],
        unique: true,
    },
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
exports.CampGround = mongoose_1.default.model("CampGround", campGroundSchema);
