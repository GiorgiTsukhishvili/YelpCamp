"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const campGround_1 = __importDefault(require("./routes/campGround"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
}));
app.use("/campgrounds", campGround_1.default);
app.all("*", (req, res) => {
    res.status(404).json({
        status: "fail",
        message: `No route found on request ${req.path}`,
    });
});
const port = 5000;
mongoose_1.default
    .connect("mongodb://localhost:27017/yelp-camp")
    .then(() => app.listen(port, () => {
    console.log(`Serving on port ${port}`);
}))
    .catch((err) => console.log(err.message));
