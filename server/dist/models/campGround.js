"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampGround = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const campGroundSchema = new mongoose_1.default.Schema({
    title: { type: String },
    image: { type: String },
    price: { type: Number },
    description: { type: String },
    location: { type: String },
});
exports.CampGround = mongoose_1.default.model("CampGround", campGroundSchema);
