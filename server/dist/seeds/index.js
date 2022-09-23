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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const cities_1 = __importDefault(require("./cities"));
const seedHelpers_1 = require("./seedHelpers");
const campGround_1 = require("../models/campGround");
mongoose_1.default.connect("mongodb://localhost:27017/yelp-camp");
const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];
const seedDb = () => __awaiter(void 0, void 0, void 0, function* () {
    yield campGround_1.CampGround.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        yield campGround_1.CampGround.create({
            location: `${cities_1.default[random1000].city}, ${cities_1.default[random1000].state}`,
            title: `${sample(seedHelpers_1.descriptors)} ${sample(seedHelpers_1.places)}`,
            image: "https://source.unsplash.com/collection/483251",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique fuga fugiat cumque autem mollitia neque voluptatibus quia labore eligendi tempore quis provident id quo, aperiam impedit pariatur. Odio, ratione id.",
            price,
        });
    }
});
seedDb().then(() => {
    mongoose_1.default.connection.close();
});
