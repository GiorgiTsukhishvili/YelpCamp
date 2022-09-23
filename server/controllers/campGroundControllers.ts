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

export const getOneCampGround = async (req: Request, res: Response) => {
  try {
    const oneCG = await CampGround.findById(req.params.id);

    if (oneCG === null) {
      return res.status(400).json({
        status: "fail",
        message: "Campground does not exist",
      });
    } else {
      res.status(200).json({
        status: "success",
        data: {
          campGround: oneCG,
        },
      });
    }
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

export const updateCampGround = async (req: Request, res: Response) => {
  try {
    const updatedCamp = await CampGround.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    res.status(200).json({
      message: "success",
      data: {
        updatedCamp,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const deleteCampGround = async (req: Request, res: Response) => {
  try {
    await CampGround.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
