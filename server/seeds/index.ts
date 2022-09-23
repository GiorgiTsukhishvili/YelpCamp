import mongoose from "mongoose";
import cities from "./cities";
import { places, descriptors } from "./seedHelpers";
import { CampGround } from "../models/campGround";

mongoose.connect("mongodb://localhost:27017/yelp-camp");

const sample = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

const seedDb = async () => {
  await CampGround.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);

    await CampGround.create({
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
    });
  }
};

seedDb().then(() => {
  mongoose.connection.close();
});
