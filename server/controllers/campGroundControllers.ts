import { Request, Response } from "express";
import { CampGround } from "../models/campGround";

export const getCampGrounds = async (req: Request, res: Response) => {
  try {
    const campGrounds = await CampGround.find();

    res.status(200).json({
      status: "success",
      data: {
        campGrounds,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const createCampGround = async (req: Request, res: Response) => {
  try {
    const newCampGround = await CampGround.create(req.body);

    res.status(200).json({
      status: "success",
      data: {
        newCampGround,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
