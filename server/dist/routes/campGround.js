"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const campGroundControllers_1 = require("../controllers/campGroundControllers");
const router = express_1.default.Router();
router.route("/").get(campGroundControllers_1.getCampGrounds).post(campGroundControllers_1.createCampGround);
router
    .route("/:id")
    .get(campGroundControllers_1.getOneCampGround)
    .patch(campGroundControllers_1.updateCampGround)
    .delete(campGroundControllers_1.deleteCampGround);
exports.default = router;
