import express from "express";
import {
  getCampGrounds,
  createCampGround,
} from "../controllers/campGroundControllers";

const router = express.Router();

router.route("/").get(getCampGrounds).post(createCampGround);

export default router;
