"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCampGround = exports.getOneCampGround = exports.getCampGrounds = void 0;
const campGround_1 = require("../models/campGround");
const getCampGrounds = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const campGrounds = yield campGround_1.CampGround.find();
        res.status(200).json({
            status: "success",
            data: {
                campGrounds,
            },
        });
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
});
exports.getCampGrounds = getCampGrounds;
const getOneCampGround = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const oneCG = yield campGround_1.CampGround.findById(req.params.id);
        if (oneCG === null) {
            return res.status(400).json({
                status: "fail",
                message: "Campground does not exist",
            });
        }
        else {
            res.status(200).json({
                status: "success",
                data: {
                    campGround: oneCG,
                },
            });
        }
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
});
exports.getOneCampGround = getOneCampGround;
const createCampGround = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newCampGround = yield campGround_1.CampGround.create(req.body);
        res.status(200).json({
            status: "success",
            data: {
                newCampGround,
            },
        });
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
});
exports.createCampGround = createCampGround;
