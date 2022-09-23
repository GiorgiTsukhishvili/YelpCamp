import express from "express";
import {
  getCampGrounds,
  createCampGround,
  getOneCampGround,
} from "../controllers/campGroundControllers";

const router = express.Router();

router.route("/").get(getCampGrounds).post(createCampGround);

router.route("/:id").get(getOneCampGround);

export default router;
