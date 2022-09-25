import React from "react";
import campground from "./../../assets/imgs/campground.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[url(./../../assets/imgs/campground.jpg)} relative">
      <img src={campground} className="w-full h-[100vh] object-cover" alt="" />

      <div className="text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-5">YelpCamp</h1>
        <h1 className="w-[400px] text-center text-2xl">
          Welcome to YelpCamp! Explore camps all over the world and fill free to
          share yours as well
        </h1>
        <Link
          to="/campgrounds"
          className="text-2xl font-bold mt-5 bg-white py-1.5 px-4 rounded-[8px] text-black"
        >
          View Campgrounds
        </Link>
      </div>
    </div>
  );
};

export default Home;
