import express from "express";
import {
  getCampGrounds,
  createCampGround,
  getOneCampGround,
  updateCampGround,
  deleteCampGround,
} from "../controllers/campGroundControllers";

const router = express.Router();

router.route("/").get(getCampGrounds).post(createCampGround);

router
  .route("/:id")
  .get(getOneCampGround)
  .patch(updateCampGround)
  .delete(deleteCampGround);

export default router;
