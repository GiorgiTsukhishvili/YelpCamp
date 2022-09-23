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
exports.createCampGround = exports.getCampGrounds = void 0;
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
