import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import campGroundRoute from "./routes/campGround";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/", campGroundRoute);

const port = 5000;

mongoose
  .connect("mongodb://localhost:27017/yelp-camp")
  .then(() =>
    app.listen(port, () => {
      console.log(`Serving on port ${port}`);
    })
  )
  .catch((err: Error) => console.log(err.message));
